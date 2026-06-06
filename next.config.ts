import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all image patterns since we use local public/ images
    unoptimized: false,
  },
};

export default nextConfig;
