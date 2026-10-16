'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Bed, Check, ArrowRight, ShieldCheck, MessageSquare, Phone } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { VisualArt } from './VisualArt';

export const RoomsSection: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(RESORT_DATA.rooms[1].id); // Deluxe default
  const [roomImgError, setRoomImgError] = useState<Record<string, boolean>>({});

  const currentRoom = RESORT_DATA.rooms.find((r) => r.id === selectedRoomId) || RESORT_DATA.rooms[0];

  const getVisualType = (id: string): 'deluxe-room' | 'family-suite' => {
    if (id === 'family-suite') return 'family-suite';
    return 'deluxe-room';
  };

  return (
    <section id="rooms" className="py-20 bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
              <span>Comfortable Stay · Clean Rooms</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Rooms Made for You & Your Family
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-medium">
            Every room is air-conditioned, clean, and quiet. Perfect for wedding guests, business trips, or peaceful weekends in Patna.
          </p>
        </div>

        {/* Room Category Tabs - Red Gradient Active State */}
        <div className="flex flex-wrap gap-2.5 border-b border-stone-200 dark:border-stone-800 pb-5 mb-10">
          {RESORT_DATA.rooms.map((room) => {
            const isActive = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setSelectedRoomId(room.id)}
                className={`px-5 py-3 text-xs uppercase tracking-wider font-bold transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'btn-red-gradient border-transparent text-white shadow-md scale-105'
                    : 'bg-white/90 dark:bg-stone-900/90 border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#99141A] dark:hover:text-rose-300 hover:border-[#99141A]/40'
                }`}
              >
                {room.name}
              </button>
            );
          })}
        </div>

        {/* Active Room Detailed Showcase - Translucent Glass & Animated Moving Border */}
        <div className="animated-moving-border p-[2px] rounded-3xl shadow-[0_16px_50px_rgba(153,20,26,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white/90 dark:bg-stone-900/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-3xl border border-white/60 dark:border-stone-800">
            
            {/* Left: Room Visual */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] border border-stone-200 dark:border-stone-700/80 bg-[#FAF6F0] dark:bg-[#121815] overflow-hidden rounded-2xl shadow-inner">
              {currentRoom.image && !roomImgError[currentRoom.id] ? (
                <div className="relative w-full h-full min-h-[340px]">
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    onError={() => setRoomImgError((prev) => ({ ...prev, [currentRoom.id]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <VisualArt type={getVisualType(currentRoom.id)} />
              )}
            </div>

            {/* Right: Room Specifications & Amenities */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-[#99141A] dark:text-rose-400 uppercase mb-1">
                  {currentRoom.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                  {currentRoom.name}
                </h3>

                {/* Occupancy & Bed */}
                <div className="flex items-center gap-4 py-3 my-3 border-y border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 font-sans">
                  <div className="flex items-center gap-1.5 font-semibold text-stone-900 dark:text-stone-100">
                    <Users className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
                    <span>{currentRoom.occupancy}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5 font-semibold text-stone-900 dark:text-stone-100">
                    <Bed className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
                    <span>{currentRoom.bed}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6 font-sans">
                  {currentRoom.description}
                </p>

                {/* Key Amenities Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-stone-800 dark:text-stone-200 mb-3">
                    What You Get in This Room
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300 font-sans">
                    {currentRoom.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="p-4 bg-[#FAF7F2] dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700 space-y-1.5 text-xs text-stone-700 dark:text-stone-300 rounded-xl font-sans">
                  {currentRoom.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#99141A] dark:text-rose-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs with Book on WhatsApp as primary as requested */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Raj Resort Patna, I would like to book the ${currentRoom.name}. Please confirm availability and rates.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 btn-red-gradient text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-white cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/90 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-900 dark:text-stone-200 hover:text-[#99141A] dark:hover:text-rose-300 transition-colors text-xs font-semibold tracking-wider uppercase rounded-xl text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
                  <span>Call Reception</span>
                </a>

                <a
                  href="#book-a-stay"
                  className="w-full sm:w-auto px-4 py-3.5 text-stone-600 dark:text-stone-400 hover:text-[#99141A] dark:hover:text-rose-300 text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  Partner Portals
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
