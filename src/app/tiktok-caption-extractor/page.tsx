import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Caption Extractor",
  description:
    "Free TikTok caption extractor — extract captions and text from any TikTok video online. Paste the link and get the full transcript instantly. No sign-up required.",
};

const faq = [
  {
    question: "How do I extract captions from a TikTok video?",
    answer: "Copy the TikTok video URL, paste it into the input above, select TikTok, and click Extract. Your captions will appear in seconds.",
  },
  {
    question: "Is the TikTok caption extractor free?",
    answer: "Yes. You get 20 free extracts per day without an account. Sign in to get 50 extracts per day.",
  },
  {
    question: "Do I need to download anything?",
    answer: "No. ClipHub works entirely in your browser. Just paste a link and get the transcript.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Caption Extractor"
      description="Paste any TikTok video link and extract its captions and transcript instantly."
      platform="tiktok"
      faq={faq}
    />
  );
}
