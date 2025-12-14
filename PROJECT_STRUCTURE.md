# Project Structure

## Complete Folder Structure

```
nextjs-demo/                           # pnpm workspace monorepo root
├── 📁 apps/                          # Next.js applications
│
│   ├── 📁 client/                    # Customer-facing app (port 3000)
│   │   ├── 📁 public/                # Static assets for client
│   │   │   ├── 📄 file.svg
│   │   │   ├── 📄 globe.svg
│   │   │   ├── 📄 next.svg
│   │   │   ├── 📄 vercel.svg
│   │   │   └── 📄 window.svg
│   │   ├── 📄 package.json           # Client app dependencies
│   │   ├── 📄 tsconfig.json          # TypeScript config (extends base)
│   │   ├── 📄 next.config.ts         # Next.js configuration
│   │   ├── 📄 postcss.config.mjs     # PostCSS config (symlink)
│   │   ├── 📄 eslint.config.mjs      # ESLint config (symlink)
│   │   ├── 📄 tailwind.config.ts     # Tailwind config (symlink)
│   │   └── 📁 src/                   # Source code
│   │       └── 📁 app/               # Next.js app directory
│   │           ├── 📄 layout.tsx     # Root layout
│   │           ├── 📄 page.tsx       # Home page
│   │           └── 📁 styles/        # Global styles
│   │               └── 📄 globals.css
│   │
│   └── 📁 admin/                     # Admin dashboard (port 3001)
│       ├── 📁 public/                # Static assets for admin
│       │   ├── 📄 file.svg
│       │   ├── 📄 globe.svg
│       │   ├── 📄 next.svg
│       │   ├── 📄 vercel.svg
│       │   └── 📄 window.svg
│       ├── 📄 package.json           # Admin app dependencies
│       ├── 📄 tsconfig.json          # TypeScript config (extends base)
│       ├── 📄 next.config.ts         # Next.js configuration
│       ├── 📄 postcss.config.mjs     # PostCSS config (symlink)
│       ├── 📄 eslint.config.mjs      # ESLint config (symlink)
│       ├── 📄 tailwind.config.ts     # Tailwind config (symlink)
│       └── 📁 src/                   # Source code
│           └── 📁 app/               # Next.js app directory
│               ├── 📄 layout.tsx     # Root layout
│               ├── 📄 page.tsx       # Dashboard home
│               └── 📁 styles/        # Global styles
│                   └── 📄 globals.css
│
├── 📁 packages/                       # Shared packages
│   ├── 📁 config/                     # Build and dev configurations
│   │   ├── 📄 package.json           # Config package metadata
│   │   ├── 📄 index.ts               # Config exports
│   │   ├── 📄 tailwind.config.ts     # Tailwind CSS configuration
│   │   ├── 📄 postcss.config.mjs     # PostCSS configuration
│   │   ├── 📁 eslint/                 # ESLint configuration modules
│   │   │   ├── 📄 base.js           # Base JavaScript rules
│   │   │   ├── 📄 typescript.js     # TypeScript rules
│   │   │   ├── 📄 react.js         # React component rules
│   │   │   ├── 📄 next.js           # Next.js specific rules
│   │   │   ├── 📄 packages.js       # Package-specific rules
│   │   │   └── 📄 index.js         # Export all configs
│   │   └── 📄 commitlint.config.cjs  # Commit linting configuration
│   │
│   ├── 📁 types/                      # TypeScript type definitions
│   │   ├── 📄 package.json           # Types package metadata
│   │   ├── 📄 tsconfig.json          # TypeScript configuration
│   │   └── 📁 src/                   # Source files
│   │       └── 📄 index.ts           # Type exports
│   │
│   ├── 📁 utils/                      # Utility functions and helpers
│   │   ├── 📄 package.json           # Utils package metadata
│   │   ├── 📄 tsconfig.json          # TypeScript configuration
│   │   └── 📁 src/                   # Source files
│   │       ├── 📄 index.ts           # Utils exports
│   │       ├── 📄 utils.ts           # Class name utility (cn)
│   │       ├── 📄 date.ts             # Date utilities
│   │       ├── 📄 format.ts           # Formatting utilities
│   │       ├── 📄 validation.ts      # Validation helpers
│   │       ├── 📄 api.ts              # API utilities
│   │       ├── 📄 storage.ts          # Storage helpers
│   │       └── 📄 auth.ts             # Authentication utilities
│   │
│   └── 📁 ui/                         # React UI component library
│       ├── 📄 package.json           # UI package metadata
│       ├── 📄 tsconfig.json          # TypeScript configuration
│       └── 📁 src/                   # Source files
│           ├── 📄 index.ts           # Component exports
│           ├── 📁 components/        # React components
│           │   ├── 📁 ui/            # Base UI components
│           │   │   ├── 📄 index.ts   # UI component exports
│           │   │   ├── 📄 button.tsx
│           │   │   ├── 📄 card.tsx
│           │   │   ├── 📄 input.tsx
│           │   │   ├── 📄 label.tsx
│           │   │   ├── 📄 dialog.tsx
│           │   │   ├── 📄 dropdown-menu.tsx
│           │   │   ├── 📄 tabs.tsx
│           │   │   ├── 📄 table.tsx
│           │   │   ├── 📄 form.tsx
│           │   │   ├── 📄 sonner.tsx
│           │   │   └── 📄 ... (40+ shadcn/ui components)
│           │   │
│           │   ├── 📁 blocks/        # Page block components
│           │   │   ├── 📄 index.ts   # Block exports
│           │   │   ├── 📄 hero-section.tsx
│           │   │   ├── 📄 features-section.tsx
│           │   │   ├── 📄 stats-section.tsx
│           │   │   └── 📄 dashboard-sidebar.tsx
│           │   │
│           │   └── 📁 layout/        # Layout components
│           │       ├── 📄 index.ts   # Layout exports
│           │       ├── 📄 navbar.tsx
│           │       └── 📄 footer.tsx
│           │
│           └── 📁 hooks/            # Custom React hooks
│               ├── 📄 index.ts       # Hook exports
│               └── 📄 use-mobile.tsx
│
├── 📁 docs/                          # Project documentation
│   ├── 📄 README.md                  # Documentation overview
│   ├── 📁 api/                       # API documentation
│   ├── 📁 architecture/              # Architecture docs
│   └── 📁 guides/                    # Development guides
│       ├── 📄 getting-started.md     # Quick start guide
│       └── 📄 development-workflow.md # Dev workflow
│
├── 📁 .vscode/                       # VS Code workspace settings
│   ├── 📄 extensions.json           # Recommended extensions
│   └── 📄 settings.json             # Workspace settings
│
├── 📁 .git/                          # Git repository
│
├── 📄 .env.example                   # Environment variables template
├── 📄 .gitignore                     # Git ignore rules
├── 📄 .nvmrc                         # Node.js version specification
├── 📄 .prettierignore                # Prettier ignore file
├── 📄 .prettierrc                    # Prettier configuration
├── 📄 CLAUDE.md                      # Claude Code documentation
├── 📄 README.md                      # Project overview
├── 📄 pnpm-workspace.yaml           # pnpm workspace configuration
├── 📄 package.json                   # Root package.json (scripts + shared deps)
├── 📄 tsconfig.base.json             # Base TypeScript configuration
├── 📄 tsconfig.json                  # Root TypeScript config (extends base)
├── 📄 next-env.d.ts                  # Next.js type definitions
└── 📄 PROJECT_STRUCTURE.md           # This file
```

