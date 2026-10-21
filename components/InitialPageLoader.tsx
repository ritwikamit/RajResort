'use client';

import React, { useEffect, useState } from 'react';
import { RajResortLogo } from './RajResortLogo';

export const InitialPageLoader: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Keep loading page for exactly 2 seconds
    const timer = setTimeout(() => {
      setMounted(true);
      // Allow 400ms smooth fade transition before removing from DOM
      setTimeout(() => {
        setVisible(false);
      }, 400);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F9] dark:bg-[#120718] transition-opacity duration-400 ease-out select-none ${
        mounted ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
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
};
