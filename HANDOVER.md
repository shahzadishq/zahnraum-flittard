# Zahnraum Flittard – Handover

Single-page website for **Zahnraum Flittard – Zahnarztpraxis Dr. Shiwa Kadir**, Köln-Flittard.
Built on the Elara landing-page template and rebranded with the practice's own content, logo and
branding from [zahnraum-flittard.de](https://zahnraum-flittard.de/) (October 2026).

## What was taken from the client site

- **Identity & branding:** name, tagline ("Herzlich und auf Augenhöhe"), the gold tooth-and-leaf
  logo (`public/images/zahnraum-mark.svg`) and the warm cream / charcoal / teal palette.
- **Content:** hero, practice intro, a curated set of services (the full catalogue on the live site
  lists ~25 treatments — see note below), the team (Dr. Shiwa Kadir, Loretta Szymczak), practice
  features (barrierefrei, Ratenzahlung, klimatisiert), contact details and opening hours.
- **Booking:** all "Termin buchen" CTAs link to the practice's Doctolib page.
- **Legal:** Datenschutz follows the published policy (Stand 02.11.2025); Impressum combines the
  published contact details with standard § 5 DDG disclosures for the Zahnärztekammer Nordrhein.
- **Images:** hero (`zahnraum-hero.webp`) and Dr. Kadir's portrait (`dr-shiwa-kadir.webp`) are the
  only two images on the source site.

## Please review / confirm before launch

- **Legal texts** (Impressum professional-law details + Datenschutz) — have the practice / a lawyer
  confirm. See the header note in `src/content/legal.ts`.
- **Services:** 8 grouped cards are shown. If you want all ~25 individual treatments listed, send the
  list and we'll expand the Leistungen section.
- **Images:** only two photos exist on the source site. More practice/team photos would let us
  restore photo-rich sections (practice tour, process). Dr. Kadir's portrait is low-resolution
  (225×225) — a larger file would look sharper.
- **Fonts:** the site uses Manrope (self-hosted via `next/font`). Swap if the practice has a
  preferred typeface.
- **Set `NEXT_PUBLIC_SITE_URL`** to the final domain to enable canonical/OpenGraph URLs and
  structured-data logo/image links.

## Where things live

| What | Where |
|---|---|
| Practice details, copy, services, team, image paths | `src/content/site.ts` |
| Impressum / Datenschutz text | `src/content/legal.ts` |
| Page sections | `src/components/sections/` |
| Logo (wordmark) | `src/components/Logo.tsx` · mark: `public/images/zahnraum-mark.svg` |
| Brand colours / design tokens | `src/app/globals.css` |
| Images | `public/images/` |

## Deployment

Workflow `.github/workflows/pages.yml` builds a static export on every push to `main` (and the
active dev branch) and publishes it to `https://shahzadishq.github.io/zahnraum-flittard/`
(marked `noindex`). Requires repository **Settings → Pages → Source = GitHub Actions**.
Optional repository variables: `ENQUIRY_ENDPOINT` (e.g. Formspree, for the contact form on static
hosting), `BOOKING_URL` (overrides the default Doctolib link), `GTM_ID`.
For production, any Node host (`npm run build && npm start`) also runs the built-in enquiry API.
