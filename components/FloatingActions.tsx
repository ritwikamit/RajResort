'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUp, X, Send, Phone, MessageSquare } from 'lucide-react';
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
  const [isThinking, setIsThinking] = useState(false);
  const mounted = useIsMounted();
  const { theme } = useTheme();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Raj Resort Patna reception desk. We are here exclusively to assist your family with wedding celebrations:\n\n• The Starlit Celebration Lawn (1,200+ guests)\n• The Shahi Darbar AC Banquet Hall (150-500 guests)\n• Checking auspicious wedding date availability\n• Arranging an in-person venue visit at Kurji Mor\n\nHow may we help your family today?',
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

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsThinking(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const botReply = data.reply || "Namaste! For immediate assistance, please call our front desk at +91 7360800001 or WhatsApp us below.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          time: 'Just now',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "Namaste! Our reception team is available 24/7 at Kurji Mor, Patliputra. Please call us at +91 7360800001 or message on WhatsApp.",
          time: 'Just now',
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  // SVG circular calculations
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Floating Vertical Button Stack: Above mobile bar, always clearly visible */}
      <aside aria-label="Quick Actions" className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 select-none">
        
        {/* Scroll Up Button with Circular Filling Border in #F62440 */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title={`Scroll to top (${Math.round(scrollProgress)}%)`}
          className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/95 dark:bg-[#221A16]/95 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 active:scale-95 group border border-[#FFE5BF] dark:border-[#352520] cursor-pointer ${
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
              stroke={mounted && theme === 'dark' ? '#352520' : '#FFE5BF'}
              strokeWidth={strokeWidth}
            />
            {/* Animated Filling Progress Border in #F62440 */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#F62440"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Arrow Icon in Center */}
          <ArrowUp className="w-4 h-4 text-[#F62440] group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Minimal Chatbot Trigger Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Resort Assistant Chat"
          title="Chat with Reception"
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white dark:bg-[#221A16] hover:bg-[#FFF2DB] dark:hover:bg-[#2D221D] shadow-[0_4px_16px_rgba(246,36,64,0.18)] transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-[#F62440] cursor-pointer text-[#F62440]"
        >
          {chatOpen ? (
            <X className="w-5 h-5 text-[#F62440]" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5 text-[#F62440]" />
              {/* Online Green Indicator */}
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 border border-white dark:border-[#221A16] rounded-full" />
            </>
          )}
        </button>

      </aside>

      {/* Concierge Chatbot Dialog Window */}
      {chatOpen && (
        <section
          aria-label="Resort Concierge Chat"
          className="fixed inset-x-3 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[380px] max-h-[82vh] sm:max-h-[580px] z-50 bg-[#FFFAF3]/98 dark:bg-[#1A1412]/98 backdrop-blur-2xl border border-[#FFE5BF] dark:border-[#352520] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Minimal Elegant Header in Color Hunt Palette */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/40 shadow-xs shrink-0 bg-white p-0.5">
                <Image
                  src="/favicon.png"
                  alt="Raj Resort Official Emblem"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold leading-tight flex items-center gap-1.5">
                  <span>Raj Resort Desk</span>
                  <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-full bg-white/20 text-[#FFE5BF]">Reception</span>
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-[#FFE5BF] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Online · Kurji Mor, Patna</span>
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
          <div className="p-3 sm:p-4 flex-1 min-h-[160px] max-h-[42vh] sm:max-h-[290px] overflow-y-auto space-y-3 bg-[#FFFAF3] dark:bg-[#181210] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-[#251B17] text-stone-900 dark:text-stone-100 border border-[#FFE5BF] dark:border-[#352520] rounded-bl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-stone-400 dark:text-stone-500 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {isThinking && (
              <div className="flex flex-col items-start animate-in fade-in duration-200">
                <div className="px-3.5 py-2.5 rounded-2xl bg-white dark:bg-[#251B17] text-stone-600 dark:text-stone-300 border border-[#FFE5BF] dark:border-[#352520] rounded-bl-none shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F62440] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F62440] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F62440] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] font-medium ml-1 text-stone-600 dark:text-stone-300">Replying...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Suggestion Pills */}
          <div className="px-3 py-2 bg-[#FFF2DB] dark:bg-[#201714] border-t border-[#FFE5BF] dark:border-[#352520] flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] shrink-0">
            <button
              onClick={() => handleSendMessage('What is the capacity of the starlit lawn?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] hover:border-[#F62440] text-stone-800 dark:text-stone-200 rounded-lg transition-colors cursor-pointer font-medium"
            >
              Lawn Capacity (1,200+)
            </button>
            <button
              onClick={() => handleSendMessage('How can I check wedding date availability?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] hover:border-[#F62440] text-stone-800 dark:text-stone-200 rounded-lg transition-colors cursor-pointer font-medium"
            >
              Check Dates
            </button>
            <button
              onClick={() => handleSendMessage('Can I schedule a venue tour at Kurji Mor?')}
              className="shrink-0 px-2.5 py-1 bg-white dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] hover:border-[#F62440] text-stone-800 dark:text-stone-200 rounded-lg transition-colors cursor-pointer font-medium"
            >
              Visit Venue
            </button>
          </div>

          {/* Message Input & Fast Contact Strip */}
          <div className="p-2.5 sm:p-3 bg-white dark:bg-[#1A1412] border-t border-[#FFE5BF] dark:border-[#352520] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="text"
                placeholder="Ask about wedding dates, lawn capacity..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-xs bg-[#FFFAF3] dark:bg-[#251B17] border border-[#FFE5BF] dark:border-[#352520] rounded-xl focus:outline-none focus:border-[#F62440] text-stone-900 dark:text-stone-100"
              />
              <button
                type="submit"
                disabled={isThinking}
                aria-label="Send message"
                className="p-2.5 bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white rounded-xl hover:opacity-95 transition-opacity cursor-pointer shrink-0 shadow-sm disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct Connect Strip */}
            <div className="flex items-center justify-between text-[11px] text-stone-600 dark:text-stone-400 pt-1">
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 text-[#F62440] hover:underline font-semibold"
              >
                <Phone className="w-3 h-3 text-[#F62440]" />
                <span>Call Desk</span>
              </a>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I am enquiring about wedding dates and lawn packages.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp Reception</span>
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
