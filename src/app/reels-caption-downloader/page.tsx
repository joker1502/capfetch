import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Caption Downloader - Free Online Tool",
  description:
    "Free Reels caption downloader — download captions from Instagram Reels as text files. Extract Reels transcripts online.",
};

const faq = [
  {
    question: "How do I download captions from Instagram Reels?",
    answer: "Paste the Reels URL, select Instagram Reels, click Extract, and download the transcript.",
  },
  {
    question: "Is this free?",
    answer: "Yes. 20 free extracts per day without registration, 50 per day when signed in.",
  },
  {
    question: "What format are the captions downloaded in?",
    answer: "Captions are displayed as text and can be copied or downloaded as a .txt file.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Instagram Reels Caption Downloader"
      description="Download captions and transcripts from any Instagram Reels video."
      platform="reels"
      faq={faq}
    />
  );
}
