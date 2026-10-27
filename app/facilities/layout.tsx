import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Banquet Hall in Patna | Function Hall & Event Venue - Raj Resort',
  description:
    'Shahi Darbar AC banquet hall in Patna, family function venue & event spaces across 3.5 acres. Features function hall for 150-500 guests, party venue, Ganga River-view dining, 25+ AC rooms, and 400+ car parking in Patna, Bihar.',
  keywords: [
    'banquet hall in Patna',
    'banquet hall in Patna Bihar',
    'function hall in Patna',
    'event venue in Patna',
    'event venue in Patna Bihar',
    'party venue in Patna',
    'family function venue in Patna',
    'AC banquet hall in Patna',
    'best resort in Patna',
    'birthday party venue in Patna',
  ],
  alternates: {
    canonical: 'https://rajresortpatna.com/facilities',
  },
  openGraph: {
    title: 'Banquet Hall in Patna | Function Hall & Event Venue - Raj Resort',
    description:
      'Shahi Darbar AC banquet hall in Patna, party venue & family function spaces across 3.5 acres. 400+ car parking, Ganga River-view dining, and continuous generator backup.',
    url: 'https://rajresortpatna.com/facilities',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Venue&FacilitiesHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - AC Banquet Hall, Function Hall & Event Venue in Patna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall in Patna | Function Hall & Event Venue - Raj Resort',
    description:
      'Shahi Darbar AC banquet hall in Patna, party venue & family function spaces across 3.5 acres. 400+ car parking, Ganga River-view dining, and continuous generator backup.',
    images: ['https://rajresortpatna.com/images/dedicated-pages/Venue&FacilitiesHero.webp'],
  },
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Venue Facilities & Infrastructure', url: 'https://rajresortpatna.com/facilities' },
        ]}
      />
      {children}
    </>
  );
}
