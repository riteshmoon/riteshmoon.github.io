# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static personal academic portfolio site for Ritesh Moon (PhD researcher, University of Birmingham). Deployed on GitHub Pages at `https://riteshmoon.github.io`. Push to `origin/main` deploys live — no CI step, no build step.

## Deployment

```
git add <files>
git commit -m "..."
git push origin main
```

No build step. All CSS/JS is hand-written and used as-is.

## Site structure (multi-page, navy & white academic theme)

Rebuilt in August 2026 as a multi-page site with a persistent left sidebar (photo, name, role, social icons, CV button, nav) — replacing the old single-page HTML5 UP "Dimension" CV-style design. Each page is a standalone HTML file sharing the same sidebar markup.

| Page | Purpose |
|---|---|
| `index.html` | Home — bio, quick highlights, research vision teaser |
| `education.html` | Academic background timeline, awards & grants, workshops & training |
| `research.html` | Current research projects, research interests, skills & expertise |
| `publications.html` | Conference presentations, submitted manuscripts, reports, Google Scholar link |
| `teaching.html` | Teaching experience |
| `contact.html` | Contact links |

Because there's no templating engine, the sidebar `<aside class="sidebar">` block is duplicated verbatim across all six HTML files — only the `class="active"` on the matching nav link differs per page. **When editing the sidebar (photo, bio blurb, social links, CV link), update it in all six files.**

## File structure and what to touch

| Path | Purpose |
|---|---|
| `index.html`, `education.html`, `research.html`, `publications.html`, `teaching.html`, `contact.html` | Page content — the only source of truth |
| `assets/css/style.css` | All styling for the site (colors, layout, sidebar, cards, timeline, responsive rules) |
| `assets/js/script.js` | Mobile sidebar toggle (hamburger menu) only |
| `assets/css/fontawesome-all.min.css` + `assets/webfonts/` | Font Awesome 5 icons (solid `fas`, brands `fab`), used for social icons and contact page |
| `images/profile.jpg` | Profile photo shown in the sidebar on every page |

Google Fonts (`Lora` for headings, `Inter` for body) are loaded via `<link>` from `fonts.googleapis.com` in each page's `<head>` — no local font files.

The old HTML5 UP Dimension template files (`main.css`, `main.js`, `custom.css`, `custom.js`, `noscript.css`, `jquery.min.js`, `browser.min.js`, `breakpoints.min.js`, `util.js`, `assets/sass/`, and the unused decorative images `bg.jpg`, `overlay.png`, `pic0{1,2,3}.jpg`) were removed — they are no longer part of this design. The sibling folder `Z:\website\html5up-dimension\` still holds the original unmodified template for reference; never edit it.

## Design system (assets/css/style.css)

- Colour palette: navy sidebar (`--navy-dark` → `--navy` gradient) with a gold (`--gold`) accent for CV button, active nav link, and icon hovers; white main content area (`--bg`) with navy headings (`--navy-dark`) and muted grey body/meta text.
- Fonts: `Lora` (serif) for all headings, `Inter` (sans) for body text.
- Layout: `.layout` is a flex row — fixed-width sticky `.sidebar` (280px) + fluid `.content` capped at `--max-w` (860px), centred.
- Below 800px the sidebar becomes an off-canvas panel toggled by `.nav-toggle` (hamburger button) + `.nav-overlay`, controlled by `assets/js/script.js`.
- Reused component classes across pages: `.timeline`/`.timeline-item` (education/research experience), `.project-card`/`.project-tags`/`.tag` (research projects), `.skill-group`/`.skill-tags`/`.skill-tag` (skills), `.pub-list`/`.pub-item` (publications), `.contact-links` (contact page), `.highlight-grid`/`.highlight-card` (home page quick facts).

## Rules for all edits

- Every `target="_blank"` link must include `rel="noopener noreferrer"`.
- Keep the sidebar identical across all six pages except for the single `class="active"` on the current page's nav link.
- Keep `assets/css/style.css` as the single stylesheet — don't reintroduce per-page `<style>` blocks or resurrect the old template CSS.
- Update `og:url` / `canonical` meta tags to match the actual filename when adding a new page.
