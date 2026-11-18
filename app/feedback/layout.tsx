import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest Feedback & Reviews | Raj Resort Patna',
  description:
    'Share your celebration and wedding guest experience at Raj Resort Patna. Review our 3.5-acre lawns, AC banquet hall, catering, and hospitality on Google Maps.',
  alternates: {
    canonical: 'https://rajresortpatna.com/feedback',
  },
  openGraph: {
    title: 'Guest Feedback & Reviews | Raj Resort Patna',
    description:
      'Share your wedding and celebration experience at Raj Resort Patna. Post your rating and review on Google Maps.',
    url: 'https://rajresortpatna.com/feedback',
  },
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
