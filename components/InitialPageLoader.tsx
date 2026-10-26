'use client';

import React, { useEffect, useState } from 'react';
import { RajResortLogo } from './RajResortLogo';

export const InitialPageLoader: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let isWindowLoaded = typeof document !== 'undefined' && document.readyState === 'complete';
    let minTimeElapsed = false;

    const tryDismiss = () => {
      if (isWindowLoaded && minTimeElapsed) {
        setMounted(true);
        setTimeout(() => {
          setVisible(false);
        }, 500);
      }
    };

    // Minimum display time (1.5s) so the big logo presentation is visible and smooth
    const timer = setTimeout(() => {
      minTimeElapsed = true;
      tryDismiss();
    }, 1500);

    const onLoad = () => {
      isWindowLoaded = true;
      tryDismiss();
    };

    if (!isWindowLoaded) {
      window.addEventListener('load', onLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFAF3] dark:bg-[#181210] transition-opacity duration-500 ease-out select-none ${
        mounted ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle Radial Glow in Palette Colors */}
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
};
