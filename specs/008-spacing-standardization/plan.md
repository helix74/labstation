# Implementation Plan: Spacing & Padding Standardization

**Spec**: [spec.md](./spec.md)  
**Created**: 2026-01-29  
**Status**: Ready for Implementation

---

## Executive Summary

This plan addresses **critical spacing inconsistencies** across the Lab Station website. Based on the audit, we found:

- **3 sections** using incorrect vertical spacing (`py-24`, `py-28` instead of `py-32`)
- **Inconsistent card padding** across components
- **Missing responsive container padding** in some sections
- **Button sizing** needs standardization

**Estimated Time**: 4-6 hours  
**Risk Level**: LOW (CSS-only changes, no logic modifications)

---

## Audit Findings

### Section Spacing (Current State)

| Section      | Current            | Target     | Status                   |
| ------------ | ------------------ | ---------- | ------------------------ |
| Hero         | `h-screen` (no py) | Keep as-is | ✅ OK                    |
| Menu         | `py-28`            | `py-32`    | ❌ Fix                   |
| Testimonials | `py-24`            | `py-32`    | ❌ Fix                   |
| Story        | `py-28`            | `py-32`    | ❌ Fix                   |
| VideoBanner  | `py-24 md:py-32`   | `py-32`    | ⚠️ Partial               |
| Contact      | `py-24 md:py-32`   | `py-32`    | ⚠️ Partial               |
| Footer       | `py-20`            | `py-20`    | ✅ OK (footer exception) |

### Component Padding (Current State)

| Component     | Current     | Target                 | Status              |
| ------------- | ----------- | ---------------------- | ------------------- |
| PeriodicCard  | `p-6`       | `p-6 lg:p-8`           | ⚠️ Needs responsive |
| ReviewCard    | `p-6`       | `p-6 lg:p-8`           | ⚠️ Needs responsive |
| LabButton     | `px-8 py-4` | `px-10 py-5` (primary) | ⚠️ Adjust           |
| Contact Cards | `p-6`       | `p-6 lg:p-8`           | ⚠️ Needs responsive |

---

## Proposed Changes

### Phase 1: Add Utility Classes to `globals.css`

#### File: `src/app/globals.css`

**Location**: Add after line 363 (end of file)

```css
/* ═══════════════════════════════════════════════════════════════════════════
   SPACING STANDARDIZATION UTILITIES
═══════════════════════════════════════════════════════════════════════════ */

/* Section vertical spacing - Standard: py-32 (8rem) */
.section-spacing {
  padding-top: 8rem; /* 128px */
  padding-bottom: 8rem;
}

/* Responsive container padding */
.container-padding {
  padding-left: 1rem; /* 16px - Mobile */
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-padding {
    padding-left: 1.5rem; /* 24px - Tablet */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-padding {
    padding-left: 2rem; /* 32px - Desktop */
    padding-right: 2rem;
  }
}

/* Card padding - Responsive */
.card-padding {
  padding: 1.5rem; /* 24px - Mobile */
}

@media (min-width: 1024px) {
  .card-padding {
    padding: 2rem; /* 32px - Desktop */
  }
}
```

**Rationale**: These utilities provide reusable spacing classes that can be applied across components.

---

### Phase 2: Fix Section Components

---

#### 2.1 Menu Section

**File**: `src/components/sections/menu.tsx`

**Change 1**: Update section spacing

**Line 32**:

```tsx
// BEFORE
<section id="menu" className="py-28 min-h-screen bg-lab-black relative overflow-hidden">

// AFTER
<section id="menu" className="py-32 min-h-screen bg-lab-black relative overflow-hidden">
```

**Rationale**: Standardize to `py-32` for consistent vertical rhythm.

---

#### 2.2 Testimonials Section

**File**: `src/components/sections/testimonials.tsx`

**Change 1**: Update section spacing

**Line 47**:

```tsx
// BEFORE
<section className="py-24 bg-lab-black overflow-hidden relative">

// AFTER
<section className="py-32 bg-lab-black overflow-hidden relative">
```

**Rationale**: Increase from `py-24` to `py-32` for consistency.

---

#### 2.3 Story Section

**File**: `src/components/sections/story.tsx`

**Change 1**: Update section spacing

**Line 9**:

```tsx
// BEFORE
<section className="py-28 bg-lab-black relative overflow-hidden">

// AFTER
<section className="py-32 bg-lab-black relative overflow-hidden">
```

