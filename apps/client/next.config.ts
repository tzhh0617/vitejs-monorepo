import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: [
    '@workspace/components',
    '@workspace/hooks',
    '@workspace/lib',
    '@workspace/types',
  ],
  experimental: {
    optimizePackageImports: ['@workspace/components'],
  },
}

export default nextConfig
