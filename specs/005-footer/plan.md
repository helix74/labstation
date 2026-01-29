# Implementation Plan - Footer Section (Phase 6) 🏁

> **Goal**: Build the "System Shutdown" Footer.
> **Spec**: `specs/005-footer/spec.md`

## User Review Required

> [!NOTE]
> The footer will use a "Darker than Black" background (`#050505`) to distinguish it from the rest of the page.
> We will include a "Back to Top" button that smooth-scrolls to the Hero.

## Proposed Changes

### 1. Components Structure

#### [NEW] [Footer.tsx](file:///c:/Users/Mohamed Ali Jardak/.gemini/antigravity/labstation/src/components/sections/footer.tsx)

- **Role**: Main container.
- **Layout**: 4-Column Grid (Desktop), Stacked (Mobile).
- **Features**:
  - **Brand**: Logo + "Benna Scientifiquement Prouvée".
  - **Contact**: Address & Phone (Clickable links).
  - **Socials**: Icons for Instagram/Facebook.
  - **Actions**: "Back to Top" button.

### 2. Global Polish

- **Smooth Scrolling**: Add `scroll-behavior: smooth` to `globals.css`.
- **Metadata**: Update `layout.tsx` with correct title/description.

## Verification Plan

### Automated Tests

- `npm run test`: Verify component renders.

### Manual Verification

1.  **Links**: Click Address (Maps), Phone (Call), Socials (New Tab).
2.  **Back to Top**: Verify it scrolls smoothly to the top.
3.  **Responsiveness**: Check mobile stacking.
