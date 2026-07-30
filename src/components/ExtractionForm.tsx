"use client";

import { useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { submitExtraction } from "@/actions/submit";
import { getTaskStatus } from "@/actions/status";
import { createClient } from "@/lib/supabase/client";
import { Copy, Download, Loader2, Search, Music2, Clapperboard, CirclePlay, BarChart3 } from "lucide-react";
import { AnalysisPanel } from "./AnalysisPanel";
import { ScriptTools } from "./ScriptTools";

const platforms = [
  { id: "tiktok", label: "TikTok", icon: Music2 },
  { id: "reels", label: "Reels", icon: Clapperboard },
  { id: "shorts", label: "Shorts", icon: CirclePlay },
] as const;

type Platform = (typeof platforms)[number]["id"];

const platformUrlPatterns: Record<Platform, RegExp> = {
  tiktok: /^(https?:\/\/)?(www\.)?(vm\.)?tiktok\.com\//i,
  reels: /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel)\//i,
  shorts: /^(https?:\/\/)?(www\.)?(youtube\.com\/shorts|youtu\.be\/shorts)\//i,
};

function validateUrl(url: string, platform: Platform): string | null {
  if (!url.trim()) return "Please enter a video URL";
  if (!platformUrlPatterns[platform].test(url)) {
    const names: Record<Platform, string> = { tiktok: "TikTok", reels: "Instagram Reels", shorts: "YouTube Shorts" };
    return `Please enter a valid ${names[platform]} link`;
  }
  return null;
}

export function ExtractionForm({ defaultPlatform = "tiktok" }: { defaultPlatform?: Platform }) {
  const [platform, setPlatform] = useState<Platform>(defaultPlatform);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "failed">("idle");
  const [transcript, setTranscript] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [taskId, setTaskId] = useState<string | null>(null);

  const handleExtract = useCallback(async () => {
    setError("");
    setTranscript("");

    const validationError = validateUrl(url, platform);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("loading");
    setTaskId(null);

    const formData = new FormData();
    formData.set("url", url);
    formData.set("platform", platform);

    const res = await submitExtraction(formData);

    if (!res.success || !res.taskId) {
      setError(res.error ?? "Something went wrong");
      setStatus("idle");
      return;
    }

    const supabase = createClient();
    const tid = res.taskId;
    setTaskId(tid);

    const channel = supabase
      .channel(`task-${tid}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Task",
          filter: `id=eq.${tid}`,
        },
        (payload) => {
          const task = payload.new as {
            status: string; transcript?: string; wordCount?: number; error?: string;
          };
          if (task.status === "done") {
            setTranscript(task.transcript ?? "");
            setWordCount(task.wordCount ?? 0);
            setStatus("done");
            supabase.removeChannel(channel);
          } else if (task.status === "failed") {
            setError(task.error ?? "Transcription failed");
            setStatus("failed");
            supabase.removeChannel(channel);
          }
        },
      )
      .subscribe();

    const check = await getTaskStatus(tid);
    if (check.status === "done") {
      setTranscript(check.transcript ?? "");
      setWordCount(check.wordCount ?? 0);
      setStatus("done");
      supabase.removeChannel(channel);
    } else if (check.status === "failed") {
      setError(check.error ?? "Transcription failed");
      setStatus("failed");
      supabase.removeChannel(channel);
    }
  }, [url, platform]);

  return (
    <div className="space-y-6">
      {/* Platform Tabs */}
      <Tabs defaultValue={defaultPlatform} onValueChange={(v) => setPlatform(v as Platform)}>
        <TabsList className="w-full">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <TabsTrigger key={p.id} value={p.id} className="flex-1 gap-1.5 hover:text-foreground/60 dark:hover:text-muted-foreground data-active:bg-brand data-active:text-white data-active:hover:text-white dark:data-active:bg-brand dark:data-active:text-white dark:data-active:hover:text-white data-active:shadow-sm data-active:border-brand dark:data-active:border-brand">
                <Icon className="size-4" />
                {p.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {/* Input + Button */}
      <div className="flex gap-2">
        <Input
          placeholder="Paste video link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={status === "loading"}
          className="h-12 text-base flex-1 bg-background dark:bg-input/30 border-2 focus-visible:border-brand"
        />
        <Button
          onClick={handleExtract}
          disabled={!url || status === "loading"}
          className="h-12 px-6 text-base shrink-0"
        >
          {status === "loading" ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Extracting</>
          ) : (
            <><Search className="mr-2 h-4 w-4" />Extract</>
          )}
        </Button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 rounded-lg border border-destructive/50 bg-destructive/5">
          <p className="text-sm text-destructive">{error}</p>
          {error.includes("Sign in") && (
            <a href="/login" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">Sign in for free &rarr;</a>
          )}
          {error.includes("Upgrade") && (
            <a href="/pricing" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">View plans &rarr;</a>
          )}
        </div>
      )}

      {/* Loading */}
      {status === "loading" && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-brand" />
            <span className="text-sm font-medium">Extracting transcript...</span>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Card>
      )}

      {/* Result */}
      {status === "done" && (
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-muted/50">
            <Badge variant="secondary" className="text-xs">{wordCount} words</Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(transcript)}>
                <Copy className="mr-1.5 h-3.5 w-3.5" />Copy
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
                const blob = new Blob([transcript], { type: "text/plain" });
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = "transcript.txt";
                a.click();
                URL.revokeObjectURL(a.href);
              }}>
                <Download className="mr-1.5 h-3.5 w-3.5" />.txt
              </Button>
            </div>
          </div>
          <div className="p-4 sm:p-6 space-y-4">
            <textarea
              value={transcript}
              onChange={(e) => {
                setTranscript(e.target.value);
                setWordCount(e.target.value.split(/\s+/).filter(Boolean).length);
              }}
              className="w-full min-h-[200px] bg-transparent text-sm leading-relaxed resize-y focus:outline-none"
            />
            {taskId && (
              <>
                <AnalysisPanel taskId={taskId} transcript={transcript} />
                <div className="border-t pt-4">
                  <ScriptTools transcript={transcript} />
                </div>
              </>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
