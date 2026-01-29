# Specification: The Story (About Us) 🧬

> **Feature**: Story Section
> **Goal**: Explain the "Why" behind Lab Station. The scientific pursuit of the perfect taste.
> **Theme**: "The Origin of the Experiment".

## 1. The Concept: "Lab Archives" 📂

We present the history of the restaurant as a **Scientific Timeline** or **Research Abstract**.
It's not just "We make burgers". It's "We engineered the perfect flavor profile."

## 2. User Stories

- **As a User**, I want to know who is behind this (Moudi Food).
- **As a User**, I want to understand why "Lab Station" (The Freshness/Quality philosophy).
- **As a User**, I want to see the "Faces" of the scientists (Team photos or stylized assets).

## 3. UI/UX Requirements

### A. Layout

- **Split Layout**:
  - **Left**: Text/Story (The Abstract).
  - **Right**: Visual/Image (The Lab Environment).
- **Timeline Elements**: Small "Milestones" (e.g., "Subject Zero", "First Breakthrough").

### B. Content

- **Headline**: "The Origin of the Experiment".
- **Body**:
  - "It started with a hypothesis: Can fast food be scientifically perfect?"
  - Mention **Moudi Food** (The Founder/Lead Scientist).
  - Emphasize **100% Fresh Meat** (No frozen samples).
- **Visuals**:
  - Use `Thinking.png` (The Scientist pondering).
  - Or `hazmat-character.jpg` (The raw experiment).

### C. Mobile Layout

- Stacked: Image Top -> Story Bottom.

## 4. Data Integration

- **Source**: Static content in `src/components/sections/story.tsx`.
- **Key Data Points**:
  - Founder: Moudi Food.
  - Location: Ariana.
  - Philosophy: "Benna Scientifiquement Prouvée".

## 5. Technical Constraints

- **Animation**: Fade-in elements as the user scrolls down (`Framer Motion`).
- **Typography**: Use `Space Grotesk` for headers to maintain the Lab feel.

## 6. Assets Required

- **Character**: `public/images/Thinking.png`.
