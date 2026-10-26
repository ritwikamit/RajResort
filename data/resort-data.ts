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
      id: 'royal-lawn',
      name: 'The Starlit Celebration Lawn',
      type: 'Open-Air Wedding Lawn',
      capacity: '400 to 1,200+ Guests',
      emotionalTag: 'Spacious 3.5-acre setting under the evening sky',
      description: 'Our spacious green lawn offers ample room for wedding ceremonies, live food counters, and family gatherings. Positioned within a 3.5-acre property, it provides open air and garden lighting for comfortable, unhurried celebrations.',
      image: '/images/landingpage3.png',
      images: [
        '/images/landingpage3.png',
        '/images/venue-17.jpg',
        '/images/venue-18.jpg',
        '/images/venue-19.jpg',
        '/images/venue-22.jpg',
        '/images/venue-23.jpg',
      ],
      highlights: [
        'Welcomes 400 to 1,200+ guests with room for movement',
        'Open-air green lawns within 3.5 acres of venue grounds',
        'Convenient dining area for live buffets and family caterers',
        'Heavy-duty generator backup for uninterrupted power',
      ],
      focalPoint: 'object-center',
      photoTitle: 'The 3.5-Acre Starlit Celebration Lawn',
      photoCaption: 'Spacious open green lawn with illuminated garden perimeter and dining courtyards under Patna skies.',
    },
    {
      id: 'floral-tunnel',
      name: 'The 150-Foot Floral Walkway',
      type: 'Baraat & Guest Arrival Avenue',
      capacity: 'Spacious Arrival Avenue',
      emotionalTag: 'An illuminated walkway designed for joyful Baraat arrivals',
      description: 'A 150-foot arrival avenue decorated with hanging floral arrangements, crystal chandeliers, and warm fairy lights. Built wide enough for family Baraats to dance through comfortably with dhol and music.',
      image: '/images/venue-72.jpg',
      images: [
        '/images/venue-72.jpg',
        '/images/venue-07.png',
        '/images/venue-64.jpg',
        '/images/venue-20.jpg',
        '/images/venue-05.png',
        '/images/venue-25.jpg',
      ],
      highlights: [
        'Wide carpeted walkway with space for dancing Baraats',
        'Overhead floral ceiling with warm crystal chandeliers',
        'Scenic backdrop for bride, groom, and family entry photos',
        'Evenly placed lights to support photography and videography',
      ],
      focalPoint: 'object-[center_25%]',
      photoTitle: 'Illuminated Chandelier & Glass Walkway',
      photoCaption: 'The bride and groom walking along the 150-foot illuminated walkway flanked by sparkling chandeliers and cold pyro fountains.',
    },
    {
      id: 'shahi-darbar',
      name: 'Shahi Darbar AC Banquet Hall',
      type: 'Indoor Air-Conditioned Hall',
      capacity: '150 to 500 Guests',
      emotionalTag: 'Cool and comfortable indoor setting for family ceremonies',
      description: 'A spacious, fully air-conditioned indoor banquet hall suited for Haldi, Mehendi, Sangeet, engagement ceremonies, and private dining. During warm summer evenings or monsoon rains, guests and elders can relax in climate-controlled comfort.',
      image: '/images/venue-27.jpg',
      images: [
        '/images/venue-27.jpg',
        '/images/venue-76.jpg',
        '/images/venue-24.jpg',
        '/images/venue-48.jpg',
        '/images/venue-26.jpg',
      ],
      highlights: [
        'Full air conditioning for pleasant celebrations in any weather',
        'Dedicated stage area for Sangeet dances and performances',
        'Flexible seating layouts for formal dining and ceremonies',
        'Convenient access to 25+ guest rooms and bridal dressing areas',
      ],
      focalPoint: 'object-[center_20%]',
      photoTitle: 'Shahi Darbar Climate-Controlled Hall',
      photoCaption: 'Air-conditioned indoor banquet hall adorned with crystal chandeliers and floral seating for pre-wedding ceremonies and receptions.',
    },
    {
      id: 'ceremonial-stage',
      name: 'The Vivah Mandap & Stage',
      type: 'Central Ceremony Stage',
      capacity: 'Elevated Stage & Mandap',
      emotionalTag: 'Clear visibility for sacred vows and family blessings',
      description: 'An elevated stage built so family members and guests across the lawn have a clear view of the Varmala and Saat Phere. Features traditional floral decor and designated space for Panditji, parents, and ceremonial Havankund rituals.',
      image: '/images/venue-03.png',
      images: [
        '/images/venue-03.png',
        '/images/venue-32.jpg',
        '/images/venue-08.jpg',
        '/images/venue-14.jpg',
        '/images/venue-29.jpg',
        '/images/venue-21.jpg',
      ],
      highlights: [
        'Clear visibility from all areas of the celebration lawn',
        'Spacious platform for Panditji and close family members',
        'Traditional floral mandap design and sacred Havankund setup',
        'Arrangements for flower showers and celebratory moments',
      ],
      focalPoint: 'object-[center_25%]',
      photoTitle: 'The Sacred Wedding Stage & Mandap',
      photoCaption: 'Elevated royal ceremonial stage featuring lush floral backdrops, silver seating, and traditional ritual setting for the Varmala and Saat Phere.',
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
