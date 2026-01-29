# Implementation Plan - Story Section (Phase 5) 🧬

> **Goal**: Build the "Origin of the Experiment" Section.
> **Spec**: `specs/004-story/spec.md`

## User Review Required

> [!NOTE]
> We will use the `Thinking.png` asset for the Scientist.
> The layout will be a **Split Screen** (Text Left / Image Right).

## Proposed Changes

### 1. Components Structure

#### [NEW] [Story.tsx](file:///c:/Users/Mohamed Ali Jardak/.gemini/antigravity/labstation/src/components/sections/story.tsx)

- **Role**: Main container.
- **Layout**: Container with Grid (1 col mobile, 2 cols desktop).
- **Features**:
  - **Text Column**:
    - Header: "The Origin of the Experiment".
    - Body: Story about Moudi Food and the "Scientific Method" applied to burgers.
    - Milestones: Small icons/dates (e.g., "Hypothesis Formulated").
  - **Image Column**:
    - `Thinking.png` with a "Lab Background" (Abstract/Grid).
    - Floating elements (Chemical formulas or geometric shapes).

### 2. Assets

- **Scientist**: `public/images/Thinking.png`.
- **Background**: CSS Gradients / Grid pattern.

## Verification Plan

### Automated Tests

- `npm run test`: Verify component renders.

### Manual Verification

1.  **Responsiveness**: Check stacking on mobile.
2.  **Visuals**: Ensure the "Thinking" image looks integrated (not just pasted).
3.  **Typography**: Check readability of the story text.
