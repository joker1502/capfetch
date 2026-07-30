import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Caption Extractor",
  description: "Free Instagram Reels caption extractor — extract captions from Reels videos online. Get transcripts from any Instagram Reels link instantly.",
};

const faq = [
  {
    question: "How do I find the Instagram Reels video URL?",
    answer: "Open the Reels video in the Instagram app, tap the share icon (paper airplane), and select Copy Link. Paste that link into CapFetch.",
  },
  {
    question: "Does this work with Instagram Reels that have background music?",
    answer: "It works best when there's clear spoken audio. Pure music Reels without speech will not produce a meaningful transcript.",
  },
  {
    question: "Is there a limit on how many Reels I can process?",
    answer: "20 extracts per day without an account. Free registration increases the limit to 50 per day.",
  },
  {
    question: "Can I extract captions from Instagram Stories too?",
    answer: "This tool is built specifically for Instagram Reels. Stories are not currently supported.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Instagram Reels Caption Extractor"
      description="Extract captions and transcripts from any Instagram Reels video."
      howToSteps={[
        "Open Instagram and find the Reels video",
        "Copy the Reels video URL",
        "Select Instagram Reels in CapFetch",
        "Paste the URL and extract captions",
      ]}
      benefits={[
        { title: "Instagram Content Analysis", desc: "Extract Reels captions to understand trending audio and video patterns on Instagram." },
        { title: "Accessibility", desc: "Convert Reels audio to text for accessibility and content repurposing." },
        { title: "Quick Extraction", desc: "Get Reels transcripts in seconds without downloading any software." },
        { title: "Free Daily Usage", desc: "Extract up to 20 Reels captions per day free. No registration required." },
      ]}
      relatedLinks={[
        { label: "Download Reels Captions", href: "/reels-caption-downloader" },
        { label: "Generate Reels Transcript", href: "/reels-transcript-generator" },
        { label: "Reels Video to Text", href: "/reels-video-to-text" },
        { label: "TikTok Caption Extractor", href: "/tiktok-caption-extractor" },
      ]}
      faq={faq}
    />
  );
}
