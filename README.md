# De Aura Dental Clinic — Dr. Zeeshan Sadiq & Dr. Arifa Islam

A premium marketing website for **De Aura Dental Clinic** (De Aura Dental Studio), at 1st Floor, Hafsa Medical Complex, Ghauri Town Phase 4-A, Islamabad, Pakistan.

Built with **React 18 + Vite + Tailwind CSS**. The appointment form sends real emails via **Web3Forms** — no backend, no third-party sponsor branding on submission (see setup step below, **required before go-live**).

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your real Web3Forms key
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

## ⚠️ Required setup: activate the appointment form

The form uses [Web3Forms](https://web3forms.com) — chosen specifically because, unlike the previous implementation, it never redirects visitors to a branded third-party page and shows no sponsor content. Everything happens inline on the site.

1. Go to **https://web3forms.com** and create a free access key using **`arfaislam696@gmail.com`** as the destination address (no signup required — it emails you the key directly).
2. Copy `.env.example` to `.env` and paste the key in:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-real-key-here
   ```
3. Restart the dev server (or rebuild) so Vite picks up the new environment variable.
4. **On Vercel:** add `VITE_WEB3FORMS_ACCESS_KEY` under Project Settings → Environment Variables with the same value, then redeploy.

Until this key is set, the form still validates and displays a graceful inline message directing visitors to WhatsApp or the phone number instead of failing silently — it will not crash or show a broken state.

**The access key is safe to expose in frontend code** — this is how Web3Forms is designed to work (the key only grants "receive form submissions," not account access), but it's still read from an environment variable rather than hardcoded, so it can be swapped without touching source code.

## Project structure

```
src/
  components/     Every section and UI piece (Navbar, Hero, Services, etc.)
  hooks/          useScrollReveal (IntersectionObserver reveal-on-scroll)
                  useCounter (animated number counters for Statistics)
  utils/data.js   Single source of truth for clinic info, doctors, services,
                  FAQs, testimonials, stats, gallery photos and process steps —
                  edit this file to update site content without touching components.
  App.jsx         Composes all sections in order.
  index.css       Tailwind layers + design-system utility classes
                  (buttons, cards, glass panels, reveal animation).
public/
  favicon.svg     Generated brand mark (no official logo file was uploaded).
  images/         Real clinic photography (see below).
.env.example      Template for the required Web3Forms key — copy to .env.
```

## Design system

| Token       | Value     | Usage                          |
|-------------|-----------|---------------------------------|
| Primary     | `#5C1A33` | Buttons, links, headings accents (deep burgundy/plum) |
| Secondary   | `#A98A6A` | Supporting accents (warm beige) |
| Accent      | `#C9A85E` | CTAs, ratings, highlights (muted gold) — used sparingly, not overused |
| Background  | `#FAF9F7` | Page background (very light warm gray) |
| Cards       | `#FFFFFF` | Card surfaces                  |
| Text        | `#2B2420` | Body copy (dark charcoal)      |

A warm, editorial luxury identity distinct from every previous version of this template.

## Sections included

Sticky navbar · Hero · About · Our Practice + Meet Our Doctors · Services (10 dentistry treatments, all publicly verifiable) · Why Choose Us · Treatment Process · Statistics (animated counters) · Before & After gallery (4 real cases) + clinic photo gallery · Testimonials · FAQ accordion · **working** appointment form (Web3Forms, no sponsor page) with a WhatsApp fallback · Google Map embed · Contact (email, phone, Instagram, Facebook) · Footer.

Floating UI: WhatsApp button, Call button, a lightweight rule-based Clinic Assistant chat widget, and a Scroll-to-Top button.

## Research behind the content

Before writing anything, I checked De Aura Dental Clinic's Instagram, Facebook, and public doctor-directory listings for the Ghauri Town, Islamabad location.

- **Dr. Zeeshan Sadiq:** BDS from Frontier Medical College, Abbottabad, with 5 years of experience in restorative and general dentistry — confirmed via his public Marham listing.
- **Dr. Arifa Islam:** confirmed as a co-practicing dentist at the clinic via patient reviews, but no independently verifiable credential page was found for her, so no specific degree or experience figure is claimed — she's listed simply as "Dentist."
- **Services:** the 10-service list keeps only what's confirmed — general/restorative dentistry, root canal, and teeth whitening from Dr. Zeeshan's professional listing; scaling, polishing, and tooth extraction from patient reviews; cosmetic dentistry, smile makeovers, veneers, and crowns directly evidenced by your own uploaded before/after photos. Services like braces, implants, or pediatric dentistry were **not** included since nothing publicly confirmed them.
- **Testimonials** are paraphrased (not copied) from the sentiment of real public patient reviews — painless extractions, thorough scaling, resolved toothaches — attributed to placeholder names since the original reviewers' names weren't provided to use.

## Notes on the uploaded images

- **Before & After:** 5 pairs were uploaded; **4 were used**. The 5th pair (`before5.png` / `after5.png`) was excluded — it carries a visible "CARIS_IE" watermark, indicating it's sourced from a different (Irish) dental practice's marketing material, not De Aura's own patient case. Using it here would have misrepresented someone else's clinical result as De Aura's.
- **Hero:** the clinic hallway/entrance photo. **Our Practice:** the waiting area photo showing the clinic's own signage and doctor names.
- **Gallery:** the two remaining clinic photos (treatment room, treatment in progress).
- **Doctors section:** no individually identifiable solo photos of Dr. Zeeshan Sadiq or Dr. Arifa Islam were among the uploads, so — rather than guessing which person in a group photo is which doctor — their section uses simple initials avatars with their names and roles in text. Real photos can be dropped in later without any layout changes.

## Notes for editing content

- **Clinic details, phone, hours, doctors, services, FAQs, testimonials, stats, gallery:** all live in `src/utils/data.js`.
- **Logo:** no official logo file was uploaded, so the Navbar and Footer use a generated abstract mark in the new palette. Swap in a real logo any time by replacing the inline SVG with an `<img>` tag.
- **WhatsApp fallback:** appears beneath the appointment form and pre-fills whatever the visitor has typed so far (name, service, date, time) into the WhatsApp message.
- **Google Map:** the embed URL in `GoogleMap.jsx` uses a text query built from the clinic address; replace with an exact Google-provided embed link once you have a verified Google Business listing pin.

## Accessibility & performance

- Semantic headings, labelled form fields, visible focus rings, `prefers-reduced-motion` support.
- Lazy-loaded map iframe and gallery images, no render-blocking assets beyond system/Google fonts.
- Fully responsive from small mobile widths up to large desktop screens.
