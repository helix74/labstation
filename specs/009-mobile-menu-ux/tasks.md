# Tasks: Mobile Menu UX Fix

**Spec**: [spec.md](./spec.md)  
**Plan**: [plan.md](./plan.md)  
**Created**: 2026-01-29

---

## Phase 1: Code Changes

### File: `src/components/menu/product-drawer.tsx`

- [ ] Add `useEffect` import from React <!-- id: 1 -->
- [ ] Add scroll lock effect after line 14 <!-- id: 2 -->
- [ ] Update drawer className: `max-h-[85vh]` → `h-[80vh]` <!-- id: 3 -->
- [ ] Add `drag="y"` prop to drawer motion.div <!-- id: 4 -->
- [ ] Add `dragConstraints={{ top: 0, bottom: 0 }}` prop <!-- id: 5 -->
- [ ] Add `dragElastic={0.2}` prop <!-- id: 6 -->
- [ ] Add `onDragEnd` handler for swipe-to-close <!-- id: 7 -->
- [ ] Update animation: `damping: 25, stiffness: 400, mass: 0.8` <!-- id: 8 -->
- [ ] Save file <!-- id: 9 -->

---

## Phase 2: Build & Verification

### Build Checks

- [ ] Run `npm run build` <!-- id: 10 -->
- [ ] Verify build succeeds with no errors <!-- id: 11 -->
- [ ] Run `npm run lint` <!-- id: 12 -->
- [ ] Verify lint passes <!-- id: 13 -->

---

## Phase 3: Mobile Testing (Critical)

### iPhone (Safari)

- [ ] Open http://localhost:3000 on iPhone <!-- id: 14 -->
- [ ] Navigate to Menu section <!-- id: 15 -->
- [ ] Tap any product <!-- id: 16 -->
- [ ] Verify drawer content is immediately visible (no scrolling) <!-- id: 17 -->
- [ ] Verify background is locked (cannot scroll) <!-- id: 18 -->
- [ ] Swipe down on drawer - verify it closes <!-- id: 19 -->
- [ ] Tap backdrop - verify drawer closes <!-- id: 20 -->
- [ ] Tap X button - verify drawer closes <!-- id: 21 -->

### Android (Chrome)

- [ ] Open http://localhost:3000 on Android <!-- id: 22 -->
- [ ] Navigate to Menu section <!-- id: 23 -->
- [ ] Tap any product <!-- id: 24 -->
- [ ] Verify drawer content is immediately visible <!-- id: 25 -->
- [ ] Verify background is locked <!-- id: 26 -->
- [ ] Swipe down on drawer - verify it closes <!-- id: 27 -->
- [ ] Tap backdrop - verify drawer closes <!-- id: 28 -->

---

## Phase 4: Desktop Testing (Regression)

- [ ] Open http://localhost:3000 on desktop <!-- id: 29 -->
- [ ] Navigate to Menu section <!-- id: 30 -->
- [ ] Verify desktop visualizer still works (no drawer on desktop) <!-- id: 31 -->
- [ ] Verify no layout shifts <!-- id: 32 -->

---

## Phase 5: Edge Cases

- [ ] Test long product (many ingredients) - verify scrolling works within drawer <!-- id: 33 -->
- [ ] Test landscape mode - verify drawer height adapts <!-- id: 34 -->
- [ ] Test small screen (375px) - verify content fits <!-- id: 35 -->
- [ ] Test large screen (428px) - verify content fits <!-- id: 36 -->

---

## Success Criteria Checklist

### Visual Success

- [ ] Drawer content is immediately visible when opened <!-- id: 37 -->
- [ ] Drawer slides up smoothly with spring animation <!-- id: 38 -->
- [ ] Background is locked (cannot scroll) when drawer is open <!-- id: 39 -->
- [ ] Swipe down gesture feels native and responsive <!-- id: 40 -->
- [ ] Backdrop tap closes drawer instantly <!-- id: 41 -->
- [ ] No layout shifts during open/close <!-- id: 42 -->

### Technical Success

- [ ] Drawer height is `h-[80vh]` <!-- id: 43 -->
- [ ] Body scroll is locked when `isOpen === true` <!-- id: 44 -->
- [ ] Swipe gesture closes drawer when dragged >100px down <!-- id: 45 -->
- [ ] Animation uses `damping: 25, stiffness: 400, mass: 0.8` <!-- id: 46 -->
- [ ] `npm run build` succeeds <!-- id: 47 -->
- [ ] No console errors or warnings <!-- id: 48 -->

### Testing Success

- [ ] Tested on iPhone (Safari) - drawer visible immediately <!-- id: 49 -->
- [ ] Tested on Android (Chrome) - drawer visible immediately <!-- id: 50 -->
- [ ] Tested on small screens (375px) - content fits <!-- id: 51 -->
- [ ] Tested on large screens (428px) - content fits <!-- id: 52 -->
- [ ] Swipe gesture works smoothly <!-- id: 53 -->
- [ ] Backdrop tap closes drawer <!-- id: 54 -->
- [ ] X button closes drawer <!-- id: 55 -->
- [ ] Desktop visualizer unaffected <!-- id: 56 -->

---

**Total Tasks**: 56  
**Estimated Time**: 2-3 hours  
**Complexity**: Low (isolated component changes)
