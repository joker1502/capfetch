import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

import { posts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function readingTime(html: string): string {
  const words = html.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://capfetch.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://capfetch.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://capfetch.com/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "CapFetch" },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground">Blog</Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <time>{post.date}</time>
            <span>&middot;</span>
            <span>{readingTime(post.contentHtml)}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
        </header>

        <div
          className="space-y-4 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_li]:leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`}>
              <Badge variant="secondary" className="hover:bg-brand hover:text-white transition-colors cursor-pointer">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-10 border-t">
          <h2 className="text-xl font-semibold mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="rounded-xl border p-4 hover:bg-muted/50 transition-colors"
              >
                <p className="text-sm font-medium hover:text-brand transition-colors">{rp.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{rp.date}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
