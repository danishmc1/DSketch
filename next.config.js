/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages with repo name "DSketch":
  basePath: '/DSketch',
  assetPrefix: '/DSketch',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/DSketch',
  },
  // When you add a custom domain, comment out the lines above.
};

module.exports = nextConfig;