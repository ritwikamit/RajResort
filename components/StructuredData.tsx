import React from 'react';
import { RESORT_DATA } from '@/data/resort-data';

export const StructuredData: React.FC = () => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Primary Event Venue & Lodging Business Entity
      {
        '@type': ['EventVenue', 'LodgingBusiness'],
        '@id': 'https://rajresortpatna.com/#venue',
        name: 'Raj Resort Patna',
        alternateName: [
          'Raj Resort',
          'Raj Resort Patliputra',
          'Raj Resort Wedding Lawn Patna',
          'Raj Resort Banquet Hall Patna',
        ],
        url: 'https://rajresortpatna.com',
        logo: 'https://rajresortpatna.com/icon.png',
        image: [
          'https://rajresortpatna.com/images/spaces/starlit-celebration-lawn.webp',
          'https://rajresortpatna.com/images/venue-26.jpg',
          'https://rajresortpatna.com/images/venue-02.jpg',
          'https://rajresortpatna.com/images/venue-08.jpg',
        ],
        description:
          'Raj Resort Patna is a 3.5-acre wedding and event venue near Kurji Mor, Patliputra featuring open celebration lawns for 400 to 1,200+ guests, an AC banquet hall, Ganga River-view dining, 25+ guest rooms, and parking for 400+ cars.',
        telephone: '+917360800001',
        email: 'Rajresortpatna@gmail.com',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Credit Card, Bank Transfer',
        maximumAttendeeCapacity: 1200,
        hasMap:
          'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Near Gate No. 62, Kurji Mor, Patliputra',
          addressLocality: 'Patna',
          addressRegion: 'Bihar',
          postalCode: '800010',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 25.6391525,
          longitude: 85.1102531,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Property Size',
            value: '3.5 Acres celebration grounds',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Dedicated Car Parking',
            value: '400+ Cars with security and valet assistance',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Open Air Celebration Lawn',
            value: '400 to 1,200+ guests capacity',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Air-Conditioned Banquet Hall',
            value: '150 to 500 guests capacity',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Ganga River-View Dining Area',
            value: 'Covered and open-air riverside dining',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Guest Rooms & Bridal Suites',
            value: '25+ Air-conditioned rooms on-site',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Continuous Generator Backup',
            value: 'Heavy-duty diesel generator backup running continuously',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Professional Catering',
            value: 'In-house hotel-management hospitality team and live cooking counters',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Special Entry Concepts',
            value: '150-ft illuminated floral walkway and glass-walk entry',
          },
        ],
        sameAs: [
          'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
          'https://www.justdial.com/Patna/Raj-Resort-Near-Kurji-More-Kurji/0612PX612-X612-220718182741-N7B7_BZDET',
          'https://www.instagram.com/rajresortpatna',
        ],
      },

      // 2. WebSite Entity
      {
        '@type': 'WebSite',
        '@id': 'https://rajresortpatna.com/#website',
        url: 'https://rajresortpatna.com',
        name: 'Raj Resort Patna',
        description:
          'Official website of Raj Resort Patna - Wedding lawns, banquet halls, Ganga River-view dining, and event spaces in Patliputra, Patna.',
        publisher: {
          '@id': 'https://rajresortpatna.com/#venue',
        },
        inLanguage: 'en-IN',
      },

      // 3. FAQPage Entity for Answer Engine Optimization (AEO / GEO)
      {
        '@type': 'FAQPage',
        '@id': 'https://rajresortpatna.com/#faq',
        mainEntity: RESORT_DATA.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};
