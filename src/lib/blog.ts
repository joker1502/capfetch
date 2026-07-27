export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  contentHtml: string
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-extract-tiktok-captions",
    title: "How to Extract TikTok Captions in 2026",
    description:
      "A complete guide to extracting captions and transcripts from any TikTok video. Free, no registration required.",
    date: "2026-07-24",
    contentHtml: `
      <p>Extracting captions from TikTok videos is useful for content analysis, repurposing, and accessibility. Here's how to do it with ClipHub.</p>
      <h2>Why extract TikTok captions?</h2>
      <p>Captions help you understand trending video structures, replicate successful hooks, and create subtitled versions of your own content.</p>
      <h2>How it works</h2>
      <ol>
        <li>Copy the TikTok video URL</li>
        <li>Paste it into ClipHub's extractor</li>
        <li>Get the full transcript in seconds</li>
      </ol>
      <p>ClipHub supports TikTok, Instagram Reels, and YouTube Shorts — all for free.</p>
    `,
  },
  {
    slug: "tiktok-vs-reels-vs-shorts-content-strategy",
    title: "TikTok vs Reels vs Shorts: Content Strategy Guide",
    description:
      "Compare the three major short video platforms and learn how to optimize your content for each one.",
    date: "2026-07-24",
    contentHtml: `
      <p>Each short video platform has its own audience, algorithm, and content style. Understanding the differences helps you create platform-specific content.</p>
      <h2>TikTok</h2>
      <p>Best for viral trends, entertainment, and Gen Z audiences. Algorithm-driven discovery.</p>
      <h2>Instagram Reels</h2>
      <p>Leverages existing Instagram following. Best for lifestyle, fashion, and creators with an existing audience.</p>
      <h2>YouTube Shorts</h2>
      <p>Best for search-driven content. Longer shelf life than TikTok or Reels.</p>
    `,
  },
];
