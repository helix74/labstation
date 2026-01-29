# Specification: Social Proof (Testimonials) ⭐️

> **Feature**: Testimonials Section
> **Goal**: Display customer reviews as "Subject Observations" to build trust.
> **Theme**: "Peer Reviews" from the "Test Subjects".

## 1. The Concept: "Subject Observations" 📝

We reframe standard Google Reviews as **"Clinical Observations"** from verified test subjects.
The vibe is positive, slightly scientific, but very human.

## 2. User Stories

- **As a User**, I want to see real feedback to know the food is good.
- **As a User**, I want to see the "Rating" clearly (5 Stars).
- **As a User**, I want to feel that others have "survived" and enjoyed the experiment.

## 3. UI/UX Requirements

### A. Layout

- **Container**: Full width section.
- **Header**:
  - Title: "Subject Observations" / "Peer Reviews".
  - Subtitle: "Data collected from verified test subjects."
- **Content**:
  - **Infinite Marquee** (Auto-scrolling horizontal list).
  - **Cards**: Glassmorphism style.

### B. The Review Card

- **Header**: User Name + "Verified Subject" Badge (Green check).
- **Rating**: 5 Stars (represented by Atoms or Stars).
- **Body**: The review text.
- **Footer**: Date of observation (e.g., "Experiment Date: 12/01/2026").

### C. Mobile Layout

- The Marquee works perfectly on mobile (swipeable or auto-scroll).

## 4. Data Integration

- **Source**: Static array in `src/components/sections/testimonials.tsx` (for now).
- **Content**: We will use real/realistic reviews mixing French and Derja.
  - _"Best burger in Ariana!"_
  - _"El Benna la tou9awem."_
  - _"Service rapide, ambiance top."_

## 5. Technical Constraints

- **Animation**: Smooth infinite scroll using `Framer Motion` or CSS animation.
- **Performance**: Ensure the marquee doesn't cause layout shifts or jank.

## 6. Assets Required

- **Icons**: Star icon (Lucide React), Verified Badge (Lucide React).
