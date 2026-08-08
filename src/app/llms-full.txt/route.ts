import { posts } from "@/lib/blog"

function buildContent() {
  const base = "https://capfetch.com"

  const tools = [
    ["TikTok Caption Extractor", `${base}/tiktok-caption-extractor`, "Extract captions and transcripts from TikTok videos in seconds, no sign-up required"],
    ["Reels Caption Extractor", `${base}/reels-caption-extractor`, "Extract captions and transcripts from Instagram Reels"],
    ["Shorts Transcript Extractor", `${base}/shorts-transcript-extractor`, "Extract transcripts from YouTube Shorts"],
    ["TikTok Viral Analyzer", `${base}/tiktok-viral-analyzer`, "Analyze what makes TikTok captions go viral and replicate winning hooks"],
    ["Features", `${base}/features`, "Full feature overview"],
  ].map(([title, url, desc]) => `- [${title}](${url}): ${desc}`)

  const blog = posts
    .map((p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.description}`)
    .join("\n")

  return `# CapFetch

> Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy. No sign-up required.

## Core Tools
${tools.join("\n")}

## Pricing
- [Pricing](${base}/pricing): Free tier with daily extracts, paid AI analysis plans
- [Dashboard](${base}/dashboard): Your saved captions and analyses

## Blog
${blog}

## Company
- [About](${base}/about)
- [Privacy Policy](${base}/privacy)
- [Terms of Service](${base}/terms)

## Contact
- Website: ${base}
`
}

export async function GET() {
  return new Response(buildContent(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
