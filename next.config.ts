import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  experimental: {
    // Das kleine Stylesheet direkt ins HTML schreiben: eine blockierende Anfrage weniger.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
