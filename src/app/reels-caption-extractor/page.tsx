import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Caption Extractor - Free Online Tool",
  description:
    "Free Instagram Reels caption extractor — extract captions from Reels videos online. Get transcripts from any Instagram Reels link instantly.",
};

const faq = [
  {
    question: "How do I extract captions from Instagram Reels?",
    answer: "Paste the Reels URL into the input above, select Instagram Reels, and click Extract.",
  },
  {
    question: "Is the Reels caption extractor free?",
    answer: "Yes. 20 free extracts per day without registration.",
  },
  {
    question: "Can I extract captions from private Reels?",
    answer: "No. Only public Instagram Reels can be extracted.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Instagram Reels Caption Extractor"
      description="Extract captions and transcripts from any Instagram Reels video."
      platform="reels"
      faq={faq}
    />
  );
}
