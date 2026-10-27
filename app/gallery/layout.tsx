import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Wedding Photo & Video Gallery | Raj Resort Patna',
  description:
    'Browse authentic celebration photographs and viral wedding reels at Raj Resort Patna. Starlit celebration lawns, 150-ft floral arrival walkways, Varmala stages, and royal wedding ceremonies.',
  alternates: {
    canonical: 'https://rajresortpatna.com/gallery',
  },
  openGraph: {
    title: 'Wedding Photo & Video Gallery | Raj Resort Patna',
    description:
      'Real wedding moments, viral reels, and celebration photographs from Raj Resort Patna near Kurji Mor, Patliputra.',
    url: 'https://rajresortpatna.com/gallery',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/GallaryHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Celebration Photo and Video Gallery',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Photo & Video Gallery | Raj Resort Patna',
    description:
      'Real wedding moments, viral reels, and celebration photographs from Raj Resort Patna near Kurji Mor, Patliputra.',
    images: ['https://rajresortpatna.com/images/dedicated-pages/GallaryHero.webp'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Photo & Video Gallery', url: 'https://rajresortpatna.com/gallery' },
        ]}
      />
      {children}
    </>
  );
}
