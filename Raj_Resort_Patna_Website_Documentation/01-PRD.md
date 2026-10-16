# Product Requirements Document (PRD): Raj Resort Patna

## Product summary
Create a premium, fast, mobile-first website for Raj Resort in the Kurji Mor / Patliputra area of Patna, Bihar. Present verified property information and photography, help guests contact the resort and find directions, and route room bookings to external providers.

## Goals
- Establish a credible official digital presence.
- Showcase verified accommodation, facilities and event/banquet offerings where applicable.
- Increase calls, WhatsApp enquiries, direction requests and booking-provider clicks.
- Improve branded and local search visibility.
- Keep booking-provider links separate from social and directory links.

## Audience
Leisure and family travellers, business visitors, people comparing rooms and amenities, and families/event organisers enquiring about functions.

## Phase 1 pages
Home, About, Rooms & Stay, Gallery, Facilities, Location & Contact, Privacy Policy, 404. Add Events & Banquets only after the owner confirms current services and capacities.

## Key features
- Hero with approved property image and clear “Book a Stay” / “View Gallery” actions.
- Verified room categories and facilities.
- Gallery with accessible lightbox.
- Dedicated “Book a Stay” section with MakeMyTrip, Agoda and Guest Reservations cards.
- Separate “Follow Us” section for Instagram and Facebook.
- Separate directions section for Google Maps and “Other Listings” for Justdial.
- Phone/WhatsApp CTA using a verified contact number.
- Optional enquiry form only if the owner confirms recipient, handling and privacy wording.

## Booking separation requirement
Do not mix booking links with Instagram, Facebook, Justdial or Maps. Booking cards should be clearly labelled as external providers and open in a new tab with `rel="noopener noreferrer"`. Include: “Rates, availability, payment and cancellation terms are managed by the selected booking provider.” Do not imply a booking is confirmed on the resort website.

## Out of scope
No custom booking engine, inventory database, payment gateway, guest accounts, third-party booking iframe, or CMS unless separately approved. No fabricated reviews, amenities, offers or prices. No hotlinking or unauthorized reuse of third-party photos.

## Success measures
Core Web Vitals, Lighthouse accessibility/performance, booking-link clicks, calls, WhatsApp clicks, direction requests, enquiry conversions, and no broken links or launch-blocking defects.

## Acceptance criteria
Responsive from small mobile through wide desktop; all external links verified; booking section visibly separate; contact details and content owner-approved; photo rights recorded; metadata/sitemap/robots/canonical configured; build, typecheck/lint, link and accessibility checks pass.
