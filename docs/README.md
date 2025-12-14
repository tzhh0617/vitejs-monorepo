# Project Documentation

This directory contains comprehensive documentation for the Next.js Workspace monorepo.

## 📚 Documentation Structure

### [Architecture](./architecture/overview.md)
- Monorepo architecture overview
- Package dependency graph
- Design principles
- Decision records

### [Guides](./guides/)
- [Getting Started](./guides/getting-started.md)
- [Development Workflow](./guides/development-workflow.md)
- [Adding New Packages](./guides/adding-packages.md)
- [Deployment Guide](./guides/deployment.md)
- [Testing Strategies](./guides/testing.md)

### [API Reference](./api/)
- [Components API](./api/components.md)
- [Utility Functions](./api/utils.md)
- [Type Definitions](./api/types.md)
- [Configuration](./api/configuration.md)

## 🚀 Quick Links

- **Quick Start**: [Getting Started Guide](./guides/getting-started.md)
- **Development**: [Development Workflow](./guides/development-workflow.md)
- **Architecture**: [Architecture Overview](./architecture/overview.md)
- **API**: [Components API](./api/components.md)

## 📋 Key Concepts

### Workspace Structure
```
├── apps/           # Next.js applications
├── packages/       # Shared packages
├── docs/          # Documentation
└── tools/         # Build tools and scripts
```

### Package Naming
- `@workspace/*` - Internal packages
- Apps use `@workspace/client` and `@workspace/admin`
- Shared packages use `@workspace/ui`, `@workspace/utils`, etc.

### Import Patterns
```typescript
// ✅ Correct: Use workspace imports
import { Button } from "@workspace/ui";
import { formatDate } from "@workspace/utils";
import type { User } from "@workspace/types";

// ❌ Incorrect: Relative imports across packages
import { Button } from "../../../packages/ui/src";
```

## 🛠️ Development Commands

```bash
# Start all applications
pnpm run dev

# Start specific application
pnpm run dev:client
pnpm run dev:admin

# Build all packages
pnpm run build

# Type checking
pnpm run type-check

# Linting and formatting
pnpm run lint
pnpm run format
```

## 🤝 Contributing

1. Read the [Development Workflow](./guides/development-workflow.md)
2. Follow the [Architecture Guidelines](./architecture/overview.md)
3. Use conventional commits
4. Update documentation as needed

## 📞 Support

- Check existing documentation
- Search for [GitHub Issues](https://github.com/your-repo/issues)
- Create new issue with detailed description