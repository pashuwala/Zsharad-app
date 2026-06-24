/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Replace 'zsharad app' with your repo name
  basePath: process.env.NODE_ENV === 'production' ? '/zsharad app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zsharad app/' : '',
};

module.exports = nextConfig;
