import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set the base path to match the GitHub repository name for correct asset loading
  //basePath: "/MohamedAyman23.github.io",
};

export default nextConfig;