import React from 'react';
import { RajResortLogo } from '@/components/RajResortLogo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F9]">
      <div className="flex flex-col items-center justify-center select-none animate-in fade-in duration-300">
        {/* Big Official Circular Emblem */}
        <div className="relative p-2 rounded-full bg-white shadow-[0_12px_40px_rgba(142,30,162,0.12)] border border-[#8E1EA2]/20">
          <RajResortLogo size={96} variant="full-circle" />
        </div>

        {/* Brand Wordmark */}
        <div className="mt-5 text-center">
          <h2 className="font-serif tracking-[0.2em] text-xl font-bold uppercase text-[#8E1EA2] leading-tight">
            Raj Resort
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-stone-500 block mt-0.5">
            Patliputra · Patna
          </span>
        </div>

        {/* Minimal Loading Text */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="w-24 h-0.5 bg-[#8E1EA2]/15 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] w-1/2 rounded-full animate-pulse" />
          </div>
          <span className="font-serif italic text-xs tracking-widest text-stone-600 animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
