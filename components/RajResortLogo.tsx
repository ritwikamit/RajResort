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
        {/* Exact Official Circular Emblem with Crisp White Outer Circle */}
        <div 
          className="relative shrink-0 flex items-center justify-center select-none"
          style={{ width: emblemSize, height: emblemSize }}
        >
          {/* Prominent White Outer Circle with subtle contrast boundary */}
          <div className="w-full h-full rounded-full p-[2px] sm:p-[2.5px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.14)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_2px_10px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#b40001]">
              <Image
                src="/favicon.png"
                alt="Raj Resort Official Emblem"
                width={emblemSize * 2}
                height={emblemSize * 2}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
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

        {/* Wordmark typography in elegant cursive */}
        <div className="flex flex-col justify-center">
          <span 
            className={`font-cursive tracking-wide leading-tight transition-colors whitespace-nowrap ${
              emblemSize >= 64 ? 'text-3xl sm:text-4xl' : emblemSize >= 48 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${
              inverted ? 'text-white drop-shadow-xs' : 'text-stone-900 dark:text-stone-50'
            }`}
          >
            Raj Resort
          </span>
          {showSubtitle && (
            <span 
              className={`tracking-[0.2em] sm:tracking-[0.26em] uppercase font-semibold mt-0.5 transition-colors whitespace-nowrap ${
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
      className={`relative shrink-0 flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full rounded-full p-[2px] sm:p-[2.5px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.14)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_2px_10px_rgba(0,0,0,0.6)] flex items-center justify-center">
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#b40001]">
          <Image
            src="/favicon.png"
            alt="Raj Resort Official Emblem"
            width={size * 2}
            height={size * 2}
            priority
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
