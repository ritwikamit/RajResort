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
    { media: '(prefers-color-scheme: light)', color: '#8E1EA2' },
    { media: '(prefers-color-scheme: dark)', color: '#16081C' },
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
  title: 'Raj Resort Patna | Grand Weddings, Stays & Banquets',
  description: 'Official website for Raj Resort Patna, located at Kurji Mor, Patliputra. Explore guest rooms, grand wedding lawns, banquet facilities, location directions, and verified booking partners.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Raj Resort Patna | Grand Weddings, Stays & Banquets',
    description: 'Official website for Raj Resort Patna, located at Kurji Mor, Patliputra. Explore guest rooms, grand wedding lawns, banquet facilities, location directions, and verified booking partners.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Resort Patna | Grand Weddings, Stays & Banquets',
    description: 'Official website for Raj Resort Patna, located at Kurji Mor, Patliputra. Explore guest rooms, grand wedding lawns, banquet facilities, location directions, and verified booking partners.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${alexBrush.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#FAF7F9] text-stone-900 antialiased selection:bg-[#FFC0DE] selection:text-[#8E1EA2] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <InitialPageLoader />
          <AnimatedBackgroundCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
