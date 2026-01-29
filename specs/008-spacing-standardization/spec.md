# Specification: Spacing & Padding Standardization 📐

> **Feature**: Design System - Spacing Consistency  
> **Goal**: Establish consistent vertical rhythm and padding across all sections  
> **Status**: 🔴 CRITICAL - MVP Blocker  
> **Phase**: 1.1 (Critical MVP Blockers)

---

## 1. The Problem

**User-Reported Issue**: _"famma ken machekel fel padding w spacing w hedhom fel manual testing"_

### Current State

The site suffers from **inconsistent spacing** that breaks the visual rhythm and makes it feel unpolished:

1. **Vertical spacing varies** between sections (some use `py-24`, others `py-28`, others `py-32`)
2. **Container padding** is not standardized across breakpoints
3. **Component internal spacing** (cards, buttons) lacks consistency
4. **Mobile vs Desktop** spacing doesn't follow a clear system

### Impact

- ❌ Site feels **amateurish** and unpolished
- ❌ Visual flow is **jarring** when scrolling
- ❌ Breaks the **premium Lab Station** aesthetic
- ❌ **Mobile experience** feels cramped or too loose in different sections

---

## 2. User Stories

- **As a User**, I want smooth visual transitions between sections so the site feels cohesive
- **As a User**, I want consistent padding on mobile so content doesn't feel cramped
- **As a User**, I want the site to feel premium and professionally designed
- **As a Developer**, I want clear spacing rules so I don't have to guess values
- **As a Designer**, I want vertical rhythm that creates a harmonious flow

---

## 3. The Solution: Spacing System

### A. Vertical Rhythm (Section Spacing)

**Standard**: All major sections MUST use `py-32` (128px / 8rem)

**Sections to Standardize**:

- Hero
- Menu
- Testimonials
- Story
- VideoBanner
- Contact
- Footer

**Exception**: PageLoader and WelcomeOverlay (full-screen overlays, no padding)

**Rationale**: `py-32` provides generous breathing room that matches the premium aesthetic while maintaining consistent rhythm.

---

### B. Container Padding (Horizontal)

**Standard**: Responsive padding with `max-w-7xl` container

```css
/* Mobile (default) */
px-4  /* 16px / 1rem */

/* Tablet (sm: 640px+) */
px-6  /* 24px / 1.5rem */

/* Desktop (lg: 1024px+) */
px-8  /* 32px / 2rem */
```

**Container Width**: `max-w-7xl` (1280px) for all major sections

**Rationale**: Progressive padding increase creates comfortable reading width on all devices.

---

### C. Component Internal Spacing

#### Cards (Menu Cards, Review Cards, etc.)

**Standard**:

- **Desktop**: `p-8` (32px)
- **Mobile**: `p-6` (24px)

**Example**:

```tsx
<div className="p-6 lg:p-8">{/* Card content */}</div>
```

#### Buttons

**Standard**:

- **Primary CTA**: `px-10 py-5` (large, prominent)
- **Secondary**: `px-6 py-3` (medium)
- **Small**: `px-4 py-2` (compact)

**Example**:

```tsx
// Primary CTA (Hero, Contact)
<button className="px-10 py-5">Lancer le Protocole</button>

// Secondary (Header "Order Now")
<button className="px-6 py-3">Order Now</button>
```

#### Text Spacing

**Standard**:

- **Headings to body**: `mb-4` or `mb-6`
- **Paragraphs**: `mb-4`
- **List items**: `gap-4` or `gap-6`

---

### D. Utility Classes (New)

Create reusable spacing utilities in `globals.css`:

```css
/* Section spacing */
.section-spacing {
  padding-top: 8rem; /* py-32 */
  padding-bottom: 8rem;
}

/* Container padding */
.container-padding {
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-padding {
    padding-left: 1.5rem; /* px-6 */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-padding {
    padding-left: 2rem; /* px-8 */
    padding-right: 2rem;
  }
}

/* Card spacing */
.card-padding {
  padding: 1.5rem; /* p-6 */
}

@media (min-width: 1024px) {
  .card-padding {
    padding: 2rem; /* p-8 */
  }
}
```

---

## 4. Technical Requirements

### Files to Audit & Edit

#### Section Components (`src/components/sections/`)

1. **Hero.tsx**
   - Current: `relative h-screen w-full overflow-hidden flex items-center justify-center pt-20`
   - Target: Verify `h-screen` is appropriate, ensure no conflicting padding
   - Container: Ensure uses `container` class with proper padding

2. **menu.tsx**
   - Current: `py-28 min-h-screen`
   - Target: Change to `py-32 min-h-screen`
   - Container: Verify `container` class usage

3. **testimonials.tsx**
   - Current: `py-24`
   - Target: Change to `py-32`
   - Container: Verify `container` class usage

4. **story.tsx**
   - Audit current spacing
   - Target: `py-32`
   - Container: Verify `container` class usage

5. **video-banner.tsx**
   - Audit current spacing
   - Target: `py-32`

6. **contact.tsx**
   - Audit current spacing
   - Target: `py-32`

