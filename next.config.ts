import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/portfolio2",
  assetPrefix: "/portfolio2/",
};



export default nextConfig;
