/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = nextConfig