## 📦 Package Dependencies

```
Workspace Root
├── @workspace/client (apps/client)
│   ├── @workspace/ui
│   ├── @workspace/utils
│   └── @workspace/types
│
├── @workspace/admin (apps/admin)
│   ├── @workspace/ui
│   ├── @workspace/utils
│   └── @workspace/types
│
├── @workspace/ui (packages/ui)
│   ├── @workspace/utils
│   └── @workspace/types
│
├── @workspace/utils (packages/utils)
│   └── @workspace/types
│
└── @workspace/types (packages/types)
```

## 🚀 Port Allocation

| Application | Port | Environment |
|-------------|------|-------------|
| Client      | 3000 | Development |
| Admin       | 3001 | Development |
| Client      | -    | Production |
| Admin       | -    | Production |

## 📁 File Organization Principles

### 1. **Clear Separation**
- `apps/` - Application-specific code
- `packages/` - Shared, reusable code
- `docs/` - Documentation

### 2. **Dependency Direction**
```
Apps → UI → Utils → Types
```
No circular dependencies allowed.

### 3. **Import Patterns**
```typescript
// ✅ Use workspace imports
import { Button } from "@workspace/ui";
import { formatDate } from "@workspace/utils";
import type { User } from "@workspace/types";

// ❌ Avoid relative imports across packages
import { Button } from "../../../packages/ui/src";
```

