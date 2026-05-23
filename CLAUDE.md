# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static personal academic portfolio site for Ritesh Moon (PhD researcher, University of Birmingham). Deployed on GitHub Pages at `https://riteshmoon.github.io`. Push to `origin/main` deploys live — no CI step.

## Deployment

```
git add <files>
git commit -m "..."
git push origin main
```

There is no build step for normal edits. The SASS source (`assets/sass/`) is present but the pre-compiled `assets/css/main.css` is what the site uses. Only recompile SASS if you are changing the base template styles (rare).

## File structure and what to touch

| Path | Purpose |
|---|---|
| `index.html` | Single source of truth for all content |
| `assets/css/custom.css` | All customisations — the only CSS file to edit |
| `assets/js/custom.js` | Overrides template nav behaviour (see below) |
| `assets/css/main.css` | Compiled template CSS — **do not edit** |
| `assets/js/main.js` | Template JS — **do not edit** |
| `images/profile.jpg` | Profile photo used in landing and About panel |

The sibling folder `Z:\website\html5up-dimension\` is the original unmodified template kept for reference. Never edit it.

## Architecture: layout override

The site uses the **HTML5 UP Dimension** template, which was originally a modal/overlay design (clicking nav links opens a panel on top of a full-screen background). This repo overrides that entirely:

- `custom.css` forces all `<article>` elements to `display: block` and `opacity: 1`, making them permanently visible and stacked vertically like a normal page.
- `custom.js` intercepts nav anchor clicks in the **capture phase** (`addEventListener(..., true)`) so it fires before `main.js`'s bubble-phase handlers and calls `scrollIntoView` instead of triggering the template's overlay logic.
- The background image is suppressed; the site uses a solid black (`#000`) background with white text throughout.

## Content sections (index.html)

Five `<article>` elements inside `<div id="main">`:

- `#about` — bio, research vision, timeline (education + experience), awards, workshops, teaching
- `#projects` — three project cards with tag pills
- `#publications` — conference presentations, manuscripts in preparation, reports, Google Scholar link
- `#skills` — Programming / Hydrological Modelling / Machine Learning / Methods & Frameworks / Datasets / Geospatial & Computing / Research Interests
- `#contact` — icon link list (email, university email, UoB profile, LinkedIn, GitHub, Google Scholar, ORCID)

## Rules for all edits

- Every `target="_blank"` link must include `rel="noopener noreferrer"`.
- Profile photo is an `<img class="profile-photo" src="images/profile.jpg" alt="Ritesh Moon">` — not a background-div. CSS uses `object-fit: cover`.
- Never touch `main.css` or `main.js`.
- Keep `custom.css` as the single place for all style overrides; use `!important` only where needed to override template specificity.
