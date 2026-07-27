import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { LandingFAQ } from "@/components/LandingFAQ";
import {
  Sparkles, Search, FileText, Zap,
  ArrowRight, Link2, Wand2, Share2,
  Music, Globe, Play, Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "Free short video caption extractor — extract TikTok captions, Reels transcripts, and YouTube Shorts text. Analyze viral hooks, optimize scripts, and publish across platforms.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ClipHub free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. You get 20 free extracts per day without registration, and 50 per day when you sign in." },
    },
    {
      "@type": "Question",
      name: "Which platforms does ClipHub support?",
      acceptedAnswer: { "@type": "Answer", text: "ClipHub supports TikTok, Instagram Reels, and YouTube Shorts. More platforms coming soon." },
    },
    {
      "@type": "Question",
      name: "Do I need an account?",
      acceptedAnswer: { "@type": "Answer", text: "No. You can use ClipHub without an account. Signing in increases your daily limit to 50 extracts." },
    },
    {
      "@type": "Question",
      name: "How accurate is the transcription?",
      acceptedAnswer: { "@type": "Answer", text: "The transcription accuracy depends on the audio quality of the video. For most videos, accuracy is very high." },
    },
  ],
};

const highlights = [
  { icon: Sparkles, text: "Extract transcripts from any short video in seconds" },
  { icon: Search, text: "Analyze viral hooks, emotional curves, and speech patterns" },
  { icon: FileText, text: "Copy, edit, and download transcripts as text files" },
  { icon: Zap, text: "Free to start. 20 extracts/day without registration" },
];

const steps = [
  {
    icon: Link2,
    title: "Get Inspired",
    desc: "Paste a video link, extract the script. Analyze viral video structures and get creative inspiration instantly.",
  },
  {
    icon: Wand2,
    title: "Polish Content",
    desc: "Use AI to analyze hook structures, emotional curves, and script patterns. Optimize your content quality.",
  },
  {
    icon: Share2,
    title: "Publish & Manage",
    desc: "Cross-post to multiple platforms, track performance. Full workflow from inspiration to distribution.",
  },
];

const platforms = [
  { icon: Music, label: "TikTok", desc: "Extract captions from any TikTok video" },
  { icon: Globe, label: "Instagram Reels", desc: "Get transcripts from Reels videos" },
  { icon: Play, label: "YouTube Shorts", desc: "Download Shorts transcripts" },
];

const detailedFeatures = [
  { title: "Instant Transcription", desc: "Paste any short video URL and get the full transcript in seconds. No waiting, no processing queues." },
  { title: "Multi-Platform Support", desc: "Works with TikTok, Instagram Reels, and YouTube Shorts. One tool for all major short video platforms." },
  { title: "Copy & Download", desc: "Copy transcripts to clipboard or download as .txt files. Edit directly in the browser before saving." },
  { title: "Free Daily Quota", desc: "20 extracts per day without registration, 50 per day when you sign in. No credit card needed." },
  { title: "AI Viral Analysis", desc: "Coming in Phase 2 — analyze hook structures, emotional curves, and speech patterns to understand virality." },
  { title: "Batch Export & API", desc: "Coming in Phase 3 — export multiple transcripts at once and integrate with your workflow via API." },
];

export default function FeaturesPage() {
  return (
    <main className="flex-1">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-20 pb-16 text-center">
        <Badge variant="outline" className="mb-4">
          All-in-One Short Video Toolbox
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Everything You Need for{" "}
          <span className="text-brand">Short Video Success</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          From caption extraction to viral analysis to multi-platform publishing.
          Free for creators.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/#tool" className={cn(buttonVariants({ size: "lg" }))}>
            Try It Free
          </Link>
          <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            View Pricing
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-2xl font-bold text-center mb-12">Why ClipHub</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
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

      {/* How it Works */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-2xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center mb-5 shadow-lg shadow-brand/25">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms - bordered list style */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-2xl font-bold text-center mb-4">Supported Platforms</h2>
          <p className="text-sm text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Extract captions from all major short video platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex items-center gap-5 rounded-xl border p-5 hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{p.label}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features - numbered grid */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-2xl font-bold text-center mb-4">Every Tool You Need</h2>
          <p className="text-sm text-muted-foreground text-center mb-12 max-w-md mx-auto">
            From transcription to analysis, we cover the full content workflow.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {detailedFeatures.map((f, i) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-white text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-2">
            <Users className="w-5 h-5 text-brand" />
            <span>Trusted by <span className="text-brand">10,000+</span> content creators</span>
          </div>
          <p className="text-sm text-muted-foreground">
            From solo creators to professional content teams, ClipHub helps thousands extract and analyze short video content every day.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LandingFAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to start creating better content?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join thousands of creators already using ClipHub.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/#tool" className={cn(buttonVariants())}>
              Get Started Free <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
