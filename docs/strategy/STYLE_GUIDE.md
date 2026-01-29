# Lab Station Style Guide 🎨

> **Purpose**: The single source of truth for the "Derja-Tech" visual language.
> **Status**: Living Document

## 1. Brand Identity

- **Name**: Lab Station
- **Tagline**: "The Lab is Working" / "هبطنا للأرض"
- **Vibe**: Industrial, Radioactive, Underground, High-Tech.
- **Voice**: "The Scientist" (Technical, authoritative but playful, mixes French/Derja).

## 2. Color Palette

### Primary Colors

| Token        | Value     | Usage                                  |
| ------------ | --------- | -------------------------------------- |
| `lab-black`  | `#0a0a0a` | Main Background (The Void)             |
| `lab-yellow` | `#FFD700` | Primary Brand Color (Hazmat, Warnings) |
| `lab-white`  | `#ededed` | Primary Text                           |

### Secondary Colors

| Token        | Value     | Usage                          |
| ------------ | --------- | ------------------------------ |
| `lab-dark`   | `#1a1a1a` | Surface, Cards, Panels         |
| `lab-grey`   | `#2a2a2a` | Borders, Dividers              |
| `lab-toxic`  | `#00ff41` | Success, "System Ready", Glows |
| `lab-danger` | `#ff3333` | Errors, "Critical", Spicy      |

## 3. Typography

### Headings (`Space Grotesk`)

- **H1**: Bold, Uppercase, Tight tracking (-0.02em). Used for Hero titles.
- **H2**: Semi-Bold. Section headers.
- **H3**: Medium. Card titles.

### Body (`Inter`)

- **Body**: Regular. High readability.
- **Caption**: Mono-spaced (optional for "technical" look).

### Arabic (`IBM Plex Sans Arabic`)

- Used for Derja text. Must harmonize with Space Grotesk.

## 4. UI Components

### Buttons

- **Primary ("Launch")**:
  - Background: `lab-yellow`
  - Text: `lab-black` (Bold)
  - Shape: Cut corners (Chamfered) or Industrial rounded.
  - Hover: Glow effect + Glitch.
- **Secondary ("Analyze")**:
  - Border: `lab-yellow` (1px)
  - Background: Transparent
  - Text: `lab-yellow`

### Cards ("The Experiments")

- **Background**: Glassmorphism (`lab-dark` with opacity).
- **Border**: Thin `lab-white/10`.
- **Hover**: Border turns `lab-yellow`, slight scale up.

## 5. Effects & Animation

- **Glow**: `box-shadow: 0 0 20px rgba(255, 215, 0, 0.3)`
- **Glitch**: CSS clip-path animations on hover.
- **Smoke**: Subtle background movement (fog).
