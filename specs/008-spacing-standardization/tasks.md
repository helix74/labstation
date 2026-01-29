# Tasks: Spacing & Padding Standardization

**Spec**: [spec.md](./spec.md)  
**Plan**: [plan.md](./plan.md)  
**Created**: 2026-01-29

---

## Phase 1: Preparation

- [ ] Take screenshots of all sections (desktop 1920px) for before/after comparison <!-- id: 1 -->
- [ ] Take screenshots of all sections (mobile 375px) for before/after comparison <!-- id: 2 -->
- [ ] Create a new Git branch for spacing changes <!-- id: 3 -->

---

## Phase 2: Add Utility Classes

### File: `src/app/globals.css`

- [x] Open `src/app/globals.css` <!-- id: 4 -->
- [x] Scroll to end of file (after line 363) <!-- id: 5 -->
- [x] Add spacing standardization utilities comment block <!-- id: 6 -->
- [x] Add `.section-spacing` utility class (py-32 equivalent) <!-- id: 7 -->
- [x] Add `.container-padding` utility class with responsive breakpoints <!-- id: 8 -->
- [x] Add `.card-padding` utility class with responsive breakpoints <!-- id: 9 -->
- [x] Save file <!-- id: 10 -->
- [x] Verify dev server reloads without errors <!-- id: 11 -->

---

## Phase 3: Fix Section Components

### 3.1 Menu Section

**File**: `src/components/sections/menu.tsx`

- [x] Open `src/components/sections/menu.tsx` <!-- id: 12 -->
- [x] Navigate to line 32 (section element) <!-- id: 13 -->
- [x] Change `py-28` to `py-32` in className <!-- id: 14 -->
- [x] Save file <!-- id: 15 -->
- [x] Verify in browser: Menu section spacing looks correct <!-- id: 16 -->

### 3.2 Testimonials Section

**File**: `src/components/sections/testimonials.tsx`

- [x] Open `src/components/sections/testimonials.tsx` <!-- id: 17 -->
- [x] Navigate to line 47 (section element) <!-- id: 18 -->
- [x] Change `py-24` to `py-32` in className <!-- id: 19 -->
- [x] Save file <!-- id: 20 -->
- [x] Verify in browser: Testimonials section spacing looks correct <!-- id: 21 -->

### 3.3 Story Section

**File**: `src/components/sections/story.tsx`

- [x] Open `src/components/sections/story.tsx` <!-- id: 22 -->
- [x] Navigate to line 9 (section element) <!-- id: 23 -->
- [x] Change `py-28` to `py-32` in className <!-- id: 24 -->
- [x] Save file <!-- id: 25 -->
- [x] Verify in browser: Story section spacing looks correct <!-- id: 26 -->

### 3.4 VideoBanner Section

**File**: `src/components/sections/video-banner.tsx`

- [x] Open `src/components/sections/video-banner.tsx` <!-- id: 27 -->
- [x] Navigate to line 14 (section element) <!-- id: 28 -->
- [x] Remove `md:` prefix from `py-24 md:py-32`, keep only `py-32` <!-- id: 29 -->
- [x] Save file <!-- id: 30 -->
- [x] Verify in browser: VideoBanner spacing is consistent on all screen sizes <!-- id: 31 -->

### 3.5 Contact Section

**File**: `src/components/sections/contact.tsx`

- [x] Open `src/components/sections/contact.tsx` <!-- id: 32 -->
- [x] Navigate to line 53 (section element) <!-- id: 33 -->
- [x] Remove `md:` prefix from `py-24 md:py-32`, keep only `py-32` <!-- id: 34 -->
- [x] Navigate to line 97 (contact card link) <!-- id: 35 -->
- [x] Add `lg:p-8` after `p-6` in className <!-- id: 36 -->
- [x] Navigate to line 102 (contact card div) <!-- id: 37 -->
- [x] Add `lg:p-8` after `p-6` in className <!-- id: 38 -->
- [x] Save file <!-- id: 39 -->
- [x] Verify in browser: Contact section spacing and card padding look correct <!-- id: 40 -->

---

## Phase 4: Fix UI Components

### 4.1 PeriodicCard

**File**: `src/components/ui/PeriodicCard.tsx`

- [x] Open `src/components/ui/PeriodicCard.tsx` <!-- id: 41 -->
- [x] Navigate to line 36 (card body div) <!-- id: 42 -->
- [x] Add `lg:p-8` after `p-6` in className <!-- id: 43 -->
- [x] Save file <!-- id: 44 -->
- [x] Verify in browser: Menu cards have larger padding on desktop <!-- id: 45 -->

### 4.2 ReviewCard

**File**: `src/components/ui/review-card.tsx`

- [x] Open `src/components/ui/review-card.tsx` <!-- id: 46 -->
- [x] Navigate to line 19 (cn function call with className string) <!-- id: 47 -->
- [x] Add `lg:p-8` after `p-6` in the className string <!-- id: 48 -->
- [x] Save file <!-- id: 49 -->
- [x] Verify in browser: Review cards have larger padding on desktop <!-- id: 50 -->

### 4.3 LabButton

**File**: `src/components/ui/LabButton.tsx`

