import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Subtitle Extractor",
  description: "Free TikTok subtitle extractor — extract subtitles and captions from any TikTok video online. Get the full transcript instantly.",
};

const faq = [
  {
    question: "What's the difference between captions and subtitles?",
    answer: "In the context of CapFetch, both refer to the spoken text extracted from a video. We extract all spoken content as a transcript.",
  },
  {
    question: "Does this work for any TikTok video?",
    answer: "Yes. Any public TikTok video with spoken audio can be transcribed.",
  },
  {
    question: "Is this free?",
    answer: "Yes. 20 free extracts per day without registration, 50 per day when signed in.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Subtitle Extractor"
      description="Extract subtitles from TikTok videos with CapFetch. Free online tool — paste a link and get the transcript."
      howToSteps={[
        "Copy the TikTok video URL",
        "Open CapFetch and select TikTok",
        "Paste the URL and click Extract",
        "Read, copy, or download the subtitles",
      ]}
      benefits={[
        { title: "Free Service", desc: "Extract subtitles from up to 20 TikTok videos per day for free." },
        { title: "Instant Results", desc: "Get subtitles in seconds — no waiting for processing." },
        { title: "No Software Needed", desc: "Works entirely in your browser. No downloads or installations." },
        { title: "Editable Output", desc: "Edit the extracted subtitles directly before saving." },
      ]}
      relatedLinks={[
        { label: "TikTok Caption Extractor", href: "/tiktok-caption-extractor" },
        { label: "TikTok Text Extractor", href: "/tiktok-text-extractor" },
        { label: "Reels Subtitle Extractor", href: "/reels-caption-extractor" },
      ]}
      faq={faq}
    />
  );
}
