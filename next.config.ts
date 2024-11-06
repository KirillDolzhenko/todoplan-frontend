import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: {
    resolveAlias: {
      "@styles": "./src/styles/",
    },
  },
};

export default nextConfig;
