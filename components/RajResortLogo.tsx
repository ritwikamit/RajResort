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
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        {/* Exact Official Circular Emblem from favicon.png */}
        <div 
          className="relative shrink-0 flex items-center justify-center select-none drop-shadow-sm rounded-full overflow-hidden"
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
