import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Caption Extractor",
  description: "Free TikTok caption extractor — extract captions from any TikTok video online. Paste the video URL and get the full transcript in seconds. No sign-up required.",
};

const faq = [
  {
    question: "What is a TikTok caption extractor?",
    answer: "A TikTok caption extractor pulls the spoken text from a TikTok video's audio track and displays it as a written transcript. CapFetch does this in your browser with no software needed.",
  },
  {
    question: "Can I extract captions from any public TikTok?",
    answer: "Yes, as long as the TikTok video is public and has detectable speech, our extractor can process it. Private or deleted videos won't work.",
  },
  {
    question: "How many TikTok captions can I extract per day?",
    answer: "20 extracts per day without an account. Sign up free to get 50 extracts daily. Pro users get unlimited access.",
  },
  {
    question: "Does the extractor work for TikTok livestreams?",
    answer: "No, this tool works with published TikTok videos only. Livestreams must be saved and posted as a video before they can be processed.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Caption Extractor"
      description="Paste any TikTok video link and extract its captions and transcript instantly."
      howToSteps={[
        "Copy the TikTok video URL from the share button",
        "Select TikTok as the platform",
        "Paste the URL and click Extract",
        "View, copy, or download the transcript",
      ]}
      benefits={[
        { title: "Free to Use", desc: "Extract up to 20 TikTok captions per day without any registration. Sign in for 50 daily extracts." },
        { title: "Fast Processing", desc: "Get transcripts in seconds — no waiting, no queues. Paste a link and get the text immediately." },
        { title: "Accurate Transcription", desc: "Our speech recognition engine converts TikTok audio to text with high accuracy." },
        { title: "Copy & Download", desc: "Copy captions to clipboard or download as .txt files. Edit transcripts directly in your browser." },
      ]}
      relatedLinks={[
        { label: "Download TikTok Captions", href: "/tiktok-caption-downloader" },
        { label: "Generate TikTok Transcript", href: "/tiktok-transcript-generator" },
        { label: "TikTok Video to Text", href: "/tiktok-video-to-text" },
        { label: "Reels Caption Extractor", href: "/reels-caption-extractor" },
      ]}
      faq={faq}
    />
  );
}
