import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/videos/**",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co",
        pathname: "/videos/**",
      },
    ],
  },
};

export default nextConfig;
