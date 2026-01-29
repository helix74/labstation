# Architecture Overview 🏗️

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (UI), Three.js (3D)
- **Testing**: Vitest (Unit), Playwright (E2E)

## Directory Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # Reusable UI primitives (Button, Card)
│   ├── sections/     # Large page sections (Hero, Menu)
│   └── layout/       # Layout components (Header, Footer)
├── lib/              # Utilities and helpers
└── styles/           # Global styles
```

## Key Decisions

1.  **"Showcase" Mode**: The site is currently a frontend-only showcase. No database or auth is connected.
2.  **Design System**: We use a custom "Lab" theme defined in `globals.css` (Tailwind v4 theme).
3.  **Performance**: Heavy assets (3D) should be lazy-loaded.
