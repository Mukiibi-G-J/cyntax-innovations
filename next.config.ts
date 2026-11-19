import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photography from Unsplash (free Unsplash License). Replace with your own photos over time.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" }],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Only https://cyntaxinnovations.com should serve the site. The Vercel production alias and
      // the www host redirect there (preview deployment URLs are left alone so previews keep working).
      {
        source: "/:path*",
        has: [{ type: "host", value: "cyntax-innovations.vercel.app" }],
        destination: "https://cyntaxinnovations.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cyntaxinnovations.com" }],
        destination: "https://cyntaxinnovations.com/:path*",
        permanent: true,
      },
      { source: "/zentroapp", destination: "/products/zentroapp", permanent: true },
      { source: "/services/cybersecurity", destination: "/cybersecurity", permanent: true },
      { source: "/services/mobile", destination: "/services/custom-software", permanent: true },
    ];
  },
};

export default nextConfig;
