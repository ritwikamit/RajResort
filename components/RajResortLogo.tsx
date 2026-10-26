'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'full-circle' | 'emblem-only' | 'horizontal';
  showSubtitle?: boolean;
  inverted?: boolean;
  showDivider?: boolean;
}

export const RajResortLogo: React.FC<LogoProps> = ({
  className = '',
  size = 56,
  variant = 'horizontal',
  showSubtitle = true,
  inverted = false,
  showDivider = true,
}) => {
  if (variant === 'horizontal') {
    const emblemSize = Math.max(38, size);
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
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

        {/* Vertical Divider Line | */}
        {showDivider && (
          <div 
            className={`w-[1.5px] rounded-full self-stretch my-1 sm:my-1.5 transition-colors shrink-0 ${
              inverted 
                ? 'bg-white/30' 
                : 'bg-[#F62440]/30 dark:bg-[#FFE5BF]/40'
            }`} 
          />
        )}

        {/* Wordmark typography */}
        <div className="flex flex-col justify-center">
          <span 
            className={`font-serif tracking-[0.14em] font-bold uppercase leading-none transition-colors whitespace-nowrap ${
              emblemSize >= 64 ? 'text-2xl sm:text-3xl' : emblemSize >= 48 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            } ${
              inverted ? 'text-white drop-shadow-xs' : 'text-stone-900 dark:text-stone-50'
            }`}
          >
            Raj Resort
          </span>
          {showSubtitle && (
            <span 
              className={`tracking-[0.2em] sm:tracking-[0.26em] uppercase font-semibold mt-1 transition-colors whitespace-nowrap ${
                emblemSize >= 64 ? 'text-[11px] sm:text-xs' : 'text-[9px] sm:text-[10px]'
              } ${
                inverted ? 'text-stone-300 drop-shadow-xs' : 'text-[#F62440] dark:text-[#FFE5BF]'
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
