# MUET ORIC Website (React + Vite)

A modern, responsive frontend for the Office of Research, Innovation & Commercialization (ORIC) at Mehran University of Engineering & Technology (MUET).

This repository contains the UI for an institutional website that showcases research, funded projects, industrial and institutional collaborations, publications, and university statistics. The frontend is data-driven so content can be updated by editing JSON files in `src/data/` without changing component logic.

Why this project
- Centralize ORIC resources, reports, and publications for students, faculty, and industry partners.
- Present key university research metrics and achievements in an accessible, mobile-friendly layout.
- Make content maintainable by storing structured data in `src/data/`.

Key features
- Responsive navigation with large-screen links and a mobile hamburger menu.
- Animated ORIC full name on the navbar with gradient text styling.
- About Us section with Director and VC cards, mission and vision.
- Updated Stats component (Patents, Funded Projects, Industry Collaborators, International Collaborators, Years of Excellence) with animated counters.
- Research Journals listing with consistent, gradient-styled "View Journal" buttons.
- Data-driven pages: navigation, team, journals, projects, collaborations, and statistics are loaded from JSON files in `src/data/`.
- Built with React, Vite, and Tailwind CSS for fast development and responsive UI.

Project structure (top-level)
```
public/           # Static assets (logos, PDFs, images)
src/
  assets/         # Images and logos used by the app
  components/     # Reusable UI components (Navbar, Footer, etc.)
  data/           # JSON data used by the frontend (editable content)
  hooks/          # Custom React hooks
  pages/          # Page-level components (AboutUs, Stats, ResearchJournals, etc.)
  App.jsx         # Root component and router
  index.css       # Global styles (includes Tailwind imports)
```

Getting started (Windows / PowerShell)
1. Install dependencies
   npm install

2. Start the development server
   npm run dev

3. Build for production
   npm run build

Customization and content updates
- Update any content by editing the JSON files in `src/data/` (for example `universityStats.json`, `navigationData.json`, `researchJournals.json`).
- Replace or add images in `src/assets/` or `public/` and update the corresponding data entries.
- Adjust UI styles in Tailwind via `tailwind.config.js` and `index.css`.

Contributing
- Fork the repo, create a feature branch, and open a pull request with a clear description of changes.
- Keep edits to data files separated from component changes when possible to make content updates easy to review.

Notes and known issues
- Gradient text animation on the navbar is implemented but may require Tailwind config tweaks if gradients don't appear as expected.
- All major frontend content is data-driven; ensure JSON shape matches what components expect when updating data files.

License
This project contains code and assets for MUET ORIC. Check with the project owner for license and redistribution permissions.

---
For details, inspect the source files in `src/components/` and `src/pages/`. If you want a deployment guide or CI/CD configuration, tell me your target host and I will add suggested steps.
