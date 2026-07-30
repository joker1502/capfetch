import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TikTok Caption Rewriter",
  description: "AI-powered TikTok caption rewriter — rewrite and optimize your video scripts for better engagement. Free short video script tool.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 pb-24">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">TikTok Caption Rewriter</h1>
      <p className="mt-4 text-lg text-muted-foreground">AI-powered script rewriting to optimize your TikTok captions for better hooks, pacing, and engagement.</p>
      <section className="mt-12 text-center">
        <Link href="/" className={cn(buttonVariants())}>Try the Tool &rarr;</Link>
      </section>
    </div>
  );
}
