import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CapFetch - Extract Captions from Short Videos",
    template: "%s - CapFetch",
  },
  description:
    "Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy.",
  keywords: [
    "short video caption extractor",
    "tiktok caption extractor",
    "reels transcript generator",
    "youtube shorts transcript",
    "video to text converter",
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://capfetch.com"),
  openGraph: {
    title: "CapFetch - Extract Captions from Short Videos",
    description:
      "Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy.",
    type: "website",
    locale: "en_US",
    siteName: "CapFetch",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapFetch - Extract Captions from Short Videos",
    description:
      "Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
          <ThemeProvider defaultTheme="dark" storageKey="capfetch-ui-theme">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-BJS2FPTLZR`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJS2FPTLZR');
          `}
        </Script>
      </body>
    </html>
  );
}
