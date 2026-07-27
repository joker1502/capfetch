import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Transcript Generator - Free Online Tool",
  description:
    "Free Reels transcript generator — generate transcripts from Instagram Reels videos online. Accurate Reels speech to text.",
};

const faq = [
  {
    question: "How do I generate a Reels transcript?",
    answer: "Paste the Instagram Reels URL and click Extract. The transcript will appear in seconds.",
  },
  {
    question: "Does this work for all Reels?",
    answer: "Yes. Any public Instagram Reels video can be transcribed.",
  },
  {
    question: "Can I use the transcript for subtitles?",
    answer: "Yes. You can copy the transcript or download it to create subtitles.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Instagram Reels Transcript Generator"
      description="Generate transcripts from any Instagram Reels video instantly."
      platform="reels"
      faq={faq}
    />
  );
}
