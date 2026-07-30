import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Transcript Downloader",
  description: "Free YouTube Shorts transcript downloader — download transcripts from YouTube Shorts as text files. Extract Shorts captions online.",
};

const faq = [
  {
    question: "How do I download a YouTube Shorts transcript?",
    answer: "Paste the Shorts URL, click Extract, then click Download. The transcript saves as a .txt file on your computer immediately.",
  },
  {
    question: "Can I download transcripts from multiple Shorts at once?",
    answer: "Currently each Shorts video is processed individually. You can process up to 20 per day for free and return to the tool anytime.",
  },
  {
    question: "Are downloaded transcripts timestamped?",
    answer: "Yes, the transcript includes timestamps for each spoken segment, making it easy to locate specific parts of the video.",
  },
  {
    question: "What can I do with downloaded Shorts transcripts?",
    answer: "Use them for video subtitles, content repurposing, translation, accessibility, or SEO keyword research.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Transcript Downloader"
      description="Download transcripts from any YouTube Shorts video as a text file."
      howToSteps={[
        "Copy the YouTube Shorts video URL",
        "Open CapFetch's Shorts downloader",
        "Paste the URL and select YouTube Shorts",
        "Click Extract and download the .txt file",
      ]}
      benefits={[
        { title: "Quick Downloads", desc: "Download YouTube Shorts transcripts as .txt files instantly. No waiting required." },
        { title: "Offline Access", desc: "Save Shorts transcripts for offline reading, research, or content reference." },
        { title: "Accurate Transcription", desc: "Get accurate text extraction from YouTube Shorts audio content." },
        { title: "Cross-Platform", desc: "Download transcripts from any short video platform using CapFetch's unified tool." },
      ]}
      relatedLinks={[
        { label: "Extract Shorts Transcript", href: "/shorts-transcript-extractor" },
        { label: "Shorts Video to Text", href: "/shorts-video-to-text" },
        { label: "Reels Caption Downloader", href: "/reels-caption-downloader" },
      ]}
      faq={faq}
    />
  );
}
