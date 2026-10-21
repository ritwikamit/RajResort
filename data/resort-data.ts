export interface EventVenue {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  emotionalTag: string;
  image: string;
  highlights: string[];
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

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Grand Lawns' | 'Ceremonial Pergola' | 'Stage & Mandap' | 'Banquets & Lighting';
  caption: string;
  aspect: 'landscape' | 'portrait';
  image: string;
}

export const RESORT_DATA = {
  name: 'Raj Resort',
  city: 'Patna',
  state: 'Bihar',
  pincode: '800010',
  fullAddress: 'Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010, India',
  phone: '+91 90543 94665',
  phoneDisplay: '+91 90543 94665',
  whatsappNumber: '919054394665',
  coordinates: {
    lat: 25.6391525,
    lng: 85.1102531,
  },
  directionsLink: 'https://maps.google.com/?cid=12140407765181711246',
  establishedNote: 'Premier wedding destination, celebration lawns, and grand banquet hall near Kurji Mor, Patliputra',
  
  socialLinks: [
    {
      title: 'Instagram',
      handle: '@rajresortpatna',
      url: 'https://www.instagram.com/rajresortpatna/?hl=en',
      description: 'Real wedding ceremonies, starlit decor setups, customer stories, and celebration highlights.',
    },
    {
      title: 'Facebook',
      handle: 'Raj Resort Patna',
      url: 'https://www.facebook.com/rajresortpatna/',
      description: 'Event photo albums, customer blessings, anniversary stories, and venue news.',
    },
    {
      title: 'YouTube',
      handle: 'Raj Resort Official',
      url: 'https://www.youtube.com/results?search_query=raj+resort+patna',
      description: 'Video tours of grand lawns, illuminated floral walkways, and royal wedding entries.',
    },
  ],

  directoryListings: [
    {
      title: 'Justdial Verified',
      category: 'directory' as const,
      url: 'https://www.justdial.com/Patna/Raj-Resort-Near-Kurji-More-Kurji/0612PX612-X612-220718182741-N7B7_BZDET',
      badge: 'Verified Venue',
      description: 'Local Patna reviews, wedding venue capacity ratings, and verified contact numbers.',
    },
    {
      title: 'Google Business Profile',
      category: 'directory' as const,
      url: 'https://maps.google.com/?cid=12140407765181711246',
      badge: 'Official Map Listing',
      description: 'Real customer reviews, driving directions, user-uploaded photographs, and live hours.',
    },
    {
      title: 'Weddingz / Local Listings',
      category: 'directory' as const,
      url: 'https://www.google.com/search?q=raj+resort+patna+weddings',
      badge: 'Wedding Network',
      description: 'Patna wedding lawn directory listings and event planning inquiries.',
    },
  ],
  directoryLinks: [
    {
      title: 'Justdial Verified',
      category: 'directory' as const,
      url: 'https://www.justdial.com/Patna/Raj-Resort-Near-Kurji-More-Kurji/0612PX612-X612-220718182741-N7B7_BZDET',
      badge: 'Verified Venue',
      description: 'Local Patna reviews, wedding venue capacity ratings, and verified contact numbers.',
    },
    {
      title: 'Google Business Profile',
      category: 'directory' as const,
      url: 'https://maps.google.com/?cid=12140407765181711246',
      badge: 'Official Map Listing',
      description: 'Real customer reviews, driving directions, user-uploaded photographs, and live hours.',
    },
    {
      title: 'Weddingz / Local Listings',
      category: 'directory' as const,
      url: 'https://www.google.com/search?q=raj+resort+patna+weddings',
      badge: 'Wedding Network',
      description: 'Patna wedding lawn directory listings and event planning inquiries.',
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
      emotionalTag: 'Where loved ones gather under the open evening sky',
      description: 'Our spacious green lawn gives your guests plenty of space to meet, laugh, and celebrate together. Soft grass, fresh evening air, and warm lights under the stars create the warm, welcoming feeling every family dreams of for a wedding.',
      image: '/images/venue-17.jpg',
      highlights: [
        'Comfortably hosts from 400 up to 1,200+ guests',
        'Open-air green lawn with warm garden lighting',
        'Spacious dining area for your family caterers and Halwais',
        'Heavy-duty generators so the lights and music never stop',
      ],
    },
    {
      id: 'floral-tunnel',
      name: 'The 150-Foot Flower Entrance Walkway',
      type: 'Grand Baraat & Guest Arrival Avenue',
      capacity: 'Spacious Arrival Walkway',
      emotionalTag: 'A warm welcome that brings a smile to every guest',
      description: 'A 150-foot arrival avenue covered with fresh hanging flowers, crystal chandeliers, and warm fairy lights. Built wide enough for the entire Baraat to dance through with dhol, brass bands, and joyful celebration.',
      image: '/images/venue-12.jpg',
      highlights: [
        'Overhead floral ceiling with sparkling crystal chandeliers',
        'Wide carpeted walkway with plenty of room for dancing Baraats',
        'Beautiful background for family photographs and bridal entry',
        'Gentle warm lights that make everyone look their best',
      ],
    },
    {
      id: 'shahi-darbar',
      name: 'Shahi Darbar AC Banquet Hall',
      type: 'Indoor Air-Conditioned Hall',
      capacity: '150 to 500 Guests',
      emotionalTag: 'Comfortable and cool for your closest family ceremonies',
      description: 'A spacious, fully air-conditioned indoor hall designed for Haldi, Sangeet, Ring Ceremonies, and family dining. When the weather outside is hot or rainy, your grandparents, children, and guests can relax in cool, peaceful comfort.',
      image: '/images/venue-26.jpg',
      highlights: [
        'Powerful air-conditioning to keep summer weddings cool and pleasant',
        'Stage setup for energetic Sangeet dances and family performances',
        'Comfortable indoor seating and dining arrangements',
        'Quiet rooms nearby for changing and bridal touch-ups',
      ],
    },
    {
      id: 'ceremonial-stage',
      name: 'The Sacred Vivah Mandap & Stage',
      type: 'Central Ceremony Stage',
      capacity: 'Central Wedding Stage',
      emotionalTag: 'Where two families unite with blessings and prayers',
      description: 'The sacred heart of the wedding. Built high enough so every aunt, uncle, and friend can see the Varmala and Saat Phere clearly, with traditional floral decor where Panditji guides the sacred vows.',
      image: '/images/venue-28.jpg',
      highlights: [
        'Clear view from all sides of the lawn so no guest misses the vows',
        'Spacious stage for Panditji, parents, and close family members',
        'Fresh flower decoration and holy Havankund space',
        'Arrangements for celebratory flower showers during the Varmala',
      ],
    },
  ],

  facilities: [
    {
      iconName: 'Zap',
      title: 'Continuous Generator Backup',
      detail: 'Heavy-duty backup generators ensure the stage lights, AC, sound systems, and flower lights never flicker, even during Patna power cuts.',
    },
    {
      iconName: 'ShieldCheck',
      title: 'Gated Parking with Watchful Security',
      detail: 'Spacious on-site parking with gate guards, so your relatives and guests can park easily and walk right into the wedding without road hassle.',
    },
    {
      iconName: 'Wind',
      title: 'Air-Conditioned Hall & Bridal Suites',
      detail: 'High-powered cooling across the Shahi Darbar hall and private bridal dressing rooms, keeping elders and the bride cool and fresh.',
    },
    {
      iconName: 'Clock',
      title: 'Caring Event Staff on Standby',
      detail: 'Our on-site team is here from morning till the Vidai, helping coordinate caterers, decorators, and any family requests with a smile.',
    },
    {
      iconName: 'UtensilsCrossed',
      title: 'Large Dining Space for Halwais & Buffets',
      detail: 'Dedicated, covered kitchen and dining areas where your caterers have all the space they need to prepare hot, delicious wedding feasts.',
    },
    {
      iconName: 'MapPin',
      title: 'Easy to Reach near Kurji Mor, Patliputra',
      detail: 'Located near Gate No. 62 at Kurji Mor with quick access from Digha Marine Drive, Patliputra Station, and Patna Airport.',
    },
  ],

  galleryItems: [
    {
      id: 'gal-1',
      title: 'The Open Wedding Lawn at Night',
      category: 'Grand Lawns' as const,
      caption: 'Our green open lawn under the evening stars, where your entire family can gather, sit comfortably, and celebrate together.',
      aspect: 'landscape' as const,
      image: '/images/landingpage3.png',
    },
    {
      id: 'gal-2',
      title: 'The Baraat Welcome Walkway',
      category: 'Ceremonial Pergola' as const,
      caption: 'A long flower-covered walkway with warm lights and chandeliers, welcoming the Baraat and bride with music and celebration.',
      aspect: 'portrait' as const,
      image: '/images/venue-12.jpg',
    },
    {
      id: 'gal-3',
      title: 'The Sacred Vivah Mandap',
      category: 'Stage & Mandap' as const,
      caption: 'Decorated with fresh flowers and sacred lights for the Saat Phere, where parents give their blessings and two families unite.',
      aspect: 'landscape' as const,
      image: '/images/venue-28.jpg',
    },
    {
      id: 'gal-4',
      title: 'Shahi Darbar AC Hall',
      category: 'Banquets & Lighting' as const,
      caption: 'A cool, comfortable indoor hall where elders can rest, guests can enjoy hot meals, and families celebrate Haldi and Sangeet.',
      aspect: 'landscape' as const,
      image: '/images/venue-26.jpg',
    },
    {
      id: 'gal-5',
      title: 'The Main Flower Entrance Gate',
      category: 'Ceremonial Pergola' as const,
      caption: 'A tall gateway dressed in fresh flowers where guests arrive, smile, and take their first photos of the evening.',
      aspect: 'portrait' as const,
      image: '/images/venue-10.jpg',
    },
    {
      id: 'gal-6',
      title: "The Bride's Walk with Loved Ones",
      category: 'Ceremonial Pergola' as const,
      caption: 'The touching moment every family remembers. The bride walking towards the mandap under a flower canopy held by her brothers.',
      aspect: 'portrait' as const,
      image: '/images/venue-02.jpg',
    },
    {
      id: 'gal-7',
      title: 'The Varmala & Stage Ceremony',
      category: 'Stage & Mandap' as const,
      caption: 'The central raised stage where the bride and groom exchange garlands and receive blessings from every guest.',
      aspect: 'portrait' as const,
      image: '/images/venue-15.jpg',
    },
    {
      id: 'gal-8',
      title: 'Fireworks Over the Grand Stage',
      category: 'Banquets & Lighting' as const,
      caption: 'Brilliant fireworks light up the Patna night sky as the couple takes the stage and the whole family cheers.',
      aspect: 'portrait' as const,
      image: '/images/venue-31.jpg',
    },
    {
      id: 'gal-9',
      title: 'Lantern Walkway for Guests',
      category: 'Ceremonial Pergola' as const,
      caption: 'Soft lantern lights and greenery guiding your relatives smoothly from the gate to the main celebration lawn.',
      aspect: 'portrait' as const,
      image: '/images/venue-13.jpg',
    },
    {
      id: 'gal-10',
      title: 'The Floral Stage Arch',
      category: 'Stage & Mandap' as const,
      caption: 'Hand-arranged flowers and warm stage lighting framing the couple for photographs they will cherish for a lifetime.',
      aspect: 'portrait' as const,
      image: '/images/venue-25.jpg',
    },
    {
      id: 'gal-11',
      title: "The Groom's Grand Entry",
      category: 'Ceremonial Pergola' as const,
      caption: "The groom stepping in along the illuminated glass walkway under circular flower arches to meet the bride's family.",
      aspect: 'portrait' as const,
      image: '/images/venue-05.png',
    },
    {
      id: 'gal-12',
      title: 'Crystal Chandeliers & Warm Lights',
      category: 'Banquets & Lighting' as const,
      caption: 'Sparkling crystal chandeliers and warm golden lights that make the entire night feel festive and welcoming.',
      aspect: 'portrait' as const,
      image: '/images/venue-27.jpg',
    },
  ],
};
