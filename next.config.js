/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
    unoptimized: true
  },
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = nextConfig
