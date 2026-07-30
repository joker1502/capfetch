import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Video to Text",
  description: "Free YouTube Shorts video to text converter — convert Shorts videos to text and extract captions online. Accurate Shorts transcription tool.",
};

const faq = [
  {
    question: "How is video to text different from YouTube's auto-captions?",
    answer: "YouTube's auto-captions only display on the video page. Our converter gives you downloadable, editable text you can use anywhere.",
  },
  {
    question: "Can I convert Shorts to text for translation?",
    answer: "Yes, convert the spoken content to text first, then use any translation service to render the transcript in other languages.",
  },
  {
    question: "Does this work for YouTube Shorts that are over 60 seconds?",
    answer: "YouTube Shorts are capped at 60 seconds. Our tool handles them at any length within that limit without issues.",
  },
  {
    question: "What if the Shorts video has no spoken words?",
    answer: "If the Shorts video is purely visual or musical with no speech, the converter won't produce meaningful text output.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Video to Text"
      description="Convert any YouTube Shorts video to text instantly."
      howToSteps={[
        "Copy the YouTube Shorts URL",
        "Open CapFetch's video to text tool",
        "Select YouTube Shorts",
        "Paste the URL and convert to text",
      ]}
      benefits={[
        { title: "Fast Conversion", desc: "Convert YouTube Shorts to text quickly for content research and analysis." },
        { title: "Content Analysis", desc: "Analyze Shorts content patterns, trending topics, and viral hooks through transcripts." },
        { title: "Repurpose Content", desc: "Use Shorts transcripts to create blog posts, newsletters, or social media content." },
        { title: "Free to Use", desc: "Convert up to 20 Shorts videos per day without any cost or registration." },
      ]}
      relatedLinks={[
        { label: "Extract Shorts Transcript", href: "/shorts-transcript-extractor" },
        { label: "Download Shorts Transcript", href: "/shorts-transcript-downloader" },
        { label: "Reels Video to Text", href: "/reels-video-to-text" },
      ]}
      faq={faq}
    />
  );
}
