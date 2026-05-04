# Gourmetpedia CGU

Legal pages for the Gourmetpedia mobile app, hosted at gourmetpedia.com and linked from Apple App Store and Google Play Store listings.

## Tech stack

- **Vite 8 + Vue 3 + TypeScript** — SPA, no SSR
- **Vue Router 5** — locale-prefix routing (`/:locale/page`)
- **vue-i18n 11** — 6 languages, composition API mode (`legacy: false`)
- **CSS custom properties** — light/dark theming via `[data-theme]` on `<html>`

## Pages

| Route | View | Content source |
|---|---|---|
| `/:locale/privacy` | `PrivacyView.vue` | `gourmetpedia_privacy_policy_updated.pdf` |
| `/:locale/terms` | `TermsView.vue` | `gourmetpedia_legal_documents_pack.pdf` |
| `/:locale/delete-account` | `DeleteAccountView.vue` | `gourmetpedia_delete_account.pdf` |

## Routing behaviour

- `/` redirects to `/en/privacy`
- `/:locale` (no page) redirects to `/:locale/privacy`
- Unknown locale redirects to `/en/privacy`
- Valid locales: `en`, `fr`, `de`, `nl`, `pt`, `it`

## Theme

Tokens defined in `src/assets/theme.css` on `:root` (light) and `[data-theme='dark']`.

| Token | Light | Dark |
|---|---|---|
| `--color-primary` | `#d9714a` | `#f09a73` |
| `--color-surface-alt` | `#f0eae2` | `#2c2521` |
| `--color-info` | `#3e6fab` | `#7ea5d5` |
| `--color-bg` | `#f7f4ef` | `#161311` |
| `--color-surface` | `#ede8e0` | `#1e1a17` |
| `--color-text` | `#1c1916` | `#f0eae2` |
| `--color-text-muted` | `#6d5a4e` | `#b9a89c` |
| `--color-border` | `#decfc2` | `#4c3d34` |
| `--color-success` | `#2e8b57` | `#57b37c` |
| `--color-danger` | `#b6453a` | `#e67f73` |

Theme preference persisted in `localStorage` under key `gourmetpedia-theme`. Anti-flash script in `index.html` sets `data-theme` before first paint. Managed via `src/composables/useTheme.ts` (singleton ref).

## Typography

- **Title** — Newsreader 28 Semibold (Google Fonts)
- **Subtitle** — Geist 18 Medium
- **Body** — Geist 14 Regular
- **Caption** — Geist 12 Medium

## i18n

Translation files in `src/i18n/locales/{locale}.ts`. Currently contains UI strings (nav, footer, meta). Page content keys are added in step 2. Locale is synced from `route.params.locale` in `App.vue`.

## Logos

Located in `public/logos/`. Original source: `/Users/qtu/Documents/Gourmetpedia/V3/`.

- `splash_light_transparent.png` — for light backgrounds (navbar, footer)
- `splash_dark_transparent.png` — for dark backgrounds (navbar, footer)
- `gourmetpedia_light.jpg` / `gourmetpedia_dark.jpg` — full brand images
- `white.png` — white logo variant

## Operator

Quentin Tusset — Liege, Belgium — support@gourmetpedia.com
