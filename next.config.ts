import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/formations", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
