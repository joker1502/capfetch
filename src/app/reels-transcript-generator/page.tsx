import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Transcript Generator",
  description: "Free Reels transcript generator — generate transcripts from Instagram Reels videos online. Accurate Reels speech to text converter.",
};

const faq = [
  {
    question: "Can I generate transcripts from Reels in any language?",
    answer: "Yes, the generator supports multiple languages and will auto-detect the language from the Reels audio for the most accurate transcript.",
  },
  {
    question: "How is a transcript generator different from a caption extractor?",
    answer: "A caption extractor pulls existing on-screen text, while a transcript generator converts spoken audio to text even when no captions are displayed.",
  },
  {
    question: "Can I use the transcripts for content repurposing?",
    answer: "Absolutely. Generated transcripts can be used for blog posts, social media captions, video descriptions, and accessibility documentation.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Reels Transcript Generator"
      description="Generate word-by-word transcripts from any Instagram Reels video."
      howToSteps={[
        "Copy the Instagram Reels video URL",
        "Open CapFetch and select Reels as the platform",
        "Paste the URL and click Extract",
        "Review the generated transcript",
      ]}
      benefits={[
        { title: "Speech to Text", desc: "Convert Instagram Reels speech to text with our accurate transcription engine." },
        { title: "Script Analysis", desc: "Generate Reels transcripts to analyze video structure, hooks, and content patterns." },
        { title: "Editable Transcripts", desc: "Edit generated transcripts directly in the browser before saving." },
        { title: "Free Service", desc: "Generate up to 20 Reels transcripts per day without any cost." },
      ]}
      relatedLinks={[
        { label: "Extract Reels Captions", href: "/reels-caption-extractor" },
        { label: "Download Reels Captions", href: "/reels-caption-downloader" },
        { label: "Reels Video to Text", href: "/reels-video-to-text" },
        { label: "TikTok Transcript Generator", href: "/tiktok-transcript-generator" },
      ]}
      faq={faq}
    />
  );
}
