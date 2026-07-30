import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Video to Text",
  description: "Free TikTok video to text converter — convert TikTok videos to text and extract spoken content online. Accurate video transcription tool.",
};

const faq = [
  {
    question: "What's the difference between video to text and caption extraction?",
    answer: "Caption extraction pulls existing on-screen captions. Video to text converts the actual spoken audio into written text, catching everything said even without captions.",
  },
  {
    question: "Can I convert TikTok videos to text in other languages?",
    answer: "Yes, the converter supports multiple languages including English, Spanish, French, German, Portuguese, and more. It auto-detects the language from the audio.",
  },
  {
    question: "How long does a TikTok video to text conversion take?",
    answer: "Most conversions complete in under 10 seconds. Longer videos may take slightly longer depending on audio complexity.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Video to Text"
      description="Convert any TikTok video to text instantly."
      howToSteps={[
        "Copy the TikTok video URL",
        "Open CapFetch's video to text converter",
        "Paste the URL and select the TikTok platform",
        "Click Convert and get the text output",
      ]}
      benefits={[
        { title: "Video to Text in Seconds", desc: "Convert any TikTok video to text quickly. Perfect for content repurposing and analysis." },
        { title: "Multilingual Support", desc: "Our converter handles multiple languages, making it useful for international content." },
        { title: "Content Repurposing", desc: "Turn TikTok video content into blog posts, social media captions, or research material." },
        { title: "Daily Free Usage", desc: "Convert up to 20 videos per day without signing up. 50 per day with a free account." },
      ]}
      relatedLinks={[
        { label: "Extract TikTok Captions", href: "/tiktok-caption-extractor" },
        { label: "Download TikTok Captions", href: "/tiktok-caption-downloader" },
        { label: "Generate TikTok Transcript", href: "/tiktok-transcript-generator" },
        { label: "Reels Video to Text", href: "/reels-video-to-text" },
      ]}
      faq={faq}
    />
  );
}
