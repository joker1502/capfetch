import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "TikTok Transcript Generator",
  description: "Free TikTok transcript generator — generate word-by-word transcripts from any TikTok video. Accurate TikTok speech to text converter.",
};

const faq = [
  {
    question: "How accurate is the TikTok transcript generator?",
    answer: "Our engine delivers high accuracy for clearly spoken English, Spanish, and other supported languages. Heavy accents or background noise may reduce precision slightly.",
  },
  {
    question: "Can I edit the transcript after it's generated?",
    answer: "Yes. The transcript appears in an editable text box so you can fix any mistakes before copying or exporting it.",
  },
  {
    question: "Does this work for TikTok videos with music?",
    answer: "If the video has spoken words over music, the generator will do its best to isolate the speech. Pure music videos without vocals will not produce useful transcripts.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="TikTok Transcript Generator"
      description="Generate word-by-word transcripts from any TikTok video instantly."
      howToSteps={[
        "Copy any TikTok video URL",
        "Select TikTok in the platform selector",
        "Paste the link and click Extract",
        "Review, edit, and export the generated transcript",
      ]}
      benefits={[
        { title: "Word-by-Word Accuracy", desc: "Generate precise word-by-word transcripts from TikTok videos for content analysis." },
        { title: "Content Research", desc: "Analyze viral TikTok scripts by comparing transcripts of top-performing videos." },
        { title: "Editable Output", desc: "Edit transcripts directly in the browser before saving or exporting." },
        { title: "Completely Free", desc: "No credit card needed. Start generating transcripts immediately." },
      ]}
      relatedLinks={[
        { label: "Extract TikTok Captions", href: "/tiktok-caption-extractor" },
        { label: "Download TikTok Captions", href: "/tiktok-caption-downloader" },
        { label: "TikTok Video to Text", href: "/tiktok-video-to-text" },
        { label: "Reels Transcript Generator", href: "/reels-transcript-generator" },
      ]}
      faq={faq}
    />
  );
}
