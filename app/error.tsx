'use client';

import React, { useEffect } from 'react';
import { RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If this is a chunk load error from an in-flight deployment or stale browser cache, auto-reload once
    const msg = error?.message || '';
    const isChunkError =
      msg.includes('Loading chunk') ||
      msg.includes('ChunkLoadError') ||
      error?.name === 'ChunkLoadError';

    if (isChunkError) {
      const hasReloaded = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('raj_resort_chunk_reloaded');
      if (!hasReloaded) {
        sessionStorage.setItem('raj_resort_chunk_reloaded', 'true');
        window.location.reload();
        return;
      }
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 flex flex-col items-center justify-center p-6 text-center select-none font-sans">
      <div className="max-w-md w-full bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#FFF2DB] dark:bg-[#2c1f1b] flex items-center justify-center mx-auto text-[#F62440]">
          <RotateCcw className="w-8 h-8" />
        </div>

        <div>
          <span className="font-cursive text-2xl text-[#F62440] block mb-1">
            Raj Resort Patna
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
            Refresh Your Celebration View
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
            A fresh update was just deployed. Please tap below to seamlessly reload the latest resort experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              if (typeof sessionStorage !== 'undefined') {
                sessionStorage.removeItem('raj_resort_chunk_reloaded');
              }
              window.location.reload();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reload Website</span>
          </button>
          
          <Link
            href="/"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#FFE5BF] dark:border-[#352520] text-stone-700 dark:text-stone-300 hover:text-stone-900 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
