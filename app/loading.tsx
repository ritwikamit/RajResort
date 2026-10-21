import React from 'react';
import { RajResortLogo } from '@/components/RajResortLogo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F9] dark:bg-[#120718] select-none">
      <div className="flex flex-col items-center justify-center animate-in fade-in duration-300">
        {/* Logo | Texts lockup */}
        <RajResortLogo 
          variant="horizontal" 
          size={64} 
          showDivider={true} 
          showSubtitle={true} 
        />

        {/* Just Loading... text */}
        <p className="mt-8 font-serif italic text-sm tracking-[0.25em] text-[#8E1EA2] dark:text-[#ED96D7] uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
