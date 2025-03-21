/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig