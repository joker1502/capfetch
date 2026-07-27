import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Video to Text - Free Online Converter",
  description:
    "Free YouTube Shorts video to text converter — convert Shorts videos to text and extract captions online. Accurate Shorts transcription tool.",
};

const faq = [
  {
    question: "How do I convert a YouTube Short to text?",
    answer: "Paste the Shorts URL, select YouTube Shorts, and click Extract. The speech will be converted to text.",
  },
  {
    question: "Is this free?",
    answer: "Yes. 20 free extracts per day without registration, 50 per day when signed in.",
  },
  {
    question: "Can I use the text for subtitles?",
    answer: "Yes. You can copy the extracted text or download it to create subtitles for your videos.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Video to Text"
      description="Convert any YouTube Shorts video to text. Free, fast, and accurate."
      platform="shorts"
      faq={faq}
    />
  );
}