### 4. **Configuration Management**
- All shared configs in `packages/config/`
- Apps use symlinks to reference shared configs
- TypeScript configs use inheritance

### 5. **Static Assets Management**
- Each app has its own `public/` directory
- Static assets belong to specific applications
- No shared static assets at root level

## 🔧 Configuration Files

### Shared (packages/config/)
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `commitlint.config.cjs` - Commit message linting

### Root Level
- `tsconfig.base.json` - Base TypeScript configuration
- `tsconfig.json` - Workspace TypeScript config
- `.prettierrc` - Prettier configuration
- `.gitignore` - Git ignore rules
- `pnpm-workspace.yaml` - pnpm workspace setup

### Application Level
- `next.config.ts` - Next.js specific config
- `package.json` - Application dependencies
- `tsconfig.json` - Extends base config
- `public/` - Static assets

## 📝 Naming Conventions

### Packages
- Prefix with `@workspace/`
- Use kebab-case: `@workspace/ui`, `@workspace/utils`

### Files
- Components: PascalCase with `.tsx` extension
- Utilities: camelCase with `.ts` extension
- Config: kebab-case with appropriate extension

### Directories
- Components: lowercase with kebab-case for feature folders
- Use plural form for directories containing similar items: `components/`, `utils/`, `hooks/`

## 🎯 Development Workflow

1. **Workspace Commands** (run from root)
   ```bash
   pnpm run dev          # Start all apps
   pnpm run build        # Build all apps
   pnpm run lint         # Lint all code
   ```

2. **Package-specific** (run from package dir)
   ```bash
   cd packages/ui
   pnpm run dev          # Watch mode for UI package
   ```

3. **Feature Development**
   - Create feature branch
   - Add components to appropriate packages
   - Update exports
   - Test in applications
   - Submit PR

## 📊 Quick Stats

- **Total Applications**: 2 (client, admin)
- **Shared Packages**: 4 (ui, utils, types, config)
- **UI Components**: 40+ shadcn/ui components
- **Utility Functions**: 6 categories (date, format, validation, api, storage, auth)
- **Configuration Files**: 6 shared configs
- **Documentation**: 3 main sections with multiple guides

## ✅ Architecture Improvements Made

1. **Fixed public directory placement**
   - Moved static assets from root to individual apps
   - Each app now has its own `public/` directory

2. **Cleaned configuration files**
   - Removed duplicate configuration files
   - Centralized all shared configs in `packages/config/`
   - Used symlinks for configuration sharing

3. **Optimized file organization**
   - Clear separation between app-specific and shared code
   - Proper dependency hierarchy
   - No redundant files or directories

4. **Improved static asset management**
   - Assets belong to specific applications
   - No shared assets at workspace root
   - Better deployment isolation