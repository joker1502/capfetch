import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  openGraph: {
    title: "CapFetch - Extract Captions from Short Videos",
    description:
      "Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy.",
    type: "website",
    locale: "en_US",
    siteName: "CapFetch",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapFetch - Extract Captions from Short Videos",
    description:
      "Free short video caption extractor for TikTok, Instagram Reels, and YouTube Shorts. Extract transcripts, analyze viral content, and optimize your short form video strategy.",
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
          <ThemeProvider defaultTheme="dark" storageKey="cliphub-ui-theme">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
