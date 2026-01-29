# Contributing to Lab Station 🧪

Welcome to the Lab! We are building a "Haja Masaretch" experience.

## Development Workflow

1.  **Branching**: Use `feature/name` or `fix/name`.
2.  **Commits**: Use Conventional Commits (e.g., `feat: add hero section`, `fix: button alignment`).
3.  **Pull Requests**: All changes must be reviewed.

## Code Style

- **TypeScript**: Strict mode is enabled. No `any`.
- **Tailwind**: Use utility classes. Avoid custom CSS unless necessary for complex animations.
- **Components**:
  - Use `src/components/ui` for reusable primitives.
  - Use `src/components/sections` for page sections.

## Testing

- **Unit Tests**: Run `npm run test` (Vitest).
- **E2E Tests**: Run `npx playwright test`.

## Project Structure

See `docs/technical/ARCHITECTURE.md` for a detailed overview.
