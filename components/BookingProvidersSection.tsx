import React from 'react';
import { ExternalLink as ExternalLinkIcon, ShieldCheck, Info } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { MakeMyTripOfficialLogo, AgodaOfficialLogo, GuestReservationsOfficialLogo } from './PartnerLogos';

export const BookingProvidersSection: React.FC = () => {
  const renderOfficialLogo = (title: string) => {
    if (title === 'MakeMyTrip') {
      return <MakeMyTripOfficialLogo className="h-9 w-auto" />;
    }
    if (title === 'Agoda') {
      return <AgodaOfficialLogo className="h-9 w-auto" />;
    }
    return <GuestReservationsOfficialLogo className="h-9 w-auto" />;
  };

  return (
    <section id="book-a-stay" className="py-20 bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            Trusted Booking Websites · Safe & Easy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Book Your Room at Raj Resort
          </h2>
          <p className="mt-3.5 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Choose any of the trusted hotel websites below to check live room prices, available dates, 
            and reserve your stay in seconds.
          </p>
        </div>

        {/* 3 Dedicated Booking Provider Cards with Animated Moving Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {RESORT_DATA.bookingProviders.map((provider) => (
            <div
              key={provider.title}
              className="animated-moving-border p-[2px] rounded-2xl shadow-[0_10px_30px_rgba(153,20,26,0.08)] hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl rounded-2xl">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4 font-sans">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#99141A] dark:text-rose-400">
                      {provider.badge}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      Official Partner
                    </span>
                  </div>

                  {/* Official Partner Brand Logo Badge */}
                  <div className="py-3 px-4 mb-4 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/80 flex items-center justify-center min-h-[58px]">
                    {renderOfficialLogo(provider.title)}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                    {provider.title}
                  </h3>

                  <p className="mt-2.5 text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                    {provider.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-start gap-2 text-xs text-stone-500 dark:text-stone-400 mb-4 font-sans">
                    <ShieldCheck className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{provider.note}</span>
                  </div>

                  {/* Primary Action Button in Red Gradient */}
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 btn-red-gradient text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md"
                  >
                    <span>Book on {provider.title}</span>
                    <ExternalLinkIcon className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Notice in Both Modes */}
        <div className="p-5 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200 dark:border-stone-800 flex items-start gap-3.5 rounded-2xl max-w-3xl mx-auto shadow-xs font-sans">
          <Info className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0 mt-0.5" />
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            <strong className="text-stone-900 dark:text-stone-100 font-semibold">Good to Know:</strong> Room availability, 
            rates, payments, and cancellations are handled directly by the website you pick above (MakeMyTrip, Agoda, or Guest Reservations). 
            We do not ask for or store credit cards on this website.
          </p>
        </div>

      </div>
    </section>
  );
};
