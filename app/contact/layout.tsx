import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Contact Reception & Booking Inquiries | Raj Resort Patna',
  description:
    'Contact Raj Resort Patna front desk at +91 7360800001 or email Rajresortpatna@gmail.com. Check wedding dates, venue packages, and schedule an on-site property tour in Patliputra, Patna.',
  alternates: {
    canonical: 'https://rajresortpatna.com/contact',
  },
  openGraph: {
    title: 'Contact Reception & Booking Inquiries | Raj Resort Patna',
    description:
      'Inquire about wedding lawn availability and booking dates at Raj Resort Patna. 24/7 reception and WhatsApp desk at Kurji Mor, Patliputra.',
    url: 'https://rajresortpatna.com/contact',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/dedicated-pages/ContactReceptionHero.webp',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Front Desk Contact and Booking Inquiries',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Reception & Booking Inquiries | Raj Resort Patna',
    description:
      'Inquire about wedding lawn availability and booking dates at Raj Resort Patna. 24/7 reception and WhatsApp desk at Kurji Mor, Patliputra.',
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
