'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Star, 
  Mic, 
  Square, 
  Sparkles, 
  ExternalLink, 
  Check, 
  QrCode, 
  Printer, 
  AlertCircle,
  Copy,
  RefreshCw,
  RotateCcw
} from 'lucide-react';
import QRCode from 'qrcode';
import { RajResortLogo } from '../RajResortLogo';

// Direct Google Write-Review intent dialog for Raj Resort Patna (Place ID: ChIJz6Tf9Y9Z7TkRInVQoECYQLk)
const GOOGLE_WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJz6Tf9Y9Z7TkRInVQoECYQLk';
const GOOGLE_MAPS_REVIEWS_TAB_URL = 'https://www.google.com/maps/place/RAJ+RESORT/@25.6391525,85.1102531,715m/data=!3m1!1e3!4m12!3m11!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m3!1s2026-11-18!4m1!1i2!8m2!3d25.6391525!4d85.1102531!9m1!1b1!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D';

// Speech Recognition types for browser
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives?: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

// Authentic Indian human review building blocks for Raj Resort Patna (hundreds of unique permutations)
const REVIEW_OPENERS = [
  "Attended a cousin's wedding reception at Raj Resort Patna last week.",
  "Had an unforgettable experience celebrating a family function at Raj Resort.",
  "Recently attended my friend's marriage ceremony here near Kurji Mor.",
  "We booked Raj Resort for our family anniversary celebration and it was fantastic.",
  "Visited Raj Resort Patna for an engagement function and was genuinely impressed.",
  "Stayed and attended a grand wedding here in Patliputra.",
  "One of the best celebration venues we have experienced in Patna.",
  "Such a beautiful and well-maintained resort for grand celebrations.",
];

const REVIEW_HIGHLIGHTS = [
  "The 3.5-acre open lawn was decorated beautifully and the illuminated couple walkway was breathtaking.",
  "The banquet hall AC was cooling perfectly and the open lawn with the Ganga breeze created a royal ambience.",
  "The lawn lighting, floral stage decor, and spacious guest seating made the evening magical.",
  "The outdoor garden is huge, perfectly maintained, and easily accommodated all guests without any crowd.",
  "From the majestic grand entry gate to the themed Varmala stage, every arrangement looked royal.",
];

const REVIEW_FOOD_SERVICE = [
  "Food was hot, flavorful, and the live chaat and starter counters were a huge hit with all guests.",
  "The dinner buffet had great variety with authentic taste, and the service staff was polite and humble.",
  "Delicious catering with fresh ingredients, and the banquet team ensured prompt refills throughout.",
  "Starters and main course were delicious, and the management team was cooperative at every step.",
];

const REVIEW_CLOSINGS = [
  "Spacious parking for 400+ cars made arrival hassle-free. Full 5 stars well deserved!",
  "Courteous management, clean AC rooms, and smooth parking assistance. Highly recommended in Patna!",
  "Reliable power backup, humble staff, and great hospitality throughout. Must visit for weddings!",
  "Thank you to the whole team for making our family event so memorable and special!",
];

const HINGLISH_REVIEWS = [
  "Bahut hi shandar resort hai Patna me. Family wedding attend kiya tha, lawn decoration aur catering dono lajawab the. Parking ki koi dikkat nahi hui aur staff ka behaviour bahut humble tha.",
  "Raj Resort Patna me hamare cousin ki shadi thi. Venue bohot bada aur sundar hai, especially Ganga view aur night lighting. Khana bahut tasty tha aur sabhi arrangements smooth the.",
  "Patna ka one of the best wedding venues! Open lawn bahut spacious hai, decoration aur bride-groom entry ka setup bohot attractive laga. Management team full supportive hai.",
  "Hamne yaha engagement function organize kiya tha. Banquet hall ka AC, dinner buffet aur seating arrangements sab kuch first class tha. Sabhi guests ne venue aur khane ki tareef ki.",
  "Kurji Mor ke paas best location hai via Ganga Marine Drive. Rooms clean the aur car parking 400+ gaadiyo ke liye kaafi badi hai. Staff ka service quick aur helpful raha.",
  "Shaadi aur reception ke liye perfect place hai Raj Resort. Khane ka taste authentic aur fresh tha. Lawn ka ambience night me bohot royal lagta hai. 5 star experience!",
];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomHumanReview(): string {
  // 25% chance of realistic Hinglish review for authentic local variety
  if (Math.random() < 0.25) {
    return getRandomElement(HINGLISH_REVIEWS);
  }
  const opener = getRandomElement(REVIEW_OPENERS);
  const highlight = getRandomElement(REVIEW_HIGHLIGHTS);
  const food = getRandomElement(REVIEW_FOOD_SERVICE);
  const closing = getRandomElement(REVIEW_CLOSINGS);
  return `${opener} ${highlight} ${food} ${closing}`;
}

