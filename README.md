# Next.js Workspace

A modern monorepo with two Next.js applications sharing common components and utilities.

## 🚀 Features

- **Monorepo Architecture** - pnpm workspace with multiple applications
- **Code Sharing** - Shared UI components, utilities, and types
- **TypeScript** - Full type safety across the workspace
- **Tailwind CSS** - Unified design system
- **shadcn/ui** - Beautiful and accessible component library
- **Independent Deployment** - Each app can be deployed separately

## 🏗️ Architecture

### Applications

- **Client App** (port 3000) - Customer-facing frontend application
- **Admin App** (port 3001) - Internal admin dashboard

### Shared Packages

- **@workspace/components** - Shared React components
- **@workspace/utils** - Shared utility functions
- **@workspace/types** - Shared TypeScript definitions
- **@workspace/config** - Shared build and dev configurations

## 🛠️ Tech Stack

- **Package Manager**: [pnpm workspace](https://pnpm.io/workspaces)
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)

## 📁 Project Structure

```
├── apps/
│   ├── client/          # Customer-facing app
│   └── admin/           # Admin dashboard
└── packages/
    ├── ui/              # Shared UI components
    ├── utils/           # Shared utilities
    ├── types/           # Shared types
    └── config/          # Shared configs
```

## 🚀 Getting Started

1. **Install pnpm** (if not already installed):

   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run development servers**:

   ```bash
   # Run both apps
   pnpm run dev

   # Or run individual apps
   pnpm run dev:client  # http://localhost:3000
   pnpm run dev:admin   # http://localhost:3001
   ```

## 📜 Available Scripts

### Workspace Commands

- `pnpm run dev` - Start all applications
- `pnpm run dev:client` - Start client app only (http://localhost:3000)
- `pnpm run dev:admin` - Start admin app only (http://localhost:3001)
- `pnpm run build` - Build all applications
- `pnpm run lint` - Lint all packages and apps
- `pnpm run lint:fix` - Fix ESLint issues
- `pnpm run type-check` - Type check workspace
- `pnpm run format` - Format all code
- `pnpm run clean` - Clean build artifacts
- `pnpm run clean:all` - Clean all artifacts and dependencies

## 🎨 Components

This workspace includes all shadcn/ui components in the shared UI package:

- **Form Components**: Button, Input, Label, Select, Checkbox, etc.
- **Navigation**: Navigation Menu, Breadcrumb, Sidebar, etc.
- **Feedback**: Alert, Dialog, Toast, Progress, etc.
- **Data Display**: Card, Table, Tabs, Accordion, etc.
- **Layout**: Aspect Ratio, Separator, Scroll Area, etc.

## 🧰 Development Workflow

### Adding New Components

1. Add components to `packages/components/src/components/`
2. Export from appropriate index files
3. Import in apps: `import { Button } from "@workspace/components"`

### Adding New Utilities

1. Add utilities to `packages/utils/src/`
2. Export from `packages/utils/src/index.ts`
3. Import in apps: `import { formatDate } from "@workspace/utils"`

### Adding New Types

1. Add types to `packages/types/src/`
2. Export from `packages/types/src/index.ts`
3. Import in apps: `import type { User } from "@workspace/types"`

## 🎯 Best Practices

1. **Import Patterns**: Always use `@workspace/*` imports, never relative imports
2. **Dependency Direction**: Apps → UI → Utils → Types (no circular dependencies)
3. **Code Sharing**: Keep shared code in packages, app-specific code in apps
4. **Type Safety**: Export types from `@workspace/types` and import where needed

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Components

This project includes all shadcn/ui components:

- Accordion, Alert Dialog, Avatar, Button
- Card, Checkbox, Collapsible, Command
- Context Menu, Dialog, Dropdown Menu
- Form, Input, Label, Menubar, Popover
- Progress, Radio Group, Scroll Area, Select
- Separator, Sheet, Skeleton, Slider
- Switch, Table, Tabs, Textarea
- Toggle, Tooltip, Calendar, Carousel
- Chart, Sidebar, Breadcrumb, and more...

## 🏗️ Blocks

Pre-built page sections for rapid development:

- `HeroSection` - Landing page hero
- `FeaturesSection` - Feature highlights
- `StatsSection` - Statistics display
- `DashboardSidebar` - Admin dashboard sidebar

## 🧰 Development Tools

### VS Code Extensions

Recommended VS Code extensions are included in `.vscode/extensions.json`:

- Prettier - Code formatter
- ESLint - JavaScript linter
- Tailwind CSS IntelliSense - Tailwind CSS support
- TypeScript Hero - TypeScript utilities
- Auto Rename Tag - Auto rename paired HTML/XML tags
- Path Intellisense - Autocomplete for filenames

### Git Hooks

This project uses Husky for Git hooks:

- **Pre-commit**: Runs lint-staged to lint and format staged files
- **Commit-msg**: Validates commit messages with Commitlint

### Conventional Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: maintenance
```

## 🎯 Best Practices

1. **TypeScript**: Use TypeScript for all new code
2. **Components**: Build reusable components with proper TypeScript types
3. **Styling**: Use Tailwind CSS for styling
4. **Code Quality**: Follow ESLint and Prettier configurations
5. **Git**: Use conventional commits for commit messages
6. **Performance**: Optimize images and use Next.js Image component

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests.
