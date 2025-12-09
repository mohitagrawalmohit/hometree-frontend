/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint errors on Vercel
  },
};

module.exports = nextConfig;