export const GoogleReviewBooster: React.FC = () => {
  // Overall Rating only (1-5 stars)
  const [overallRating, setOverallRating] = useState<number>(5);

  // Lazy initializer ensures random human review is generated on initial mount with zero cascading render
  const [reviewText, setReviewText] = useState<string>(() => generateRandomHumanReview());
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isPolishing, setIsPolishing] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [showStandee, setShowStandee] = useState<boolean>(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [micError, setMicError] = useState<string | null>(null);

  const [voiceLang, setVoiceLang] = useState<'en-IN' | 'hi-IN'>('en-IN');
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const baseTextRef = useRef<string>('');

  // Generate QR on mount
  useEffect(() => {
    QRCode.toDataURL('https://rajresortpatna.com/feedback', {
      width: 320,
      margin: 1.5,
      color: { dark: '#181210', light: '#FFFFFF' },
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('QR code error:', err));

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Generate another unique review (Client combinatorial + API support)
  const handleGenerateAnother = useCallback(async () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      recognitionRef.current = null;
      setIsListening(false);
    }
    baseTextRef.current = '';

    setIsGenerating(true);
    try {
      // Try AI endpoint with fast timeout, fallback instantly to diverse local generator
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const res = await fetch('/api/feedback/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate' }),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId));

      if (res.ok) {
        const data = await res.json();
        if (data.improved) {
          setReviewText(data.improved);
          setIsGenerating(false);
          return;
        }
      }
    } catch {
      // Fallback
    }

    // Instant unique combinatorial generator (hundreds of variations)
    setReviewText(generateRandomHumanReview());
    setIsGenerating(false);
  }, []);

  // Voice Typing toggle (Hindi / English speech recognition)
  const toggleVoiceTyping = () => {
    setMicError(null);

    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
        recognitionRef.current = null;
      }
      setIsListening(false);
      baseTextRef.current = reviewText.trim();
      return;
    }

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setMicError('Voice typing is not supported in this browser. Please type your review.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
        recognitionRef.current = null;
      }

      baseTextRef.current = reviewText.trim();
      const recognition = new SpeechRec();
      recognitionRef.current = recognition;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = voiceLang;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let sessionTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          sessionTranscript += event.results[i][0].transcript;
        }
        const clean = sessionTranscript.trim();
        const base = baseTextRef.current;
        setReviewText(base ? `${base} ${clean}` : clean);
      };

      recognition.onerror = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognition.start();
      setIsListening(true);
    } catch (err) {
      console.warn('Voice typing start error:', err);
      setMicError('Microphone permission required for voice typing.');
      setIsListening(false);
      recognitionRef.current = null;
    }
  };

  // Full reset: cleanly tears down active speech recognition and clears text & baseline
  const handleReset = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      recognitionRef.current = null;
    }
    setIsListening(false);
    baseTextRef.current = '';
    setReviewText('');
    setMicError(null);
  };

  // AI Polish with rate-limited API
  const handleAIPolish = async () => {
    if (!reviewText.trim()) return;
    setIsPolishing(true);

    try {
      const res = await fetch('/api/feedback/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: reviewText }),
      });
      const data = await res.json();
      if (data.success && data.improved) {
        setReviewText(data.improved);
      }
    } catch (err) {
      console.warn('AI polish error:', err);
    } finally {
      setIsPolishing(false);
    }
  };

  // Robust clipboard copy (synchronous DOM + Clipboard API)
  const copyToClipboardRobust = (text: string) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch {}

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  // Copy review to clipboard synchronously during user click
  const handlePostToGoogle = () => {
    const textToCopy = reviewText.trim() || generateRandomHumanReview();
    copyToClipboardRobust(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 5000);
  };

  const copyOnlyText = () => {
    const textToCopy = reviewText.trim() || generateRandomHumanReview();
    copyToClipboardRobust(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Brand Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2.5">
          <RajResortLogo variant="full-circle" size={54} />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
          Review Raj Resort Patna
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans max-w-sm mx-auto">
          Share your experience on our official Google Business Profile.
        </p>
      </div>

      {/* Main Review Card */}
      <div className="rounded-3xl bg-white dark:bg-stone-900 border border-[#FFE5BF] dark:border-[#352520] p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] space-y-6">
        
        {/* 1. Overall Star Rating */}
        <div className="text-center pb-4 border-b border-stone-100 dark:border-stone-800">
          <label className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
            Overall Rating
          </label>
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 py-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setOverallRating(star)}
                aria-label={`${star} stars`}
                className="p-1 rounded-lg transition-transform hover:scale-120 active:scale-95 focus:outline-none cursor-pointer"
              >
                <Star
                  className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                    star <= overallRating
                      ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                      : 'text-stone-300 dark:text-stone-700'
                  }`}
                />
              </button>
            ))}
            <span className="text-sm font-bold text-stone-700 dark:text-stone-300 ml-2 min-w-[36px]">
              {overallRating}/5
            </span>
          </div>
          <div className="text-xs font-semibold text-[#F62440] dark:text-[#FFE5BF] mt-1.5">
            {overallRating === 5 ? 'Exceptional Stay & Hospitality' : `${overallRating}.0 Star Rating`}
          </div>
        </div>

        {/* 2. Review Text Area with Auto-Generation, Manual Typing & Voice Typing */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400">
              Your Review (Ready to Post)
            </label>
            
            <div className="flex items-center gap-1.5">
              {/* Generate Another Button */}
              <button
                type="button"
                onClick={handleGenerateAnother}
                disabled={isGenerating}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-[#FFE5BF]/70 text-[11px] font-semibold text-stone-700 dark:text-stone-200 hover:text-[#F62440] transition-colors cursor-pointer border border-stone-200 dark:border-stone-700"
                title="Generate another unique natural review"
              >
                <RefreshCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>New Review</span>
              </button>

              {/* Reset / Clear for Manual Typing */}
              {reviewText.trim().length > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-[11px] font-semibold text-stone-600 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer border border-stone-200 dark:border-stone-700"
                  title="Clear review text to write manually from scratch"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}

              {/* Voice Language Switcher */}
              <button
                type="button"
                onClick={() => setVoiceLang((prev) => (prev === 'en-IN' ? 'hi-IN' : 'en-IN'))}
                className="text-[10px] font-semibold px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-[#F62440] transition-colors cursor-pointer"
                title="Switch speech language between English/Hinglish and Hindi"
              >
                {voiceLang === 'en-IN' ? '🇮🇳 EN' : '🇮🇳 हिन्दी'}
              </button>

              {/* AI Polish Button */}
              {reviewText.trim().length > 6 && (
                <button
                  type="button"
                  onClick={handleAIPolish}
                  disabled={isPolishing}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFE5BF]/60 dark:bg-[#352520] hover:bg-[#FFE5BF] text-[11px] font-semibold text-[#F62440] dark:text-[#FFE5BF] transition-colors cursor-pointer"
                >
                  <Sparkles className={`w-3 h-3 ${isPolishing ? 'animate-spin' : ''}`} />
                  <span>{isPolishing ? 'Polishing...' : 'Polish'}</span>
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Your review is generated here automatically. Tap 'Reset' to write manually from scratch, or tap the microphone to speak."
              rows={5}
              className="w-full p-4 pr-12 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F62440]/30 resize-none transition-all placeholder:text-stone-400 leading-relaxed"
            />

            {/* Embedded Microphone Button */}
            <button
              type="button"
              onClick={toggleVoiceTyping}
              title={isListening ? 'Stop voice typing' : 'Tap to speak review'}
              aria-label={isListening ? 'Stop voice typing' : 'Start voice typing'}
              className={`absolute right-3 top-3 p-2 rounded-xl transition-all cursor-pointer ${
                isListening
                  ? 'bg-[#F62440] text-white shadow-md animate-pulse'
                  : 'bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:text-[#F62440] border border-stone-200 dark:border-stone-600 shadow-xs'
              }`}
            >
              {isListening ? (
                <Square className="w-4 h-4 fill-white" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </button>
          </div>

          {isListening && (
            <div className="flex items-center gap-2 text-xs text-[#F62440] font-medium pl-1">
              <span className="w-2 h-2 rounded-full bg-[#F62440] animate-ping" />
              <span>Listening ({voiceLang === 'en-IN' ? 'English / Hinglish' : 'हिन्दी'})... Speak clearly into the microphone.</span>
            </div>
          )}

          {micError && (
            <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 pl-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{micError}</span>
            </div>
          )}
        </div>

        {/* 2-Step Simple Guide for Guest */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/30 text-xs text-stone-700 dark:text-stone-300 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-stone-900 dark:text-stone-100 text-[11px] uppercase tracking-wider">
            <span>✨ 2 Quick Steps on Google:</span>
          </div>
          <ul className="space-y-1 text-[11px] leading-relaxed">
            <li><b>1. Stars:</b> Tap 5 stars on Google.</li>
            <li><b>2. Paste &amp; Post:</b> Tap inside Google&apos;s text box, tap <b>Paste</b>, and tap <b>Post</b>!</li>
          </ul>
        </div>

        {/* 3. Primary Action: Post on Google */}
        <div className="pt-2 space-y-2.5">
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePostToGoogle}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F62440] to-[#E61530] hover:from-[#d61b34] hover:to-[#c4142b] text-white font-bold text-base shadow-[0_6px_24px_rgba(246,36,64,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>Proceed to Post on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Quick Copy Helper Button */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 px-1">
            <span>Copies review text &amp; opens Google dialog directly.</span>
            <button
              type="button"
              onClick={copyOnlyText}
              className="inline-flex items-center gap-1 font-semibold text-[#F62440] hover:underline cursor-pointer"
            >
              <Copy className="w-3 h-3" />
              <span>Copy text only</span>
            </button>
          </div>
        </div>

      </div>

      {/* Copy & Redirect Floating Toast */}
      {copiedSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-stone-900 text-white shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200 max-w-sm text-center">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Review copied to clipboard! Tap 5 stars &amp; tap <b>Paste</b> inside Google&apos;s review box.</span>
        </div>
      )}

      {/* Alternative Direct Link Backup */}
      <div className="mt-4 text-center">
        <a
          href={GOOGLE_MAPS_REVIEWS_TAB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-500 hover:text-[#F62440] transition-colors underline"
        >
          Having trouble? Open Raj Resort directly on Google Maps
        </a>
      </div>

      {/* 4. Reception Desk QR Standee Section */}
      <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800 text-center">
        <button
          type="button"
          onClick={() => setShowStandee(!showStandee)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#F62440] hover:underline cursor-pointer"
        >
          <QrCode className="w-4 h-4" />
          <span>{showStandee ? 'Hide Counter Desk QR Standee' : 'View / Print Counter Desk QR Standee'}</span>
        </button>

        {showStandee && (
          <div className="mt-4 p-6 rounded-3xl bg-white dark:bg-stone-900 border border-[#FFE5BF] dark:border-[#352520] shadow-md max-w-sm mx-auto text-center space-y-3">
            <div className="flex justify-center">
              <RajResortLogo variant="full-circle" size={48} />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Raj Resort Patna
            </h4>
            <p className="text-[11px] font-semibold text-[#F62440] uppercase tracking-wider">
              Scan to Review on Google
            </p>

            <div className="p-3 bg-white border border-stone-200 rounded-2xl inline-block shadow-inner">
              {qrCodeUrl && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={qrCodeUrl} alt="Raj Resort Review QR Code" className="w-48 h-48 rounded-xl" />
              )}
            </div>

            <p className="text-[11px] text-stone-500">
              Point phone camera to review our hospitality on Google.
            </p>

            <div className="flex justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-[#F62440] cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Standee</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
