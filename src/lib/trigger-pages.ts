export interface TriggerPage {
  slug: string
  title: string
  description: string
  basePath: string
  howToSteps: string[]
  benefits: { title: string; desc: string }[]
}

export const triggerPages: TriggerPage[] = [
  {
    slug: "free-tiktok-caption-extractor",
    title: "Free TikTok Caption Extractor",
    description: "Extract TikTok captions for free. No credit card, no registration. Just paste the link and get the transcript.",
    basePath: "/tiktok-caption-extractor",
    howToSteps: [
      "Copy the TikTok video URL",
      "Paste it into CapFetch's free extractor",
      "Click Extract to generate the transcript",
      "Copy or download the result — no payment needed",
    ],
    benefits: [
      { title: "100% Free", desc: "Extract TikTok captions without paying a cent. 20 free extracts daily." },
      { title: "No Sign-up", desc: "Start extracting immediately. No account creation required." },
      { title: "Fast Results", desc: "Get transcripts in seconds with our efficient extraction engine." },
      { title: "Easy Export", desc: "Copy to clipboard or download as .txt files." },
    ],
  },
  {
    slug: "free-tiktok-transcript-generator",
    title: "Free TikTok Transcript Generator",
    description: "Generate TikTok transcripts for free. Unlimited use with sign-in, 20 per day without.",
    basePath: "/tiktok-transcript-generator",
    howToSteps: [
      "Find the TikTok video you want to transcribe",
      "Copy the video URL",
      "Open CapFetch's free transcript generator",
      "Paste the URL and generate the transcript",
    ],
    benefits: [
      { title: "Free Generation", desc: "Generate TikTok transcripts at no cost. No credit card needed." },
      { title: "High Accuracy", desc: "Get accurate word-by-word transcripts from TikTok videos." },
      { title: "Quick Processing", desc: "Receive transcripts within seconds of submitting your link." },
      { title: "No Download Required", desc: "Works entirely in your browser. No software installation." },
    ],
  },
  {
    slug: "free-reels-caption-extractor",
    title: "Free Instagram Reels Caption Extractor",
    description: "Extract Instagram Reels captions for free. Paste the link and get the transcript instantly.",
    basePath: "/reels-caption-extractor",
    howToSteps: [
      "Copy the Instagram Reels URL",
      "Select Instagram Reels in CapFetch",
      "Paste the link and click Extract",
      "View and copy the transcript at no cost",
    ],
    benefits: [
      { title: "Free Service", desc: "Extract Reels captions without any payment. 20 extracts per day free." },
      { title: "Instant Access", desc: "Start using immediately — no registration or setup needed." },
      { title: "Accurate Output", desc: "Get precise transcription of Reels audio content." },
      { title: "Portable Results", desc: "Copy transcripts or download them for later use." },
    ],
  },
  {
    slug: "free-shorts-transcript-extractor",
    title: "Free YouTube Shorts Transcript Extractor",
    description: "Extract YouTube Shorts transcripts for free. No account needed.",
    basePath: "/shorts-transcript-extractor",
    howToSteps: [
      "Copy the YouTube Shorts video URL",
      "Select YouTube Shorts in CapFetch",
      "Paste the URL and click Extract",
      "Get the free transcript instantly",
    ],
    benefits: [
      { title: "Free Extraction", desc: "Get YouTube Shorts transcripts without any cost or subscription." },
      { title: "No Account Required", desc: "Use the tool instantly without creating an account." },
      { title: "Fast Processing", desc: "Extract transcripts in seconds, not minutes." },
      { title: "Multiple Formats", desc: "Copy to clipboard or download as text files." },
    ],
  },
  {
    slug: "online-tiktok-caption-extractor",
    title: "Online TikTok Caption Extractor",
    description: "Extract TikTok captions online for free. Works in your browser, no download needed.",
    basePath: "/tiktok-caption-extractor",
    howToSteps: [
      "Copy the TikTok video URL",
      "Open CapFetch in your browser",
      "Paste the URL and click Extract",
      "Get captions instantly — no software to download",
    ],
    benefits: [
      { title: "Works Online", desc: "Extract captions directly in your browser. No downloads or installations." },
      { title: "Any Device", desc: "Works on desktop, tablet, or mobile — anywhere with a browser." },
      { title: "Free to Use", desc: "Online caption extraction at no cost. 20 extracts daily." },
      { title: "Fast & Reliable", desc: "Quick processing with accurate results every time." },
    ],
  },
  {
    slug: "tiktok-caption-extractor-no-sign-up",
    title: "TikTok Caption Extractor No Sign Up",
    description: "Extract TikTok captions without signing up. 20 free extracts per day, no account required.",
    basePath: "/tiktok-caption-extractor",
    howToSteps: [
      "Copy the TikTok URL from your feed",
      "Open CapFetch — no sign-in needed",
      "Paste the URL and click Extract",
      "Get your captions immediately",
    ],
    benefits: [
      { title: "No Sign-up Required", desc: "Start extracting immediately without creating an account." },
      { title: "20 Free Daily", desc: "Extract 20 captions per day without any registration. Sign in for 50." },
      { title: "Privacy First", desc: "No personal information needed to use the basic tool." },
      { title: "Same Great Features", desc: "All core features available without signing up." },
    ],
  },
  {
    slug: "free-tiktok-video-to-text",
    title: "Free TikTok Video to Text Converter",
    description: "Convert TikTok videos to text for free. Online tool, no registration needed.",
    basePath: "/tiktok-video-to-text",
    howToSteps: [
      "Copy the TikTok video URL",
      "Open CapFetch's free converter",
      "Select TikTok and paste the URL",
      "Convert to text instantly at no cost",
    ],
    benefits: [
      { title: "Free Conversion", desc: "Convert TikTok videos to text without paying. 20 free conversions daily." },
      { title: "No Registration", desc: "Start converting immediately — no sign-up needed." },
      { title: "Fast Processing", desc: "Get text output within seconds of submitting your link." },
      { title: "Easy to Use", desc: "Simple paste-and-convert interface. Results ready in seconds." },
    ],
  },
];
