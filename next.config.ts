import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Keep remote images domains simple to avoid conflicts
    domains: ["ik.imagekit.io", "images.unsplash.com", "plus.unsplash.com"],
    // Optionally keep remotePatterns if you need path matching (but domains suffice for most)
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "ik.imagekit.io",
    //     port: "",
    //     pathname: "/",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //     port: "",
    //     pathname: "/",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "plus.unsplash.com",
    //     port: "",
    //     pathname: "/",
    //   },
    // ],
    // Make sure the loader is set to default for local images
    loader: "default",
  },
};

export default nextConfig;
