# Privacy & Security for Burp Battle

The hosted legal pages for **[Burp Battle](https://github.com/utku-13/fast-app-1)** — the
pass-and-play burp party game for iOS. Plain static HTML, served via GitHub Pages,
styled to match the app's design system.

## Live pages

- **Overview / hub** — <https://utku-13.github.io/Privacy-and-Security-For-Blurp-Battle/>
- **Privacy Policy** — <https://utku-13.github.io/Privacy-and-Security-For-Blurp-Battle/privacy.html>
- **Security** — <https://utku-13.github.io/Privacy-and-Security-For-Blurp-Battle/security.html>
- **Terms of Service** — <https://utku-13.github.io/Privacy-and-Security-For-Blurp-Battle/terms.html>

The app's Settings screen links to the **overview** ("Privacy & Security" button)
and straight to **Terms of Service** ("Terms of Service" button).

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Hub page linking the three documents |
| `privacy.html` | Privacy Policy |
| `security.html` | Security overview |
| `terms.html` | Terms of Service |
| `styles.css` | Shared styling — mirrors the in-app palette and typography |
| `lang.js` | English/Turkish toggle (matches the app's EN/TR switch) |

Every page is bilingual (EN/TR). The choice is remembered in `localStorage` and
defaults to Turkish on Turkish-locale devices, English everywhere else.

## Editing

No build step — open any `.html` file in a browser to preview. Push to `main` and
GitHub Pages redeploys automatically. Keep the palette and "chunky" headings
consistent with the Burp Battle app design.

© 2026 Utku Özer
