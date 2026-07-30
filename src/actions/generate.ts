"use server";

import { generateText } from "ai";
import { getAIModel } from "@/lib/ai/provider";

export interface GenerateResult {
  success: boolean
  output?: string
  error?: string
}

export async function rewriteScript(transcript: string, style?: string): Promise<GenerateResult> {
  if (!transcript) return { success: false, error: "No transcript provided" };

  const model = getAIModel();
  const styleGuide = style ? `Rewrite in a ${style} style.` : "Improve the script structure and hook.";

  const prompt = `You are a short video script expert. Rewrite this transcript to make it more engaging and viral-worthy. ${styleGuide}

Return only the rewritten script, no explanations.

Original transcript:
${transcript}`;

  try {
    const { text } = await generateText({ model, prompt });
    return { success: true, output: text.trim() };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Generation failed" };
  }
}

export async function generateHook(topic: string, platform: string): Promise<GenerateResult> {
  const model = getAIModel();

  const prompt = `Generate 5 viral hook ideas for a ${platform} short video about "${topic}".
Return as a numbered list, each hook under 15 words. No explanations.`;

  try {
    const { text } = await generateText({ model, prompt });
    return { success: true, output: text.trim() };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Generation failed" };
  }
}
