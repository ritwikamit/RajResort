'use client';

import React from 'react';

interface VisualArtProps {
  type: 'hero' | 'wedding-lawn' | 'deluxe-room' | 'banquet-hall' | 'floral-pergola' | 'aerial-lawn' | 'family-suite' | 'dining';
  title?: string;
  className?: string;
}

export const VisualArt: React.FC<VisualArtProps> = ({ type, title, className = '' }) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#F7F3EB] via-[#F2ECE1] to-[#EBE2D3] ${className}`}>
          {/* Luminous Sunbeam & Ambient Glow */}
          <div className="absolute -top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/40 via-rose-200/20 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-80 h-80 bg-gradient-to-tr from-[#99141A]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Architectural Pergola & Facade Art Canvas */}
          <svg viewBox="0 0 1200 680" className="w-full h-full object-cover relative z-10" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="skyLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFBF2" />
                <stop offset="60%" stopColor="#F5ECE0" />
                <stop offset="100%" stopColor="#EBDDC8" />
              </linearGradient>
              <linearGradient id="wallLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#EDE5D8" />
              </linearGradient>
              <linearGradient id="goldChandelier" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="carpetRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8A1116" />
                <stop offset="100%" stopColor="#AA171E" />
              </linearGradient>
            </defs>

            {/* Background Sky Canvas */}
            <rect width="1200" height="680" fill="url(#skyLight)" />

            {/* Distant Architectural Pavilion / Resort Wings */}
            <rect x="140" y="220" width="920" height="340" fill="url(#wallLight)" stroke="#D8CEBD" strokeWidth="1" />
            <rect x="180" y="250" width="840" height="15" fill="#E2D7C5" />
            <rect x="140" y="210" width="920" height="10" fill="#99141A" fillOpacity="0.85" />
            
            {/* Windows with Warm Ambient Reflection */}
            <g opacity="0.9">
              <rect x="200" y="280" width="75" height="110" fill="#FFFDF8" stroke="#CFBEA8" strokeWidth="1" />
              <line x1="200" y1="335" x2="275" y2="335" stroke="#CFBEA8" strokeWidth="0.8" />
              <line x1="237.5" y1="280" x2="237.5" y2="390" stroke="#CFBEA8" strokeWidth="0.8" />

              <rect x="310" y="280" width="75" height="110" fill="#FFFDF8" stroke="#CFBEA8" strokeWidth="1" />
              <line x1="310" y1="335" x2="385" y2="335" stroke="#CFBEA8" strokeWidth="0.8" />
              <line x1="347.5" y1="280" x2="347.5" y2="390" stroke="#CFBEA8" strokeWidth="0.8" />

              <rect x="815" y="280" width="75" height="110" fill="#FFFDF8" stroke="#CFBEA8" strokeWidth="1" />
              <line x1="815" y1="335" x2="890" y2="335" stroke="#CFBEA8" strokeWidth="0.8" />
              <line x1="852.5" y1="280" x2="852.5" y2="390" stroke="#CFBEA8" strokeWidth="0.8" />

              <rect x="925" y="280" width="75" height="110" fill="#FFFDF8" stroke="#CFBEA8" strokeWidth="1" />
              <line x1="925" y1="335" x2="1000" y2="335" stroke="#CFBEA8" strokeWidth="0.8" />
              <line x1="962.5" y1="280" x2="962.5" y2="390" stroke="#CFBEA8" strokeWidth="0.8" />
            </g>

            {/* Manicured Lawn Floor in Bright Emerald */}
            <path d="M0 500 L1200 500 L1200 680 L0 680 Z" fill="#2A5C43" />
            <path d="M100 500 L1100 500 L1180 680 L20 680 Z" fill="#326B4F" stroke="#468867" strokeWidth="1" />
            
            {/* Grand Entrance Floral Pergola Canopy */}
            <path d="M370 140 L830 140 L870 500 L330 500 Z" fill="#FBF8F2" stroke="#E0D5C3" strokeWidth="1.5" />
            
            {/* Hanging Floral Pergola Greenery (Cascading from video) */}
            <path d="M350 150 Q390 195 430 155 Q470 200 510 150 Q550 195 590 155 Q630 200 670 150 Q710 195 750 155 Q790 200 830 150 L830 140 L350 140 Z" fill="#2E694B" />
            <path d="M370 170 Q410 215 450 175 Q490 220 530 170 Q570 215 610 175 Q650 220 690 170 Q730 215 770 175 Q810 220 830 170" stroke="#448965" strokeWidth="3" fill="none" />

            {/* Signature Drop Chandeliers */}
            <g>
              {/* Center Chandelier */}
              <circle cx="600" cy="240" r="45" fill="#FEF3C7" fillOpacity="0.6" />
              <line x1="600" y1="140" x2="600" y2="220" stroke="#B45309" strokeWidth="2" />
              <ellipse cx="600" cy="235" rx="22" ry="14" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
              <circle cx="585" cy="242" r="5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.5" />
              <circle cx="600" cy="246" r="6" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
              <circle cx="615" cy="242" r="5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.5" />

              {/* Left Chandelier */}
              <circle cx="470" cy="260" r="35" fill="#FEF3C7" fillOpacity="0.5" />
              <line x1="470" y1="140" x2="470" y2="245" stroke="#B45309" strokeWidth="1.5" />
              <ellipse cx="470" cy="255" rx="16" ry="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />

              {/* Right Chandelier */}
              <circle cx="730" cy="260" r="35" fill="#FEF3C7" fillOpacity="0.5" />
              <line x1="730" y1="140" x2="730" y2="245" stroke="#B45309" strokeWidth="1.5" />
              <ellipse cx="730" cy="255" rx="16" ry="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
            </g>

            {/* Vertical Fairy Light Curtains */}
            <g stroke="#D97706" strokeOpacity="0.45" strokeDasharray="3 7" strokeWidth="1.2">
              <line x1="400" y1="170" x2="400" y2="500" />
              <line x1="430" y1="180" x2="430" y2="500" />
              <line x1="770" y1="180" x2="770" y2="500" />
              <line x1="800" y1="170" x2="800" y2="500" />
            </g>

            {/* Ceremonial Central Red Carpet Runway */}
            <path d="M520 500 L680 500 L760 680 L440 680 Z" fill="url(#carpetRed)" stroke="#7D0E13" strokeWidth="1.5" />
            <path d="M545 500 L655 500 L710 680 L490 680 Z" fill="#99141A" />
            
            {/* Floral entry arches in distance */}
            <path d="M540 500 Q600 430 660 500" stroke="#FBBF24" strokeWidth="3" fill="none" opacity="0.9" />
            <path d="M530 500 Q600 420 670 500" stroke="#99141A" strokeWidth="2.5" fill="none" opacity="0.8" />
          </svg>

          {/* Luminous light glass overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent pointer-events-none" />
        </div>
      );

    case 'wedding-lawn':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF6F0] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Stage Truss Framework */}
            <rect width="800" height="600" fill="#F5EFE4" />
            <rect x="70" y="60" width="660" height="20" fill="#E8DDCB" stroke="#D3C3AB" strokeWidth="1.5" />
            <line x1="70" y1="60" x2="70" y2="460" stroke="#C8B89E" strokeWidth="8" />
            <line x1="730" y1="60" x2="730" y2="460" stroke="#C8B89E" strokeWidth="8" />

            {/* White Floral Wall Backdrop (from real video) */}
            <rect x="90" y="80" width="620" height="300" fill="#FFFFFF" stroke="#E5D9C8" strokeWidth="1.5" />
            
            {/* Cascading White & Gold Flowers */}
            <g opacity="0.4" fill="#E8DEC8">
              <circle cx="150" cy="130" r="14" />
              <circle cx="210" cy="160" r="16" />
              <circle cx="270" cy="120" r="15" />
              <circle cx="530" cy="130" r="16" />
              <circle cx="590" cy="160" r="15" />
              <circle cx="650" cy="120" r="14" />
            </g>

            {/* Iconic Lotus Petal Arch Motif in Royal Crimson & Gold */}
            <path
              d="M170 360 C210 200 310 180 400 240 C490 180 590 200 630 360 Z"
              fill="#F472B6"
              fillOpacity="0.4"
              stroke="#D4AF37"
              strokeWidth="5"
            />
            <path
              d="M230 360 C270 230 350 210 400 260 C450 210 530 230 570 360 Z"
              fill="#99141A"
              stroke="#D4AF37"
              strokeWidth="3.5"
            />

            {/* Setti Platform / Royal Throne */}
            <rect x="280" y="330" width="240" height="70" fill="#FFFDF8" stroke="#D4AF37" strokeWidth="2.5" rx="4" />
            <path d="M310 330 C310 280 350 260 400 260 C450 260 490 280 490 330 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" />
            
            {/* Front Stage Edge in Rich Ruby */}
            <rect x="50" y="420" width="700" height="50" fill="#99141A" stroke="#7A0E13" strokeWidth="1" />
            <rect x="30" y="470" width="740" height="30" fill="#2E694B" />

            {/* Golden Floral Pedestals */}
            <rect x="130" y="360" width="30" height="70" fill="#D4AF37" />
            <circle cx="145" cy="350" r="18" fill="#FFFBEB" stroke="#B45309" strokeWidth="1" />
            <rect x="640" y="360" width="30" height="70" fill="#D4AF37" />
            <circle cx="655" cy="350" r="18" fill="#FFFBEB" stroke="#B45309" strokeWidth="1" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Weddings & Celebrations
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              The Grand Royal Lotus Stage
            </p>
          </div>
        </div>
      );

    case 'deluxe-room':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FBF9F5] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Bedroom wall with light alabaster molding */}
            <rect width="800" height="600" fill="#FAF6EE" />
            <rect x="100" y="70" width="600" height="360" fill="#F4EDE0" stroke="#DFD3C0" strokeWidth="1.5" />
            
            {/* Wooden Headboard with deep mahogany */}
            <rect x="180" y="200" width="440" height="190" fill="#4A3326" stroke="#684A37" strokeWidth="2" />
            <rect x="200" y="220" width="400" height="150" fill="#38251A" />
            
            {/* King Bed with Crisp White Linens */}
            <rect x="220" y="320" width="360" height="190" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Pillows */}
            <rect x="240" y="295" width="140" height="65" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="4" />
            <rect x="420" y="295" width="140" height="65" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" rx="4" />
            
            {/* Deep Ruby Accent Runner Cushion */}
            <rect x="270" y="325" width="80" height="32" fill="#99141A" rx="2" />
            <rect x="450" y="325" width="80" height="32" fill="#99141A" rx="2" />
            <rect x="220" y="445" width="360" height="45" fill="#99141A" />

            {/* Bedside Tables & Warm Lamps */}
            <rect x="120" y="340" width="80" height="130" fill="#4A3326" />
            <circle cx="160" cy="270" r="18" fill="#FDE68A" fillOpacity="0.8" />
            <path d="M145 290 L175 290 L168 330 L152 330 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />

            <rect x="600" y="340" width="80" height="130" fill="#4A3326" />
            <circle cx="640" cy="270" r="18" fill="#FDE68A" fillOpacity="0.8" />
            <path d="M625 290 L655 290 L648 330 L632 330 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />

            {/* Polished Ivory Marble Floor */}
            <polygon points="0,480 800,480 800,600 0,600" fill="#EDE6D8" />
            <line x1="200" y1="480" x2="100" y2="600" stroke="#DFD5C2" strokeWidth="1.5" />
            <line x1="400" y1="480" x2="380" y2="600" stroke="#DFD5C2" strokeWidth="1.5" />
            <line x1="600" y1="480" x2="680" y2="600" stroke="#DFD5C2" strokeWidth="1.5" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Stay & Comfort
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Deluxe King Room Interior
            </p>
          </div>
        </div>
      );

    case 'banquet-hall':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Light banquet ballroom ceiling */}
            <rect width="800" height="600" fill="#F5EFE6" />
            <rect x="90" y="20" width="620" height="80" fill="#EFE6DA" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="240" cy="60" r="18" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
            <circle cx="400" cy="60" r="22" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
            <circle cx="560" cy="60" r="18" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />

            {/* Stage Backdrop at End of Hall */}
            <rect x="200" y="140" width="400" height="160" fill="#FFFDF8" stroke="#99141A" strokeWidth="2.5" />
            <rect x="220" y="160" width="360" height="120" fill="#FAF6EE" />
            <text x="400" y="225" textAnchor="middle" fill="#99141A" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" letterSpacing="3">SHAHI DARBAR</text>

            {/* Banquet Floor with Circular Tables in Ivory & Gold */}
            <polygon points="0,320 800,320 800,600 0,600" fill="#E8DEC8" />
            
            {/* Left Table */}
            <ellipse cx="200" cy="420" rx="90" ry="38" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" />
            <ellipse cx="200" cy="415" rx="30" ry="12" fill="#99141A" />
            
            {/* Center Table */}
            <ellipse cx="400" cy="480" rx="110" ry="48" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2.5" />
            <ellipse cx="400" cy="475" rx="36" ry="14" fill="#99141A" />

            {/* Right Table */}
            <ellipse cx="600" cy="420" rx="90" ry="38" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" />
            <ellipse cx="600" cy="415" rx="30" ry="12" fill="#99141A" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Indoor Receptions
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Shahi Darbar Banquet Hall
            </p>
          </div>
        </div>
      );

    case 'floral-pergola':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            <polygon points="120,40 680,40 760,560 40,560" fill="#F8F3EA" stroke="#DFD5C2" strokeWidth="2" />
            <rect x="80" y="40" width="640" height="120" fill="#2E694B" />
            <path d="M100 160 Q160 210 220 160 Q280 210 340 160 Q400 210 460 160 Q520 210 580 160 Q640 210 700 160" stroke="#468867" strokeWidth="5" fill="none" />

            <circle cx="400" cy="220" r="28" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <line x1="400" y1="120" x2="400" y2="200" stroke="#B45309" strokeWidth="2" />
            <circle cx="400" cy="300" r="18" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />

            <polygon points="320,420 480,420 540,600 260,600" fill="#99141A" stroke="#7A0E13" strokeWidth="1.5" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Grand Entrance
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Chandelier & Floral Pergola
            </p>
          </div>
        </div>
      );

    case 'aerial-lawn':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="600" fill="#F5EFE4" />
            <rect x="120" y="80" width="560" height="440" fill="#2E694B" stroke="#468867" strokeWidth="3" />
            
            <rect x="250" y="100" width="300" height="80" fill="#99141A" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="400" cy="140" r="28" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />

            {/* Heart Arch Corridor Down Middle */}
            <path
              d="M400 230 C365 195 320 220 320 265 C320 310 400 375 400 375 C400 375 480 310 480 265 C480 220 435 195 400 230 Z"
              stroke="#E11D48"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M400 240 C370 210 330 230 330 265 C330 300 400 355 400 355 C400 355 470 300 470 265 C470 230 430 210 400 240 Z"
              stroke="#D4AF37"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Seating Layout on Sides */}
            <g fill="#FFFDF8" stroke="#D8CEBD" strokeWidth="0.8">
              <rect x="150" y="220" width="120" height="16" />
              <rect x="150" y="250" width="120" height="16" />
              <rect x="150" y="280" width="120" height="16" />
              <rect x="150" y="310" width="120" height="16" />

              <rect x="530" y="220" width="120" height="16" />
              <rect x="530" y="250" width="120" height="16" />
              <rect x="530" y="280" width="120" height="16" />
              <rect x="530" y="310" width="120" height="16" />
            </g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Aerial Perspective
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Celebration Lawn & Heart Walkway
            </p>
          </div>
        </div>
      );

    case 'family-suite':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="600" fill="#FAF6EE" />
            <rect x="80" y="80" width="640" height="340" fill="#F4EDE0" stroke="#DFD3C0" strokeWidth="1.5" />
            <rect x="140" y="280" width="220" height="80" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" rx="4" />
            <rect x="160" y="270" width="45" height="30" fill="#99141A" rx="2" />
            <rect x="290" y="270" width="45" height="30" fill="#D4AF37" rx="2" />
            <rect x="180" y="380" width="140" height="40" fill="#4A3326" stroke="#684A37" strokeWidth="1.5" />
            
            <rect x="460" y="160" width="180" height="220" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="3" />
            <rect x="480" y="180" width="140" height="180" fill="#F9F6F0" />
            <circle cx="490" cy="170" r="6" fill="#FDE68A" />
            <circle cx="530" cy="170" r="6" fill="#FDE68A" />
            <circle cx="570" cy="170" r="6" fill="#FDE68A" />
            <circle cx="610" cy="170" r="6" fill="#FDE68A" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Family & Bridal Suites
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Royal Living Lounge & Vanity
            </p>
          </div>
        </div>
      );

    case 'dining':
    default:
      return (
        <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="600" fill="#F5EFE4" />
            <rect x="90" y="150" width="620" height="50" fill="#99141A" stroke="#7A0E13" strokeWidth="2" />
            <rect x="110" y="200" width="580" height="140" fill="#FFFFFF" stroke="#D8CEBD" strokeWidth="1.5" />
            <g fill="#D4AF37" stroke="#92400E" strokeWidth="1.5">
              <ellipse cx="190" cy="245" rx="36" ry="18" />
              <ellipse cx="320" cy="245" rx="36" ry="18" />
              <ellipse cx="460" cy="245" rx="36" ry="18" />
              <ellipse cx="590" cy="245" rx="36" ry="18" />
            </g>
            <polygon points="0,380 800,380 800,600 0,600" fill="#EDE4D2" />
            <ellipse cx="250" cy="480" rx="100" ry="40" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" />
            <ellipse cx="550" cy="480" rx="100" ry="40" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#99141A] uppercase">
              Catering & Banqueting
            </span>
            <p className="font-serif text-lg text-stone-900 font-bold mt-0.5">
              Grand Buffet & Seated Dining
            </p>
          </div>
        </div>
      );
  }
};
