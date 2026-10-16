'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, X, Send, Phone } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { useTheme } from '@/context/ThemeContext';
import { useIsMounted } from '@/lib/hooks';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const FloatingActions: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const mounted = useIsMounted();
  const { theme } = useTheme();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Raj Resort Patna. I am your concierge assistant. How can I help you today?',
      time: 'Just now',
    },
  ]);

  // Handle scroll progress for the border fill
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setShowScrollTop(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Instant helpful assistant responses without exposing raw mobile number
    setTimeout(() => {
      let reply = "Thank you for reaching out! You can tap the 'Call Desk' button below or connect with our WhatsApp concierge for immediate booking assistance.";
      const lower = query.toLowerCase();

      if (lower.includes('capacity') || lower.includes('guest') || lower.includes('lawn') || lower.includes('wedding')) {
        reply = "Our Grand Royal Lawn accommodates between 300 and 1,200+ guests with a signature floral entrance canopy, heart walkway, and cold fireworks stage. We also have the indoor Shahi Darbar AC Hall for 150 to 450 guests!";
      } else if (lower.includes('room') || lower.includes('stay') || lower.includes('book') || lower.includes('rate') || lower.includes('price')) {
        reply = "You can view live room rates and book instantly via our WhatsApp booking desk or explore certified partner portals (MakeMyTrip, Agoda, Guest Reservations) in our 'Book a Stay' section.";
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('reach') || lower.includes('kurji')) {
        reply = "Raj Resort is located near Gate No. 62, Kurji Mor, Patliputra, Patna (Bihar 800010). We are just 150m from Kurji Mor, 3.8 km from Patliputra Junction, and 9.2 km from Patna Airport.";
      } else if (lower.includes('power') || lower.includes('generator') || lower.includes('electricity') || lower.includes('ac')) {
        reply = "Yes! We have 24/7 heavy-duty generator power backup to ensure lights, split ACs, and stage music run smoothly without any interruption.";
      } else if (lower.includes('visit') || lower.includes('see') || lower.includes('timing')) {
        reply = "You are warmly welcome to visit! Venue viewing hours are 10:00 AM to 8:00 PM daily. Please tap WhatsApp Desk below so our duty manager can greet you upon arrival.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: reply,
          time: 'Just now',
        },
      ]);
    }, 450);
  };

  // SVG circular calculations
  const size = 52;
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Floating Vertical Button Stack: Positioned above mobile bottom bar */}
      <aside aria-label="Quick Actions" className="fixed bottom-20 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3 select-none">
        
        {/* Scroll Up Button with Circular Filling Border */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title={`Scroll to top (${Math.round(scrollProgress)}%)`}
          className={`relative w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group border border-stone-200 dark:border-stone-700 cursor-pointer ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Circular SVG Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Background Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={mounted && theme === 'dark' ? '#292524' : '#F3EBE1'}
              strokeWidth={strokeWidth}
            />
            {/* Animated Filling Progress Border in Red */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#B81D24"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Arrow Icon in Center */}
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#99141A] dark:text-rose-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Chatbot Button in Red Gradient */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Resort Assistant Chat"
          title="Chat with Resort Team"
          className="relative w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center btn-red-gradient shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white dark:border-stone-800 cursor-pointer"
        >
          {chatOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          ) : (
            <>
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              {/* Online Green Indicator */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-white dark:border-stone-800 rounded-full" />
            </>
          )}
        </button>

      </aside>

      {/* Concierge Chatbot Dialog Window in Both Modes */}
      {chatOpen && (
        <section
          aria-label="Resort Concierge Chat"
          className="fixed inset-x-3 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[380px] max-h-[82vh] sm:max-h-[580px] z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-2xl border border-stone-200/90 dark:border-stone-700/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Chat Header in Red Gradient */}
          <div className="p-3 sm:p-4 btn-red-gradient text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center text-xs sm:text-sm font-bold">
                R
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold leading-tight">Raj Resort Assistant</h2>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-rose-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online · Quick Answers</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="p-1.5 text-white/80 hover:text-white rounded-md hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 sm:p-4 flex-1 min-h-[140px] max-h-[42vh] sm:max-h-[290px] overflow-y-auto space-y-2.5 sm:space-y-3 bg-[#FAF7F2] dark:bg-[#101714] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-2.5 sm:p-3 rounded-xl max-w-[88%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'btn-red-gradient text-white rounded-br-none shadow-xs'
                      : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 border border-stone-200/80 dark:border-stone-700 rounded-bl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick Question Buttons: Horizontally Scrollable on Mobile */}
          <div className="px-3 py-2 bg-stone-50 dark:bg-stone-800/80 border-t border-stone-200/80 dark:border-stone-700/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] shrink-0">
            <button
              onClick={() => handleSendMessage('How many guests can the wedding lawn hold?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-700 dark:text-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Lawn Capacity?
            </button>
            <button
              onClick={() => handleSendMessage('How do I book a room?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-700 dark:text-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Book a Room
            </button>
            <button
              onClick={() => handleSendMessage('Where is the resort located in Patna?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-700 dark:text-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Location & Map
            </button>
          </div>

          {/* Input & Direct Contacts Footer */}
          <div className="p-2.5 sm:p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="text"
                placeholder="Ask about rooms, wedding dates, lawn..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-base sm:text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:border-[#99141A] text-stone-900 dark:text-stone-100"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 sm:p-2.5 btn-red-gradient text-white rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct Connect Strip */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 pt-1">
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 hover:text-[#99141A] dark:hover:text-rose-400 font-medium"
              >
                <Phone className="w-3 h-3 text-[#99141A] dark:text-rose-400" />
                <span>Call Desk</span>
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 font-semibold"
              >
                <span>WhatsApp Us</span>
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="text-stone-400 dark:text-stone-500">Kurji Mor</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
