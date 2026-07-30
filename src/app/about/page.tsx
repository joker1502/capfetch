import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  robots: { index: false },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">About CapFetch</h1>
      <p className="text-muted-foreground">
        CapFetch is a free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts.
        We help content creators extract transcripts, analyze viral hooks, and optimize their short form video content.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground">
          We believe every content creator should have access to tools that help them understand and replicate viral content.
          CapFetch makes it easy to extract and analyze short video transcripts — for free.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What We Offer</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Free caption extraction from TikTok, Reels, and Shorts</li>
          <li>AI-powered viral analysis (coming in Phase 2)</li>
          <li>Script optimization and content generation (coming soon)</li>
          <li>Multi-platform publishing tools (coming soon)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          CapFetch is an open-source project. For questions or contributions, please visit our GitHub repository.
        </p>
      </section>
    </div>
  );
}
