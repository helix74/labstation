# Specification: Mobile Menu UX Fix 📱

> **Feature**: Mobile Product Drawer Enhancement  
> **Goal**: Fix drawer positioning so users don't need to scroll to see product details  
> **Status**: 🔴 CRITICAL - MVP Blocker  
> **Phase**: 1.3 (Critical MVP Blockers)

---

## 1. The Problem

**User-Reported Issue**: _"On mobile, selecting a product requires scrolling down to see the product card. This is bad UX."_

### Current Behavior (❌ Bad UX)

1. User taps a product from the list
2. `ProductDrawer` opens at the bottom of the viewport
3. **Drawer content is below the fold** - user must scroll down to see it
4. Feels broken and frustrating

### Root Cause

The drawer uses:

```tsx
className =
  "fixed bottom-0 left-0 right-0 z-50 ... max-h-[85vh] overflow-y-auto";
```

While `bottom-0` positions it at the bottom, the drawer **doesn't automatically scroll into view** when it opens, leaving the content hidden below the current scroll position.

---

## 2. User Stories

- **As a mobile user**, I want to see product details immediately after tapping without scrolling
- **As a mobile user**, I want the drawer to feel native and smooth (like iOS/Android bottom sheets)
- **As a mobile user**, I want to easily dismiss the drawer by swiping down or tapping outside
- **As a mobile user**, I want the background to be locked (no scrolling) when drawer is open

---

## 3. The Solution: Native-Feeling Bottom Sheet

### Target Behavior (✅ Good UX)

1. User taps a product
2. **Backdrop fades in** (dark overlay)
3. **Drawer slides up from bottom** with spring animation
4. **Drawer content is immediately visible** (no scrolling needed)
5. **Background scroll is locked** (body overflow hidden)
6. User can:
   - Swipe down on drawer to close
   - Tap backdrop to close
   - Tap X button to close

---

## 4. Technical Requirements

### A. Scroll Lock When Drawer Opens

**Problem**: Currently, users can scroll the background while drawer is open

**Solution**: Lock body scroll when drawer is active

```tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
```

---

### B. Improved Drawer Positioning

**Current**: `max-h-[85vh]` with `overflow-y-auto`

**Issues**:

- Drawer can be taller than viewport
- Content hidden below fold
- Scrolling within drawer feels janky

**Solution**: Optimize drawer height

```tsx
// Option 1: Fixed height that fits viewport
className = "fixed bottom-0 left-0 right-0 z-50 h-[80vh] overflow-y-auto";

// Option 2: Dynamic height based on content (preferred)
className = "fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto";
```

**Key**: Ensure drawer **never** exceeds 80vh so content is always visible

---

### C. Swipe-to-Close Gesture

**Enhancement**: Add swipe-down gesture to close drawer (native feel)

**Implementation**: Use Framer Motion's `drag` feature

```tsx
<motion.div
  drag="y"
  dragConstraints={{ top: 0, bottom: 0 }}
  dragElastic={0.2}
  onDragEnd={(e, info) => {
    if (info.offset.y > 100) {
      onClose();
    }
  }}
  // ... existing props
>
```

---

### D. Backdrop Click Behavior

**Current**: ✅ Already implemented (backdrop onClick={onClose})

**Keep**: This works well

---

### E. Animation Improvements

**Current**: Spring animation with `damping: 30, stiffness: 300`

**Enhancement**: Make it feel more native

```tsx
transition={{
  type: "spring",
  damping: 25,      // Slightly less damping for snappier feel
  stiffness: 400,   // Higher stiffness for faster response
  mass: 0.8         // Lower mass for lighter feel
}}
```

---

## 5. Implementation Checklist

### File: `src/components/menu/product-drawer.tsx`

- [ ] Add scroll lock effect (useEffect to set body overflow)
- [ ] Optimize drawer height (ensure max-h-[80vh] or less)
- [ ] Add swipe-to-close gesture (Framer Motion drag)
- [ ] Improve animation timing (adjust spring parameters)
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)

---

## 6. Success Criteria

### Visual

- ✅ Drawer content is **immediately visible** when opened (no scrolling needed)
- ✅ Drawer slides up smoothly with spring animation
- ✅ Background is **locked** (cannot scroll) when drawer is open
- ✅ Swipe down gesture feels **native** and responsive
- ✅ Backdrop tap closes drawer instantly

### Technical

- ✅ Drawer height never exceeds 80vh
- ✅ Body scroll is locked when `isOpen === true`
- ✅ Swipe gesture closes drawer when dragged >100px down
- ✅ No layout shifts or jank during open/close
- ✅ Works on iOS Safari (notch/safe area respected)
- ✅ Works on Android Chrome

### Testing

- ✅ Tested on iPhone (Safari) - drawer visible immediately
- ✅ Tested on Android (Chrome) - drawer visible immediately
- ✅ Tested on small screens (375px) - content fits
- ✅ Tested on large screens (428px) - content fits
- ✅ Swipe gesture works smoothly
- ✅ Backdrop tap closes drawer
- ✅ X button closes drawer

---

## 7. Edge Cases

### A. Long Product Descriptions

**Scenario**: Some products have many ingredients (10+)

**Solution**: Drawer has `overflow-y-auto`, so content scrolls within drawer (not page)

### B. Landscape Orientation

**Scenario**: User rotates phone to landscape

**Solution**: `max-h-[80vh]` adapts to viewport height automatically

### C. iOS Safe Area

**Scenario**: iPhone notch/home indicator

**Solution**: Add safe area padding

```tsx
className="... pb-safe" // Tailwind safe-area plugin
// OR
style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
```

---

## 8. Non-Functional Requirements

### Performance

- ✅ 60fps animation (use `transform` and `opacity` only)
- ✅ No layout shifts during open/close
- ✅ Smooth scroll within drawer

### Accessibility

- ✅ Drawer is focusable and keyboard-navigable
- ✅ Escape key closes drawer
- ✅ Focus trap within drawer when open
- ✅ ARIA labels for screen readers

### Constitution Compliance

- ✅ **Experience-First**: Smooth, native-feeling interaction
- ✅ **Mobile Tunisia**: Optimized for mobile devices
- ✅ **Premium Feel**: Polished animations and gestures

---

## 9. Related Specs

- **002-menu**: Parent spec for menu section
- **008-spacing-standardization**: Spacing consistency (already complete)

---

## 10. Implementation Notes

### Approach

1. **Add scroll lock** first (easiest, biggest impact)
2. **Optimize drawer height** (ensure content visible)
3. **Add swipe gesture** (nice-to-have enhancement)
4. **Test on real devices** (critical validation)

### Risks & Mitigation

**Risk**: Swipe gesture might conflict with scroll  
**Mitigation**: Only enable drag when at top of drawer scroll

**Risk**: iOS Safari quirks with fixed positioning  
**Mitigation**: Test on real iPhone, add `-webkit-` prefixes if needed

**Risk**: Drawer might be too tall on small screens  
**Mitigation**: Use `max-h-[75vh]` instead of 80vh if needed

---

## 11. Next Steps

After this spec is approved:

1. Run `/speckit-plan` to create implementation plan
2. Run `/speckit-tasks` to generate task checklist
3. Run `/speckit-implement` to execute the work
4. Run `/speckit-verify` to validate on real devices

---

**Created**: 2026-01-29  
**Priority**: 🔴 CRITICAL  
**Estimated Time**: 2-3 hours  
**Dependencies**: None (can start immediately)
