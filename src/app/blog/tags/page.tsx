import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllTags, posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse blog articles by topic — TikTok tips, Reels guides, Shorts strategies, and short video content creation resources.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground">Blog</Link>
        <span>/</span>
        <span className="text-foreground">Topics</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight">Topics</h1>
      <p className="mt-2 text-muted-foreground">Browse articles by topic.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map((tag) => {
          const count = posts.filter((p) => p.tags.includes(tag)).length;
          return (
            <Link
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`}
            >
              <Badge variant="secondary" className="text-sm py-1.5 px-3 hover:bg-brand hover:text-white transition-colors cursor-pointer">
                {tag} ({count})
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
