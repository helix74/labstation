# Specification: Footer & Polish 🏁

> **Feature**: Footer Section
> **Goal**: Provide essential contact info and a stylish "End of Experiment" closure.
> **Theme**: "Lab Shutdown" / "Contact Protocols".

## 1. The Concept: "System Shutdown" 🔌

The footer isn't just a list of links. It's the bottom of the data log.
It represents the end of the user's session in the Lab.

## 2. User Stories

- **As a User**, I want to find the address and phone number easily.
- **As a User**, I want to access social media links (Instagram/Facebook).
- **As a User**, I want a "Back to Top" button to restart the experience.

## 3. UI/UX Requirements

### A. Layout

- **Grid Layout**:
  - **Col 1**: Brand (Logo + Tagline).
  - **Col 2**: Contact Protocols (Address, Phone).
  - **Col 3**: Social Links (Icons).
  - **Col 4**: "System Actions" (Back to Top).

### B. Content

- **Address**: Av. Hédi Nouira, Ariana.
- **Phone**: +216 21 722 108.
- **Socials**: Instagram (@labstation_tn).
- **Copyright**: "© 2026 Lab Station. All Experiments Verified."

### C. Visuals

- **Background**: Darker than black (e.g., `#050505`).
- **Separator**: A "Hazard Line" or "Data Line" separating the footer from the rest.

## 4. Polish Items (Global) ✨

- **Smooth Scrolling**: Ensure clicking "Menu" in nav scrolls smoothly to the section.
- **Favicon**: Ensure the Lab Station logo is used as favicon.
- **Metadata**: Update page title and description.

## 5. Technical Constraints

- **Responsive**: Stack columns on mobile.
- **Links**: All external links must open in new tab (`target="_blank"`).

## 6. Assets Required

- **Icons**: Lucide React (Phone, MapPin, Instagram, ArrowUp).
