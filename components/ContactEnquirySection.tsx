'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const ContactEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Wedding & Grand Lawn',
    date: '',
    guests: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please tell us your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid phone number so we can call you back.');
      return;
    }

    setError(null);
    setSubmitted(true);

    const whatsappMessage = 
`👑 *RAJ RESORT PATNA - NEW RESERVATION ENQUIRY*

• *Guest Name:* ${formData.name.trim()}
• *Contact Phone:* ${formData.phone.trim()}
• *Category:* ${formData.enquiryType}
• *Preferred Date:* ${formData.date || 'Flexible / To be confirmed'}
• *Estimated Guests:* ${formData.guests || 'Not specified'}
• *Email:* ${formData.email.trim() || 'N/A'}
• *Special Requirements:* ${formData.notes.trim() || 'Please share brochure and availability.'}

📍 Raj Resort, Near Gate No. 62, Kurji Mor, Patliputra, Patna`;

    const url = `https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const whatsappEnquiryUrl = `https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello Raj Resort Patna, my name is ${formData.name || 'Guest'}. I would like to enquire about ${formData.enquiryType} for ${formData.date || 'an upcoming date'} (approx ${formData.guests || 'N/A'} guests).`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            Talk to Us · 24/7 Front Desk
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Have Questions? We Are Happy to Help
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Planning a wedding, birthday party, or looking for group rooms? 
            Give us a quick call, message us on WhatsApp, or send us a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone & WhatsApp Actions */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="p-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-[#99141A]/10 dark:bg-rose-950/40 text-[#99141A] dark:text-rose-400 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                    Call Reception Desk
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    Direct 24/7 Front Desk
                  </h3>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-5 leading-relaxed font-sans">
                Our reception team is available 24 hours a day to answer questions, guide directions, and help you check in.
              </p>
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FAF7F2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-900 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-300 transition-all text-xs font-bold tracking-wider uppercase rounded-xl cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
                <span>Tap to Call Reception Directly</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-emerald-600/10 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-xl">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                    WhatsApp Chat
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    Direct WhatsApp
                  </h3>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-5 leading-relaxed font-sans">
                Send us a message to ask about wedding dates, catering menus, or to request photos directly on your phone.
              </p>
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to inquire about event venues and room bookings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white transition-all text-xs font-bold tracking-wider uppercase rounded-xl shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Property Timings & Address summary */}
            <div className="p-5 bg-white/70 dark:bg-stone-900/70 backdrop-blur-md border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-2 rounded-2xl font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500 dark:text-stone-400">Reception Desk</span>
                <span className="text-stone-900 dark:text-stone-100 font-bold">Open 24 Hours / 7 Days</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="text-stone-500 dark:text-stone-400">Lawn Visiting Hours</span>
                <span className="text-stone-900 dark:text-stone-100 font-bold">10:00 AM – 8:00 PM</span>
              </div>
              <div className="pt-1 text-xs text-stone-600 dark:text-stone-400 leading-snug">
                Near Gate No. 62, Kurji Mor, Patliputra, Patna 800010
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quote Request Form in Animated Moving Border */}
          <div className="lg:col-span-7 animated-moving-border p-[2px] rounded-2xl shadow-[0_12px_36px_rgba(153,20,26,0.06)]">
            <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4 font-sans">
                  <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200 rounded-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Thank You! We Have Received Your Message
                  </h3>
                  <p className="text-sm text-stone-700 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                    Hello <strong className="text-stone-900 dark:text-stone-100">{formData.name}</strong>, our team has received your inquiry about <strong className="text-stone-900 dark:text-stone-100">{formData.enquiryType}</strong>. 
                    We will call you at {formData.phone} shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase rounded-xl shadow-sm"
                    >
                      Open in WhatsApp Too
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          enquiryType: 'Wedding & Grand Lawn',
                          date: '',
                          guests: '',
                          notes: '',
                        });
                      }}
                      className="px-5 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-400 text-xs font-semibold tracking-wider uppercase rounded-xl"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      Send an Inquiry Directly to Us
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                      Tell us what you are planning, and we will check available dates for you.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-2 rounded-xl">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Your Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm font-sans rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        What Are You Planning?
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                      >
                        <option value="Wedding & Grand Lawn">Wedding & Grand Lawn</option>
                        <option value="Shahi Darbar Indoor Banquet">Shahi Darbar Indoor Banquet</option>
                        <option value="Room Stay & Accommodations">Room Stay & Accommodations</option>
                        <option value="Sangeet / Haldi / Ring Ceremony">Sangeet / Haldi / Ring Ceremony</option>
                        <option value="Corporate Meeting & Seminar">Corporate Meeting & Seminar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Planned Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Approximate Guests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 200 - 500 guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                      Anything Else You Would Like to Tell Us?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about food preferences, number of rooms needed, or any special requests..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:border-[#99141A] dark:focus:border-rose-400 focus:outline-none text-stone-900 dark:text-stone-100 text-sm rounded-xl"
                    />
                  </div>

                  {/* Submit Button in Red Gradient */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 btn-red-gradient text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Our Team</span>
                  </button>

                  <p className="text-[11px] text-stone-500 dark:text-stone-400 text-center pt-2">
                    * Sending this note is free. Our resort manager will call you to confirm dates and options.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
