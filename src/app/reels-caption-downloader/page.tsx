import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Caption Downloader",
  description: "Free Reels caption downloader — download captions from Instagram Reels as text files. Extract Reels transcripts online.",
};

const faq = [
  {
    question: "What do I get when I download Reels captions?",
    answer: "A plain .txt file containing the full transcript of the spoken content in the Reels video, with timestamps when available.",
  },
  {
    question: "Can I download captions from Reels I didn't post?",
    answer: "Yes, you can download transcripts from any public Instagram Reels video, not just your own.",
  },
  {
    question: "Do I need an Instagram account to use this?",
    answer: "No, you only need the public Reels URL. An Instagram account is not required to use CapFetch's downloader.",
  },
  {
    question: "What's the maximum Reels length supported?",
    answer: "There's no strict limit, but longer Reels (over 5 minutes) may take slightly longer to process.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Reels Caption Downloader"
      description="Download captions from any Instagram Reels video as a text file."
      howToSteps={[
        "Find the Instagram Reels video you need",
        "Copy the Reels URL from the share menu",
        "Paste it into CapFetch's downloader",
        "Click Extract and download the transcript as .txt",
      ]}
      benefits={[
        { title: "One-Click Download", desc: "Download Reels transcripts as .txt files instantly. No account needed for basic use." },
        { title: "Batch Processing", desc: "Extract and download transcripts from multiple Reels videos throughout the day." },
        { title: "Content Backup", desc: "Save Reels transcripts for offline reference, research, or content planning." },
        { title: "Cross-Platform Tool", desc: "CapFetch works with TikTok, Reels, and YouTube Shorts from one interface." },
      ]}
      relatedLinks={[
        { label: "Extract Reels Captions", href: "/reels-caption-extractor" },
        { label: "Generate Reels Transcript", href: "/reels-transcript-generator" },
        { label: "Reels Video to Text", href: "/reels-video-to-text" },
        { label: "TikTok Caption Downloader", href: "/tiktok-caption-downloader" },
      ]}
      faq={faq}
    />
  );
}
