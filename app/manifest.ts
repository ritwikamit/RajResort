import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raj Resort Patna | Wedding & Event Venue',
    short_name: 'Raj Resort',
    description: '3.5-Acre Wedding Lawn, Banquet Hall & Celebration Venue in Patliputra, Patna.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFAF3',
    theme_color: '#F62440',
    icons: [
      {
        src: '/icon.png?v=2',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png?v=2',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.png?v=2',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
