'use client';

import React, { useState } from 'react';
import { X, Send, Calendar, Users, MessageSquare } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

interface HeaderEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderEnquiryModal: React.FC<HeaderEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Grand Wedding & Starlit Lawn Celebration',
    date: '',
    guestCount: '400 - 800 Guests',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = 
`👑 *RAJ RESORT PATNA - WEDDING VENUE ENQUIRY*

• *Family / Host Name:* ${formData.name.trim() || 'Valued Family'}
• *Contact Number:* ${formData.phone.trim() || 'Provided on chat'}
• *Celebration Type:* ${formData.serviceType}
• *Preferred Date:* ${formData.date.trim() || 'Flexible / To be discussed'}
• *Estimated Guest Count:* ${formData.guestCount}
• *Special Requirements:* ${formData.requirements.trim() || 'Kindly share wedding packages and date availability.'}

📍 *Venue:* Raj Resort, Gate 62, Kurji Mor, Patliputra, Patna`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodedMessage}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FFFAF3] dark:bg-[#1A1412] rounded-3xl shadow-2xl border border-[#FFE5BF] dark:border-[#352520] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white border-b border-white/10">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#FFE5BF] text-xs font-semibold tracking-widest uppercase mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Reception Desk</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Check Wedding Dates & Packages
          </h3>
          <p className="text-white/85 text-xs sm:text-sm mt-1">
            Provide your preferred event details to receive date availability and custom wedding lawn packages.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all font-sans"
              />
            </div>

            {/* Mobile / WhatsApp Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                Celebration Type
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all font-sans"
              >
                <option value="Grand Wedding & Starlit Lawn Celebration">Grand Wedding & Lawn (400-1200+ guests)</option>
                <option value="Pre-Wedding Sangeet & Mehendi">Pre-Wedding Sangeet & Mehendi</option>
                <option value="Ring Ceremony & Family Reception">Ring Ceremony & Reception</option>
                <option value="Shahi Darbar AC Banquet Gathering">Shahi Darbar AC Banquet Gathering</option>
                <option value="General Wedding Inquiries & Property Visit">General Inquiries & Property Visit</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F62440]" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all font-sans"
              />
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#F62440]" />
              <span>Estimated Guests</span>
            </label>
            <select
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all font-sans"
            >
              <option value="200 - 400 Guests">200 - 400 Guests</option>
              <option value="400 - 800 Guests">400 - 800 Guests</option>
              <option value="800 - 1,200+ Guests">800 - 1,200+ Guests</option>
              <option value="More than 1,200 Guests">1,200+ Guests (Full Lawn & Banquet)</option>
            </select>
          </div>

          {/* Requirements Note */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
              Specific Requirements / Questions
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Catering setup preferences, mandap decoration, Baraat arrival time..."
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-stone-700 bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440] transition-all resize-none font-sans"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>{submitted ? 'Connecting to WhatsApp...' : 'Send Wedding Date Enquiry'}</span>
            </button>
          </div>

          <div className="text-center pt-1 text-[11px] text-stone-500 dark:text-stone-400">
            Directly connected to Raj Resort Patna Front Desk ({RESORT_DATA.phoneDisplay})
          </div>
        </form>
      </div>
    </div>
  );
};
