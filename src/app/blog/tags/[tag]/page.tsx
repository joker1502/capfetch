import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { posts, getAllTags } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ tag: string }>
}

function normalizeTag(s: string): string {
  return s.toLowerCase().replace(/-/g, " ");
}

export async function generateStaticParams() {
  const allTags = getAllTags();
  return allTags.map((t) => ({ tag: t.toLowerCase().replace(/\s+/g, "-") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `${tag.replace(/-/g, " ")} Articles`,
    description: `Articles about ${tag.replace(/-/g, " ")} — short video content tips and guides.`,
  };
}

function readingTime(html: string): string {
  const words = html.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const tagName = normalizeTag(tag);
  const filtered = posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tagName)
  );

  if (filtered.length === 0) {
    notFound();
  }

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const allTags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span>/</span>
          <Link href="/blog/tags" className="hover:text-foreground">Topics</Link>
          <span>/</span>
          <span className="text-foreground capitalize">{tagName}</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight mt-4 capitalize">{tagName}</h1>
        <p className="mt-2 text-muted-foreground">{filtered.length} articles</p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        <Link href="/blog/tags">
          <Badge variant="secondary" className="transition-colors cursor-pointer hover:bg-brand hover:text-white">All</Badge>
        </Link>
        {allTags.map((t) => (
          <Link key={t} href={`/blog/tags/${encodeURIComponent(t.toLowerCase().replace(/\s+/g, "-"))}`}>
            <Badge
              variant="secondary"
              className={`transition-colors cursor-pointer hover:bg-brand hover:text-white ${
                t.toLowerCase() === tagName ? "bg-brand text-white" : ""
              }`}
            >
              {t}
            </Badge>
          </Link>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
          <div key={post.slug} className="rounded-xl border p-6 hover:bg-muted/50 transition-colors flex flex-col">
            <div className="flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.tags.map((t) => (
                  <Link key={t} href={`/blog/tags/${encodeURIComponent(t.toLowerCase().replace(/\s+/g, "-"))}`} className="text-xs text-muted-foreground hover:text-brand transition-colors no-underline">
                    #{t}
                  </Link>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="font-semibold hover:text-brand transition-colors no-underline">
                {post.title}
              </Link>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <time>{post.date}</time>
              <span>{readingTime(post.contentHtml)}</span>
            </div>
            <div className="mt-3 flex items-center gap-1 text-sm text-brand font-medium">
              <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-brand font-medium no-underline">
                Read more <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
