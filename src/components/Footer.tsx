import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-lg">
              <span className="text-brand">Cap</span>Fetch
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tiktok-caption-extractor" className="hover:text-foreground">TikTok</Link></li>
              <li><Link href="/reels-caption-extractor" className="hover:text-foreground">Instagram Reels</Link></li>
              <li><Link href="/shorts-transcript-extractor" className="hover:text-foreground">YouTube Shorts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CapFetch.</p>
        </div>
      </div>
    </footer>
  );
}
