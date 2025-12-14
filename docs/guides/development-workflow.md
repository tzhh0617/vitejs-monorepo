# Development Workflow

This guide outlines the recommended development workflow for the Next.js Workspace monorepo.

## Overview

We follow a structured workflow to ensure code quality, consistency, and smooth collaboration.

## Branch Strategy

### Main Branches

- **`main`**: Production-ready code
- **`develop`**: Integration branch for features

### Feature Branches

```bash
# Format: <type>/<description>
git checkout -b feature/user-authentication
git checkout -b fix/dashboard-layout
git checkout -b docs/api-endpoints
git checkout -b refactor/ui-components
```

### Branch Types

- **feature**: New features
- **fix**: Bug fixes
- **docs**: Documentation updates
- **refactor**: Code refactoring
- **chore**: Maintenance tasks

## Development Process

### 1. Setup Development Environment

```bash
# Ensure you're on the latest main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Start development
pnpm run dev
```

### 2. Make Changes

#### Code Organization

```
apps/client/src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Route groups
│   ├── dashboard/         # Feature pages
│   └── api/               # API routes
├── components/            # Page-specific components
│   ├── features/         # Feature components
│   └── layout/           # Layout components
└── lib/                  # App-specific utilities
```

#### Component Development

```typescript
// apps/client/src/components/features/user-profile.tsx
import { Avatar, Card } from "@workspace/ui";
import type { User } from "@workspace/types";

interface UserProfileProps {
  user: User;
  onUpdate?: (user: User) => void;
}

export const UserProfile = ({ user, onUpdate }: UserProfileProps) => {
  return (
    <Card>
      <Avatar src={user.avatar} name={user.name} />
      {/* Component content */}
    </Card>
  );
};
```

### 3. Code Quality Checks

#### Automated Checks

```bash
# Run all checks before committing
pnpm run lint          # ESLint
pnpm run type-check    # TypeScript
pnpm run format         # Prettier
```

#### Pre-commit Hooks

Pre-commit hooks automatically run:
- ESLint with auto-fix
- Prettier formatting
- Type checking (on first file change)

#### VS Code Integration

Install recommended extensions from `apps/.vscode/extensions.json`:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "usernamehw.errorlens"
  ]
}
```

## Testing Strategy

### Test Structure

```
packages/
├── ui/
│   ├── src/
│   │   └── components/
│   └── __tests__/           # Unit tests
├── utils/
│   ├── src/
│   └── __tests__/           # Unit tests
apps/
├── client/
│   ├── src/
│   └── __tests__/           # Integration tests
└── admin/
    ├── src/
    └── __tests__/           # Integration tests
```

### Running Tests

```bash
# Run all tests
pnpm run test

# Run tests for specific package
pnpm --filter @workspace/ui test

# Run tests in watch mode
pnpm --filter @workspace/ui test:watch

# Run tests with coverage
pnpm run test:coverage
```

## Commit Guidelines

### Conventional Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code formatting (no logic changes)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(auth): add user login functionality

Implement OAuth2 authentication with Google and GitHub providers.
Includes login form, session management, and protected routes.

Closes #123

fix(ui): resolve mobile layout issues

- Fix responsive navigation menu
- Correct button alignment on mobile devices
- Add missing viewport meta tag

refactor(utils): simplify date formatting

Extract common date formatting logic into reusable utility functions.
Improve performance by memoizing formatted dates.

docs(readme): update installation instructions

Add pnpm installation guide and fix broken links.
```

## Pull Request Process

### 1. Create Pull Request

```bash
# Push your feature branch
git push origin feature/your-feature-name

# Create PR on GitHub
# Title: feat(scope): brief description
# Description: Detailed explanation
```

### 2. PR Template

Use the following PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Types are correct
- [ ] No console errors
```

### 3. Code Review

#### Review Checklist

- **Functionality**: Does the code work as expected?
- **Types**: Are TypeScript types correct and complete?
- **Tests**: Are tests comprehensive?
- **Performance**: Any performance implications?
- **Security**: Any security concerns?
- **Documentation**: Is the code well-documented?

### 4. Merge Requirements

- At least one approval required
- All CI checks must pass
- No merge conflicts
- Documentation updated (if needed)

## Release Process

### Version Management

We use semantic versioning:
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Changelog

Maintain `CHANGELOG.md` with all notable changes:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2024-01-15

### Added
- User authentication system
- Dashboard analytics
- Dark mode support

### Changed
- Updated UI component library
- Improved performance

### Fixed
- Mobile layout issues
- Memory leaks in components
```

## Hotfix Process

For critical production issues:

```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Make minimal changes
pnpm run dev
# ... fix the issue

# Test thoroughly
pnpm run test
pnpm run build

# Merge and release
git checkout main
git merge hotfix/critical-bug-fix
git tag v1.2.1
git push origin main --tags
```

## Environment Management

### Environment Variables

```bash
# Development (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:3001/api
DATABASE_URL=postgresql://localhost:5432/dev_db

# Production (.env.production)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
DATABASE_URL=postgresql://prod-user:pass@prod-db:5432/prod_db
```

### Configuration Management

```typescript
// packages/config/environment.ts
export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};
```

## Troubleshooting

### Common Issues

1. **TypeScript errors after package updates**
   ```bash
   pnpm run clean
   pnpm install
   pnpm run type-check
   ```

2. **CSS not updating**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   pnpm run dev
   ```

3. **Package linking issues**
   ```bash
   pnpm run clean
   pnpm install --frozen-lockfile
   ```

### Getting Help

- **Slack**: #development channel
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Documentation**: [Project Docs](../README.md)

## Best Practices

### Code Quality

1. **Write meaningful tests**
2. **Keep components small and focused**
3. **Use TypeScript strictly**
4. **Follow naming conventions**
5. **Document complex logic**

### Performance

1. **Use React.memo for expensive components**
2. **Implement lazy loading**
3. **Optimize bundle size**
4. **Monitor performance metrics**

### Security

1. **Never commit secrets**
2. **Validate all inputs**
3. **Use HTTPS in production**
4. **Keep dependencies updated**

### Collaboration

1. **Communicate changes early**
2. **Review code thoroughly**
3. **Help teammates**
4. **Share knowledge**