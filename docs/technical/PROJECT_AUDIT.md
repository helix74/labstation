# Project Audit

## Tech Stack

- **Framework**: Next.js 16.1.2 (React 19)
- **Styling**: Tailwind CSS v4, CSS Modules (globals.css)
- **Animation**: Framer Motion, Three.js (@react-three/fiber, @react-three/drei)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Heading), Inter (Body), IBM Plex Sans Arabic (Arabic)

## Routes

- `/` - Home (Landing Page)
- `/test-card` - Test Route (likely for component testing)

## Components (UI)

### UI Primitives (`src/components/ui`)

- `LabButton`: Custom button with lab styling.
- `PeriodicCard`: Card component likely used for the menu.
- `button`: Standard button component.

### Sections (`src/components/sections`)

- `Hero`: Landing page hero section.
- `menu`: Menu section.
- `story`: Brand story section.
- `testimonials`: Customer testimonials.
- `video-banner`: Video banner section.
- `contact`: Contact section.

### Layout & Utilities

- `Header`: Main navigation header.
- `PageLoader`: Loading screen component.
- `SmoothScroll`: Smooth scrolling wrapper.
- `character-3d`: 3D character component.

## Database Schema

- _No database schema detected in the current codebase._

## Integrations

- _No external integrations (Stripe, Clerk, CMS) detected in `package.json`._

## Design System

- **Colors**:
  - `lab-black`: #0a0a0a
  - `lab-dark`: #1a1a1a
  - `lab-yellow`: #ffd700
  - `lab-toxic`: #00ff41
  - `lab-danger`: #ff3333
- **Typography**:
  - Headings: Space Grotesk
  - Body: Inter
  - Arabic: IBM Plex Sans Arabic
- **Effects**:
  - Glow effects (`text-glow`, `box-shadow`)
  - Glassmorphism (`.glass`)

## Current Status & Gaps

- **Complete**:
  - Basic project structure with Next.js 16.
  - Design system foundation (colors, fonts, Tailwind v4).
  - Core landing page sections (Hero, Menu, Story, etc.).
  - 3D integration setup.

- **Missing / Gaps**:
  - **Testing**: Minimal testing infrastructure. (User Priority: Must be done before proceeding)
  - **Documentation**: No existing documentation found. (To be created after analysis and fixes)

- **Intentional Omissions (Showcase Website)**:
  - **Data Layer**: No CMS or Database connection required.
  - **Auth/Cart**: No authentication or shopping cart logic required.
