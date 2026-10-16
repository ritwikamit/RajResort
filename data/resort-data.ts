export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  occupancy: string;
  bed: string;
  image: string;
  amenities: string[];
  features: string[];
}

export interface EventVenue {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
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
  category: 'booking' | 'social' | 'directions' | 'directory';
  url: string;
  badge: string;
  description: string;
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings & Lawns' | 'Accommodations' | 'Banquets & Receptions' | 'Entrance & Courtyard';
  caption: string;
  aspect: 'landscape' | 'portrait';
  image: string;
}

export const RESORT_DATA = {
  name: 'Raj Resort',
  city: 'Patna',
  state: 'Bihar',
  pincode: '800010',
  fullAddress: 'Near Gate No. 62, Kurji Mor, Patliputra, Kurji, Patna, Bihar 800010, India',
  phone: '+91 90543 94665',
  phoneDisplay: '+91 90543 94665',
  whatsappNumber: '919054394665',
  coordinates: {
    lat: 25.6391525,
    lng: 85.1102531,
  },
  establishedNote: 'Family-managed celebration lawn, banquet hall, and guest rooms near Kurji Mor, Patliputra',
  
  // External verified links strictly categorized
  bookingProviders: [
    {
      title: 'MakeMyTrip',
      category: 'booking' as const,
      url: 'https://www.makemytrip.com/hotels/raj_resort-details-patna.html',
      badge: 'Certified Partner',
      description: 'Check live room availability, verified traveler feedback, and secure instant room reservations.',
      note: 'Rates, inventory, payment and cancellation terms are managed directly by MakeMyTrip.',
    },
    {
      title: 'Agoda',
      category: 'booking' as const,
      url: 'https://www.agoda.com/en-in/raj-resort-h61899892/hotel/patna-in.html?cid=1844104&ds=CoIYbg82AadUMg3C',
      badge: 'Global Portal',
      description: 'Book standard, classic, and deluxe accommodations with international traveler support.',
      note: 'Rates, inventory, payment and cancellation terms are managed directly by Agoda.',
    },
    {
      title: 'Guest Reservations',
      category: 'booking' as const,
      url: 'https://www.guestreservations.com/raj-resort-patna/booking?A=1',
      badge: 'Independent Network',
      description: 'Compare room configurations and review reservation policies for short or extended stays.',
      note: 'Rates, inventory, payment and cancellation terms are managed directly by Guest Reservations.',
    },
  ],

  socialLinks: [
    {
      title: 'Instagram',
      handle: '@rajresortpatna',
      url: 'https://www.instagram.com/rajresortpatna/?hl=en',
      description: 'Real event reels, wedding decor setups, customer stories, and celebration highlights.',
    },
    {
      title: 'Facebook',
      handle: 'Raj Resort Patna',
      url: 'https://www.facebook.com/rajresortpatna/',
      description: 'Official social page, announcements, guest reviews, and property notices.',
    },
  ],

  directoryLinks: [
    {
      title: 'Justdial Listing',
      platform: 'Justdial Patna',
      ratingNote: '4.9 ★ verified community reviews',
      url: 'https://www.justdial.com/Patna/Raj-Resort-Kurji/0612PX612-X612-210410124032-A7T8_BZDET',
      description: 'Local business directory listing with verified local guest ratings, Q&A, and vendor feedback.',
    },
  ],

  directionsLink: 'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,17z/data=!3m1!4b1!4m9!3m8!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m2!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',

  transitPoints: [
    { destination: 'Kurji Mor (Gate 62)', distance: '150 m', duration: '2 min walk' },
    { destination: 'Kurji Holy Family Hospital', distance: '450 m', duration: '3 min' },
    { destination: 'Digha / Ganga Riverfront Marine Drive', distance: '2.1 km', duration: '6 min' },
    { destination: 'Patliputra Junction Railway Station', distance: '3.8 km', duration: '12 min' },
    { destination: 'Patna Junction Railway Station', distance: '7.5 km', duration: '20 min' },
    { destination: 'Jay Prakash Narayan International Airport (PAT)', distance: '9.2 km', duration: '24 min' },
  ],

  rooms: [
    {
      id: 'classic-room',
      name: 'Classic Double Room',
      subtitle: 'Comfortable & Clean Retreat',
      description: 'Designed for wedding guests, business visitors, and couples visiting Patna. Includes clean linens, private bathroom with hot water, quiet interiors, and round-the-clock room service.',
      occupancy: 'Up to 2 Guests',
      bed: '1 King or 2 Twin Beds',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      amenities: ['High-Speed Wi-Fi', 'Air Conditioning', 'Ensuite Bathroom', 'Daily Housekeeping', 'Power Backup'],
      features: ['Sound-buffered window glazing', 'Work desk with charging sockets', 'Luggage storage nook', 'Room service assistance'],
    },
    {
      id: 'deluxe-room',
      name: 'Deluxe King Room',
      subtitle: 'Elevated Space & Family Comfort',
      description: 'Spacious room with king bedding, comfortable sitting corner, compact refrigerator, and clean modern bath. Ideal for families and wedding guests who appreciate extra breathing room.',
      occupancy: 'Up to 3 Guests (2 Adults + 1 Child)',
      bed: '1 Grand King Bed',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
      amenities: ['High-Speed Wi-Fi', 'Individual AC Control', 'Compact Refrigerator', 'HD Television', 'Full Power Backup', 'Room Service'],
      features: ['Comfortable lounge chairs & tea table', 'Spacious closet with garment rack', 'Complimentary packaged water & toiletries', '24-hour reception desk support'],
    },
    {
      id: 'family-suite',
      name: 'Royal Family Suite',
      subtitle: 'Spacious Two-Room Family Suite',
      description: 'Our largest accommodation suite, featuring a private master bedroom, adjoining family lounge, and well-lit vanity mirror. Purpose-built for bridal preparations and close family stays during weddings.',
      occupancy: 'Up to 4 Adults',
      bed: '1 King Bed + Living Suite / Daybed',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
      amenities: ['High-Speed Wi-Fi', 'Dual Split Air Conditioners', 'Mini Refrigerator', 'Full Dressing Vanity', 'Uninterrupted Generator Backup'],
      features: ['Dedicated dressing mirror with bridal lighting', 'Separate guest hospitality lounge area', 'Courtyard & lawn vista views', 'Priority room service & bellhop'],
    },
  ],

  venues: [
    {
      id: 'royal-lawn',
      name: 'The Grand Royal Lawn',
      type: 'Open-Air Starlit Venue',
      capacity: '300 to 1,200+ Guests',
      description: 'Expansive natural green lawn under open starlit skies. Complete with a ceremonial red-carpet aisle, heart-shaped floral arches, and staging ready for cold fireworks and the grand Varmala garland ceremony.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Custom floral stage backdrop with golden lotus motifs', 'Overhead fairy lights and garden lanterns', 'Dedicated photographer vantage towers', 'Separate seated dining & buffet pavilion'],
    },
    {
      id: 'floral-tunnel',
      name: 'The Illuminated Floral Pergola',
      type: 'Signature Ceremonial Entrance',
      capacity: 'Continuous Reception Corridor',
      description: 'A dedicated 150-foot arrival avenue draped with hanging green garlands, crystal drop chandeliers, and warm fairy lights, giving your Baraat and welcoming guests a truly memorable entrance.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Full overhead botanical ceiling with chandeliers', 'Evenly illuminated photography corridor', 'Welcome easel & portrait stands setup', 'Smooth carpeted walkway from main gate'],
    },
    {
      id: 'shahi-darbar',
      name: 'Shahi Darbar Indoor Banquet',
      type: 'Air-Conditioned Grand Hall',
      capacity: '150 to 450 Guests',
      description: 'Fully air-conditioned indoor banquet hall for Sangeet nights, Ring Ceremonies, Haldi functions, and family receptions. Fully protected from summer heat or monsoon rain with 24/7 generator backup.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Centralized air conditioning throughout', 'Round banquet tables with gold & ivory linen drape', 'Flexible stage layout for performances or speeches', 'Full power generator backup during live shows'],
    },
    {
      id: 'bridal-suites',
      name: 'Bridal Suites & Green Rooms',
      type: 'Private Preparation Rooms',
      capacity: 'Bridal & Groom Entourages',
      description: 'Air-conditioned dressing rooms situated right next to the wedding lawn. Equipped with bright triple-mirror vanity setups, clean private restrooms, and secure lockers for bridal jewelry and outfits.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Triple-mirror makeup stations', 'Secure locker space for wedding valuables', 'Direct private access to entrance pergola', 'Continuous cooling & electrical outlets'],
    },
  ],

  facilities: [
    {
      iconName: 'Zap',
      title: '24/7 Heavy-Duty Power Backup',
      detail: 'Continuous dual-generator power backup to ensure lights, air conditioning, and event sound systems never miss a beat in Patna.',
    },
    {
      iconName: 'ShieldCheck',
      title: 'Secured On-Site & Valet Parking',
      detail: 'Gated property premises with dedicated vehicle parking zones, round-the-clock watchmen, and valet coordination for large gatherings.',
    },
    {
      iconName: 'Wifi',
      title: 'High-Speed Wi-Fi Connectivity',
      detail: 'Fiber-backed Wi-Fi across guest rooms, reception lobby, and banquet areas so your calls, video streams, and messages stay connected.',
    },
    {
      iconName: 'Wind',
      title: 'Full Climate Control',
      detail: 'High-capacity split air conditioners in all guest bedrooms, bridal lounges, and the indoor Shahi Darbar banquet.',
    },
    {
      iconName: 'CheckCircle2',
      title: 'Daily Housekeeping & Hygiene',
      detail: 'Immaculately maintained rooms, fresh sanitized linens, spotless bathrooms, and scheduled trash removal.',
    },
    {
      iconName: 'Clock',
      title: '24-Hour Front Desk Support',
      detail: 'Attentive on-property staff available day and night for guest check-ins, transit directions, and luggage handling.',
    },
    {
      iconName: 'UtensilsCrossed',
      title: 'Catering & Banquet Coordination',
      detail: 'Comprehensive culinary support with expansive live counters, tandoor setups, and pure vegetarian / multi-cuisine catering options.',
    },
    {
      iconName: 'MapPin',
      title: 'Prime Kurji Mor / Patliputra Location',
      detail: 'Situated near Gate 62 on Kurji Mor, with rapid connectivity to Digha Ganga Path, Patliputra Junction, and the airport.',
    },
  ],

  galleryItems: [
    {
      id: 'gal-1',
      title: 'Illuminated Ceremonial Entrance Pergola',
      category: 'Weddings & Lawns' as const,
      caption: 'Cascading floral ceiling, crystal chandeliers, and fairy light curtains greeting wedding guests at Raj Resort.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-2',
      title: 'Grand Lotus Stage & Varmala Arena',
      category: 'Weddings & Lawns' as const,
      caption: 'Opulent white flower wall backdrop adorned with golden lotus leaves and royal setti throne.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-3',
      title: 'Aerial View of the Royal Starlit Lawn',
      category: 'Weddings & Lawns' as const,
      caption: 'Panoramic night drone perspective of the lawn, illuminated heart corridor, and guest banquet pavilions.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-4',
      title: 'Deluxe King Accommodation',
      category: 'Accommodations' as const,
      caption: 'Quiet, air-conditioned guest room featuring crisp linens, ambient lighting, and work console.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-5',
      title: 'Heart Walkway & Festive Pyrotechnics',
      category: 'Weddings & Lawns' as const,
      caption: 'The illuminated heart aisle illuminated with cold pyro sparklers for the royal couple entry.',
      aspect: 'portrait' as const,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-6',
      title: 'Shahi Darbar Indoor Banquet Setup',
      category: 'Banquets & Receptions' as const,
      caption: 'Climate-controlled hall decorated with round banquet tables and stage for sangeet or corporate meets.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-7',
      title: 'Royal Family Suite Living Lounge',
      category: 'Accommodations' as const,
      caption: 'Spacious bridal dressing area and hospitality lounge for family members.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gal-8',
      title: 'Gourmet Catering & Dining Courtyard',
      category: 'Banquets & Receptions' as const,
      caption: 'Multi-course live culinary station arrangements and spacious seated dining setup.',
      aspect: 'landscape' as const,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
    },
  ],
};
