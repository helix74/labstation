# Plan: Hero Section (Premium Redesign)

> **Feature**: 001-hero  
> **Status**: Awaiting Implementation

---

## Proposed Changes

### [MODIFY] page-loader.tsx

- Add character image fade-in during boot
- Enhance final "ACCESS GRANTED" with flash effect
- Add blur/scale exit transition

### [MODIFY] Hero.tsx

- Add smoke/fog gradient animation at bottom
- Enhance character glow (larger, more radioactive)
- Add glitch effect on headline hover (CSS-based)
- Add welcome message overlay (auto-dismiss)
- Enhance CTA button glow and hover state

### [NEW] src/lib/animations/glitch.css

- CSS-only glitch effect for headlines
- Reusable class: `.glitch-text`

---

## Implementation Order

1. Enhance PageLoader transition
2. Add smoke/fog effect to Hero
3. Add glitch effect to headline
4. Add welcome message overlay
5. Enhance CTA glow effects
6. Test on mobile

---

## Verification

- [ ] PageLoader feels immersive
- [ ] Smoke effect visible but not distracting
- [ ] Glitch effect triggers on hover
- [ ] Welcome message shows and dismisses
- [ ] CTA has enhanced glow
- [ ] 60fps on mobile
- [ ] Build passes
