import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "placehold.net",
      },
    ],
  },
};

export default nextConfig;
