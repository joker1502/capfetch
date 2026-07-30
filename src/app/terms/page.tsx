import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">By using CapFetch, you agree to these terms. If you do not agree, do not use the service.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Service Description</h2>
        <p className="text-muted-foreground">CapFetch provides a free short video caption extraction service. We support TikTok, Instagram Reels, and YouTube Shorts.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Fair Usage</h2>
        <p className="text-muted-foreground">Free users are limited to 20 extracts per day without registration and 50 per day when signed in. Automated or excessive usage may result in rate limiting.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. User Responsibilities</h2>
        <p className="text-muted-foreground">You agree not to misuse the service, including but not limited to: attempting to bypass rate limits, using automated scripts, or violating platform terms of service.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
        <p className="text-muted-foreground">CapFetch is provided &quot;as is&quot; without warranty. We are not liable for damages arising from use of the service.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
        <p className="text-muted-foreground">We reserve the right to modify these terms at any time. Users will be notified of significant changes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Contact</h2>
        <p className="text-muted-foreground">For questions about these terms, please contact us through our GitHub repository.</p>
      </section>
    </div>
  );
}
