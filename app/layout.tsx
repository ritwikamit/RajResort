import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AnimatedBackgroundCanvas } from '@/components/AnimatedBackgroundCanvas';

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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 antialiased selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <AnimatedBackgroundCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
