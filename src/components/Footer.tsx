import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-lg">
              <span className="text-brand">Clip</span>Hub
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Extract captions, analyze content, and publish across platforms. Free for creators.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-foreground cursor-default">Privacy Policy</span></li>
              <li><span className="hover:text-foreground cursor-default">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ClipHub.</p>
        </div>
      </div>
    </footer>
  );
}
