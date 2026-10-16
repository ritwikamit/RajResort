'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/resort-data';
import { VisualArt } from './VisualArt';

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const mapItemToVisualType = (id: string): 'wedding-lawn' | 'deluxe-room' | 'banquet-hall' | 'floral-pergola' | 'aerial-lawn' | 'family-suite' | 'dining' => {
  switch (id) {
    case 'gal-1':
      return 'floral-pergola';
    case 'gal-2':
      return 'wedding-lawn';
    case 'gal-3':
      return 'aerial-lawn';
    case 'gal-4':
      return 'deluxe-room';
    case 'gal-5':
      return 'wedding-lawn';
    case 'gal-6':
      return 'banquet-hall';
    case 'gal-7':
      return 'family-suite';
    case 'gal-8':
    default:
      return 'dining';
  }
};

export const GalleryModal: React.FC<GalleryModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [failedIndices, setFailedIndices] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 p-4 sm:p-6 backdrop-blur-md"
    >
      {/* Close button with smooth rounded corners */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 border border-stone-300 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-400 hover:border-[#99141A] transition-colors text-[11px] sm:text-xs uppercase tracking-wider font-bold rounded-xl shadow-md cursor-pointer"
      >
        <span className="hidden sm:inline">Close</span>
        <X className="w-4 h-4" />
      </button>

      {/* Navigation Arrows with smooth corners */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 border border-stone-300 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-400 hover:border-[#99141A] transition-colors rounded-xl shadow-md cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 border border-stone-300 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-400 hover:border-[#99141A] transition-colors rounded-xl shadow-md cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal Container with Smooth 2xl Corners */}
      <div className="relative max-w-4xl w-full flex flex-col border border-white/90 dark:border-stone-700/80 bg-white/95 dark:bg-stone-900/95 shadow-2xl overflow-hidden rounded-2xl backdrop-blur-xl font-sans max-h-[92vh] overflow-y-auto">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#FAF6F0] dark:bg-[#121815]">
          {currentItem.image && !failedIndices[currentIndex] ? (
            <Image
              key={currentIndex}
              src={currentItem.image}
              alt={currentItem.title}
              fill
              referrerPolicy="no-referrer"
              className="object-cover"
              onError={() => setFailedIndices((prev) => ({ ...prev, [currentIndex]: true }))}
            />
          ) : (
            <VisualArt type={mapItemToVisualType(currentItem.id)} />
          )}
        </div>

        {/* Caption Panel with Dark Mode Support */}
        <div className="p-4 sm:p-6 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#99141A] dark:text-rose-400 font-sans mb-0.5 sm:mb-1">
              {currentItem.category} · Photo {currentIndex + 1} of {items.length}
            </div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-50">
              {currentItem.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-sans">
              {currentItem.caption}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto shrink-0 px-5 py-2.5 btn-red-gradient text-xs uppercase tracking-wider font-semibold rounded-xl text-center"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
};
