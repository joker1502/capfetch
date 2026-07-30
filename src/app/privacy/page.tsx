import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-muted-foreground">CapFetch collects minimal information needed to provide our service:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><strong>Account data:</strong> If you sign up, we store your email address and authentication credentials via Supabase.</li>
          <li><strong>Usage data:</strong> We track daily extraction counts to enforce fair usage limits.</li>
          <li><strong>Video URLs:</strong> When you extract captions, the video URL is stored temporarily to process the transcription.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>To provide and maintain the caption extraction service</li>
          <li>To enforce daily usage limits</li>
          <li>To improve our transcription accuracy</li>
          <li>To communicate account-related information</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data Sharing</h2>
        <p className="text-muted-foreground">We do not sell your personal information. We may share anonymized, aggregated data for analytics purposes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Third-Party Services</h2>
        <p className="text-muted-foreground">CapFetch uses the following third-party services:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><strong>Supabase:</strong> Authentication and database hosting</li>
          <li><strong>Apify:</strong> Video transcription processing</li>
          <li><strong>Vercel:</strong> Website hosting</li>
          <li><strong>Creem:</strong> Payment processing (for paid plans)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p className="text-muted-foreground">We retain your data as long as your account is active. You can request deletion of your data at any time by contacting us.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">For privacy-related inquiries, please contact us through our GitHub repository.</p>
      </section>
    </div>
  );
}
