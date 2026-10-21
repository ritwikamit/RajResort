'use client';

import React from 'react';
import Image from 'next/image';

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
    const emblemSize = Math.max(40, size);
    return (
      <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
        {/* Exact Official Circular Emblem from favicon.png */}
        <div 
          className="relative shrink-0 flex items-center justify-center select-none drop-shadow-md rounded-full overflow-hidden"
          style={{ width: emblemSize, height: emblemSize }}
        >
          <Image
            src="/favicon.png"
            alt="Raj Resort Official Emblem"
            width={emblemSize * 2}
            height={emblemSize * 2}
            priority
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        {/* Wordmark typography */}
        <div className="flex flex-col">
          <span 
            className={`font-serif tracking-[0.14em] font-bold uppercase leading-none transition-colors whitespace-nowrap ${
              emblemSize > 50 ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'
            } ${
              inverted ? 'text-white drop-shadow-xs' : 'text-stone-900 dark:text-stone-50'
            }`}
          >
            Raj Resort
          </span>
          {showSubtitle && (
            <span 
              className={`tracking-[0.2em] sm:tracking-[0.28em] uppercase font-semibold mt-1 transition-colors whitespace-nowrap ${
                emblemSize > 50 ? 'text-[10px] sm:text-xs' : 'text-[9px] sm:text-[10px]'
              } ${
                inverted ? 'text-stone-300 drop-shadow-xs' : 'text-[#8E1EA2] dark:text-[#ED96D7]'
              }`}
            >
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
      className={`relative shrink-0 flex items-center justify-center select-none drop-shadow-md rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/favicon.png"
        alt="Raj Resort Official Emblem"
        width={size * 2}
        height={size * 2}
        priority
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
};
