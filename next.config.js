/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Replace 'brand-zsharad' with your repo name
  basePath: process.env.NODE_ENV === 'production' ? '/brand-zsharad' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/brand-zsharad/' : '',
};

module.exports = nextConfig;
