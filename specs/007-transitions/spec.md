# Specification: Section Transitions 🌊

> **Feature**: Section Transitions & Scroll Effects  
> **Goal**: Create cohesive, animated journey through the site  
> **Status**: NEW

---

## 1. The Vision

Each section should feel like progressing through a Lab facility.

**Experience**:

- Sections reveal as you scroll
- Consistent animation language
- 60fps on mobile Tunisia 4G

---

## 2. User Stories

- **As a User**, I want scroll to feel smooth and engaging
- **As a User**, I want sections to animate into view
- **As a User**, I want transitions to feel cohesive (same theme)

---

## 3. UI/UX Requirements

### A. Scroll Behavior

- Use Lenis smooth scroll ✅ (already installed)
- Sections trigger animations at viewport entry
- No jarring jumps

### B. Section Entry Animations

**Pattern for ALL sections**:

1. Fade in from below (opacity 0 → 1, y: 50 → 0)
2. Staggered children (title first, then content)
3. Duration: 0.6-0.8s
4. Ease: easeOut

### C. Section-Specific Effects (Optional)

- **Menu**: Cards reveal with stagger
- **Testimonials**: Marquee starts on view
- **Story**: Timeline items animate in sequence
- **Contact**: Map fades in with location pin pulse

---

## 4. Technical Requirements

- GSAP ScrollTrigger OR Framer Motion whileInView
- Preference: Use Framer Motion (already in project)
- Performance: `will-change: transform, opacity` on animated elements
- Mobile: Reduce complexity if needed

---

## 5. Removed Concepts

- ~~Heavy parallax~~ (performance)
- ~~page-by-page scrolling~~ (user control)
- ~~Complex 3D transforms~~ (mobile perf)
