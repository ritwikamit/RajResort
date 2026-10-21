'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUp, X, Send, Phone, MessageCircle } from 'lucide-react';
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
      text: 'Namaste! I am Ankita, your personal wedding manager at Raj Resort Patna. How can I assist with your wedding dates, lawn capacity, or banquet celebration today?',
      time: 'Just now',
    },
  ]);

  // Handle scroll progress
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

    // Instant helpful assistant responses
    setTimeout(() => {
      let reply = "Thank you! You can message us on WhatsApp or call our reception directly below. We are here to help your family with dates and arrangements.";
      const lower = query.toLowerCase();

      if (lower.includes('capacity') || lower.includes('guest') || lower.includes('lawn') || lower.includes('wedding')) {
        reply = "Our open celebration lawn comfortably hosts from 400 up to 1,200+ guests, with a 150-ft flower entrance for the Baraat and an elevated Varmala stage. We also have the AC Shahi Darbar hall for 150 to 500 guests!";
      } else if (lower.includes('date') || lower.includes('available') || lower.includes('book') || lower.includes('rate') || lower.includes('price')) {
        reply = "Lagan dates fill up very quickly! Please tap 'WhatsApp Reception' below and tell us your expected wedding date and guest count so we can check immediately for you.";
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('kurji')) {
        reply = "Raj Resort is located right near Gate No. 62, Kurji Mor, Patliputra, Patna (800010). It is easy to reach from Patliputra Junction and the Ganga Marine Drive.";
      } else if (lower.includes('power') || lower.includes('generator') || lower.includes('light')) {
        reply = "You will never have to worry about power cuts. Our heavy-duty backup generators keep the stage lights, AC, sound, and decorations running without a second of pause.";
      } else if (lower.includes('visit') || lower.includes('see') || lower.includes('tour')) {
        reply = "We would love to welcome you and your family for a personal visit! You can come by anytime between 10:00 AM and 8:00 PM. Tap WhatsApp below to let us know when you plan to arrive.";
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
      {/* Floating Vertical Button Stack: Above mobile bar, always clearly visible */}
      <aside aria-label="Quick Actions" className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3 select-none">
        
        {/* Scroll Up Button with Circular Filling Border in #8E1EA2 */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title={`Scroll to top (${Math.round(scrollProgress)}%)`}
          className={`relative w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group border border-[#8E1EA2]/25 cursor-pointer ${
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
              stroke={mounted && theme === 'dark' ? '#2A1032' : '#FFC0DE'}
              strokeWidth={strokeWidth}
            />
            {/* Animated Filling Progress Border in #8E1EA2 */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#8E1EA2"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Arrow Icon in Center */}
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E1EA2] dark:text-[#ED96D7] group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Chatbot Floating Trigger Button with Message Icon */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Resort Assistant Chat"
          title="Chat with Reception Concierge"
          className="relative w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#8E1EA2] to-[#C654C3] shadow-[0_8px_25px_rgba(142,30,162,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white ring-2 ring-[#8E1EA2]/30 cursor-pointer"
        >
          {chatOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 text-white" />
              {/* Online Green Pulsing Indicator */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </>
          )}
        </button>

      </aside>

      {/* Concierge Chatbot Dialog Window */}
      {chatOpen && (
        <section
          aria-label="Resort Concierge Chat"
          className="fixed inset-x-3 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[380px] max-h-[82vh] sm:max-h-[580px] z-50 bg-white/98 dark:bg-[#180A22]/98 backdrop-blur-2xl border border-[#8E1EA2]/25 rounded-2xl shadow-[0_25px_60px_rgba(142,30,162,0.22)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Chat Header in Royal Color Hunt Gradient */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#8E1EA2] via-[#A828B8] to-[#C654C3] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/80 shadow-sm shrink-0">
                <Image
                  src="/images/ankita.jpg"
                  alt="Ankita"
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold leading-tight flex items-center gap-1.5">
                  <span>Ankita</span>
                  <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-full bg-white/20 text-[#FFC0DE]">Reception</span>
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-[#FFC0DE] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Online · Wedding Concierge</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/15 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 sm:p-4 flex-1 min-h-[160px] max-h-[42vh] sm:max-h-[290px] overflow-y-auto space-y-3 bg-[#FAF7F9] dark:bg-[#120718] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-[#200E2C] text-stone-800 dark:text-stone-100 border border-[#8E1EA2]/15 rounded-bl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-stone-400 dark:text-stone-500 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick Action Suggestion Pills */}
          <div className="px-3 py-2 bg-white dark:bg-[#1C0B26] border-t border-[#8E1EA2]/15 flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] shrink-0">
            <button
              onClick={() => handleSendMessage('What is the capacity of the starlit lawn?')}
              className="shrink-0 px-2.5 py-1 bg-[#FFC0DE]/30 dark:bg-[#8E1EA2]/25 border border-[#8E1EA2]/20 hover:border-[#8E1EA2] text-[#8E1EA2] dark:text-[#ED96D7] rounded-lg transition-colors cursor-pointer font-medium"
            >
              Lawn Capacity (1,200+)
            </button>
            <button
              onClick={() => handleSendMessage('How can I check wedding date availability?')}
              className="shrink-0 px-2.5 py-1 bg-[#FFC0DE]/30 dark:bg-[#8E1EA2]/25 border border-[#8E1EA2]/20 hover:border-[#8E1EA2] text-[#8E1EA2] dark:text-[#ED96D7] rounded-lg transition-colors cursor-pointer font-medium"
            >
              Check Dates
            </button>
            <button
              onClick={() => handleSendMessage('Can I schedule a venue tour at Kurji Mor?')}
              className="shrink-0 px-2.5 py-1 bg-[#FFC0DE]/30 dark:bg-[#8E1EA2]/25 border border-[#8E1EA2]/20 hover:border-[#8E1EA2] text-[#8E1EA2] dark:text-[#ED96D7] rounded-lg transition-colors cursor-pointer font-medium"
            >
              Visit Venue
            </button>
          </div>

          {/* Message Input & Fast Contact Strip */}
          <div className="p-2.5 sm:p-3 bg-white dark:bg-[#180A22] border-t border-[#8E1EA2]/15 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="text"
                placeholder="Ask Ankita about wedding dates, lawn..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-xs bg-[#FAF7F9] dark:bg-[#220F30] border border-[#8E1EA2]/25 rounded-xl focus:outline-none focus:border-[#8E1EA2] text-stone-900 dark:text-stone-100"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2.5 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white rounded-xl hover:opacity-95 transition-opacity cursor-pointer shrink-0 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct Connect Strip */}
            <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-1">
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 text-[#8E1EA2] dark:text-[#ED96D7] hover:underline font-semibold"
              >
                <Phone className="w-3 h-3 text-[#8E1EA2]" />
                <span>Call Desk</span>
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Ankita, I am enquiring about wedding dates and lawn packages at Raj Resort Patna.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp Ankita</span>
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="text-stone-400">Kurji Mor</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
