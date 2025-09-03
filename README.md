# MUET ORIC Website (React + Vite)

This project is a modern, responsive frontend for the Office of Research, Innovation & Commercialization (ORIC) at Mehran University of Engineering & Technology (MUET).

## Features
- **Responsive Navigation Bar:**
  - Main links visible on large screens, hamburger menu for mobile/tablet.
  - Animated ORIC full name with gradient text.
  - University logo and correct link visibility.
- **About Us & Stats:**
  - Updated stats: Patents, Funded Projects, Industry Collaborators, International Collaborators, Years of Excellence.
  - Animated stat numbers with "+" suffix.
  - Consistent icon and button styling.
- **Research Journals:**
  - Gradient-styled "View Journal" button.
- **Data Management:**
  - All data (navigation, stats, team, journals, etc.) managed via `src/data/` JSON files and custom hooks.

## Tech Stack
- React
- Vite
- Tailwind CSS
- ESLint

## Project Structure
```
public/           # Static assets (logo, PDFs, images)
src/
  assets/         # Images, logos, event/company/institution images
  components/     # Reusable UI components (Navbar, Footer, etc.)
  data/           # JSON data files for frontend
  hooks/          # Custom React hooks
  pages/          # Main pages (AboutUs, Stats, ResearchJournals, etc.)
  App.jsx         # Main app component
  index.css       # Global styles
```

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

## Customization
- Update data in `src/data/` for stats, team, journals, etc.
- Change images/logos in `src/assets/` or `public/`.
- Edit components in `src/components/` for UI tweaks.

## Credits
- Developed for MUET ORIC
- Powered by React, Vite, and Tailwind CSS

---
For more information, see the source code and comments in each file.
