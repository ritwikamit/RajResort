'use client';

import React, { useState } from 'react';
import { X, Send, Phone, Calendar, Users, MessageSquare, CheckCircle2 } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

interface HeaderEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderEnquiryModal: React.FC<HeaderEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Grand Wedding & Lawn Celebration',
    date: '',
    guestCount: '300 - 500 Guests',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct polished WhatsApp enquiry message
    const message = 
`👑 *RAJ RESORT PATNA - NEW RESERVATION ENQUIRY*

• *Guest Name:* ${formData.name.trim() || 'Valued Guest'}
• *Contact Number:* ${formData.phone.trim() || 'Provided on chat'}
• *Enquiry Type:* ${formData.serviceType}
• *Preferred Date:* ${formData.date.trim() || 'Flexible / To be discussed'}
• *Estimated Guests / Rooms:* ${formData.guestCount}
• *Special Requirements:* ${formData.requirements.trim() || 'Kindly share package details and availability.'}

📍 *Location:* Raj Resort, Gate 62, Kurji Mor, Patliputra, Patna`;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Royal Crimson Gradient */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-r from-[#7A0C11] via-[#99141A] to-[#600A0E] text-white">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold tracking-widest uppercase mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Instant Front Desk WhatsApp Enquiry</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Plan Your Stay or Event
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Fill in your preferences below to receive instant pricing and date availability directly on WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-7 space-y-3.5 sm:space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#99141A] transition-all"
              />
            </div>

            {/* Mobile / WhatsApp Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                Contact / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit Mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#99141A] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                Event / Booking Category
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#99141A] transition-all"
              >
                <option value="Grand Wedding & Lawn Celebration">Grand Wedding & Lawn (300-1200+ guests)</option>
                <option value="AC Guest Room / Executive Suite">AC Guest Room / Suite Stay</option>
                <option value="Pre-Wedding Sangeet / Mehendi">Pre-Wedding Sangeet / Mehendi</option>
                <option value="Birthday or Anniversary Party">Birthday or Anniversary Party</option>
                <option value="Corporate Seminar / Banquet Hall">Corporate Seminar / Banquet Hall</option>
                <option value="General Inquiries & Resort Visit">General Inquiries & Resort Visit</option>
              </select>
            </div>

            {/* Event / Check-in Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#99141A] transition-all"
              />
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
              <span>Estimated Guests / Room Capacity</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['1 - 10 Rooms', '100 - 300 Guests', '300 - 700 Guests', '700 - 1,200+ Guests'].map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setFormData({ ...formData, guestCount: option })}
                  className={`px-2.5 py-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                    formData.guestCount === option
                      ? 'border-[#99141A] bg-[#99141A]/10 text-[#99141A] dark:text-rose-300 dark:border-rose-400 font-bold'
                      : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-stone-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Message / Special Requirements */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
              Specific Requirements / Questions
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Catering preference, stage setup, extra bridal room, generator power backup requirement..."
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-stone-900 dark:text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#99141A] transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-red-gradient text-xs font-bold tracking-wider uppercase rounded-xl shadow-lg cursor-pointer hover:scale-[1.01] transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{submitted ? 'Redirecting to WhatsApp...' : 'Submit & Open in WhatsApp'}</span>
            </button>

            {/* Direct Instant Call */}
            <a
              href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-[#99141A] bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <Phone className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
              <span>Call Front Desk</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 text-center pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Guaranteed zero spam · Directly connected to Raj Resort reservation staff</span>
          </div>
        </form>
      </div>
    </div>
  );
};
