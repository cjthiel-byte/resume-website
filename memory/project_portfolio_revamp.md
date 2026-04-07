---
name: Portfolio Revamp
description: Summary of the 2026-04 site revamp from single-page resume to multi-page portfolio
type: project
---

Revamped the site from a single-page Bootstrap resume template into a 3-page portfolio site.

**Pages:**
- `index.html` — Landing page (hero + "What I Do" section)
- `resume.html` — Full resume content
- `portfolio.html` — Project cards

**Architecture decisions made:**
- Multi-page static HTML (no build system)
- Bootstrap 5.2.3 loaded via CDN (removed from bundled CSS)
- Shared top navbar duplicated across all 3 HTML files
- CSS custom properties (`data-theme` on `<html>`) drive all theming
- Fonts: Inter (body) + JetBrains Mono (accents/code)
- Color palette: greens, grays, near-black (user's favorite color is green)

**Projects in portfolio:**
- Mycelium Empire: HTML/CSS/JS, https://myceliumempire.net, https://github.com/cjthiel-byte/Mycelium-Empire
- Movie Rating Website: Next.js/React, no live URL yet, https://github.com/cjthiel-byte/rating-website

**Why:** User wanted a developer portfolio feel rather than a plain resume site.
**How to apply:** When adding new pages, follow the same HTML shell (nav + main + footer + CDN links). New components automatically inherit theming via CSS vars.
