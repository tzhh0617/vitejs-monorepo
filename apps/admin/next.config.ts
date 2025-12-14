import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui', '@workspace/types'],
  experimental: {
    optimizePackageImports: ['@workspace/ui'],
  },
}

export default nextConfig
