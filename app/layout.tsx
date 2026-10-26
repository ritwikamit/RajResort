import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AnimatedBackgroundCanvas } from '@/components/AnimatedBackgroundCanvas';
import { InitialPageLoader } from '@/components/InitialPageLoader';

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

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rajresortpatna.com'),
  title: {
    default: 'Best Resort in Patna | Raj Resort - Luxury Wedding Lawns & Banquets',
    template: '%s | Raj Resort Patna - Best Wedding Resort in Patna',
  },
  description:
    'Raj Resort Patna is the best wedding resort and celebration venue in Patna, located at Kurji Mor, Patliputra. Featuring grand starlit open-air celebration lawns, royal banquet halls, catering, and luxurious event spaces.',
  keywords: [
    'Best Resort in Patna',
    'Raj Resort Patna',
    'Best Wedding Resort in Patna',
    'Best Marriage Lawn in Patna',
    'Best Banquet Hall in Patna',
    'Luxury Wedding Venue Patliputra Patna',
    'Marriage Hall near Kurji Mor Patna',
    'Celebration Lawn Patna',
    'Marriage Hall in Patna',
    'Top Resort in Patna for Marriage',
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
    title: 'Best Resort in Patna | Raj Resort - Luxury Wedding Lawns & Banquets',
    description:
      'Premier wedding resort and grand celebration lawns in Kurji Mor, Patliputra, Patna. Starlit lawns, illuminated pergolas, and AC banquet halls for memorable weddings.',
    url: 'https://rajresortpatna.com',
    siteName: 'Raj Resort Patna',
    images: [
      {
        url: 'https://rajresortpatna.com/images/landingpage3.png',
        width: 1200,
        height: 630,
        alt: 'Raj Resort Patna - Best Wedding Lawn and Celebration Venue in Patna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Resort in Patna | Raj Resort Patna',
    description:
      'Premier wedding resort and grand celebration lawns in Kurji Mor, Patliputra, Patna. Grand starlit lawns, royal banquet halls, and unforgettable celebrations.',
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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${alexBrush.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#FFFAF3" />
      </head>
      <body className="bg-[#FFFAF3] text-stone-900 antialiased selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <InitialPageLoader />
          <AnimatedBackgroundCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
