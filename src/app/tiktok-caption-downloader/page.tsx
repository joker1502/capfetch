import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Caption Downloader - Free Online Tool",
  description:
    "Free TikTok caption downloader — download captions and transcripts from any TikTok video as a text file. Extract TikTok text online, no registration needed.",
};

const faq = [
  {
    question: "How do I download captions from a TikTok video?",
    answer: "Paste the TikTok video URL, click Extract, and download the captions as a text file. Free, no sign-up needed.",
  },
  {
    question: "Is the TikTok caption downloader free?",
    answer: "Yes. 20 free downloads per day without an account, 50 per day when signed in.",
  },
  {
    question: "Can I download captions from any TikTok video?",
    answer: "Yes. Any public TikTok video with spoken content can be downloaded as a transcript.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Caption Downloader"
      description="Download captions and transcripts from any TikTok video as a text file."
      platform="tiktok"
      faq={faq}
    />
  );
}
