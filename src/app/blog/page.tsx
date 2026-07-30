import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Short video content tips and guides — learn how to extract TikTok captions, analyze viral hooks, transcribe Reels, and optimize your short form video content strategy.",
};

function readingTime(html: string): string {
  const words = html.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Tips and guides for short video content creators.
        </p>
      </div>

      {/* Posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border p-6 hover:bg-muted/50 transition-colors flex flex-col"
          >
            <div className="flex-1">
              <h2 className="font-semibold group-hover:text-brand transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {post.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <time>{post.date}</time>
              <span>{readingTime(post.contentHtml)}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`} className="text-xs text-muted-foreground hover:text-brand transition-colors">
                  #{tag}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-sm text-brand font-medium">
              Read more <ArrowRight className="size-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
