/**
 * @type {import('next').NextConfig}
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@styles": "./src/styles/",
      },
    },
  },
};

export default nextConfig;
