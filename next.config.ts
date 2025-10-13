import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
    unoptimized: true,
  },
};

export default nextConfig;
