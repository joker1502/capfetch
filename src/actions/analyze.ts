"use server";

import { generateText } from "ai";
import { getAIModel } from "@/lib/ai/provider";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

export interface AnalysisResult {
  success: boolean
  analysis?: {
    hookScore: number
    hookType: string
    emotionalCurve: string
    speechPattern: string
    keyPhrases: string[]
    suggestions: string[]
  }
  error?: string
}

export async function analyzeTranscript(taskId: string): Promise<AnalysisResult> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Please sign in to use AI analysis" };
  }

  const task = await prisma.task.findUnique({ where: { id: taskId } });
  if (!task?.transcript) {
    return { success: false, error: "No transcript found" };
  }

  const model = getAIModel();

  const prompt = `You are a viral content analyst. Analyze this short video transcript and return a JSON object (no markdown, no code blocks) with:
- hookScore: number 1-10 (how strong is the opening hook)
- hookType: string (e.g. "question", "statistic", "story", "controversy", "curiosity gap")
- emotionalCurve: string (describe the emotional journey)
- speechPattern: string (e.g. "fast paced", "conversational", "authoritative")
- keyPhrases: string[] (3-5 key phrases)
- suggestions: string[] (3 improvement suggestions)

Transcript:
${task.transcript}`;

  try {
    const { text } = await generateText({
      model,
      prompt,
    });

    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const analysis = JSON.parse(cleaned);

    return {
      success: true,
      analysis: {
        hookScore: analysis.hookScore,
        hookType: analysis.hookType,
        emotionalCurve: analysis.emotionalCurve,
        speechPattern: analysis.speechPattern,
        keyPhrases: analysis.keyPhrases || [],
        suggestions: analysis.suggestions || [],
      },
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Analysis failed",
    };
  }
}
