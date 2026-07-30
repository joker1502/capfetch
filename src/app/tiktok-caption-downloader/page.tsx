import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Caption Downloader",
  description: "Free TikTok caption downloader — download captions from TikTok videos as text files. Extract and save TikTok transcripts online.",
};

const faq = [
  {
    question: "How do I download TikTok captions as a file?",
    answer: "Paste the TikTok URL, click Extract, then hit the Download button. The transcript saves as a .txt file on your device instantly.",
  },
  {
    question: "What format are the downloaded captions in?",
    answer: "Captions download as plain .txt files with timestamps when available. They open in any text editor or word processor.",
  },
  {
    question: "Is there a limit on how many captions I can download?",
    answer: "Free users get 20 downloads per day. A free account raises that to 50. Pro subscribers have unlimited downloads.",
  },
  {
    question: "Do I keep the downloaded captions forever?",
    answer: "Yes, once downloaded the .txt file is yours to keep, edit, and use however you like with no restrictions.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Caption Downloader"
      description="Download captions and transcripts from any TikTok video as a text file."
      howToSteps={[
        "Find the TikTok video you want to download captions from",
        "Copy the video URL",
        "Paste it into CapFetch's downloader",
        "Click Extract and download the .txt file",
      ]}
      benefits={[
        { title: "Instant Download", desc: "Download TikTok captions as .txt files with one click. No software installation needed." },
        { title: "Unlimited Access", desc: "Free account gives you 50 downloads per day. Pro plan removes all limits." },
        { title: "Clean Format", desc: "Downloaded transcripts are formatted as plain text, ready to use in any application." },
        { title: "Multi-Platform", desc: "CapFetch also supports Instagram Reels and YouTube Shorts downloads." },
      ]}
      relatedLinks={[
        { label: "Extract TikTok Captions", href: "/tiktok-caption-extractor" },
        { label: "Generate TikTok Transcript", href: "/tiktok-transcript-generator" },
        { label: "TikTok Video to Text", href: "/tiktok-video-to-text" },
        { label: "Reels Caption Downloader", href: "/reels-caption-downloader" },
      ]}
      faq={faq}
    />
  );
}