7. **footer.tsx**
   - Audit current spacing
   - Target: `py-32` or appropriate footer spacing

#### UI Components (`src/components/ui/`)

1. **PeriodicCard.tsx** (Menu item cards)
   - Audit internal padding
   - Target: `p-6 lg:p-8`

2. **review-card.tsx**
   - Audit internal padding
   - Target: `p-6 lg:p-8`

3. **LabButton.tsx**
   - Audit padding
   - Target: `px-10 py-5` for primary

4. **button.tsx**
   - Audit padding variants
   - Target: Consistent sizing

#### Global Styles

1. **globals.css**
   - Add new utility classes (`.section-spacing`, `.container-padding`, `.card-padding`)
   - Verify `.container` class is properly defined

---

## 5. Spacing Audit Checklist

### Before Starting

- [ ] Take screenshots of all sections (desktop + mobile)
- [ ] Document current spacing values for each section
- [ ] Create comparison baseline

### Section-by-Section Audit

- [ ] **Hero**: Verify spacing, container padding
- [ ] **Menu**: Change `py-28` → `py-32`, verify container
- [ ] **Testimonials**: Change `py-24` → `py-32`, verify container
- [ ] **Story**: Audit and standardize to `py-32`
- [ ] **VideoBanner**: Audit and standardize to `py-32`
- [ ] **Contact**: Audit and standardize to `py-32`
- [ ] **Footer**: Audit and standardize (may use different value)

### Component-by-Component Audit

- [ ] **Menu Cards**: Standardize to `p-6 lg:p-8`
- [ ] **Review Cards**: Standardize to `p-6 lg:p-8`
- [ ] **Buttons**: Verify all use standard sizes
- [ ] **Header**: Verify padding consistency

### Testing

- [ ] **Desktop (1920px)**: Verify spacing looks balanced
- [ ] **Laptop (1440px)**: Verify spacing looks balanced
- [ ] **Tablet (768px)**: Verify spacing transitions smoothly
- [ ] **Mobile (375px)**: Verify spacing is comfortable, not cramped
- [ ] **Large Mobile (428px)**: Verify spacing is appropriate

---

## 6. Success Criteria

### Visual

- ✅ Scrolling through the site feels **smooth and rhythmic**
- ✅ No jarring jumps in spacing between sections
- ✅ Mobile spacing feels **comfortable**, not cramped
- ✅ Desktop spacing feels **generous and premium**
- ✅ All cards have **consistent internal padding**
- ✅ All buttons have **consistent sizing**

### Technical

- ✅ All major sections use `py-32`
- ✅ All containers use responsive padding (`px-4 sm:px-6 lg:px-8`)
- ✅ All cards use `p-6 lg:p-8`
- ✅ All buttons use standard sizes
- ✅ New utility classes added to `globals.css`
- ✅ No console warnings or errors

### Testing

- ✅ Tested on Chrome, Firefox, Safari
- ✅ Tested on real iOS device (iPhone)
- ✅ Tested on real Android device
- ✅ Tested on multiple screen sizes (375px to 1920px)
- ✅ Lighthouse Accessibility score unchanged or improved

---

## 7. Implementation Notes

### Approach

1. **Audit First**: Document all current spacing values
2. **Create Utilities**: Add new classes to `globals.css`
3. **Section by Section**: Fix one section at a time, test after each
4. **Components**: Fix cards and buttons after sections
5. **Final Test**: Full site review on all devices

### Risks & Mitigation

**Risk**: Changing spacing might break layouts  
**Mitigation**: Test each section after changes, keep screenshots for comparison

**Risk**: Mobile might feel too cramped or too loose  
**Mitigation**: Test on real devices, adjust if needed

**Risk**: Animations might be affected  
**Mitigation**: Verify all Framer Motion animations still work

---

## 8. Non-Functional Requirements

### Performance

- ✅ No impact on performance (CSS-only changes)
- ✅ No new JavaScript added

### Accessibility

- ✅ Maintain or improve touch target sizes (min 44x44px)
- ✅ Ensure sufficient spacing for screen reader navigation
- ✅ Verify focus states are still visible

### Constitution Compliance

- ✅ **Experience-First**: Improved visual rhythm enhances experience
- ✅ **Mobile Tunisia**: Optimized spacing for mobile devices
- ✅ **Premium Feel**: Consistent spacing creates professional aesthetic

---

## 9. Related Specs

- **001-hero**: Hero section spacing
- **002-menu**: Menu section spacing
- **003-testimonials**: Testimonials section spacing
- **004-story**: Story section spacing
- **005-footer**: Footer section spacing
- **006-header**: Header padding (separate from this spec)

---

## 10. Next Steps

After this spec is approved:

1. Run `/speckit-plan` to create implementation plan
2. Run `/speckit-tasks` to generate task checklist
3. Run `/speckit-implement` to execute the work
4. Run `/speckit-verify` to validate completion

---

**Created**: 2026-01-29  
**Priority**: 🔴 CRITICAL  
**Estimated Time**: 4-6 hours  
**Dependencies**: None (can start immediately)
