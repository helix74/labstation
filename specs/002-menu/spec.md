# Specification: Menu Section (The "Experiment Log") 🧪

> **Feature**: Menu Section  
> **Goal**: Display products as "Lab Experiments" with a UNIQUE Lab Station visual style.  
> **Status**: ⚠️ NEEDS REDESIGN

---

> [!IMPORTANT]
> **Design Decision**: The original "Periodic Table" concept has been REMOVED.  
> Why? It's too similar to Breaking Bad and not unique to Lab Station.  
> We need to create our OWN original menu presentation.

---

## 1. The Concept: "Lab Archives" 📋

Users are browsing the Lab's completed experiments.

**The Story**: "These are the results of our latest taste tests. Each one approved by the Lab."

## 2. User Stories

- **As a User**, I want to browse burgers and tacos separately.
- **As a User**, I want to see ingredients ("Composition") clearly.
- **As a User**, I want the Derja descriptions to feel the brand personality.
- **As a User**, I want visual indicators for "Signature" and "Spicy" items.

## 3. UI/UX Requirements

### 🚨 CRITICAL: Mobile UX Issue

**CURRENT PROBLEM**: On mobile, selecting a product requires scrolling down to see the product card. This is bad UX.

**SOLUTION NEEDED**:

- Product visualization should appear ABOVE or as an OVERLAY when selected
- Or use a drawer/modal that slides up
- Experience must feel smooth and intentional

### A. Layout (Desktop) - NEEDS REDESIGN

> [!NOTE]
> Current implementation uses split screen (list left, visualizer right).
> This works but is GENERIC. Need something more "Lab Station".

**Ideas to explore**:

- Horizontal scroll with large cards
- 3D-like depth/perspective
- Files/folders opening animation
- Character "presenting" each item

### B. List Items

- **Data Card** style (keep this concept)
- **Symbol badge** `[Bl]` for Brisket Lab (keep but not "Periodic Table")
- **Signature/Spicy badges** (keep)
- **Price as "Lab Cost"** (keep)

### C. Product Visualizer

- Character should be involved in presentation
- AI-generated product images needed (will generate)
- Lab-style data overlay (molecular breakdown, ratings, etc.)

### D. Mobile Layout - PRIORITY FIX

- Product card MUST appear without scrolling after selection
- Consider: slide-up drawer, modal overlay, or inline expansion

## 4. Data Integration

- **Source**: `src/lib/menu-data.ts` ✅ (Complete with 14 burgers, 8 tacos)
- Available fields: `symbol`, `name`, `description_derja`, `ingredients`, `isSignature`, `isSpicy`, `spicyLevel`

## 5. Technical Requirements

- Framer Motion for animations
- Smooth transitions between items
- Mobile-first responsive design
- 60fps animations

## 6. Assets Needed

- [ ] Character pose: `Presenting Gesuring to the Side.png` ✅
- [ ] AI-generated product images for each menu item (TODO)

---

## ❌ REMOVED CONCEPTS

- ~~Periodic Table grid layout~~
- ~~Chemical element styling~~
- ~~Breaking Bad aesthetic~~

We are creating something UNIQUE to Lab Station.
