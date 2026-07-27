import type { Metadata } from "next";
import { ExtractionForm } from "@/components/ExtractionForm";
import { Sparkles, Search, FileText, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "ClipHub - Free Caption & Transcript Extractor for Short Videos",
  description:
    "Extract captions from TikTok, Instagram Reels, and YouTube Shorts for free. Get accurate transcripts, analyze viral hooks, and optimize your short form video content.",
};

const highlights = [
  { icon: Sparkles, text: "Extract transcripts from any short video in seconds" },
  { icon: Search, text: "Analyze viral hooks, emotional curves, and speech patterns" },
  { icon: FileText, text: "Copy, edit, and download transcripts as text files" },
  { icon: Zap, text: "Free to start. 20 extracts/day without registration" },
];

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent dark:via-brand/[0.02]">
      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand/20 dark:bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl" />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 pt-20 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Extract Captions from{" "}
            <span className="text-brand">Short Videos</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Paste a TikTok, Instagram Reels, or YouTube Shorts link and get the
            full transcript in seconds. Free, no sign-up required.
          </p>
        </div>

        <div id="tool">
          <ExtractionForm />
        </div>

        <div className="mt-20 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-brand-light text-brand dark:bg-brand/10">
                  <Icon className="size-4" />
                </div>
                <span className="pt-1.5">{h.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
