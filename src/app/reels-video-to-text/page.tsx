import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Reels Video to Text",
  description:
    "Free Reels video to text converter — convert Instagram Reels to text and extract spoken content online.",
};

const faq = [
  {
    question: "How do I convert an Instagram Reel to text?",
    answer: "Paste the Reels URL, select Instagram Reels, and click Extract. The spoken content will be converted to text.",
  },
  {
    question: "Is the Reels video to text converter free?",
    answer: "Yes. 20 free conversions per day without registration, 50 per day when signed in.",
  },
  {
    question: "Is the conversion accurate?",
    answer: "Yes. The tool uses speech recognition to accurately convert spoken content to text.",
  },
];

export default function Page() {
  return (
    <ToolPage
      title="Instagram Reels Video to Text"
      description="Convert any Instagram Reels video to text. Free, fast, and accurate."
      platform="reels"
      faq={faq}
    />
  );
}
