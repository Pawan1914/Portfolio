import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? repoBasePath : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : ""
  }
};

export default nextConfig;
