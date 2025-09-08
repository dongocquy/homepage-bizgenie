import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.agentcloud.vn',
        port: '',
        pathname: '/bizgenie.vn/images/**',
      },
    ],
  },
};

export default nextConfig;
