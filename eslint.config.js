export default [
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
      // Temporary files
      '*.log',
      '.DS_Store',
      'Thumbs.db',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // Basic rules that work for all projects
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
]
