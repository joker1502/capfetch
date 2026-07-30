import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Text Extractor",
  description: "Free TikTok text extractor — convert TikTok speech to text online. Extract text from any TikTok video with our accurate transcription tool.",
};

const faq = [
  {
    question: "What is a TikTok text extractor?",
    answer: "A TikTok text extractor converts spoken audio from TikTok videos into written text using speech recognition technology.",
  },
  {
    question: "Is the TikTok text extractor free?",
    answer: "Yes. You get 20 free extracts per day without registration, 50 per day when signed in.",
  },
  {
    question: "How accurate is the text extraction?",
    answer: "Accuracy depends on audio quality. Clear speech with minimal background music produces the best results.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Text Extractor"
      description="Convert TikTok speech to text with CapFetch. Free, fast, and accurate — no sign-up required."
      howToSteps={[
        "Copy the TikTok video URL from the app",
        "Open CapFetch and select TikTok",
        "Paste the URL and click Extract",
        "View and copy the extracted text",
      ]}
      benefits={[
        { title: "Free to Use", desc: "Extract text from up to 20 TikTok videos per day without any cost." },
        { title: "Fast Processing", desc: "Get results in seconds — no waiting for lengthy processing." },
        { title: "Accurate Transcription", desc: "Advanced speech recognition converts audio to text with high accuracy." },
        { title: "Easy Export", desc: "Copy to clipboard or download as .txt files." },
      ]}
      relatedLinks={[
        { label: "TikTok Caption Extractor", href: "/tiktok-caption-extractor" },
        { label: "TikTok Video to Text", href: "/tiktok-video-to-text" },
        { label: "Reels Text Extractor", href: "/reels-caption-extractor" },
      ]}
      faq={faq}
    />
  );
}
