import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { triggerPages } from "@/lib/trigger-pages";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://capfetch.com";

const toolPages = [
  "",
  "/features",
  "/tiktok-caption-extractor",
  "/tiktok-caption-downloader",
  "/tiktok-transcript-generator",
  "/tiktok-video-to-text",
  "/reels-caption-extractor",
  "/reels-caption-downloader",
  "/reels-transcript-generator",
  "/reels-video-to-text",
  "/shorts-transcript-extractor",
  "/shorts-transcript-downloader",
  "/shorts-video-to-text",
  "/pricing",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = toolPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const triggerPages_sitemap = triggerPages.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...triggerPages_sitemap, ...blogPages];
}
