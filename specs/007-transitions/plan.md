# Plan: Section Transitions

> **Feature**: 007-transitions  
> **Status**: Ready

---

## Proposed Changes

### [NEW] src/components/ui/AnimatedSection.tsx

Reusable wrapper component that:

- Uses Framer Motion `whileInView`
- Applies fade-in-up animation
- Staggered children animation
- Configurable delay/duration

### [MODIFY] All Section Components

Wrap section content with AnimatedSection:

- Hero.tsx (already has)
- menu.tsx → Add AnimatedSection
- testimonials.tsx → Add AnimatedSection
- story.tsx → Add AnimatedSection
- video-banner.tsx → Add AnimatedSection
- contact.tsx → Add AnimatedSection
- footer.tsx → Add AnimatedSection

---

## Implementation Order

1. Create AnimatedSection component
2. Apply to Menu section
3. Apply to Testimonials
4. Apply to remaining sections
5. Test scroll performance
6. Mobile optimization

---

## Verification

- [ ] All sections animate on scroll
- [ ] Animations are consistent (same timing)
- [ ] 60fps on mobile
- [ ] No jarring scroll behavior
- [ ] Build passes
