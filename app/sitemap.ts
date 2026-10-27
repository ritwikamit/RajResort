import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajresortpatna.com';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero-poster.webp`,
        `${baseUrl}/images/og-image.jpg`,
      ],
    },
    {
      url: `${baseUrl}/weddings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/images/dedicated-pages/Wedding&LawnHero.webp`,
        `${baseUrl}/images/spaces/starlit-celebration-lawn.webp`,
      ],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/images/dedicated-pages/GallaryHero.webp`,
        `${baseUrl}/images/venue-02.webp`,
      ],
    },
    {
      url: `${baseUrl}/facilities`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/dedicated-pages/Venue&FacilitiesHero.webp`,
      ],
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/dedicated-pages/Location&mapsHero.webp`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/dedicated-pages/ContactReceptionHero.webp`,
      ],
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
