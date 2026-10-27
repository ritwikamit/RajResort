import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Resort Near Kurjee Mor & P&M Mall Patna | Route Directions - Raj Resort',
  description:
    'Driving directions & map to Raj Resort near Kurjee Mor & P&M Mall, Patliputra, Patna, Bihar. Accessible via Ganga Marine Drive and Patliputra Station for weddings and events.',
  keywords: [
    'resort near Kurjee Mor Patna',
    'resort near P&M Mall Patna',
    'wedding venue near Kurjee Mor Patna',
    'resort in Patna Bihar',
    'wedding venue in Patna Bihar',
    'marriage hall in Patna Bihar',
    'Raj Resort Patna location',
    'resort near Kurji Mor Patliputra',
  ],
  alternates: {
    canonical: 'https://rajresortpatna.com/location',
  },
  openGraph: {
    title: 'Resort Near Kurjee Mor & P&M Mall Patna | Route Directions - Raj Resort',
    description:
      'Map & directions to Raj Resort Patna near Kurjee Mor & P&M Mall, Patliputra. Convenient riverfront access via Ganga Marine Drive.',
    url: 'https://rajresortpatna.com/location',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Location&mapsHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Location Map near Kurjee Mor and P&M Mall Patliputra',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Near Kurjee Mor & P&M Mall Patna | Route Directions - Raj Resort',
    description:
      'Map & directions to Raj Resort Patna near Kurjee Mor & P&M Mall, Patliputra. Convenient riverfront access via Ganga Marine Drive.',
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
