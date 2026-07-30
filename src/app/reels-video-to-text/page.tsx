import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Video to Text",
  description: "Free Reels video to text converter — convert Instagram Reels to text and extract spoken content online.",
};

const faq = [
  {
    question: "Is the Reels video to text conversion accurate?",
    answer: "Yes, our conversion engine delivers high accuracy for clear speech. Background noise or heavy music may reduce accuracy slightly.",
  },
  {
    question: "Can I convert Reels to text for SEO purposes?",
    answer: "Yes, converting Reels to text gives you written content you can use for blog posts, captions, and video descriptions to improve search visibility.",
  },
  {
    question: "What happens after I convert a Reels to text?",
    answer: "The text appears in an editable box. You can copy it, download it as a .txt file, or edit it directly in the browser.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Reels Video to Text"
      description="Convert any Instagram Reels video to text instantly."
      howToSteps={[
        "Copy the Instagram Reels URL",
        "Navigate to CapFetch's video to text tool",
        "Select Instagram Reels as the platform",
        "Paste the URL and convert to text",
      ]}
      benefits={[
        { title: "Instant Conversion", desc: "Convert Instagram Reels to text in seconds. Fast processing with accurate results." },
        { title: "Content Strategy", desc: "Use Reels transcripts to analyze competitor content and improve your strategy." },
        { title: "Easy Export", desc: "Copy converted text to clipboard or export for use in other applications." },
        { title: "No Installation", desc: "CapFetch works entirely in your browser. No apps or plugins needed." },
      ]}
      relatedLinks={[
        { label: "Extract Reels Captions", href: "/reels-caption-extractor" },
        { label: "Download Reels Captions", href: "/reels-caption-downloader" },
        { label: "Generate Reels Transcript", href: "/reels-transcript-generator" },
        { label: "TikTok Video to Text", href: "/tiktok-video-to-text" },
      ]}
      faq={faq}
    />
  );
}
