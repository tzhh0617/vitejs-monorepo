# Getting Started Guide

This guide will help you set up and start working with the Next.js Workspace monorepo.

## Prerequisites

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (recommended package manager)
- **Git**: Latest stable version

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-demo.git
cd nextjs-demo
```

### 2. Install pnpm (if not already installed)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using curl
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 3. Install Dependencies

```bash
pnpm install
```

This will:

- Install all dependencies for the workspace
- Link internal packages together
- Build shared packages

### 4. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your configuration
nano .env.local
```

## Running the Applications

### Start All Applications

```bash
pnpm run dev
```

This will start:

- **Client App**: http://localhost:3000
- **Admin App**: http://localhost:3001
- UI package in watch mode

### Start Individual Applications

```bash
# Client application only
pnpm run dev:client

# Admin application only
pnpm run dev:admin
```

## Development Workflow

### 1. Create a New Feature

```bash
# Create a new feature branch
git checkout -b feature/new-feature

# Make changes to your code
# ...

# Run type checking
pnpm run type-check

# Run linting
pnpm run lint

# Format code
pnpm run format
```

### 2. Add New Components

```typescript
// packages/components/src/components/ui/new-component.tsx
import { cn } from "@workspace/utils";

export interface NewComponentProps {
  className?: string;
  children: React.ReactNode;
}

export const NewComponent = ({ className, children }: NewComponentProps) => {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
};
```

```typescript
// packages/components/src/index.ts
export * from './components/ui/new-component'
```

### 3. Use Components in Applications

```typescript
// apps/client/src/app/page.tsx
import { NewComponent } from "@workspace/components";

export default function Page() {
  return (
    <NewComponent>
      <h1>Hello World</h1>
    </NewComponent>
  );
}
```

## Available Scripts

### Workspace Commands

```bash
# Development
pnpm run dev              # Start all applications
pnpm run dev:client       # Start client app only
pnpm run dev:admin        # Start admin app only

# Building
pnpm run build            # Build all applications
pnpm run build:client     # Build client app only
pnpm run build:admin      # Build admin app only

# Production
pnpm run start            # Start all production servers
pnpm run start:client     # Start client production server
pnpm run start:admin      # Start admin production server

# Code Quality
pnpm run lint             # Run ESLint on all packages
pnpm run lint:fix         # Fix ESLint issues
pnpm run type-check       # Run TypeScript type checking
pnpm run format           # Format code with Prettier
pnpm run format:check     # Check code formatting

# Maintenance
pnpm run clean            # Clean build artifacts
pnpm run clean:all        # Clean all artifacts and dependencies
```

### Package-Specific Commands

Navigate to specific package directories and run their individual scripts:

```bash
cd packages/components
pnpm run dev              # Watch mode for UI package
pnpm run build            # Build UI package
pnpm run type-check       # Type check UI package
```

## Project Structure

```
nextjs-demo/
├── apps/                    # Next.js applications
│   ├── client/             # Customer-facing app
│   │   ├── src/
│   │   │   ├── app/       # Next.js app directory
│   │   │   └── components/ # Page-specific components
│   │   └── package.json
│   └── admin/              # Admin dashboard
│       └── ...
├── packages/                # Shared packages
│   ├── ui/                 # UI components
│   │   ├── src/
│   │   │   ├── components/ # React components
│   │   │   ├── hooks/      # Custom hooks
│   │   │   └── index.ts    # Exports
│   │   └── package.json
│   ├── utils/              # Utility functions
│   ├── types/              # Type definitions
│   └── config/             # Shared configs
├── docs/                   # Documentation
└── tools/                  # Build tools
```

## Import Patterns

### Workspace Imports

Always use workspace package names for imports:

```typescript
// ✅ Correct
import { Button, Card } from '@workspace/components'
import { formatDate, cn } from '@workspace/utils'
import type { User } from '@workspace/types'

// ❌ Incorrect
import { Button } from '../../packages/components/src/components/ui/button'
import { formatDate } from '../../packages/utils/src/date'
```

### Absolute Imports

Use absolute imports within packages:

```typescript
// ✅ Correct (within @workspace/components)
import { cn } from '@workspace/utils'
import { ButtonProps } from '@workspace/types'

// ✅ Correct (within @workspace/utils)
import type { ApiResponse } from '@workspace/types'
```

## Common Issues

### 1. pnpm Installation Issues

```bash
# Clear pnpm cache
pnpm store prune

# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

### 2. TypeScript Errors

```bash
# Rebuild all packages
pnpm run clean
pnpm install

# Check types
pnpm run type-check
```

### 3. Port Conflicts

```bash
# Kill processes on ports 3000 and 3001
lsof -ti:3000 | xargs kill
lsof -ti:3001 | xargs kill

# Or use different ports
PORT=3002 pnpm run dev:client
PORT=3003 pnpm run dev:admin
```

## Getting Help

- **Documentation**: [docs/](../README.md)
- **Architecture**: [Architecture Overview](../architecture/overview.md)
- **API Reference**: [API Documentation](../api/)
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

## Next Steps

- Read the [Architecture Overview](../architecture/overview.md)
- Learn about the [Development Workflow](development-workflow.md)
- Explore the [API Documentation](../api/)
- Check out [Deployment Guide](deployment.md)
