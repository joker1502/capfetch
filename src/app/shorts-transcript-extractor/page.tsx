import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "YouTube Shorts Transcript Extractor",
  description: "Free YouTube Shorts transcript extractor — extract transcripts from YouTube Shorts videos online. Get Shorts text and captions instantly.",
};

const faq = [
  {
    question: "Can I extract transcripts from any YouTube Shorts video?",
    answer: "Yes, any public YouTube Shorts video with spoken audio can have its transcript extracted. Private or unlisted videos may not be accessible.",
  },
  {
    question: "Does this tool extract YouTube's auto-generated captions?",
    answer: "Yes, when YouTube auto-captions are available, we can extract those. We also generate our own transcript from the audio for better accuracy.",
  },
  {
    question: "Is there a length limit on YouTube Shorts transcripts?",
    answer: "YouTube Shorts are limited to 60 seconds, so transcripts are typically brief. Our tool handles them efficiently with no minimum length requirement.",
  },
  {
    question: "Can I use extracted Shorts transcripts for subtitles?",
    answer: "Yes, you can use the extracted text to create .srt or .vtt subtitle files for video editing and accessibility purposes.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="YouTube Shorts Transcript Extractor"
      description="Extract transcripts from any YouTube Shorts video instantly."
      howToSteps={[
        "Find the YouTube Shorts video",
        "Copy the Shorts URL from YouTube",
        "Select YouTube Shorts in CapFetch",
        "Paste the URL and extract the transcript",
      ]}
      benefits={[
        { title: "YouTube Shorts Support", desc: "Specifically designed to extract transcripts from YouTube Shorts format videos." },
        { title: "Search Optimization", desc: "Use Shorts transcripts for SEO — add captions to your video descriptions and blog posts." },
        { title: "Content Repurposing", desc: "Turn YouTube Shorts content into blog posts, social updates, or marketing material." },
        { title: "Free Daily Usage", desc: "Extract up to 20 Shorts transcripts per day without registration." },
      ]}
      relatedLinks={[
        { label: "Download Shorts Transcript", href: "/shorts-transcript-downloader" },
        { label: "Shorts Video to Text", href: "/shorts-video-to-text" },
        { label: "Reels Caption Extractor", href: "/reels-caption-extractor" },
      ]}
      faq={faq}
    />
  );
}