- [x] Open `src/components/ui/LabButton.tsx` <!-- id: 51 -->
- [x] Navigate to line 18 (cn function call with className string) <!-- id: 52 -->
- [x] Change `px-8 py-4` to `px-10 py-5` in the className string <!-- id: 53 -->
- [x] Save file <!-- id: 54 -->
- [x] Verify in browser: All LabButtons are larger and more prominent <!-- id: 55 -->

---

## Phase 5: Testing & Verification

### Build & Lint Checks

- [x] Run `npm run build` to check for TypeScript errors <!-- id: 56 -->
- [x] Verify build succeeds with no errors <!-- id: 57 -->
- [x] Run `npm run lint` to check for linting issues <!-- id: 58 -->
- [x] Verify lint passes with no errors <!-- id: 59 -->

### Visual Testing - Desktop (1920px)

- [x] Open browser at 1920px width <!-- id: 60 -->
- [x] Navigate to `http://localhost:3000` <!-- id: 61 -->
- [x] Scroll through all sections slowly <!-- id: 62 -->
- [x] Verify spacing between sections feels consistent and rhythmic <!-- id: 63 -->
- [x] Verify no section feels cramped or too loose <!-- id: 64 -->
- [x] Verify all cards have comfortable padding <!-- id: 65 -->
- [x] Verify all buttons feel prominent and easy to click <!-- id: 66 -->

### Visual Testing - Tablet (768px)

- [ ] Resize browser to 768px width <!-- id: 67 -->
- [ ] Scroll through all sections <!-- id: 68 -->
- [ ] Verify spacing transitions smoothly from desktop <!-- id: 69 -->
- [ ] Verify card padding is appropriate for tablet <!-- id: 70 -->
- [ ] Verify buttons are easily tappable <!-- id: 71 -->

### Visual Testing - Mobile (375px)

- [ ] Resize browser to 375px width <!-- id: 72 -->
- [ ] Scroll through all sections <!-- id: 73 -->
- [ ] Verify spacing doesn't feel cramped <!-- id: 74 -->
- [ ] Verify cards have enough breathing room <!-- id: 75 -->
- [ ] Verify buttons have minimum 44x44px touch targets <!-- id: 76 -->
- [ ] Verify no horizontal scrolling occurs <!-- id: 77 -->

### Real Device Testing

- [ ] Test on iPhone (Safari) - verify smooth scrolling and spacing <!-- id: 78 -->
- [ ] Test on Android (Chrome) - verify smooth scrolling and spacing <!-- id: 79 -->
- [ ] Verify no layout shifts on real devices <!-- id: 80 -->

### Screenshot Comparison

- [ ] Take screenshots of all sections (desktop 1920px) AFTER changes <!-- id: 81 -->
- [ ] Take screenshots of all sections (mobile 375px) AFTER changes <!-- id: 82 -->
- [ ] Compare before/after screenshots side-by-side <!-- id: 83 -->
- [ ] Verify improvements in vertical rhythm and consistency <!-- id: 84 -->

### Animation Verification

- [ ] Verify Hero floating animation still works <!-- id: 85 -->
- [ ] Verify Menu category switch animation still works <!-- id: 86 -->
- [ ] Verify Testimonials marquee animation still works <!-- id: 87 -->
- [ ] Verify Story scroll-triggered animation still works <!-- id: 88 -->
- [ ] Verify all Framer Motion animations are unaffected <!-- id: 89 -->

### Console Check

- [ ] Open browser console (F12) <!-- id: 90 -->
- [ ] Verify no errors in console <!-- id: 91 -->
- [ ] Verify no warnings in console <!-- id: 92 -->

---

## Phase 6: Final Checks

- [ ] Review all changed files one more time <!-- id: 93 -->
- [ ] Verify all changes match the implementation plan <!-- id: 94 -->
- [ ] Commit changes with descriptive message <!-- id: 95 -->
- [ ] Push branch to remote repository <!-- id: 96 -->

---

## Success Criteria Checklist

### Visual Success

- [ ] Scrolling through site feels smooth and rhythmic <!-- id: 97 -->
- [ ] No jarring spacing jumps between sections <!-- id: 98 -->
- [ ] Mobile spacing feels comfortable, not cramped <!-- id: 99 -->
- [ ] Desktop spacing feels premium and generous <!-- id: 100 -->
- [ ] All cards have consistent internal padding <!-- id: 101 -->
- [ ] All buttons feel prominent and tappable <!-- id: 102 -->

### Technical Success

- [x] All major sections use `py-32` <!-- id: 103 -->
- [x] All cards use `p-6 lg:p-8` <!-- id: 104 -->
- [x] Primary buttons use `px-10 py-5` <!-- id: 105 -->
- [x] New utility classes added to `globals.css` <!-- id: 106 -->
- [x] `npm run build` succeeds <!-- id: 107 -->
- [x] No console errors or warnings <!-- id: 108 -->

### Testing Success

- [ ] Tested on Chrome, Firefox, Safari <!-- id: 109 -->
- [ ] Tested on real iOS device (iPhone) <!-- id: 110 -->
- [ ] Tested on real Android device <!-- id: 111 -->
- [ ] Tested on 375px, 768px, 1440px, 1920px viewports <!-- id: 112 -->
- [ ] Lighthouse Accessibility score maintained or improved <!-- id: 113 -->

---

**Total Tasks**: 113  
**Estimated Time**: 4-6 hours  
**Complexity**: Low (CSS-only changes)
