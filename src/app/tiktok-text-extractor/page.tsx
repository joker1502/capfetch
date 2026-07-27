import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Text Extractor - Free Online Tool",
  description:
    "Free TikTok text extractor — convert TikTok speech to text and extract text from TikTok videos online. Get accurate transcripts from any TikTok video.",
};

const faq = [
  {
    question: "How does the TikTok text extractor work?",
    answer: "Paste the video URL, click Extract, and the tool converts the spoken content to text using speech recognition.",
  },
  {
    question: "Is this free to use?",
    answer: "Yes. 20 free extracts per day without registration, 50 per day when signed in.",
  },
  {
    question: "Can I copy the extracted text?",
    answer: "Yes. The result includes a Copy button and the ability to download as a text file.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Text Extractor"
      description="Convert TikTok video speech to text. Free, fast, and no registration required."
      platform="tiktok"
      faq={faq}
    />
  );
}
