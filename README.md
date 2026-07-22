# hermes.mobile.page

Public description site for **Hermes Tracker**, a corporate Android app for field
sales agents/couriers (GPS route recording + delivery point check-in). Published via
GitHub Pages.

Also hosts the app's Privacy Policy, required for the Google Play Console listing.

## Structure

- `index.html` — main description page (EN / RU / UK, switchable, no build step)
- `privacy.html` — Privacy Policy (EN / RU / UK)
- `assets/css/style.css` — shared styling
- `assets/js/lang.js` — language switcher (detects browser language, persists choice in `localStorage`)
- `assets/img/` — icon and logo mark (derived from the app's launcher icon)

## Publishing on GitHub Pages

1. Push this repo to GitHub.
2. In the repo Settings → Pages, set the source to the `main` branch, root (`/`) folder.
3. The site will be served at `https://<user>.github.io/<repo>/`.

No build step is required — everything is static HTML/CSS/JS.

## Editing content

All three languages live in the same HTML files, each string wrapped in an element with
`data-lang-block="en"` / `"ru"` / `"uk"`. `assets/js/lang.js` shows only the block matching
the active language. Keep the three versions of each block next to each other so edits
stay in sync.
