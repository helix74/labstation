# Implementation Plan: Mobile Menu UX Fix

**Spec**: [spec.md](./spec.md)  
**Created**: 2026-01-29  
**Status**: Ready for Implementation

---

## Executive Summary

This plan fixes the **critical mobile UX issue** where users must scroll to see product details after tapping a menu item. The solution involves:

1. **Scroll lock** - Prevent background scrolling when drawer is open
2. **Height optimization** - Ensure drawer content is always visible
3. **Swipe gesture** - Add native swipe-down-to-close behavior
4. **Animation polish** - Improve spring animation parameters

**Estimated Time**: 2-3 hours  
**Risk Level**: LOW (isolated component changes, no breaking changes)

---

## Current State Analysis

### File: `src/components/menu/product-drawer.tsx`

**Current Implementation**:

- Uses Framer Motion's `AnimatePresence` for enter/exit animations
- Drawer positioned with `fixed bottom-0` and `max-h-[85vh]`
- Spring animation: `damping: 30, stiffness: 300`
- Backdrop click closes drawer ✅
- Close button (X) works ✅

**Problems**:

1. ❌ No scroll lock - background scrolls when drawer is open
2. ❌ Drawer content can be below fold (requires scrolling)
3. ❌ No swipe-to-close gesture
4. ❌ Animation could be snappier

---

## Proposed Changes

### Change 1: Add Scroll Lock Effect

**Location**: After line 14 (inside component, before return)

**Add**:

```tsx
import { useEffect } from "react";

// ... existing code ...

export function ProductDrawer({ item, isOpen, onClose }: ProductDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!item) return null;
  // ... rest of component
```

**Rationale**: Prevents background scrolling and creates a modal-like experience.

---

### Change 2: Optimize Drawer Height

**Location**: Line 36 (drawer container className)

**Before**:

```tsx
className =
  "fixed bottom-0 left-0 right-0 z-50 bg-lab-dark rounded-t-3xl border-t border-lab-yellow/20 max-h-[85vh] overflow-y-auto lg:hidden";
```

**After**:

```tsx
className =
  "fixed bottom-0 left-0 right-0 z-50 bg-lab-dark rounded-t-3xl border-t border-lab-yellow/20 h-[80vh] overflow-y-auto lg:hidden";
```

**Changes**:

- `max-h-[85vh]` → `h-[80vh]` (fixed height ensures content is always visible)
- Reduced from 85vh to 80vh for better visibility

**Rationale**: Fixed height ensures drawer content is always in viewport.

---

### Change 3: Add Swipe-to-Close Gesture

**Location**: Line 31-37 (drawer motion.div)

**Before**:

```tsx
<motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{ type: "spring", damping: 30, stiffness: 300 }}
  className="fixed bottom-0 left-0 right-0 z-50 bg-lab-dark rounded-t-3xl border-t border-lab-yellow/20 max-h-[85vh] overflow-y-auto lg:hidden"
>
```

**After**:

```tsx
<motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{ type: "spring", damping: 25, stiffness: 400, mass: 0.8 }}
  drag="y"
  dragConstraints={{ top: 0, bottom: 0 }}
  dragElastic={0.2}
  onDragEnd={(e, info) => {
    if (info.offset.y > 100) {
      onClose();
    }
  }}
  className="fixed bottom-0 left-0 right-0 z-50 bg-lab-dark rounded-t-3xl border-t border-lab-yellow/20 h-[80vh] overflow-y-auto lg:hidden"
>
```

**Changes**:

- Added `drag="y"` - Enable vertical dragging
- Added `dragConstraints={{ top: 0, bottom: 0 }}` - Limit drag range
- Added `dragElastic={0.2}` - Slight elastic feel
- Added `onDragEnd` handler - Close if dragged down >100px
- Updated `transition` - Snappier animation (damping: 25, stiffness: 400, mass: 0.8)

**Rationale**: Native-feeling swipe gesture improves mobile UX.

---

### Change 4: Add Import for useEffect

**Location**: Line 1 (imports)

**Before**:

```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
```

**After**:

```tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
```

**Rationale**: Need useEffect for scroll lock.

---

## Files Summary

### Files to Modify (1 file)

1. ✅ **`src/components/menu/product-drawer.tsx`** - All changes in this file

### Files NOT Modified

- ✅ **`src/components/sections/menu.tsx`** - No changes needed (drawer trigger logic works)
- ✅ **`src/components/menu/experiment-list.tsx`** - No changes needed
- ✅ **`src/components/menu/experiment-visualizer.tsx`** - Desktop only, not affected

---

## Detailed Change Summary

