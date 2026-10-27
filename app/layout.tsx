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
    default: 'Raj Resort Patna | Wedding Venue & Luxury Event Resort in Patna, Bihar',
    template: '%s | Raj Resort Patna',
  },
  description:
    'Raj Resort Patna is a premier 3.5-acre wedding resort and event venue in Patna, Bihar near Kurjee Mor & P&M Mall, Patliputra. Features starlit celebration lawns, an AC banquet hall, Ganga River-view dining, 25+ rooms, and 400+ car parking.',
  keywords: [
    'Raj Resort Patna',
    'best resort in Patna',
    'wedding venue in Patna',
    'best wedding venue in Patna',
    'wedding resort in Patna',
    'marriage hall in Patna',
    'banquet hall in Patna',
    'resort for marriage in Patna',
    'wedding lawn in Patna',
    'resort in Patna Bihar',
    'event venue in Patna Bihar',
    'resort near Kurjee Mor Patna',
    'resort near P&M Mall Patna',
    'wedding venue near Kurjee Mor Patna',
    'marriage lawn Patliputra Patna',
  ],
  authors: [{ name: 'Raj Resort Patna' }],
  creator: 'Raj Resort Patna',
  publisher: 'Raj Resort Patna',
  alternates: {
    canonical: 'https://rajresortpatna.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Raj Resort Patna | Wedding Venue & Luxury Event Resort in Patna, Bihar',
    description:
      '3.5-acre premier wedding resort and celebration venue in Patna, Bihar near Kurjee Mor & P&M Mall. Starlit celebration lawns for 400 to 1,200+ guests, AC banquet hall, Ganga River-view dining, and 400+ car parking.',
    url: 'https://rajresortpatna.com',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Premier Wedding Resort and Event Venue in Patna Bihar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Resort Patna | Wedding Venue & Luxury Event Resort in Patna, Bihar',
    description:
      '3.5-acre premier wedding resort and celebration venue in Patna, Bihar near Kurjee Mor & P&M Mall. Starlit celebration lawns for 400 to 1,200+ guests, AC banquet hall, Ganga River-view dining, and 400+ car parking.',
    images: ['https://rajresortpatna.com/images/og-image.jpg'],
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
  verification: {
    google: 'google6150f36a1a21fac7',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  category: 'Wedding & Event Venue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${greatVibes.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="preload" as="image" href="/images/hero-poster.webp" type="image/webp" fetchPriority="high" />
        <meta name="theme-color" content="#FFFAF3" />
        <meta property="og:image" content="https://rajresortpatna.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://rajresortpatna.com/images/og-image.jpg" />
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
