import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TikTok Viral Video Analyzer",
  description: "Analyze TikTok videos with AI — understand viral hooks, emotional curves, and speech patterns. Free short video content analysis tool.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 pb-24">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">TikTok Viral Video Analyzer</h1>
      <p className="mt-4 text-lg text-muted-foreground">AI-powered analysis of TikTok video structure, hooks, and emotional patterns. Understand what makes content go viral.</p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Coming in Phase 2</h2>
        <p className="mt-3 text-muted-foreground">The viral video analyzer will help you deconstruct successful TikTok videos and understand the patterns behind their performance.</p>
        <ul className="mt-6 space-y-3">
          {[
            "Hook analysis — identify the opening technique used",
            "Emotional curve mapping — track the emotional journey",
            "Speech pattern detection — understand pacing and tone",
            "Key phrase extraction — find the most impactful words",
            "Actionable suggestions — improve your own content",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <span className="text-brand mt-1">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 text-center">
        <Link href="/" className={cn(buttonVariants())}>Extract Transcript First &rarr;</Link>
      </section>
    </div>
  );
}
