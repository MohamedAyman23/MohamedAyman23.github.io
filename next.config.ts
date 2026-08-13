import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // No basePath needed — this is a user/org page (username.github.io),
  // served at the domain root, not a project subpath.
};

export default nextConfig;