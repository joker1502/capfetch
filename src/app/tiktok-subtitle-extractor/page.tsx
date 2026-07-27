import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Subtitle Extractor",
  description:
    "Free TikTok subtitle extractor — extract subtitles and captions from TikTok videos online. Get the full transcript with our TikTok text extractor.",
};

const faq = [
  {
    question: "How do I extract subtitles from a TikTok video?",
    answer: "Copy the video URL, paste it above, and click Extract. The subtitles will be extracted and displayed.",
  },
  {
    question: "Is this different from caption extraction?",
    answer: "No. Subtitle extraction and caption extraction refer to the same process — getting the spoken text from a video.",
  },
  {
    question: "Do I need an account?",
    answer: "No account needed for 20 free extracts per day. Sign in for 50 extracts per day.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Subtitle Extractor"
      description="Extract subtitles and captions from any TikTok video instantly."
      platform="tiktok"
      faq={faq}
    />
  );
}
