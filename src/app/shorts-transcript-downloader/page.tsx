import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Transcript Downloader",
  description:
    "Free YouTube Shorts transcript downloader — download transcripts from YouTube Shorts as text files. Extract Shorts captions online.",
};

const faq = [
  {
    question: "How do I download a YouTube Shorts transcript?",
    answer: "Paste the Shorts URL, select YouTube Shorts, click Extract, and download the transcript.",
  },
  {
    question: "Is the Shorts transcript downloader free?",
    answer: "Yes. 20 free downloads per day without registration, 50 per day when signed in.",
  },
  {
    question: "Can I download transcripts from any Shorts video?",
    answer: "Yes. Any public YouTube Shorts video can be transcribed and downloaded.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Transcript Downloader"
      description="Download transcripts from any YouTube Shorts video as a text file."
      platform="shorts"
      faq={faq}
    />
  );
}
