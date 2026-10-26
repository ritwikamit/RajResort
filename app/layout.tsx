import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, Great_Vibes } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AnimatedBackgroundCanvas } from '@/components/AnimatedBackgroundCanvas';
import { InitialPageLoader } from '@/components/InitialPageLoader';
import { GlobalCookieManager } from '@/components/GlobalCookieManager';
import { StructuredData } from '@/components/StructuredData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F62440' },
    { media: '(prefers-color-scheme: dark)', color: '#181210' },
  ],
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rajresortpatna.com'),
  title: {
    default: 'Raj Resort Patna | Wedding & Event Venue in Patliputra, Patna',
    template: '%s | Raj Resort Patna',
  },
  description:
    'Raj Resort Patna is a 3.5-acre wedding and event venue near Kurji Mor, Patliputra featuring open celebration lawns, an AC banquet hall, Ganga River-view dining, 25+ guest rooms, and parking for 400+ cars.',
  keywords: [
    'wedding venue in Patna',
    'marriage lawn in Patna',
    'banquet hall in Patna',
    'resort for wedding in Patna',
    'Raj Resort Patna',
    'wedding lawn Patliputra Patna',
    'marriage hall near Kurji Mor',
    'engagement venue Patna',
    'reception venue Patna',
    'event lawn Patna',
  ],
  authors: [{ name: 'Raj Resort Patna' }],
  creator: 'Raj Resort Patna',
  publisher: 'Raj Resort Patna',
  alternates: {
    canonical: 'https://rajresortpatna.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Raj Resort Patna | Wedding & Event Venue in Patliputra, Patna',
    description:
      '3.5-acre wedding and celebration venue in Patliputra, Patna. Open celebration lawns for 400 to 1,200+ guests, AC banquet hall, Ganga River-view dining, and parking for 400+ cars.',
    url: 'https://rajresortpatna.com',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/landingpage3.png',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - 3.5 Acre Wedding Lawn and Event Venue in Patna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Resort Patna | Wedding & Event Venue in Patliputra, Patna',
    description:
      '3.5-acre wedding and celebration venue in Patliputra, Patna. Open celebration lawns for 400 to 1,200+ guests, AC banquet hall, Ganga River-view dining, and parking for 400+ cars.',
    images: ['https://rajresortpatna.com/images/landingpage3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${greatVibes.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#FFFAF3" />
        <meta name="geo.position" content="25.6391525;85.1102531" />
        <meta name="geo.placename" content="Patliputra, Patna, Bihar, India" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="ICBM" content="25.6391525, 85.1102531" />
        <StructuredData />
      </head>
      <body className="bg-[#FFFAF3] text-stone-900 antialiased selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <InitialPageLoader />
          <AnimatedBackgroundCanvas />
          {children}
          <GlobalCookieManager />
        </ThemeProvider>
      </body>
    </html>
  );
}
