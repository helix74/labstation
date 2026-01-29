# Specification: Hero Section (Premium Redesign) 🧪

> **Feature**: Hero & Entry Experience  
> **Goal**: Create immersive "Lab Entry" experience  
> **Status**: 🔄 REDESIGNING

---

## 1. The Vision

The user doesn't just "visit" a website - they **enter the Lab**.

**Entry Flow**:

1. PageLoader → Character appears with mysterious messages
2. Loader completes → "Door opens" / smoke reveal
3. Hero visible → User feels like they're inside a laboratory
4. Welcome message → "Wselt lel Lab" (You've arrived)

---

## 2. User Stories

- **As a User**, I want the loading to feel like I'm entering a secure facility
- **As a User**, I want the Hero to feel industrial, mysterious, radioactive
- **As a User**, I want to immediately recognize the Lab Station brand identity
- **As a User**, I want the CTA to feel like activating a "protocol"

---

## 3. UI/UX Requirements

### A. PageLoader Enhancement

**Current**: Typewriter boot sequence (good base)  
**Add**:

- Character fades in alongside boot text
- Mysterious loading messages in Derja
- "ACCESS GRANTED" final message with flash
- Transition: blur/scale effect into Hero

### B. Hero Section

**Background**:

- Dark industrial texture (metal grid) ✅ (exists)
- Smoke/fog effect from bottom (CSS gradients + subtle animation)
- Optional: particle effects (light, performance-friendly)

**Character**:

- Scientist floating animation ✅ (exists)
- Enhanced glow behind character (radioactive feel)
- Eyes/head subtly follow cursor (optional CSS parallax)

**Typography**:

- "THE LAB IS WORKING" with glitch effect on hover
- Arabic tagline "هبطنا للأرض" (prominent)
- Text glow pulse animation

**CTA Button**:

- Hazard stripes pattern ✅ (exists)
- Enhanced glow on hover
- "LANCER LE PROTOCOLE" → scrolls to Story section

### C. Welcome Message

After Hero loads, show a brief message:

- "مرحبا بيك في المختبر" (Welcome to the Lab)
- Fades out after 2-3 seconds
- Sets the "experience" tone

---

## 4. Technical Requirements

- Framer Motion for page transitions
- CSS animations for smoke/glow (performance)
- GSAP for glitch effect (optional, can use CSS)
- Mobile: Simpler effects, same vibe
- Target: 60fps animations

---

## 5. Assets Available

- [x] Character: `Middle Center Waving Hello.png`
- [x] Character poses: 7+ PNG files ready
- [x] Grid pattern background
- [ ] Smoke/fog texture (will use CSS gradients)

---

## 6. Removed Concepts

- ~~Heavy 3D scene~~
- ~~Sound effects (optional later)~~
- ~~Complex parallax (performance)~~
