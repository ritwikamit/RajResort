'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'full-circle' | 'emblem-only' | 'horizontal';
  showSubtitle?: boolean;
  inverted?: boolean;
}

export const RajResortLogo: React.FC<LogoProps> = ({
  className = '',
  size = 56,
  variant = 'full-circle',
  showSubtitle = true,
  inverted = false,
}) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        {/* Ornate Red Circular Emblem from official logo */}
        <div 
          className="relative shrink-0 flex items-center justify-center select-none drop-shadow-sm"
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Raj Resort Royal Emblem"
          >
            {/* Outer Deep Crimson Circle matching logo */}
            <circle cx="100" cy="100" r="96" fill="#99141A" />
            <circle cx="100" cy="100" r="92" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.45" />
            
            {/* Ornate Monogram Medallion */}
            <circle cx="100" cy="62" r="28" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="100" cy="62" r="23" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
            
            {/* The 'R' */}
            <text
              x="100"
              y="74"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Georgia, 'Cinzel', serif"
              fontSize="34"
              fontWeight="700"
            >
              R
            </text>

            {/* Left Acanthus Scroll */}
            <path
              d="M72 62 C62 52 46 54 36 64 C28 72 32 82 42 78 C52 74 58 64 68 64"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M60 62 C50 56 42 58 38 66"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M70 68 C58 74 48 84 56 90 C62 94 72 84 74 74"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right Acanthus Scroll */}
            <path
              d="M128 62 C138 52 154 54 164 64 C172 72 168 82 158 78 C148 74 142 64 132 64"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M140 62 C150 56 158 58 162 66"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M130 68 C142 74 152 84 144 90 C138 94 128 84 126 74"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Central Ornate Divider with Fleur-de-lis */}
            <line x1="38" y1="96" x2="90" y2="96" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="36" cy="96" r="2" fill="#FFFFFF" />
            <line x1="110" y1="96" x2="162" y2="96" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="164" cy="96" r="2" fill="#FFFFFF" />
            
            {/* Center Palmette */}
            <path
              d="M100 90 C96 94 92 98 100 102 C108 98 104 94 100 90 Z"
              fill="#FFFFFF"
            />
            <path
              d="M93 96 C90 94 88 98 94 99 Z"
              fill="#FFFFFF"
            />
            <path
              d="M107 96 C110 94 112 98 106 99 Z"
              fill="#FFFFFF"
            />

            {/* RAJ Typography */}
            <text
              x="100"
              y="134"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Georgia, 'Cinzel', serif"
              fontSize="34"
              fontWeight="700"
              letterSpacing="2"
            >
              RAJ
            </text>

            {/* RESORT Typography */}
            <text
              x="100"
              y="160"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Georgia, 'Cinzel', serif"
              fontSize="23"
              fontWeight="600"
              letterSpacing="3"
            >
              RESORT
            </text>
          </svg>
        </div>

        {/* Wordmark typography */}
        <div className="flex flex-col">
          <span className={`font-serif tracking-[0.14em] text-xl font-bold uppercase leading-none transition-colors ${
            inverted ? 'text-white drop-shadow-xs' : 'text-stone-900 dark:text-stone-50'
          }`}>
            Raj Resort
          </span>
          {showSubtitle && (
            <span className={`text-[10px] tracking-[0.26em] uppercase font-semibold mt-1 transition-colors ${
              inverted ? 'text-amber-200 drop-shadow-xs' : 'text-[#99141A] dark:text-rose-400'
            }`}>
              Patliputra · Patna
            </span>
          )}
        </div>
      </div>
    );
  }

  // Standalone Full Circular Emblem
  return (
    <div 
      className={`relative shrink-0 flex items-center justify-center select-none drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Raj Resort Official Emblem"
      >
        <circle cx="100" cy="100" r="96" fill="#99141A" />
        <circle cx="100" cy="100" r="93" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.45" />

        <circle cx="100" cy="62" r="28" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="100" cy="62" r="23" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
        
        <text
          x="100"
          y="74"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Georgia, 'Cinzel', serif"
          fontSize="34"
          fontWeight="700"
        >
          R
        </text>

        <path
          d="M72 62 C62 52 46 54 36 64 C28 72 32 82 42 78 C52 74 58 64 68 64"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 62 C50 56 42 58 38 66"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M70 68 C58 74 48 84 56 90 C62 94 72 84 74 74"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M128 62 C138 52 154 54 164 64 C172 72 168 82 158 78 C148 74 142 64 132 64"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M140 62 C150 56 158 58 162 66"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M130 68 C142 74 152 84 144 90 C138 94 128 84 126 74"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        <line x1="38" y1="96" x2="90" y2="96" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="36" cy="96" r="2" fill="#FFFFFF" />
        <line x1="110" y1="96" x2="162" y2="96" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="164" cy="96" r="2" fill="#FFFFFF" />
        
        <path
          d="M100 90 C96 94 92 98 100 102 C108 98 104 94 100 90 Z"
          fill="#FFFFFF"
        />
        <path
          d="M93 96 C90 94 88 98 94 99 Z"
          fill="#FFFFFF"
        />
        <path
          d="M107 96 C110 94 112 98 106 99 Z"
          fill="#FFFFFF"
        />

        <text
          x="100"
          y="134"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Georgia, 'Cinzel', serif"
          fontSize="35"
          fontWeight="700"
          letterSpacing="2"
        >
          RAJ
        </text>

        <text
          x="100"
          y="160"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Georgia, 'Cinzel', serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="3"
        >
          RESORT
        </text>
      </svg>
    </div>
  );
};
