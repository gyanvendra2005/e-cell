import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['www.google.com', 'placehold.co', 'other-allowed-hosts.com'],
  },
};


export default nextConfig;
