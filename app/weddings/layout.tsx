import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Wedding Lawns & Banquets in Patna | Raj Resort Patliputra',
  description:
    'Host grand weddings across 3.5 acres in Patliputra, Patna. Starlit celebration lawn for 400 to 1,200+ guests, 150-ft floral walkway, royal mandap stages, AC banquet hall & 400+ car parking.',
  alternates: {
    canonical: 'https://rajresortpatna.com/weddings',
  },
  openGraph: {
    title: 'Wedding Lawns & Celebration Spaces | Raj Resort Patna',
    description:
      '3.5-acre luxury wedding venue near Kurji Mor, Patliputra, Patna. Open celebration lawn, 150-ft illuminated floral walkway, and royal mandap stage.',
    url: 'https://rajresortpatna.com/weddings',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Wedding&LawnHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Grand Wedding Lawns and Banquet Spaces',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Lawns & Banquets in Patna | Raj Resort Patna',
    description:
      '3.5-acre luxury wedding venue near Kurji Mor, Patliputra, Patna. Open celebration lawn, 150-ft illuminated floral walkway, and royal mandap stage.',
    images: ['https://rajresortpatna.com/images/dedicated-pages/Wedding&LawnHero.webp'],
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Wedding Lawns & Banquets', url: 'https://rajresortpatna.com/weddings' },
        ]}
      />
      {children}
    </>
  );
}
