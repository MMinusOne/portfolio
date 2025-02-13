import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{hostname: "cdn.builder.io"}]
  }
};

export default nextConfig;
