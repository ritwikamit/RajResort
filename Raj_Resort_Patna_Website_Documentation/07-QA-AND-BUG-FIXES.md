# QA, Bug Fixes & Launch Checklist

## Functional
- Navigation and responsive menu work.
- “Book a Stay” scrolls to the dedicated booking section.
- MakeMyTrip, Agoda and Guest Reservations open the correct URLs.
- Booking links are separate from Instagram, Facebook, Justdial and Google Maps.
- Phone, WhatsApp, directions and social links use verified destinations.
- Gallery/lightbox works with keyboard and touch.
- Forms, if present, validate and deliver to the approved recipient.
- 404 and missing-image states are graceful.

## Responsive and visual
Test 320, 375, 390, 768, 1024, 1280 and 1440+ CSS px. Check no overflow, hero crop, glass-panel contrast, touch target sizes, focus styles, sticky header overlap and image layout shift.

## Accessibility
Keyboard-only navigation, visible focus, logical headings, meaningful alt text, form labels/errors, contrast, reduced motion and accessible lightbox behavior.

## SEO/performance
Unique metadata, canonical, sitemap, robots, Open Graph, verified structured data, optimized hero image, lazy-loaded gallery, no placeholder copy or staging URLs, mobile Lighthouse and Core Web Vitals review.

## Security/release
HTTPS and redirects, security headers, dependency/secret scans, all external links tested, preview approved, DNS/domain verified, backup and maintenance owner agreed.

## Bug report template
ID/date; device/browser; page and reproduction steps; expected/actual result; screenshot; severity (blocker/high/medium/low); owner; fix commit; retest status.

## Launch blockers
Do not launch until contact/address, amenities, room categories, event services/capacities, image rights, privacy behavior and booking URLs are confirmed.
