# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal resume website with no build system. Open `index.html` directly in a browser to preview. Deployed via GitHub Pages (see `CNAME`).

## Architecture

Single-page site built on the [Start Bootstrap Resume v7.0.6](https://startbootstrap.com/theme/resume) template with these custom additions:

- **Dark mode toggle** (`js/scripts.js`): Toggled via `.theme-toggle` button; persists state in `localStorage` using the `dark-mode` class on `<body>`.
- **Typed.js animation** (`js/scripts.js`): Reads comma-separated strings from `data-typed-items` attribute on `.typed` element in the About section.
- **Vendored library**: `assets/vendor/typed.js/` — do not update via npm; files are copied directly.

## Key files

| File | Purpose |
|------|---------|
| `index.html` | All page content — sections: About, Experience, Education, Skills, Interests |
| `css/styles.css` | Bootstrap 5.2.3 bundled with custom theme styles; dark mode rules are at the bottom |
| `js/scripts.js` | Bootstrap scrollspy init, navbar collapse, typed.js init, dark mode logic |

## External dependencies (CDN)

- Bootstrap 5.2.3 JS (`cdn.jsdelivr.net`)
- Font Awesome 6.3.0 (`use.fontawesome.com`)
- Google Fonts: Saira Extra Condensed, Muli

## Dark mode

Dark mode styles live at the end of `css/styles.css`. The toggle button SVG is inline in `index.html:38`. Theme preference is stored in `localStorage` under key `theme` with value `dark-mode`.
