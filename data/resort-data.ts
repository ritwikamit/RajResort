export interface EventVenue {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  emotionalTag: string;
  image: string;
  images: string[];
  highlights: string[];
  focalPoint?: string;
  photoTitle?: string;
  photoCaption?: string;
}

export interface AmenityItem {
  iconName: string;
  title: string;
  detail: string;
}

export interface ExternalLink {
  title: string;
  category: 'social' | 'directions' | 'directory';
  url: string;
  badge: string;
  description: string;
  note?: string;
}

import { FULL_GALLERY_ITEMS } from './gallery-items';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Grand Lawns' | 'Ceremonial Pergola' | 'Stage & Mandap' | 'Banquets & Lighting';
  caption: string;
  aspect: 'landscape' | 'portrait' | 'square';
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const RESORT_DATA = {
  name: 'Raj Resort',
  city: 'Patna',
  state: 'Bihar',
  pincode: '800010',
  fullAddress: 'Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010, India',
  phone: '+91 7360800001',
  phoneDisplay: '+91 7360800001',
  whatsappNumber: '917360800001',
  email: 'Rajresortpatna@gmail.com',
  coordinates: {
    lat: 25.6391525,
    lng: 85.1102531,
  },
  directionsLink: 'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
  propertySize: '3.5 Acres',
  parkingCapacity: '400+ Cars',
  roomsCount: '25+ Rooms & Suites',
  weddingsCount: '400+ Celebrations Hosted',
  establishedNote: 'Wedding and event venue across 3.5 acres near Kurji Mor, Patliputra with 400+ car parking, Ganga River-view dining, and 25+ guest rooms.',
  
  socialLinks: [
    {
      title: 'Instagram',
      handle: '@rajresortpatna',
      url: 'https://www.instagram.com/rajresortpatna/?hl=en',
      description: 'Photographs of recent wedding setups, starlit lawn decors, and real ceremonies at Kurji Mor.',
    },
    {
      title: 'Facebook',
      handle: 'Raj Resort Patna',
      url: 'https://www.facebook.com/rajresortpatna/',
      description: 'Event photo albums, wedding memories, anniversary celebrations, and venue updates.',
    },
    {
      title: 'YouTube',
      handle: 'Raj Resort Official',
      url: 'https://www.youtube.com/results?search_query=raj+resort+patna',
      description: 'Video walkthroughs of celebration lawns, floral entry avenues, and stage setups.',
    },
  ],

  directoryListings: [
    {
      title: 'Justdial Verified',
      category: 'directory' as const,
      url: 'https://www.justdial.com/Patna/Raj-Resort-Near-Kurji-More-Kurji/0612PX612-X612-220718182741-N7B7_BZDET',
      badge: 'Verified Venue',
      description: 'Local reviews, guest capacity details, and verified front desk telephone listings.',
    },
    {
      title: 'Google Business Profile',
      category: 'directory' as const,
      url: 'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
      badge: 'Official Map Listing',
      description: 'Customer reviews, driving directions via Marine Drive, verified photos, and reception hours.',
    },
    {
      title: 'Weddingz / Local Listings',
      category: 'directory' as const,
      url: 'https://www.google.com/search?q=raj+resort+patna+weddings',
      badge: 'Wedding Network',
      description: 'Patna event venue directory profile and wedding date inquiry platform.',
    },
  ],
  directoryLinks: [
    {
      title: 'Justdial Verified',
      category: 'directory' as const,
      url: 'https://www.justdial.com/Patna/Raj-Resort-Near-Kurji-More-Kurji/0612PX612-X612-220718182741-N7B7_BZDET',
      badge: 'Verified Venue',
      description: 'Local reviews, guest capacity details, and verified front desk telephone listings.',
    },
    {
      title: 'Google Business Profile',
      category: 'directory' as const,
      url: 'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
      badge: 'Official Map Listing',
      description: 'Customer reviews, driving directions via Marine Drive, verified photos, and reception hours.',
    },
    {
      title: 'Weddingz / Local Listings',
      category: 'directory' as const,
      url: 'https://www.google.com/search?q=raj+resort+patna+weddings',
      badge: 'Wedding Network',
      description: 'Patna event venue directory profile and wedding date inquiry platform.',
    },
  ],

  transitDistances: [
    { destination: 'Kurji Mor / Gate No. 62 (Main Entrance)', distance: '150 m', duration: '1 min' },
    { destination: 'Digha / Ganga Riverfront Marine Drive', distance: '2.1 km', duration: '6 min' },
    { destination: 'Patliputra Junction Railway Station', distance: '3.8 km', duration: '12 min' },
    { destination: 'Patna Junction Railway Station', distance: '7.5 km', duration: '20 min' },
    { destination: 'Jay Prakash Narayan International Airport (PAT)', distance: '9.2 km', duration: '24 min' },
  ],
  transitPoints: [
    { destination: 'Kurji Mor / Gate No. 62 (Main Entrance)', distance: '150 m', duration: '1 min' },
    { destination: 'Digha / Ganga Riverfront Marine Drive', distance: '2.1 km', duration: '6 min' },
    { destination: 'Patliputra Junction Railway Station', distance: '3.8 km', duration: '12 min' },
    { destination: 'Patna Junction Railway Station', distance: '7.5 km', duration: '20 min' },
    { destination: 'Jay Prakash Narayan International Airport (PAT)', distance: '9.2 km', duration: '24 min' },
  ],

  venues: [
    {
      id: 'starlit-lawn',
      name: 'The Starlit Celebration Lawn',
      type: 'Grand Open-Air Lawn Setting',
      capacity: '500 to 1,500+ Guests',
      emotionalTag: 'A magical aisle walk under the starlit open sky',
      description: 'An illuminated glass runway flanked by sparkling cold firework fountains and an illuminated heart archway, where the bride walks hand-in-hand with her parents under the open night sky.',
      image: '/images/spaces/starlit-celebration-lawn.webp',
      images: ['/images/spaces/starlit-celebration-lawn.webp'],
      highlights: [
        'Illuminated glass aisle with cold firework fountain displays',
        'Stunning glowing floral heart archway for grand bridal entries',
        'Spacious open-air green lawn accommodating up to 1,500+ guests',
        'Unobstructed night sky views with professional perimeter floodlights',
      ],
      focalPoint: 'object-[center_35%]',
      photoTitle: 'Illuminated Glass Aisle & Cold Pyro Fountains',
      photoCaption: 'The bride steps out on the glowing glass walkway bordered by dazzling sparklers and a radiant red heart arch on our open celebration lawn.',
    },
    {
      id: 'floral-walkway',
      name: 'The 150-Foot Floral Walkway',
      type: 'Illuminated Grand Arrival Avenue',
      capacity: 'Spacious Arrival & Entry Avenue',
      emotionalTag: 'Chandelier-lit aisle with dry-ice clouds and sparklers',
      description: 'A dedicated 150-foot grand aisle flanked by ornate crystal chandelier arches, dramatic low-lying fog, and synchronized cold sparkler fountains for an unforgettable bridal entry.',
      image: '/images/spaces/walkway-avenue.webp',
      images: ['/images/spaces/walkway-avenue.webp'],
      highlights: [
        'Curved crystal chandelier lampposts casting warm romantic lighting',
        'Synchronized ground-level cold pyro fountains along the aisle',
        'Dry-ice ground fog rolling across the pathway for a fairytale walk',
        'Wide paved pathway built for royal processions and family baraats',
      ],
      focalPoint: 'object-[center_35%]',
      photoTitle: 'The Chandelier Walkway Bridal Entrance',
      photoCaption: 'Crystal chandeliers, dancing cold fountains, and soft dry-ice clouds create a fairytale entrance along the 150-foot pathway.',
    },
    {
      id: 'vivah-mandap-stage',
      name: 'The Vivah Mandap & Stage',
      type: 'Royal Floral Stage Setting',
      capacity: 'Elevated Ceremony Stage',
      emotionalTag: 'Namaste greetings before a towering wall of fresh roses',
      description: 'An elevated ceremonial stage crowned with an opulent wall of cascading red and pink roses, twin crystal chandeliers, and side sparklers where the bride and groom greet guests and family.',
      image: '/images/spaces/vivah-mandap-stage.webp',
      images: ['/images/spaces/vivah-mandap-stage.webp'],
      highlights: [
        'Breathtaking dense backdrop wall of fresh red, pink, and white roses',
        'Twin suspended multi-tier crystal chandeliers providing regal warmth',
        'Side-mounted cold pyro fountains for stage entrance and blessing moments',
        'Elevated platform ensuring clear panoramic sightlines across the lawn',
      ],
      focalPoint: 'object-[center_30%]',
      photoTitle: 'Namaste Greetings on the Royal Stage',
      photoCaption: 'The bride and groom offer folded-hands greetings on the elevated stage against a grand backdrop of fresh pink and red roses and glowing chandeliers.',
    },
    {
      id: 'varmala-stage',
      name: 'The Varmala Ceremony Stage',
      type: 'Main Varmala Stage Pavilion',
      capacity: 'Central Lawn Stage & Seating',
      emotionalTag: 'Varmala exchange amidst confetti showers and fireworks',
      description: 'The central stage pavilion configured for the garland exchange (Varmala) ceremony, complete with overhead lighting trusses, celebratory confetti showers, and sparkler pyrotechnics.',
      image: '/images/spaces/varmala-ceremony-stage.webp',
      images: ['/images/spaces/varmala-ceremony-stage.webp'],
      highlights: [
        'Festive confetti cannons showering the couple during the garland exchange',
        'Towering cold sparklers igniting synchronously with the ceremony vows',
        'Concert-grade overhead truss stage lighting for crystal-clear photography',
        'Comfortable front-row banquet seating allowing all guests an intimate view',
      ],
      focalPoint: 'object-[center_35%]',
      photoTitle: 'The Sacred Garland Exchange (Varmala)',
      photoCaption: 'Bride and groom exchange garlands and blessings on the main pavilion stage enveloped in showering confetti and sparkling pyro effects.',
    },
    {
      id: 'grand-entry',
      name: 'Royal Chariot & Entry Avenue',
      type: 'Royal Procession & Arrival Setting',
      capacity: 'Wide Carpeted Arrival Avenue',
      emotionalTag: 'Regal chariot entry with traditional lotus dancers',
      description: 'A royal bridal arrival featuring an elevated decorative chariot escorted by traditional folk artists with illuminated golden lotus props along a carpeted red pathway.',
      image: '/images/spaces/grand-entry-chariot.webp',
      images: ['/images/spaces/grand-entry-chariot.webp'],
      highlights: [
        'Elevated royal chariot centerpiece for a spectacular bride or groom entry',
        'Accompaniment by traditional Rajasthani folk dancers with lotus props',
        'Red carpet arrival avenue lined with vintage lampposts and floral arches',
        'Lit-up Raj Resort architectural facade serving as a grand backdrop',
      ],
      focalPoint: 'object-[center_30%]',
      photoTitle: 'Bridal Arrival on the Royal Sun Chariot',
      photoCaption: 'The bride makes a regal grand entrance on an elevated chariot heralded by traditional folk dancers with golden lotus props outside Raj Resort.',
    },
    {
      id: 'haldi-celebration',
      name: 'Lawn Haldi & Sangeet Pavilion',
      type: 'Daytime Ceremonial Lawn Setting',
      capacity: '200 to 600+ Guests',
      emotionalTag: 'Vibrant Haldi fun with golden tubs and marigold showers',
      description: 'An outdoor lawn setup for pre-wedding rituals like Haldi and Mehendi, featuring handcrafted golden lotus tubs for the couple and joyful showers of fresh marigold flowers.',
      image: '/images/spaces/haldi-celebration-lawn.webp',
      images: ['/images/spaces/haldi-celebration-lawn.webp'],
      highlights: [
        'Twin handcrafted golden lotus brass tubs for the bride and groom',
        'Abundant fresh yellow and orange marigold petal showers for family rituals',
        'Sunlit open garden lawn perfect for candid daylight wedding photography',
        'Relaxed festive atmosphere for dhol beats, folk dances, and Haldi ceremonies',
      ],
      focalPoint: 'object-[center_30%]',
      photoTitle: 'Joyous Haldi Ceremony & Marigold Shower',
      photoCaption: 'The bride and groom celebrate their Haldi seated in handcrafted golden lotus tubs as family and loved ones shower them with fresh marigold petals.',
    },
  ],

  facilities: [
    {
      iconName: 'ShieldCheck',
      title: 'Dedicated Parking for 400+ Cars',
      detail: 'A dedicated on-site parking area accommodating 400+ vehicles with gate security and valet assistance, keeping guest arrivals calm and organized.',
    },
    {
      iconName: 'Sparkles',
      title: '3.5-Acre Property',
      detail: 'Spacious grounds offering open celebration lawns, paved walkways, and banquet infrastructure so large gatherings never feel crowded.',
    },
    {
      iconName: 'UtensilsCrossed',
      title: 'Ganga River-View Dining Area',
      detail: 'A dedicated dine-in area with scenic views of the Ganga River, creating a calm backdrop for wedding dinners, receptions, and family feasts.',
    },
    {
      iconName: 'Wind',
      title: '25+ Rooms and Suites',
      detail: 'Comfortable air-conditioned rooms on the property for out-of-town relatives, bridal party preparations, and overnight family stays.',
    },
    {
      iconName: 'Clock',
      title: 'Trained Hospitality & Catering Team',
      detail: 'Certified event and banquet staff with hotel-management education handling food presentation, buffet service, and guest hospitality.',
    },
    {
      iconName: 'Zap',
      title: '24/7 Heavy-Duty Generator Backup',
      detail: 'Heavy-duty industrial generator backup ensures stage lights, air conditioning, sound systems, and lawn lighting operate without interruption.',
    },
    {
      iconName: 'CheckCircle2',
      title: 'Themed Stage & Entry Concepts',
      detail: 'Customized entrance concepts including glass-walk aisle, floral pergolas, and cold-spark Niagara effects for memorable couple entries.',
    },
    {
      iconName: 'MapPin',
      title: 'Accessible Kurji Mor Location',
      detail: 'Located near Gate No. 62 at Kurji Mor, Patliputra, offering direct access via the Ganga Marine Drive, Patliputra Station, and Patna Airport.',
    },
  ],

  faqs: [
    {
      question: 'What types of events can be hosted at Raj Resort Patna?',
      answer: 'Raj Resort hosts a wide variety of family and formal gatherings, including weddings, receptions, engagements (Sagai), Sangeet and Haldi functions, anniversary celebrations, birthday parties, corporate conferences, and cultural events.',
      category: 'Events',
    },
    {
      question: 'How much parking is available for guests?',
      answer: 'The resort features a dedicated on-site parking facility for 400+ cars, complete with gated security and valet assistance, ensuring convenient parking off the main Kurji Mor road.',
      category: 'Parking',
    },
    {
      question: 'Does the venue feature Ganga River-view dining?',
      answer: 'Yes. Raj Resort includes a dedicated dine-in area with scenic views of the Ganga River, providing a pleasant open-air dining atmosphere for wedding dinners and receptions.',
      category: 'Dining',
    },
    {
      question: 'Is guest accommodation available on the property?',
      answer: 'Yes. We offer 25+ air-conditioned rooms and suites on-site, providing comfortable lodging for wedding parties, out-of-town relatives, and bridal dressing needs.',
      category: 'Accommodation',
    },
    {
      question: 'What wedding entry and stage concepts are available?',
      answer: 'Our event team can arrange custom entry concepts, such as a real glass-walk bridal walkway, illuminated 150-ft floral pergolas, themed Varmala stages, and safe cold-spark waterfall effects.',
      category: 'Weddings',
    },
    {
      question: 'Is catering service available at the resort?',
      answer: 'Yes. Event catering is supported by a trained hospitality team with formal hotel-management education. We provide multi-cuisine buffet spreads, live cooking setups, and traditional Indian preparations tailored to your event requirements.',
      category: 'Catering',
    },
    {
      question: 'How can I check date availability or schedule a walkthrough?',
      answer: 'You can connect directly with our front desk by calling or messaging +91 7360800001, emailing Rajresortpatna@gmail.com, or visiting the property in person between 10:00 AM and 8:00 PM daily.',
      category: 'Booking',
    },
  ],

  galleryItems: FULL_GALLERY_ITEMS,
};
