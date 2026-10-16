# Technical Requirements Document (TRD)

## Recommended stack
Next.js App Router + TypeScript + Tailwind CSS, accessible component primitives, optimized local images, GitHub, and Vercel. A simpler static React/Vite implementation is acceptable if it better fits the existing project. Avoid overengineering.

## Architecture
Static-first pages, typed local content, server/static metadata, local optimized images. Booking destinations are external links only. No database or booking API is required for Phase 1. Use `tel:` and a verified WhatsApp click-to-chat URL. Optional enquiry form needs server-side validation, rate limiting and spam protection.

## Routes
`/`, `/about`, `/rooms`, `/gallery`, `/facilities`, `/contact`, `/privacy`; optional `/events` only if confirmed.

## Components
Header/navigation, hero, highlights, room cards, event section if confirmed, gallery/lightbox, facility list, `BookingProvidersSection`, `SocialLinks`, `DirectionsSection`, `OtherListingsLinks`, contact actions, footer.

## Link classification
Centralize destinations with a category: `booking`, `social`, `directions`, or `directory`. Render each category in its own UI section.
- Booking: MakeMyTrip, Agoda, Guest Reservations
- Social: Instagram, Facebook
- Directions: supplied Google Maps place
- Directory: Justdial

Open external links in new tabs only where useful and set `rel="noopener noreferrer"`. Test the final URL for every CTA.

## Content data
No database initially. Keep property details, room categories, amenities, gallery assets, booking providers, social links, directory links and SEO metadata in typed modules. Publish only owner-confirmed fields.

## Performance
Use WebP/AVIF derivatives, responsive image sizes, explicit dimensions/aspect ratios, lazy-load below-fold images and preload only the real hero asset. Avoid heavy autoplay video and unnecessary client JavaScript. Respect `prefers-reduced-motion`. Target good Core Web Vitals; Lighthouse 90+ is a goal, not a guarantee.

## SEO/deployment
Unique titles/descriptions, canonical URL, sitemap, robots, Open Graph metadata and valid structured data using verified fields only. Preview deployment for owner approval before production. Run install, lint, typecheck, build and link checks in CI. Keep production secrets out of Git and never expose secrets via `NEXT_PUBLIC_*`.

## Future scope
Official booking engine/API, CMS, CRM/event leads and consent-based analytics require explicit approval and separate requirements.
