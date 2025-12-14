# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Workspace Commands (Root Level)

- `pnpm run dev` - Start all applications in parallel (client on port 3000, admin on port 3001)
- `pnpm run dev:client` - Start only client application at http://localhost:3000
- `pnpm run dev:admin` - Start only admin application at http://localhost:3001
- `pnpm run build` - Build all applications
- `pnpm run build:client` - Build only client application
- `pnpm run build:admin` - Build only admin application
- `pnpm run start` - Start all production servers
- `pnpm run start:client` - Start client production server
- `pnpm run start:admin` - Start admin production server
- `pnpm run lint` - Run ESLint across all packages and apps
- `pnpm run lint:fix` - Automatically fix ESLint issues
- `pnpm run type-check` - Run TypeScript type checking across workspace
- `pnpm run format` - Format code with Prettier across workspace
- `pnpm run clean` - Clean all node_modules and build artifacts

### Package-Specific Commands

- Navigate to specific package/app directory and run their specific scripts
- Each package has `dev`, `build`, `lint`, `lint:fix`, `type-check`, `clean` scripts

### Git Hooks

- Pre-commit hook runs `lint-staged` to lint and format staged files
- Commit message validation uses Commitlint with conventional commits

## Architecture Overview

### Monorepo Structure

This is a **pnpm workspace** monorepo with two Next.js applications sharing common packages:

```
├── apps/
│   ├── client/          # Customer-facing frontend application (port 3000)
│   └── admin/           # Admin dashboard application (port 3001)
└── packages/
    ├── ui/              # Shared UI component library
    ├── utils/           # Shared utility functions and helpers
    ├── types/           # Shared TypeScript type definitions
    └── config/          # Shared build and development configurations
```

### Tech Stack

- **Package Manager**: pnpm workspace
- **Framework**: Next.js 16 with App Router (both apps)
- **Language**: TypeScript with strict ESLint rules
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Built-in React hooks
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Package Dependencies

```
apps/client & apps/admin
├── @workspace/components (components)
├── @workspace/utils (helpers)
├── @workspace/types (type definitions)
└── @workspace/config (build configs)

packages/ui
├── @workspace/utils
└── @workspace/types

packages/utils
└── @workspace/types
```

### Application Responsibilities

- **Client App**: Customer-facing landing page with marketing content
- **Admin App**: Internal dashboard for managing users, content, and analytics

## Development Patterns

### Component Development

- All UI components live in `packages/ui`
- Use existing shadcn/ui components as building blocks
- Follow the established pattern of `forwardRef` + `className` prop
- Import UI components: `import { Button } from "@workspace/components"`
- Components use Radix UI primitives for accessibility

### Utility Functions

- Shared utilities in `packages/utils/src`
- Categories: `date`, `format`, `validation`, `api`, `storage`, `auth`
- Import utilities: `import { cn, formatDate } from "@workspace/utils"`

### Type Definitions

- Shared types in `packages/types/src`
- Includes: `User`, `ApiResponse`, `PaginationParams`, UI component props
- Import types: `import type { User } from "@workspace/types"`

### Configuration Management

- Shared configs in `packages/config`
- Tailwind, ESLint, Prettier configurations are centralized
- Apps import and extend from shared configs

### Import Patterns

- Never use relative imports across packages
- Always use workspace package names: `@workspace/*`
- Follow dependency hierarchy (app → ui → utils → types)

## Code Quality

- ESLint and Prettier configurations shared across workspace
- TypeScript strict mode enabled with project references
- Husky for Git hooks at workspace root
- Conventional commits enforced via Commitlint

## Building and Deployment

- Each app can be built and deployed independently
- Use `pnpm run build:client` or `pnpm run build:admin`
- Packages build their TypeScript definitions before use

## Git Workflow

- All commits must follow conventional commits format
- Pre-commit hooks automatically lint and format code
- Use `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:` prefixes
- No code should be committed with ESLint errors or formatting issues
