# Sarah Medical Center — Website

Trilingual informational website for **Sarah Medical Center** (مركز سارة الطبي) — emergency medical center in Umm al-Fahm.

## Stack

- **Astro 5** — static site generation with built-in i18n
- **Tailwind CSS** — utility-first styling with RTL logical properties
- **Netlify** — hosting + forms + previews

## Languages

- Arabic (`ar`, default, RTL)
- Hebrew (`he`, RTL)
- English (`en`, LTR)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` deploy automatically via Netlify (see `netlify.toml`).

## Project structure

```
src/
├── components/    # Reusable UI components grouped by feature
├── content/       # Astro Content Collections (news, doctors, services)
├── i18n/          # Locale config, translation utils, dictionaries
├── layouts/       # Page wrappers
├── pages/         # Route files - mirrored under /ar, /he, /en
└── styles/        # Global CSS, tokens, fonts
```

## Brand

- Navy `#0B2545`
- Gold `#D4AF37`
- White

## Contact

- Phone: 04-884-8080
- Address: City Gate Building, Floor 1, A-Kuds Street, Umm al-Fahm
- Facebook: [@SarahMCenter](https://www.facebook.com/SarahMCenter/)
