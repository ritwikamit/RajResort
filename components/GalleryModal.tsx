'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/resort-data';

interface GalleryModalProps {
  items: GalleryItem[];
  initialIndex?: number | null;
  currentIndex?: number | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  items,
  initialIndex,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [internalIndex, setInternalIndex] = useState<number>(
    currentIndex ?? initialIndex ?? 0
  );

  useEffect(() => {
    if (currentIndex !== undefined && currentIndex !== null) {
      setInternalIndex(currentIndex);
    } else if (initialIndex !== undefined && initialIndex !== null) {
      setInternalIndex(initialIndex);
    }
  }, [currentIndex, initialIndex]);

  const activeIdx = internalIndex;

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      setInternalIndex((prev) => (prev + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    } else {
      setInternalIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  if (activeIdx < 0 || activeIdx >= items.length) return null;

  const currentItem = items[activeIdx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-1.5 px-3.5 py-2 border border-white/20 bg-stone-900/90 text-white hover:bg-black transition-colors text-xs uppercase tracking-wider font-semibold rounded-xl shadow-lg cursor-pointer"
      >
        <span>Close</span>
        <X className="w-4 h-4" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 border border-white/20 bg-stone-900/90 text-white hover:bg-black transition-colors rounded-xl shadow-lg cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 border border-white/20 bg-stone-900/90 text-white hover:bg-black transition-colors rounded-xl shadow-lg cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div className="relative max-w-4xl w-full flex flex-col border border-white/15 bg-stone-900 text-white shadow-2xl overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-xl font-sans max-h-[92vh]">
        <div className="relative w-full h-[48vh] sm:h-[62vh] md:h-[68vh] bg-stone-950 flex items-center justify-center p-2">
          <Image
            key={activeIdx}
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="90vw"
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Caption Panel */}
        <div className="p-5 sm:p-6 bg-[#16071C] border-t border-[#8E1EA2]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#FFC0DE] font-sans mb-1">
              {currentItem.category} · Photo {activeIdx + 1} of {items.length}
            </div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
              {currentItem.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl font-sans font-normal">
              {currentItem.caption}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto shrink-0 px-6 py-2.5 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white text-xs uppercase tracking-wider font-semibold rounded-xl text-center cursor-pointer shadow-md"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
};
