import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:lang(en|th|zh|ja|fr|de|ko|es)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:lang(en|th|zh|ja|fr|de|ko|es)/:path+',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
