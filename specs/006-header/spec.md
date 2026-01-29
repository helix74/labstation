# Specification: Header Redesign 🔧

> **Feature**: Header Premium Redesign  
> **Goal**: Transform generic header into premium Lab Station identity  
> **Status**: NEW

---

## 1. The Problem

Current header is:

- Too generic (glassmorphism, basic nav)
- Doesn't feel "Lab Station"
- "Order Now" button goes nowhere
- Mobile menu is basic

---

## 2. User Stories

- **As a User**, I want the header to feel industrial/premium
- **As a User**, I want clear navigation to sections
- **As a User**, I want "Order Now" to take me to contact/location

---

## 3. UI/UX Requirements

### A. Desktop Header

**Logo**:

- Current yellow square is basic
- Add subtle glow/pulse effect
- Consider hazard stripes accent

**Navigation**:

- Hover: Yellow underline with glow
- Active state: Brighter indicator
- Font: Keep uppercase tracking

**CTA Button**:

- "Order Now" → Smooth scroll to Contact
- Add glow effect on hover

**Background**:

- Keep glassmorphism base
- Add subtle hazard stripe accent (top or bottom border)

### B. Mobile Header

**Menu Toggle**:

- Animated hamburger → X transition
- Add glow on toggle

**Mobile Menu Overlay**:

- Full-screen or slide-down
- Lab-themed background (dark + grid pattern)
- Large touch targets
- Same glow effects on links

---

## 4. Technical Requirements

- Smooth scroll to sections via anchor links
- Framer Motion for menu animations
- CSS for glow effects
- Mobile-first responsive

---

## 5. Assets Needed

- None (all CSS-based)