| Line  | Change                               | Type     |
| ----- | ------------------------------------ | -------- |
| 1-3   | Add `useEffect` import               | Import   |
| 15-28 | Add scroll lock effect               | New code |
| 31-37 | Add swipe gesture + update animation | Modify   |
| 36    | Change `max-h-[85vh]` to `h-[80vh]`  | Modify   |

---

## Verification Plan

### Automated Tests

```bash
# 1. Build check
npm run build

# 2. Lint check
npm run lint
```

**Expected**: No errors, no warnings

---

### Manual Testing Checklist

#### Mobile Testing (Critical)

**iPhone (Safari)**:

- [ ] Open http://localhost:3000 on iPhone
- [ ] Navigate to Menu section
- [ ] Tap any product
- [ ] Verify drawer content is immediately visible (no scrolling)
- [ ] Verify background is locked (cannot scroll)
- [ ] Swipe down on drawer - verify it closes
- [ ] Tap backdrop - verify drawer closes
- [ ] Tap X button - verify drawer closes

**Android (Chrome)**:

- [ ] Open http://localhost:3000 on Android
- [ ] Navigate to Menu section
- [ ] Tap any product
- [ ] Verify drawer content is immediately visible
- [ ] Verify background is locked
- [ ] Swipe down on drawer - verify it closes
- [ ] Tap backdrop - verify drawer closes

#### Desktop Testing (Regression Check)

- [ ] Open http://localhost:3000 on desktop
- [ ] Navigate to Menu section
- [ ] Verify desktop visualizer still works (drawer should not appear on desktop)
- [ ] Verify no layout shifts

#### Edge Cases

- [ ] **Long product** (many ingredients) - verify scrolling works within drawer
- [ ] **Landscape mode** - verify drawer height adapts
- [ ] **Small screen (375px)** - verify content fits
- [ ] **Large screen (428px)** - verify content fits

---

## Success Criteria

### Visual Success

- ✅ Drawer content is **immediately visible** when opened
- ✅ Drawer slides up smoothly with spring animation
- ✅ Background is **locked** (cannot scroll) when drawer is open
- ✅ Swipe down gesture feels **native** and responsive
- ✅ Backdrop tap closes drawer instantly
- ✅ No layout shifts during open/close

### Technical Success

- ✅ Drawer height is `h-[80vh]` (fixed)
- ✅ Body scroll is locked when `isOpen === true`
- ✅ Swipe gesture closes drawer when dragged >100px down
- ✅ Animation uses `damping: 25, stiffness: 400, mass: 0.8`
- ✅ `npm run build` succeeds
- ✅ No console errors or warnings

### Testing Success

- ✅ Tested on iPhone (Safari) - drawer visible immediately
- ✅ Tested on Android (Chrome) - drawer visible immediately
- ✅ Tested on small screens (375px) - content fits
- ✅ Tested on large screens (428px) - content fits
- ✅ Swipe gesture works smoothly
- ✅ Backdrop tap closes drawer
- ✅ X button closes drawer
- ✅ Desktop visualizer unaffected

---

## Risk Mitigation

### Risk 1: Swipe Gesture Conflicts with Scroll

**Probability**: Medium  
**Impact**: Medium  
**Mitigation**:

- Framer Motion handles this automatically with `dragConstraints`
- Test thoroughly on real devices
- If issues arise, can disable drag when scrolling

### Risk 2: iOS Safari Fixed Positioning Quirks

**Probability**: Low  
**Impact**: Medium  
**Mitigation**:

- Test on real iPhone
- Fixed positioning is already used and working
- Height change from `max-h` to `h` should not affect this

### Risk 3: Scroll Lock Breaks Page Navigation

**Probability**: Very Low  
**Impact**: High  
**Mitigation**:

- useEffect cleanup restores scroll
- Test closing drawer via all methods (swipe, backdrop, X button)

---

## Rollback Plan

If issues arise:

1. **Git Revert**: All changes are in version control

   ```bash
   git revert <commit-hash>
   ```

2. **Manual Revert**: Restore original values:
   - Remove `useEffect` scroll lock
   - Remove swipe gesture props (`drag`, `dragConstraints`, etc.)
   - Restore `max-h-[85vh]` and original animation params
   - Remove `useEffect` import

---

## Next Steps

After plan approval:

1. **Run `/speckit-tasks`** to generate detailed task checklist
2. **Run `/speckit-implement`** to execute changes
3. **Test on real devices** (iPhone + Android)
4. **Run `/speckit-verify`** to validate completion

---

**Estimated Implementation Time**: 2-3 hours  
**Complexity**: Low (isolated component changes)  
**Dependencies**: None  
**Blocking**: None
