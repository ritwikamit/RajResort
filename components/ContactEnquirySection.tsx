'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const ContactEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Grand Wedding & Starlit Lawn',
    date: '',
    guests: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid contact number.');
      return;
    }

    setError(null);
    setSubmitted(true);

    const whatsappMessage = 
`👑 *RAJ RESORT PATNA - WEDDING VENUE ENQUIRY*

• *Host Name:* ${formData.name.trim()}
• *Contact Phone:* ${formData.phone.trim()}
• *Category:* ${formData.enquiryType}
• *Preferred Date:* ${formData.date || 'Flexible / To be confirmed'}
• *Estimated Guests:* ${formData.guests || 'Not specified'}
• *Email:* ${formData.email.trim() || 'N/A'}
• *Requirements:* ${formData.notes.trim() || 'Please share brochure, pricing and date availability.'}

📍 Raj Resort, Near Gate No. 62, Kurji Mor, Patliputra, Patna`;

    const url = `https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-cursive text-3xl sm:text-4xl text-[#8E1B21] dark:text-rose-300 tracking-wide block mb-1">
            Personal Attention for Every Family
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Connect with Our Event Desk
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Planning a wedding celebration, Sangeet, or Ring Ceremony? Give us a call, send a message on WhatsApp, or send an inquiry below. We will reply promptly with date availability and package guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone & WhatsApp Actions */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                    Front Desk Reception
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    24/7 Telephone Desk
                  </h3>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-5 leading-relaxed font-sans">
                Our team is available round-the-clock to answer questions, guide directions, and discuss your event dates.
              </p>
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-stone-500 text-stone-900 dark:text-stone-100 transition-all text-xs font-semibold tracking-wider uppercase rounded-xl cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Front Desk ({RESORT_DATA.phoneDisplay})</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-emerald-600/10 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-xl">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                    Direct WhatsApp
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    Instant WhatsApp Support
                  </h3>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-5 leading-relaxed font-sans">
                Send a WhatsApp message to ask about wedding lawn dates, catering options, or to receive venue photos directly.
              </p>
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to inquire about wedding lawns and date availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white transition-all text-xs font-semibold tracking-wider uppercase rounded-xl shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Location Summary */}
            <div className="p-5 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-2 rounded-2xl font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500 dark:text-stone-400">Front Desk Hours</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">Open 24 Hours / 7 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500 dark:text-stone-400">Address</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">Gate 62, Kurji Mor, Patliputra</span>
              </div>
            </div>

          </div>

          {/* Right Column: Wedding Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
              Send a Wedding Date Enquiry
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 mb-6 font-sans">
              Share your celebration details below. Our event manager will get back to you promptly.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-2 font-sans">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2 font-sans">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Redirecting your enquiry to WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Contact / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Event Category
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all font-sans"
                  >
                    <option value="Grand Wedding & Starlit Lawn">Grand Wedding & Starlit Lawn</option>
                    <option value="Pre-Wedding Sangeet & Mehendi">Pre-Wedding Sangeet & Mehendi</option>
                    <option value="Ring Ceremony & Reception">Ring Ceremony & Reception</option>
                    <option value="Shahi Darbar AC Banquet">Shahi Darbar AC Banquet</option>
                    <option value="General Property Tour & Inquiries">General Property Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Estimated Number of Guests
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 Guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Special Notes or Decor Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your event timeline, catering requirements, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white transition-all resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#141618] hover:bg-[#25282C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Wedding Date Inquiry</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
