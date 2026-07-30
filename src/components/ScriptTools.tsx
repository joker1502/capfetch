"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { rewriteScript, generateHook } from "@/actions/generate";
import { Loader2, Wand2, Lightbulb } from "lucide-react";

interface ScriptToolsProps {
  transcript: string
}

export function ScriptTools({ transcript }: ScriptToolsProps) {
  const [rewriteResult, setRewriteResult] = useState("");
  const [rewriteLoading, setRewriteLoading] = useState(false);
  const [rewriteError, setRewriteError] = useState("");

  const [hookTopic, setHookTopic] = useState("");
  const [hookResult, setHookResult] = useState("");
  const [hookLoading, setHookLoading] = useState(false);
  const [hookError, setHookError] = useState("");

  const handleRewrite = async () => {
    setRewriteLoading(true);
    setRewriteError("");
    const res = await rewriteScript(transcript);
    if (res.success && res.output) {
      setRewriteResult(res.output);
    } else {
      setRewriteError(res.error ?? "Failed");
    }
    setRewriteLoading(false);
  };

  const handleGenerateHooks = async () => {
    if (!hookTopic) return;
    setHookLoading(true);
    setHookError("");
    const res = await generateHook(hookTopic, "TikTok");
    if (res.success && res.output) {
      setHookResult(res.output);
    } else {
      setHookError(res.error ?? "Failed");
    }
    setHookLoading(false);
  };

  return (
    <Tabs defaultValue="rewrite">
      <TabsList className="w-full">
        <TabsTrigger value="rewrite" className="flex-1 gap-1.5">
          <Wand2 className="size-4" />Rewrite
        </TabsTrigger>
        <TabsTrigger value="hooks" className="flex-1 gap-1.5">
          <Lightbulb className="size-4" />Hook Ideas
        </TabsTrigger>
      </TabsList>

      <TabsContent value="rewrite" className="mt-4 space-y-3">
        <Button onClick={handleRewrite} disabled={rewriteLoading} variant="outline" className="w-full">
          {rewriteLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Rewriting...</> : <><Wand2 className="mr-2 h-4 w-4" />Rewrite Script</>}
        </Button>
        {rewriteError && <p className="text-sm text-destructive">{rewriteError}</p>}
        {rewriteResult && (
          <Card className="p-4">
            <textarea value={rewriteResult} readOnly className="w-full min-h-[150px] bg-transparent text-sm leading-relaxed resize-none focus:outline-none" />
          </Card>
        )}
      </TabsContent>

      <TabsContent value="hooks" className="mt-4 space-y-3">
        <div className="flex gap-2">
          <input
            value={hookTopic}
            onChange={(e) => setHookTopic(e.target.value)}
            placeholder="Enter a topic (e.g. fitness tips)"
            className="flex-1 h-9 rounded-lg border border-input bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={handleGenerateHooks} disabled={hookLoading || !hookTopic} size="sm">
            {hookLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate"}
          </Button>
        </div>
        {hookError && <p className="text-sm text-destructive">{hookError}</p>}
        {hookResult && (
          <Card className="p-4">
            <pre className="whitespace-pre-wrap text-sm">{hookResult}</pre>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  );
}
