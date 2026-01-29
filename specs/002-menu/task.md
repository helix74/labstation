# Tasks: Menu Section Redesign

## Mobile UX Fix (PRIORITY)

- [x] Create ProductDrawer component (slide-up modal)
- [x] On product selection: show drawer with details
- [x] Drawer shows: image, name, description, ingredients, price
- [x] Close button and backdrop dismiss
- [x] No scroll needed after selection

## Desktop Enhancement

- [x] Add glow on active product card (existing in experiment-list.tsx)
- [x] Smooth animation between items (existing)
- [ ] Character pose changes based on category (deferred)

## Product Images

- [x] Generate AI images for 14 burgers (DONE)
- [/] Generate AI images for 8 tacos (1/8 done - quota limit)
- [x] Save to /public/images/products/
- [ ] Update menu-data.ts with image paths
- [ ] Integrate images into ExperimentVisualizer

## Files Generated (15/22)

**Burgers (14/14):**

- crispy_chicken_burger.png
- classic_burger.png
- double_burger.png
- triple_burger.png
- scrambled_eggs_burger.png
- mr_bacon_burger.png
- 100_meat_burger.png
- texas_ribs_burger.png
- brisket_lab_burger.png
- creamy_mushroom_burger.png
- monto_cinto_burger.png
- spicy_burger.png
- truffle_burger.png
- full_cheese_burger.png

**Tacos (1/8):**

- taco_classic.png

## Testing

- [ ] Mobile drawer works smoothly (needs manual verification)
- [x] Desktop visualizer updates correctly
- [ ] Images load without layout shift (pending images)
- [x] Build verification (PASSED)

---

**STATUS**: ⏳ Partial (7 taco images pending - quota resets ~07:20 UTC)
