import React from 'react';
import { RajResortLogo } from '@/components/RajResortLogo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFAF3] dark:bg-[#181210] select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,242,219,0.85)_0%,rgba(255,250,243,1)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(40,25,20,0.85)_0%,rgba(24,18,16,1)_70%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
        {/* Big Official Logo Lockup */}
        <RajResortLogo 
          variant="horizontal" 
          size={84} 
          showDivider={true} 
          showSubtitle={true} 
          className="scale-110 sm:scale-125 transition-transform"
        />

        {/* Just Loading... text */}
        <p className="mt-8 font-serif italic text-xs tracking-[0.25em] text-[#F62440] dark:text-[#FFE5BF] uppercase font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
