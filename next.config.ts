import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tiktok-text-extractor",
        destination: "/tiktok-caption-extractor",
        permanent: true,
      },
      {
        source: "/tiktok-subtitle-extractor",
        destination: "/tiktok-caption-extractor",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
