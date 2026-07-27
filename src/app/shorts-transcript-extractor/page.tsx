import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Transcript Extractor",
  description:
    "Free YouTube Shorts transcript extractor — extract transcripts from YouTube Shorts videos online. Get Shorts text and captions instantly.",
};

const faq = [
  {
    question: "How do I extract a YouTube Shorts transcript?",
    answer: "Paste the Shorts URL into the input, select YouTube Shorts, and click Extract.",
  },
  {
    question: "Is this free?",
    answer: "Yes. 20 free extracts per day without an account, 50 per day when signed in.",
  },
  {
    question: "Does this work for regular YouTube videos?",
    answer: "This tool is optimized for YouTube Shorts. We may add support for regular YouTube videos in the future.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Transcript Extractor"
      description="Extract transcripts from any YouTube Shorts video instantly."
      platform="shorts"
      faq={faq}
    />
  );
}