**Rationale**: Standardize to `py-32`.

---

#### 2.4 VideoBanner Section

**File**: `src/components/sections/video-banner.tsx`

**Change 1**: Simplify responsive spacing

**Line 14**:

```tsx
// BEFORE
className = "relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden";

// AFTER
className = "relative py-32 bg-[#0a0a0a] overflow-hidden";
```

**Rationale**: Use `py-32` consistently across all breakpoints.

---

#### 2.5 Contact Section

**File**: `src/components/sections/contact.tsx`

**Change 1**: Simplify responsive spacing

**Line 53**:

```tsx
// BEFORE
<section id="contact" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">

// AFTER
<section id="contact" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
```

**Change 2**: Add responsive padding to contact cards

**Line 97** (inside contact card):

```tsx
// BEFORE
className =
  "block bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 hover:border-[#ffd700]/40 transition-all duration-300 group h-full";

// AFTER
className =
  "block bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 lg:p-8 hover:border-[#ffd700]/40 transition-all duration-300 group h-full";
```

**Line 102** (non-link card):

```tsx
// BEFORE
<div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 h-full">

// AFTER
<div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 lg:p-8 h-full">
```

**Rationale**: Consistent spacing and responsive card padding.

---

### Phase 3: Fix UI Components

---

#### 3.1 PeriodicCard

**File**: `src/components/ui/PeriodicCard.tsx`

**Change 1**: Add responsive padding

**Line 36**:

```tsx
// BEFORE
<div className="relative h-full w-full bg-lab-black/80 backdrop-blur-xl rounded-[22px] border border-white/10 p-6 flex flex-col overflow-hidden">

// AFTER
<div className="relative h-full w-full bg-lab-black/80 backdrop-blur-xl rounded-[22px] border border-white/10 p-6 lg:p-8 flex flex-col overflow-hidden">
```

**Rationale**: Larger padding on desktop for premium feel.

---

#### 3.2 ReviewCard

**File**: `src/components/ui/review-card.tsx`

**Change 1**: Add responsive padding

**Line 19**:

```tsx
// BEFORE
"relative flex flex-col gap-4 p-6 w-[350px] h-[200px] rounded-xl bg-lab-dark/40 border border-lab-grey/30 backdrop-blur-sm transition-all duration-300 hover:bg-lab-dark/60 hover:border-lab-yellow/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.05)]",

// AFTER
"relative flex flex-col gap-4 p-6 lg:p-8 w-[350px] h-[200px] rounded-xl bg-lab-dark/40 border border-lab-grey/30 backdrop-blur-sm transition-all duration-300 hover:bg-lab-dark/60 hover:border-lab-yellow/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.05)]",
```

**Rationale**: Consistent card padding across all card components.

---

#### 3.3 LabButton (Primary CTA)

**File**: `src/components/ui/LabButton.tsx`

**Change 1**: Increase primary button padding

**Line 18**:

```tsx
// BEFORE
"relative overflow-hidden px-8 py-4 font-bold uppercase tracking-wider transition-all",

// AFTER
"relative overflow-hidden px-10 py-5 font-bold uppercase tracking-wider transition-all",
```

**Rationale**: Larger touch targets and more prominent CTAs.

---

## Files Summary

### Files to Modify (8 files)

1. ✅ **`src/app/globals.css`** - Add utility classes
2. ✅ **`src/components/sections/menu.tsx`** - Change `py-28` → `py-32`
3. ✅ **`src/components/sections/testimonials.tsx`** - Change `py-24` → `py-32`
4. ✅ **`src/components/sections/story.tsx`** - Change `py-28` → `py-32`
5. ✅ **`src/components/sections/video-banner.tsx`** - Simplify to `py-32`
6. ✅ **`src/components/sections/contact.tsx`** - Simplify to `py-32`, add card padding
7. ✅ **`src/components/ui/PeriodicCard.tsx`** - Add responsive padding
8. ✅ **`src/components/ui/review-card.tsx`** - Add responsive padding
9. ✅ **`src/components/ui/LabButton.tsx`** - Increase button padding

### Files NOT Modified

- ✅ **`src/components/sections/Hero.tsx`** - Uses `h-screen`, no py needed
- ✅ **`src/components/sections/footer.tsx`** - Uses `py-20`, footer exception
- ✅ **`src/components/layout/Header.tsx`** - Separate spec (006-header)

