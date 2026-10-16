# Raj Resort Patna – Luminous Glassmorphic Light Redesign

A luxury, light-themed digital presence for Raj Resort Patna, transforming the estate into a luminous glassmorphic experience. The aesthetic pairs soft ivory and warm champagne cream with deep ruby details matching the official crimson crest, featuring a lucid frosted glass top bar, full-width scenic visual showcases, accessible lightbox gallery, and strict rectilinear anti-cylinder architecture.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during the alignment phase and govern this transformation:
>
> - **Light Theme & Palette**: Soft ivory (`#FAF7F2`) and champagne cream (`#F5EFEB`) canvas paired with deep ruby accents (`#941016`) precisely matching the official red Raj Resort circular logo.
> - **Glassmorphic Atmosphere**: High-translucency frosted glass surfaces (`bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(148,16,22,0.06)]`) with luminous ambient specular highlights and crystalline borders.
> - **Visual Presentation**: Full-width panoramic scenic showcase with an interactive modal lightbox gallery and category filters.
> - **Lucid Top Navigation**: Crystal-clear, luminous glass navigation bar with ultra-crisp typography, single-line links, and prominent brand crest.
> - **Anti-Cylinder Mandate Preserved**: Zero pill buttons, zero pill badges, and zero text wrapped in cylindrical enclosures. All interactive elements use clean architectural cuts (`rounded-none` or subtle `rounded-sm`), gold hairline dividers, and unboxed metadata with `·` and `/` separators.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Raj Resort Patna as a premier wedding and boutique hospitality estate in Kurji Mor / Patliputra, highlighting grand starlit celebration lawns, ceremonial chandelier pergolas, air-conditioned banquets, and comfortable guest rooms.
- **Target Audience**: Wedding couples, families planning receptions or sangeet functions, corporate event organizers, and outstation travelers seeking peaceful, high-quality stays in Patna.
- **Key Value**: Delivers immediate booking access via dedicated external partners (MakeMyTrip, Agoda, Guest Reservations), direct phone and WhatsApp contact, clear travel directions, and property visualization through an accessible gallery.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme Tokens
- **Background Canvas**: Soft Ivory Alabaster (`#FAF7F2`) with subtle champagne radial ambient gradients (`#F5EFEB` to `#EFE6DC`).
- **Glassmorphic Panels**: Luminous frosted glass (`bg-white/70 to bg-white/85`, `backdrop-blur-xl`, `border border-white/80`, `shadow-[0_10px_35px_rgba(148,16,22,0.06)]`).
- **Brand Accents**: Deep Royal Crimson / Ruby (`#941016` / `#7D0E13`) drawn directly from the official circular emblem, paired with warm champagne brass (`#C5A059` / `#D4AF37`).
- **Typography**: Refined serif headlines (`Cormorant Garamond` / `Cinzel` / `Times New Roman`) paired with legible modern body copy (`Plus Jakarta Sans`).
- **Zero-Cylinder Discipline**: No `rounded-full` pills or cylinders. All buttons, tabs, and tags use crisp rectangular geometry, fine borders, and generous tracking.

### Section Layout & Flow
1. **Lucid Navigation Bar**: Glassmorphic frosted header adhering to the strict 3-zone contract (Zone 1: Royal Emblem wordmark; Zone 2: 5 single-line nav links; Zone 3: Primary "Book a Stay" CTA).
2. **Luminous Hero Showcase**: Full-width panoramic visual carrier depicting the evening celebration lawn and chandelier entrance pergola, framed by frosted glass floating highlight cards and clear action buttons.
3. **Resort Introduction & Key Milestones**: Unboxed highlights (300–1,200+ lawn capacity, 24/7 generator backup, split AC, valet parking) with direct phone and WhatsApp contact strips.
4. **Accommodations & Guest Rooms**: Rectangular segmented tabs for Classic Double Room, Deluxe King Room, and Royal Family Suite, featuring verified amenity checklists and occupancy specifications.
5. **Wedding Venues & Banquets**: Showcase of The Grand Royal Lawn, Illuminated Floral Pergola, Shahi Darbar Indoor Hall, and Bridal Preparation Suites.
6. **Scenic Full-Width Gallery with Modal Lightbox**: Category-filtered image grid (`Weddings & Lawns`, `Accommodations`, `Banquets & Receptions`) with accessible keyboard lightbox (`Esc`, `←`, `→`).
7. **Verified Facilities Grid**: Luminous glass cards detailing power backup, parking, Wi-Fi, housekeeping, and climate control.
8. **Dedicated External Booking Section**: Strictly separated MakeMyTrip, Agoda, and Guest Reservations cards with mandatory partner disclaimers.
9. **Location & Directions**: Google Maps link, GPS coordinates, and proximity matrix (Patna Airport 9.2 km, Patliputra Junction 3.8 km, Patna Junction 7.5 km, Kurji Mor 150 m).
10. **Direct Contact & Quote Request Form**: Client-validated inquiry form with direct telephone and WhatsApp links.
11. **Dedicated "Follow Us" Section**: Separate social cards for Instagram and Facebook.
12. **Dedicated "Other Listings" Section**: Verified Justdial Patna listing.
13. **Lucid Footer & Privacy Notice**: Property NAP details, external booking clarification, and Privacy Policy modal.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Light Theme with Deep Ruby Branding**
  - *Chosen*: Shift from the initial dark scheme to an ethereal, luminous soft-ivory canvas accented by the royal red from the logo.
  - *Why*: Directly fulfills the user's request, brightens the daylight presence of the resort, and creates strong contrast for the deep red emblem.
