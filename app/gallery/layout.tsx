import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Wedding Lawns & Banquet Hall Photos | Photo Gallery',
  description:
    'Explore real photos and videos of wedding lawns, marriage stages, AC banquet halls, mandap decor, and celebration setups at Raj Resort Patna, Bihar near Kurjee Mor.',
  keywords: [
    'wedding lawn photos Patna',
    'marriage hall in Patna photos',
    'banquet hall in Patna pictures',
    'wedding venue in Patna gallery',
    'Raj Resort Patna photos',
    'marriage lawn pictures Patna',
  ],
  alternates: {
    canonical: 'https://rajresortpatna.com/gallery',
  },
  openGraph: {
    title: 'Wedding Lawns & Banquet Hall Photos | Photo Gallery | Raj Resort Patna',
    description:
      'Real wedding moments, viral reels, and celebration photographs from Raj Resort Patna near Kurjee Mor, Patliputra.',
    url: 'https://rajresortpatna.com/gallery',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/GallaryHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Celebration Photo and Video Gallery of Wedding Lawns',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Lawns & Banquet Hall Photos | Photo Gallery | Raj Resort Patna',
    description:
      'Real wedding moments, viral reels, and celebration photographs from Raj Resort Patna near Kurjee Mor, Patliputra.',
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
