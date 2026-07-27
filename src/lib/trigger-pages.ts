interface TriggerPage {
  slug: string
  title: string
  description: string
  basePath: string
  platform: "tiktok" | "reels" | "shorts"
}

export const triggerPages: TriggerPage[] = [
  // free variants
  {
    slug: "free-tiktok-caption-extractor",
    title: "Free TikTok Caption Extractor",
    description: "Extract TikTok captions for free. No credit card, no registration. Just paste the link and get the transcript.",
    basePath: "/tiktok-caption-extractor",
    platform: "tiktok",
  },
  {
    slug: "free-tiktok-transcript-generator",
    title: "Free TikTok Transcript Generator",
    description: "Generate TikTok transcripts for free. Unlimited use with sign-in, 20 per day without.",
    basePath: "/tiktok-transcript-generator",
    platform: "tiktok",
  },
  {
    slug: "free-reels-caption-extractor",
    title: "Free Instagram Reels Caption Extractor",
    description: "Extract Instagram Reels captions for free. Paste the link and get the transcript instantly.",
    basePath: "/reels-caption-extractor",
    platform: "reels",
  },
  {
    slug: "free-shorts-transcript-extractor",
    title: "Free YouTube Shorts Transcript Extractor",
    description: "Extract YouTube Shorts transcripts for free. No account needed.",
    basePath: "/shorts-transcript-extractor",
    platform: "shorts",
  },
  // online variants
  {
    slug: "online-tiktok-caption-extractor",
    title: "Online TikTok Caption Extractor",
    description: "Extract TikTok captions online for free. Works in your browser, no download needed.",
    basePath: "/tiktok-caption-extractor",
    platform: "tiktok",
  },
  // no signup variants
  {
    slug: "tiktok-caption-extractor-no-sign-up",
    title: "TikTok Caption Extractor No Sign Up",
    description: "Extract TikTok captions without signing up. 20 free extracts per day, no account required.",
    basePath: "/tiktok-caption-extractor",
    platform: "tiktok",
  },
  {
    slug: "free-tiktok-video-to-text",
    title: "Free TikTok Video to Text Converter",
    description: "Convert TikTok videos to text for free. Online tool, no registration needed.",
    basePath: "/tiktok-video-to-text",
    platform: "tiktok",
  },
];