---

## Verification Plan

### Automated Tests

```bash
# 1. Build check (ensure no TypeScript errors)
npm run build

# 2. Lint check
npm run lint
```

**Expected**: No errors, no warnings

---

### Manual Testing Checklist

#### Visual Testing (Desktop - 1920px)

- [ ] Open `http://localhost:3000`
- [ ] Scroll through all sections
- [ ] Verify spacing between sections feels consistent
- [ ] Check that no section feels cramped or too loose
- [ ] Verify cards have comfortable padding
- [ ] Verify buttons feel prominent

#### Visual Testing (Tablet - 768px)

- [ ] Resize browser to 768px width
- [ ] Scroll through all sections
- [ ] Verify spacing transitions smoothly
- [ ] Check card padding is appropriate
- [ ] Verify buttons are easily tappable

#### Visual Testing (Mobile - 375px)

- [ ] Resize browser to 375px width
- [ ] Scroll through all sections
- [ ] Verify spacing doesn't feel cramped
- [ ] Check cards have enough breathing room
- [ ] Verify buttons have min 44x44px touch targets

#### Real Device Testing

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Verify smooth scrolling
- [ ] Verify no layout shifts

---

### Comparison Testing

**Before/After Screenshots**:

1. Take screenshots of each section BEFORE changes
2. Make changes
3. Take screenshots of each section AFTER changes
4. Compare side-by-side

**Focus Areas**:

- Vertical spacing between sections
- Card internal padding
- Button sizes
- Overall visual rhythm

---

### Performance Testing

```bash
# Run Lighthouse audit
npm run build
npm run start
# Open Chrome DevTools > Lighthouse > Run audit
```

**Expected Metrics**:

- Performance: No change (CSS-only)
- Accessibility: Maintain or improve (larger touch targets)
- Best Practices: No change
- SEO: No change

---

## Risk Mitigation

### Risk 1: Layout Breaks

**Probability**: Low  
**Impact**: Medium  
**Mitigation**:

- Test each section after changes
- Keep screenshots for comparison
- Changes are CSS-only, no logic modifications

### Risk 2: Mobile Feels Too Cramped

**Probability**: Low  
**Impact**: Low  
**Mitigation**:

- `py-32` is generous spacing
- Test on real devices
- Can adjust if needed (e.g., `py-24` on mobile, `py-32` on desktop)

### Risk 3: Animations Affected

**Probability**: Very Low  
**Impact**: Low  
**Mitigation**:

- Spacing changes don't affect Framer Motion animations
- Verify scroll-triggered animations still work

---

## Rollback Plan

If issues arise:

1. **Git Revert**: All changes are in version control

   ```bash
   git revert <commit-hash>
   ```

2. **Manual Revert**: Restore original values:
   - Menu: `py-28`
   - Testimonials: `py-24`
   - Story: `py-28`
   - VideoBanner: `py-24 md:py-32`
   - Contact: `py-24 md:py-32`
   - Cards: `p-6` (no responsive)
   - Buttons: `px-8 py-4`

---

## Success Criteria

### Visual

- ✅ Scrolling feels smooth and rhythmic
- ✅ No jarring spacing jumps between sections
- ✅ Mobile spacing feels comfortable
- ✅ Desktop spacing feels premium
- ✅ Cards have consistent padding
- ✅ Buttons feel prominent and tappable

### Technical

- ✅ All sections use `py-32`
- ✅ All cards use `p-6 lg:p-8`
- ✅ Primary buttons use `px-10 py-5`
- ✅ New utility classes added to `globals.css`
- ✅ `npm run build` succeeds
- ✅ No console errors

### Testing

- ✅ Tested on Chrome, Firefox, Safari
- ✅ Tested on real iOS device
- ✅ Tested on real Android device
- ✅ Tested on 375px, 768px, 1440px, 1920px
- ✅ Lighthouse Accessibility score maintained or improved

---

## Next Steps

After plan approval:

1. **Run `/speckit-tasks`** to generate detailed task checklist
2. **Run `/speckit-implement`** to execute changes
3. **Run `/speckit-verify`** to validate completion

---

**Estimated Implementation Time**: 4-6 hours  
**Complexity**: Low (CSS-only changes)  
**Dependencies**: None  
**Blocking**: None
