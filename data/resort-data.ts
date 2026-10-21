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
      name: 'The Starlit Royal Lawn',
      type: 'Open-Air Wedding Destination',
      capacity: '400 to 1,200+ Guests',
      emotionalTag: 'Where lifelong vows meet starlit Patna skies',
      description: 'An expansive open-air manicured celebration lawn curated for grand Vivah ceremonies, starlit Varmalas, and lavish family receptions. With gentle evening breezes and sweeping floral backdrops, every moment is unforgettable.',
      image: '/images/venue-17.jpg',
      highlights: [
        'Massive 1,200+ guest celebration capacity',
        'Grand illuminated mandap stage with crystal fixtures',
        'Spacious open dining pavilions & live culinary counters',
        'Uninterrupted 100% industrial generator backup'
      ],
    },
    {
      id: 'floral-tunnel',
      name: 'The Grand Floral Pergola Walkway',
      type: 'Baraat & Royal Arrival Avenue',
      capacity: 'Continuous Celebration Corridor',
      emotionalTag: 'The unforgettable arrival that leaves guests breathless',
      description: 'A 150-foot royal arrival walkway framed by thousands of delicate hanging blossoms, warm crystal chandeliers, and fairy lighting. Designed to give the Baraat and bride a ceremonial entrance of royal distinction.',
      image: '/images/venue-12.jpg',
      highlights: [
        'Cascading overhead floral ceiling & crystal chandeliers',
        'Stunning photography corridor for cinematic bridal portraits',
        'Wide carpeted pathway accommodating grand Baraat processions',
        'Uniform warm tone ambient illumination'
      ],
    },
    {
      id: 'shahi-darbar',
      name: 'Shahi Darbar AC Banquet',
      type: 'Air-Conditioned Indoor Grand Hall',
      capacity: '150 to 500 Guests',
      emotionalTag: 'Intimate elegance for Haldi, Sangeet & Ring Ceremonies',
      description: 'A grand climate-controlled banquet hall featuring high ceilings, warm acoustic insulation, and versatile staging. Ideal for high-energy Sangeet performances, sacred ring exchanges, and post-wedding feasts.',
      image: '/images/venue-26.jpg',
      highlights: [
        'High-capacity climate control for summer or monsoon weddings',
        'Integrated acoustics & DJ stage platform',
        'Dedicated VIP seating lounges & dining setup',
        'Round-the-clock power redundancy'
      ],
    },
    {
      id: 'ceremonial-stage',
      name: 'The Sacred Vivah Mandap & Stage',
      type: 'Curated Ceremonial Stage',
      capacity: 'Central Wedding Sanctum',
      emotionalTag: 'Where two families unite in sacred tradition',
      description: 'An elevated, architecturally illuminated wedding stage created for the sacred Saat Phere and Varmala. Adorned with fresh floral drapes and delicate lighting that frames every precious tear and smile.',
      image: '/images/venue-28.jpg',
      highlights: [
        'Elevated sightlines ensuring every relative has a clear view',
        'Dedicated photographer and videographer vantage towers',
        'Sacred Havankund and seating for Panditji and immediate family',
        'Cold fireworks and flower shower integration'
      ],
    },
  ],

  facilities: [
    {
      iconName: 'Zap',
      title: '100% Heavy-Duty Generator Power',
      detail: 'Continuous industrial generator backup so wedding ceremonies, cooling, and sound systems never face a single second of outage in Patna.',
    },
    {
      iconName: 'ShieldCheck',
      title: 'Secured Gated Parking & Valet Help',
      detail: 'Spacious on-premises parking with round-the-clock security guards and coordinated valet staff for seamless guest arrivals.',
    },
    {
      iconName: 'Wind',
      title: 'Fully Air-Conditioned Lounges & Hall',
      detail: 'State-of-the-art climate control throughout the Shahi Darbar hall and bridal dressing suites for supreme comfort.',
    },
    {
      iconName: 'Clock',
      title: 'Dedicated 24/7 Event Hospitality Desk',
      detail: 'Attentive on-property event managers ready to coordinate vendors, caterers, decorators, and family requests at any hour.',
    },
    {
      iconName: 'UtensilsCrossed',
      title: 'Lavish Culinary & Buffet Pavilions',
      detail: 'Sprawling dedicated dining enclosures ready for traditional Halwai setups, live counters, and multi-cuisine royal feasts.',
    },
    {
      iconName: 'MapPin',
      title: 'Prime Patliputra / Kurji Mor Location',
      detail: 'Situated right by Gate No. 62 at Kurji Mor, ensuring swift highway access for outstation guests from Digha, Danapur, or the airport.',
    },
  ],

  galleryItems: [
    {
      id: 'gal-1',
      title: 'The Starlit Celebration Lawn & Grand Stage',
      category: 'Grand Lawns' as const,
      caption: 'Spectacular evening view of the illuminated wedding lawn and central ceremonial stage under Patna skies.',
      aspect: 'landscape' as const,
      image: '/images/landingpage3.png',
    },
    {
      id: 'gal-2',
      title: 'Illuminated Ceremonial Entrance Pergola',
      category: 'Ceremonial Pergola' as const,
      caption: 'Overhead cascading flower garlands, crystal chandeliers, and warm fairy lights welcoming the Baraat.',
      aspect: 'portrait' as const,
      image: '/images/venue-12.jpg',
    },
    {
      id: 'gal-3',
      title: 'The Sacred Vivah Mandap Architecture',
      category: 'Stage & Mandap' as const,
      caption: 'Artisan floral arches and illuminated backdrop ready for the holy Saat Phere and Varmala vows.',
      aspect: 'landscape' as const,
      image: '/images/venue-28.jpg',
    },
    {
      id: 'gal-4',
      title: 'Shahi Darbar Banquet & Evening Courtyard',
      category: 'Banquets & Lighting' as const,
      caption: 'Spacious climate-controlled hall and outdoor gathering courtyard illuminated for celebratory feasts.',
      aspect: 'landscape' as const,
      image: '/images/venue-26.jpg',
    },
    {
      id: 'gal-5',
      title: 'Grand Flower Gateway & Aisle Decor',
      category: 'Ceremonial Pergola' as const,
      caption: 'A majestic botanical archway creating an ethereal atmosphere for bridal and family arrival photos.',
      aspect: 'portrait' as const,
      image: '/images/venue-10.jpg',
    },
    {
      id: 'gal-6',
      title: 'Bridal Entry with Floral Canopy & Phoolon Ki Chaadar',
      category: 'Ceremonial Pergola' as const,
      caption: 'A heartfelt bridal arrival under a canopy of fresh blossoms and bells as loved ones walk alongside.',
      aspect: 'portrait' as const,
      image: '/images/venue-02.jpg',
    },
    {
      id: 'gal-7',
      title: 'Royal Mandap Stage with Crystal Chandelier',
      category: 'Stage & Mandap' as const,
      caption: 'Elevated ceremonial pavilion designed for timeless wedding photography and sacred rituals.',
      aspect: 'portrait' as const,
      image: '/images/venue-15.jpg',
    },
    {
      id: 'gal-8',
      title: 'Lawn Lighting & Celebration Courtyard',
      category: 'Banquets & Lighting' as const,
      caption: 'Fairy light curtains, stage pyrotechnics, and evening ambiance that bring an unmistakable royal majesty to every wedding.',
      aspect: 'portrait' as const,
      image: '/images/venue-31.jpg',
    },
    {
      id: 'gal-9',
      title: 'Floral Canopy Procession Walkway',
      category: 'Ceremonial Pergola' as const,
      caption: 'Illuminated carpeted avenue welcoming relatives and guests into the celebration arena.',
      aspect: 'portrait' as const,
      image: '/images/venue-13.jpg',
    },
    {
      id: 'gal-10',
      title: 'Royal Stage Arch & Floral Backdrop',
      category: 'Stage & Mandap' as const,
      caption: 'Intricate wedding stage ornamentation framing the bride and groom during auspicious rituals.',
      aspect: 'portrait' as const,
      image: '/images/venue-25.jpg',
    },
    {
      id: 'gal-11',
      title: 'Grand Glass Walkway & Royal Archways',
      category: 'Ceremonial Pergola' as const,
      caption: 'Illuminated mirror glass walkway leading beneath majestic circular floral arches and chandeliers.',
      aspect: 'portrait' as const,
      image: '/images/venue-05.png',
    },
    {
      id: 'gal-12',
      title: 'Crystal Chandelier Pavilion & Lighting',
      category: 'Banquets & Lighting' as const,
      caption: 'Dazzling lighting design transforming the evening into an enchanting royal palace ambiance.',
      aspect: 'portrait' as const,
      image: '/images/venue-27.jpg',
    },
  ],
};
