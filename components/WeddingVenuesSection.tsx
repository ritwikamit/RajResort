'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, CheckCircle2, Calendar, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const WeddingVenuesSection: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(RESORT_DATA.venues[0].id);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0);

  const activeVenue = RESORT_DATA.venues.find((v) => v.id === activeVenueId) || RESORT_DATA.venues[0];
  const venueImages = activeVenue.images && activeVenue.images.length > 0 
    ? activeVenue.images 
    : [activeVenue.image];

  const handleVenueChange = (venueId: string) => {
    setActiveVenueId(venueId);
    setCurrentPhotoIdx(0);
  };

  // Instant photo changing on click
  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev + 1) % venueImages.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev - 1 + venueImages.length) % venueImages.length);
  };

  const handleSelectPhoto = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIdx(idx);
  };

  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 border-t border-[#8E1EA2]/15 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#8E1EA2] dark:text-[#ED96D7] tracking-wide block mb-1">
              Made for Family Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Spaces Where You Feel at Home
            </h2>
          </div>
          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            From the Baraat dancing through the flower gate to parents blessing the couple at the mandap, each corner of our resort is prepared with care for your family.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 border-b border-[#8E1EA2]/15 pb-5 mb-10">
          {RESORT_DATA.venues.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => handleVenueChange(venue.id)}
                className={`p-3.5 sm:p-4 text-left transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white border-transparent shadow-md'
                    : 'bg-white dark:bg-[#1E0B28] text-stone-800 dark:text-stone-200 border-[#8E1EA2]/20 hover:border-[#8E1EA2]'
                }`}
              >
                <div className="font-serif text-sm sm:text-base font-bold line-clamp-1">
                  {venue.name}
                </div>
                <div className={`text-[11px] mt-0.5 ${isActive ? 'text-[#FFC0DE]' : 'text-stone-500 dark:text-stone-400'}`}>
                  {venue.capacity}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Venue Showcase Card */}
        <div className="bg-white dark:bg-[#1A0A24] rounded-2xl sm:rounded-3xl border border-[#8E1EA2]/15 shadow-[0_16px_40px_rgba(142,30,162,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Interactive Photo Viewer (Click to change immediately) */}
            <div className="lg:col-span-7 flex flex-col bg-stone-950">
              
              {/* Main Photo Container - Click to change photo instantly */}
              <div
                onClick={handleNextPhoto}
                className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] cursor-pointer overflow-hidden group select-none"
                title="Click anywhere on the photo to see the next view"
              >
                {/* Preloaded stacked images for instantaneous switching */}
                {venueImages.map((imgSrc, idx) => {
                  const isVisible = idx === currentPhotoIdx;
                  return (
                    <div
                      key={imgSrc + idx}
                      className={`absolute inset-0 transition-opacity duration-150 ${
                        isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${activeVenue.name} - View ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={idx === 0 || idx === currentPhotoIdx}
                        className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  );
                })}
                
                {/* Subtle bottom gradient shade */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                {/* Left Navigation Arrow */}
                {venueImages.length > 1 && (
                  <button
                    onClick={handlePrevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Navigation Arrow */}
                {venueImages.length > 1 && (
                  <button
                    onClick={handleNextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Top Badge: Photo Counter & Click Prompt */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-md border border-white/15">
                    <Camera className="w-3.5 h-3.5 text-[#FFC0DE]" />
                    <span>Photo {currentPhotoIdx + 1} of {venueImages.length}</span>
                  </div>
                  <div className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-[#8E1EA2]/80 backdrop-blur-md text-[#FFC0DE] text-[11px] font-semibold border border-[#FFC0DE]/30">
                    Click photo to change 📸
                  </div>
                </div>

                {/* Bottom Tag on image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#FFC0DE]">
                    {activeVenue.type}
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-bold mt-0.5">
                    {activeVenue.name}
                  </p>
                </div>
              </div>

              {/* Clickable Thumbnail Strip for Immediate Photo Switching */}
              {venueImages.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto p-3 bg-stone-900 border-t border-white/10 select-none">
                  <span className="text-[11px] text-stone-300 font-medium whitespace-nowrap pl-1 hidden sm:inline">
                    Views:
                  </span>
                  {venueImages.map((imgSrc, idx) => {
                    const isSelected = idx === currentPhotoIdx;
                    return (
                      <button
                        key={idx}
                        onClick={(e) => handleSelectPhoto(idx, e)}
                        title={`Switch to view ${idx + 1}`}
                        className={`relative shrink-0 w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#ED96D7] ring-2 ring-[#8E1EA2] scale-105 shadow-md opacity-100'
                            : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/70'
                        }`}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                  <span className="text-[10px] text-[#FFC0DE] font-semibold whitespace-nowrap ml-auto pr-1">
                    Click any thumbnail
                  </span>
                </div>
              )}

            </div>

            {/* Venue Details & Capacity */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8E1EA2] dark:text-[#ED96D7]">
                  <Users className="w-4 h-4 text-[#8E1EA2]" />
                  <span>{activeVenue.capacity}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                  {activeVenue.name}
                </h3>

                <p className="font-cursive text-[#8E1EA2] dark:text-[#FFC0DE] text-xl sm:text-2xl leading-none">
                  {activeVenue.emotionalTag}
                </p>

                <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {activeVenue.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[#8E1EA2]/15">
                  {activeVenue.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8E1EA2] dark:text-[#ED96D7] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 border-t border-[#8E1EA2]/15 flex items-center gap-3">
                <a
                  href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Raj Resort Patna, I am interested in booking "${activeVenue.name}" for our wedding. Please share packages and date availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_16px_rgba(142,30,162,0.25)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Check Availability on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
