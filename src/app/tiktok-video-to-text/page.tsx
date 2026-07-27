import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Video to Text - Free Online Converter",
  description:
    "Free TikTok video to text converter — convert TikTok videos to text and extract spoken content online. Accurate video transcription tool.",
};

const faq = [
  {
    question: "How do I convert a TikTok video to text?",
    answer: "Just paste the video URL and click Extract. The speech from the video will be converted to text automatically.",
  },
  {
    question: "Is the conversion free?",
    answer: "Yes. You get 20 free conversions per day without an account, 50 per day when signed in.",
  },
  {
    question: "What languages are supported?",
    answer: "The tool supports multiple languages including English, Chinese, Spanish, and more.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Video to Text"
      description="Convert any TikTok video to text. Free, fast, and accurate."
      platform="tiktok"
      faq={faq}
    />
  );
}
