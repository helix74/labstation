# Lab Station - Project Constitution 🧪

## 1. Vision

**Lab Station** est un site web vitrine **EXPERIENCE-FIRST** pour une marque de fast-food (Burgers/Tacos) appartenant à l'influenceur tunisien **Moudi Food**.

Le site doit être **"haja masaretch"** - une expérience gaming-like, immersive, guidée par le personnage "Lab Scientist".

**Tagline:** "The Lab is Working! 🥼🔥" / "هبطنا للأرض 🌍"

## 2. Core Principles

| Principe                  | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| **Experience > Products** | Le focus est sur l'immersion et le storytelling, PAS sur la vente directe |
| **Character-Centric**     | La mascotte "Lab Scientist" est le guide omniprésent du site              |
| **Gaming Vibe**           | Animations fluides, découverte progressive, effets visuels "wow"          |
| **Derja-Tech**            | Mix Français + Darija Tunisienne en lettres arabes quand approprié        |
| **Mobile Tunisia**        | Optimisé pour 4G tunisien et appareils mid-range                          |

## 3. Design System

### Couleurs

| Token         | Valeur    | Usage                     |
| ------------- | --------- | ------------------------- |
| `lab-black`   | `#0a0a0a` | Background principal      |
| `lab-dark`    | `#1a1a1a` | Surfaces, cartes          |
| `lab-grey`    | `#2a2a2a` | Borders, séparateurs      |
| `lab-yellow`  | `#FFD700` | Accent primaire (brand)   |
| `lab-warning` | `#ff9100` | Éléments secondaires      |
| `lab-toxic`   | `#00ff41` | Effets "radioactifs"      |
| `lab-danger`  | `#ff3333` | Alertes, spicy indicators |

### Typography

| Font                   | Usage              | Variable         |
| ---------------------- | ------------------ | ---------------- |
| `Space Grotesk`        | Headings (Latin)   | `--font-heading` |
| `Inter`                | Body text          | `--font-body`    |
| `IBM Plex Sans Arabic` | Darija/Arabic text | `--font-arabic`  |

### Character Assets

Le personnage "Lab Scientist" (masque à gaz, blouse blanche, combinaison jaune) est disponible en 5 poses dans `public/images/character/`:

- `pose-1.jpg` à `pose-5.jpg`

## 4. Tech Stack

```
Next.js 15 (App Router)
├── TypeScript
├── Tailwind CSS v4
├── Framer Motion (animations UI)
├── GSAP ScrollTrigger (scroll animations - autorisé)
├── Lenis (smooth scroll)
└── Google Places API (reviews)
```

### Autorisé ✅

- GSAP pour scroll-based animations
- Three.js/Spline pour 3D interactif (Phase Future)
- Son d'ambiance (optionnel)
- +1000 Google Reviews via API

### Interdictions ❌

- Images non-optimisées
- Animations bloquant le main thread
- Packages inutilement lourds

## 5. Content Guidelines

### Tone of Voice: "Derja-Tech"

Mélange scientifique-humoristique avec du tunisien en lettres arabes:

| Français  | Derja-Tech          | Arabe               |
| --------- | ------------------- | ------------------- |
| Commander | Lancer le Protocole | أطلق البروتوكول     |
| Menu      | Table des Éléments  | جدول العناصر        |
| Bienvenue | Accessing Lab...    | جاري الدخول للمختبر |
| Délicieux | Benna Certifiée     | بنّة مضمونة         |

### Storytelling Elements

Utiliser les vraies citations de Moudi Food depuis Instagram:

- Les 4 phases stratégiques
- Le parcours vers "Best Burger Tunisia"
- +500 reviews en 1 mois avec 4.7/5
- La philosophie "درجة درجة" (step by step)

## 6. Sections du Site (Experience-First Order)

| #   | Section             | Focus                               |
| --- | ------------------- | ----------------------------------- |
| 1   | **Intro/Loader**    | "Accessing Lab..." avec animation   |
| 2   | **Hero Experience** | Character + Tagline (NO PRODUCTS)   |
| 3   | **Lab Immersion**   | Storytelling du concept laboratoire |
| 4   | **Menu Showcase**   | Carrousel animé des produits        |
| 5   | **Testimonials**    | +1000 Google Reviews wall           |
| 6   | **Story Timeline**  | L'histoire de Lab Station           |
| 7   | **Video Banner**    | Vidéos Instagram horizontales       |
| 8   | **Location**        | Google Maps + Contact               |
| 9   | **Footer**          | Social + Credits                    |

## 7. Workflow

- **Spec-First**: Utiliser les workflows `/speckit-*` pour chaque feature
- **Feature Folders**: `specs/NNN-slug/` avec spec.md, plan.md, tasks.md, walkthrough.md
- **Incremental**: Terminer 100% une feature avant de passer à la suivante
- **Verification**: Tests visuels + build check à chaque étape

## 8. External Integrations

### Google Reviews (Required)

- API: Google Places API
- Credentials: À obtenir de Moudi Food
- Usage: Afficher +1000 avis en temps réel

### Instagram (Optional)

- Embed videos verticaux
- Lien vers @lab.station.tn et @moudifood98
