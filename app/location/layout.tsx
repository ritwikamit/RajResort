import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Location & Map Directions to Raj Resort | Kurji Mor, Patna',
  description:
    'Driving route and map directions to Raj Resort near Gate No. 62, Kurji Mor, Patliputra, Patna 800010. Direct access via Ganga Marine Drive, Patliputra Station (12 min), and Patna Airport.',
  alternates: {
    canonical: 'https://rajresortpatna.com/location',
  },
  openGraph: {
    title: 'Location & Route Directions | Raj Resort Patna',
    description:
      'Driving directions to Raj Resort Patna near Gate No. 62, Kurji Mor, Patliputra. Convenient access via Ganga Riverfront Marine Drive.',
    url: 'https://rajresortpatna.com/location',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Location&mapsHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Location and Map Directions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location & Route Directions | Raj Resort Patna',
    description:
      'Driving directions to Raj Resort Patna near Gate No. 62, Kurji Mor, Patliputra. Convenient access via Ganga Riverfront Marine Drive.',
    images: ['https://rajresortpatna.com/images/dedicated-pages/Location&mapsHero.webp'],
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Location & Route Directions', url: 'https://rajresortpatna.com/location' },
        ]}
      />
      {children}
    </>
  );
}
