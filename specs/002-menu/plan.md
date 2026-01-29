# Plan: Menu Section Redesign

> **Feature**: 002-menu  
> **Status**: Ready (Mobile UX Priority)

---

## Proposed Changes

### [MODIFY] menu.tsx

**PRIORITY: Mobile UX Fix**

- Create slide-up drawer for product details
- Product card appears on selection WITHOUT scrolling
- Smooth animation with Framer Motion

**Desktop Improvements**

- Keep split layout (list left, visualizer right)
- Enhance card hover states
- Add glow effects on active item

### [NEW] Product Images

- Generate AI images for each product
- Lab experiment aesthetic
- 14 burgers + 8 tacos = 22 images

---

## Implementation Order

1. Mobile: Create slide-up drawer component
2. Mobile: Product details in drawer on selection
3. Desktop: Enhance card hover/active states
4. Desktop: Add character involvement
5. Generate AI product images
6. Integrate images

---

## Verification

- [ ] Mobile: No scrolling needed after product selection
- [ ] Desktop: Smooth transitions between items
- [ ] Character visible in visualizer
- [ ] Product images load correctly
- [ ] Build passes
