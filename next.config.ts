import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn-icons-png.freepik.com/512/9098/**")],
  },
};

export default nextConfig;
