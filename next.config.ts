import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  // images: {
  //   domains: ["ik.imagekit.io", "images.unsplash.com", "plus.unsplash.com"],
  //   loader: "default",
  // },
};

export default nextConfig;
