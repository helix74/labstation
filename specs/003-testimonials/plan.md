# Implementation Plan - Testimonials Section (Phase 4) ⭐️

> **Goal**: Build the "Subject Observations" Section.
> **Spec**: `specs/003-testimonials/spec.md`

## User Review Required

> [!NOTE]
> We will use a **Double Marquee** (Top row moves Left, Bottom row moves Right) for dynamic movement.
> Data will be hardcoded in the component for now.

## Proposed Changes

### 1. Components Structure

#### [NEW] [Testimonials.tsx](file:///c:/Users/Mohamed Ali Jardak/.gemini/antigravity/labstation/src/components/sections/testimonials.tsx)

- **Role**: Main container.
- **Layout**: Full width, overflow hidden.
- **Features**:
  - Section Header ("Subject Observations").
  - Two `Marquee` rows.

#### [NEW] [ReviewCard.tsx](file:///c:/Users/Mohamed Ali Jardak/.gemini/antigravity/labstation/src/components/ui/review-card.tsx)

- **Role**: Individual review card.
- **Props**: `name`, `rating`, `text`, `date`.
- **Style**: Glassmorphism, "Verified Subject" badge.

### 2. Data

- Create a static array of reviews in `testimonials.tsx`:
  - "Best burger in Ariana!"
  - "El Benna la tou9awem."
  - "Service rapide, ambiance top."
  - "The Lab is working correctly."

## Verification Plan

### Automated Tests

- `npm run test`: Verify components render.

### Manual Verification

1.  **Animation**: Verify the marquee scrolls smoothly and loops infinitely.
2.  **Responsiveness**: Check card sizing on Mobile.
3.  **Vibe**: Ensure the "Scientific" theme is present (Badges, Fonts).
