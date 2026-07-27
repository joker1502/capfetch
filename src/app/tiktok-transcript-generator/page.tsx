import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Transcript Generator",
  description:
    "Free TikTok transcript generator — generate word-by-word transcripts from TikTok videos online. Accurate TikTok speech to text converter.",
};

const faq = [
  {
    question: "How do I generate a TikTok transcript?",
    answer: "Paste the TikTok video URL into the input above and click Extract. The transcript will appear within seconds.",
  },
  {
    question: "Is the transcript accurate?",
    answer: "Yes. The tool uses speech recognition to generate accurate, word-by-word transcripts.",
  },
  {
    question: "Can I download the transcript?",
    answer: "Yes. You can copy the transcript to clipboard or download it.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Transcript Generator"
      description="Generate accurate transcripts from any TikTok video instantly."
      platform="tiktok"
      faq={faq}
    />
  );
}
