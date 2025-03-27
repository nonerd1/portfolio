/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain, you might need this
  // basePath: '/portfolio',
};

module.exports = nextConfig; 