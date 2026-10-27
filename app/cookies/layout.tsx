import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Cookie Policy & Consent Settings | Raj Resort Patna',
  description:
    'Read the Raj Resort Patna Cookie Policy and manage your tracking preferences for a smooth, secure, and privacy-respecting website browsing experience.',
  alternates: {
    canonical: 'https://rajresortpatna.com/cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://rajresortpatna.com' },
          { name: 'Cookie Policy', url: 'https://rajresortpatna.com/cookies' },
        ]}
      />
      {children}
    </>
  );
}
