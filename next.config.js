/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
// Base path is only needed for GitHub Pages subdirectory deployments
const basePath = !isVercel && isGithubActions ? '/DSketch' : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;