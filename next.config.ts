import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR when opening the dev app from another device on your LAN (e.g. phone at gym)
  allowedDevOrigins: ["192.168.1.119"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
