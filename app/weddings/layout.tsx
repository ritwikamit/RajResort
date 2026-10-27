import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Wedding Venue in Patna | Marriage Hall & Wedding Lawn - Raj Resort',
  description:
    'Best wedding venue & marriage hall in Patna across 3.5 acres. Featuring open wedding lawns for 400-1,200+ guests, wedding reception venue, 150-ft floral walkway, royal mandap stages, and 400+ car parking in Patna, Bihar.',
  keywords: [
    'wedding venue in Patna',
    'best wedding venue in Patna',
    'marriage hall in Patna',
    'wedding lawn in Patna',
    'resort for marriage in Patna',
    'marriage venue in Patna',
    'wedding reception venue in Patna',
    'wedding party venue in Patna',
    'wedding resort in Patna',
    'engagement ceremony venue in Patna',
    'wedding venue in Patna Bihar',
    'wedding venue near Kurjee Mor Patna',
  ],
  alternates: {
    canonical: 'https://rajresortpatna.com/weddings',
  },
  openGraph: {
    title: 'Wedding Venue in Patna | Marriage Hall & Wedding Lawn - Raj Resort',
    description:
      '3.5-acre luxury wedding venue & marriage hall in Patna, Bihar near Kurjee Mor. Open wedding lawn, 150-ft illuminated floral walkway, and royal mandap stage.',
    url: 'https://rajresortpatna.com/weddings',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/Wedding&LawnHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Best Wedding Venue, Marriage Hall & Lawn in Patna Bihar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Venue in Patna | Marriage Hall & Wedding Lawn - Raj Resort',
    description:
      '3.5-acre luxury wedding venue & marriage hall in Patna, Bihar near Kurjee Mor. Open wedding lawn, 150-ft illuminated floral walkway, and royal mandap stage.',
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
