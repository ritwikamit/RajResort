import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Venue Facilities & Infrastructure | Raj Resort Patna',
  description:
    'Comprehensive wedding infrastructure in Patliputra, Patna: dedicated on-site parking for 400+ cars, 25+ AC guest rooms, Ganga River-view dining, continuous generator backup & valet assistance.',
  alternates: {
    canonical: 'https://rajresortpatna.com/facilities',
  },
  openGraph: {
    title: 'Venue Facilities & Infrastructure | Raj Resort Patna',
    description:
      'Explore facilities at Raj Resort Patna: 400+ car parking, 25+ air-conditioned guest rooms, Ganga River-view dining, and heavy-duty continuous generator backup.',
    url: 'https://rajresortpatna.com/facilities',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Venue&FacilitiesHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Banquet Facilities and Infrastructure',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venue Facilities & Infrastructure | Raj Resort Patna',
    description:
      'Explore facilities at Raj Resort Patna: 400+ car parking, 25+ air-conditioned guest rooms, Ganga River-view dining, and heavy-duty continuous generator backup.',
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