- **Decision 2: High-Translucency Glassmorphism with Fallbacks**
  - *Chosen*: Frosted glass layers utilizing high-opacity white base (`bg-white/80`) and heavy backdrop blur (`backdrop-blur-xl`), with solid light borders for guaranteed legibility across all displays.
  - *Why*: Satisfies WCAG AA contrast standards while achieving the requested modern glass aesthetic.
- **Decision 3: Dedicated External Booking Portal Separation**
  - *Chosen*: Keeping MakeMyTrip, Agoda, and Guest Reservations in an isolated section distinct from social channels and local directories.
  - *Why*: Ensures strict PRD compliance, transparent booking routing, and prevents guest confusion regarding payment handling.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Root Layout (app/layout.tsx)                    │
│      [Google Fonts: Cormorant Garamond + Plus Jakarta Sans / CSS vars] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Home Page (app/page.tsx)                       │
│                     [Luminous Light Theme Canvas]                      │
├────────────────────────────────────────────────────────────────────────┤
│ ├── Header (components/Header.tsx) [Lucid Glassmorphic Top Bar]       │
│ ├── HeroSection (components/HeroSection.tsx) [Luminous Scenic Visual] │
│ ├── ResortIntro [Quick Phone & WhatsApp Coordination Strip]            │
│ ├── RoomsSection (components/RoomsSection.tsx) [Rectilinear Tabs]     │
│ ├── WeddingVenuesSection (components/WeddingVenuesSection.tsx)        │
│ ├── GallerySection & GalleryModal [Scenic Grid + Lightbox]             │
│ ├── FacilitiesSection (components/FacilitiesSection.tsx) [Glass Grid] │
│ ├── BookingProvidersSection [Strictly Separated MMT, Agoda, GR]       │
│ ├── DirectionsSection [Google Maps + Verified Distances Table]         │
│ ├── ContactEnquirySection [Phone + WhatsApp + Validated Form]          │
│ ├── FollowUsSection [Instagram + Facebook Cards]                       │
│ ├── OtherListingsSection [Justdial Verified Card]                      │
│ ├── Footer (components/Footer.tsx) [Wordmark + Navigation Mirror]     │
│ └── PrivacyPolicyModal (components/PrivacyPolicyModal.tsx)            │
└────────────────────────────────────────────────────────────────────────┘
```

### Component State & Handler Mapping
- **`Header.tsx`**: Mobile navigation drawer state toggle, active scroll spy anchors, zero-cylinder CTA button.
- **`RoomsSection.tsx`**: Active room selection (`selectedRoomId`), dynamic feature list, responsive spec rendering.
- **`WeddingVenuesSection.tsx`**: Active venue selector (`activeVenueId`), dynamic capacity updates, direct inquiry routing.
- **`GallerySection.tsx` & `GalleryModal.tsx`**: Category filter state, open/close lightbox index, keyboard events (`Escape`, `ArrowLeft`, `ArrowRight`).
- **`ContactEnquirySection.tsx`**: Form inputs state, name and phone validation, submission confirmation screen, automated WhatsApp inquiry link generation.
- **`PrivacyPolicyModal.tsx`**: Modal visibility toggle, keyboard dismiss handler.

---

## 5. Verification & Acceptance Criteria
- Full light theme active with soft ivory/champagne background and deep ruby brand accents.
- Top navigation bar has a lucid, luminous frosted glass appearance with crisp legibility.
- Glassmorphic panels throughout with specular highlights, fine borders, and high translucency.
- Strictly zero cylindrical or pill shapes containing text across the entire interface.
- Booking provider cards remain isolated from social media and business directory links.
- Verified build and lint validation via `compile_applet` and `lint_applet`.
