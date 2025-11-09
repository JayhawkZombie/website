/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // Enable standalone output for Docker (optional, not needed for Vercel)
  output: 'standalone',
};

module.exports = nextConfig;
