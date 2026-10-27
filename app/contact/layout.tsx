import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Book Best Wedding Venue in Patna | Contact & Booking',
  description:
    'Book your date at Raj Resort Patna, premier wedding venue & banquet hall in Patna, Bihar. Call +91 7360800001 or WhatsApp for marriage hall dates, lawn booking & package inquiries.',
  keywords: [
    'Raj Resort Patna booking',
    'wedding venue in Patna contact',
    'marriage hall in Patna booking',
    'banquet hall enquiry Patna',
    'best wedding venue in Patna booking',
    'resort for marriage in Patna contact',
  ],
  alternates: {
    canonical: 'https://rajresortpatna.com/contact',
  },
  openGraph: {
    title: 'Book Best Wedding Venue in Patna | Contact Raj Resort Patliputra',
    description:
      'Inquire about wedding lawn availability and booking dates at Raj Resort Patna. 24/7 reception desk at Kurji Mor, Patliputra, Patna.',
    url: 'https://rajresortpatna.com/contact',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/ContactReceptionHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Booking Best Wedding Venue and Banquet Hall in Patna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Best Wedding Venue in Patna | Contact Raj Resort Patliputra',
    description:
      'Inquire about wedding lawn availability and booking dates at Raj Resort Patna. 24/7 reception desk at Kurji Mor, Patliputra, Patna.',
    images: ['https://rajresortpatna.com/images/dedicated-pages/ContactReceptionHero.webp'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Contact Reception & Booking', url: 'https://rajresortpatna.com/contact' },
        ]}
      />
      {children}
    </>
  );
}
