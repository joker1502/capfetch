import { Link2, Wand2, Share2 } from "lucide-react";

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

export function HowItWorks() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It Works
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-lg mx-auto">
          From extraction to optimization to publishing — all in one place.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
