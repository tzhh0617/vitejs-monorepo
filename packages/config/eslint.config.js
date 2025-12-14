const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = [
  // Next.js recommended configs
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier config (must be last)
  ...compat.configs('prettier'),

  // Workspace-level ignores
  {
    ignores: [
      // Build outputs
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      // Dependencies
      'node_modules/**',
      'pnpm-lock.yaml',
      // Coverage
      'coverage/**',
      '!.next/**',
      // Temporary files
      '*.log',
      '.DS_Store',
      'Thumbs.db',
    ],
  },
];