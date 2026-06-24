/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This generates the './out' folder during npm run build
  images: {
    unoptimized: true, // 👈 Required by GitHub Pages since it can't optimize images on the fly
  },
};

export default nextConfig;
