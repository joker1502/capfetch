"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { analyzeTranscript } from "@/actions/analyze";
import { Loader2, Lightbulb, BarChart3, TrendingUp, MessageSquare } from "lucide-react";

interface AnalysisPanelProps {
  taskId: string
  transcript: string
}

export function AnalysisPanel({ taskId, transcript }: AnalysisPanelProps) {
  const [analysis, setAnalysis] = useState<{
    hookScore: number
    hookType: string
    emotionalCurve: string
    speechPattern: string
    keyPhrases: string[]
    suggestions: string[]
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    const result = await analyzeTranscript(taskId);
    if (result.success && result.analysis) {
      setAnalysis(result.analysis);
    } else {
      setError(result.error ?? "Analysis failed");
    }
    setLoading(false);
  };

  if (analysis) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <BarChart3 className="w-4 h-4" />
              Hook Score
            </div>
            <p className="text-2xl font-bold text-brand">{analysis.hookScore}/10</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MessageSquare className="w-4 h-4" />
              Hook Type
            </div>
            <p className="font-semibold capitalize">{analysis.hookType}</p>
          </Card>
        </div>

        <Card className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            Emotional Curve
          </div>
          <p className="text-sm">{analysis.emotionalCurve}</p>
        </Card>

        <Card className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquare className="w-4 h-4" />
            Speech Pattern
          </div>
          <p className="text-sm capitalize">{analysis.speechPattern}</p>
        </Card>

        {analysis.keyPhrases.length > 0 && (
          <Card className="p-4 space-y-2">
            <p className="text-sm font-medium">Key Phrases</p>
            <div className="flex flex-wrap gap-2">
              {analysis.keyPhrases.map((p) => (
                <Badge key={p} variant="secondary">{p}</Badge>
              ))}
            </div>
          </Card>
        )}

        {analysis.suggestions.length > 0 && (
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Lightbulb className="w-4 h-4 text-brand" />
              Suggestions
            </div>
            <ul className="space-y-2">
              {analysis.suggestions.map((s, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-brand shrink-0">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={handleAnalyze}
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Analyzing...</>
        ) : (
          <><BarChart3 className="mr-2 h-4 w-4" />AI Viral Analysis</>
        )}
      </Button>
    </div>
  );
}
