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
  Download,
  AlertCircle,
  Copy,
  RefreshCw,
  RotateCcw
} from 'lucide-react';
import QRCode from 'qrcode';
import { RajResortLogo } from '../RajResortLogo';

// Direct Google Write-Review intent dialog for Raj Resort Patna (Place ID: ChIJz6Tf9Y9Z7TkRInVQoECYQLk)
const GOOGLE_WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJz6Tf9Y9Z7TkRInVQoECYQLk';
const GOOGLE_MAPS_REVIEWS_TAB_URL = 'https://www.google.com/maps/place/RAJ+RESORT/@25.6393699,85.1101773,608m/data=!3m1!1e3!4m24!1m13!3m12!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!2sRAJ+RESORT!5m3!1s2026-11-18!4m1!1i2!8m2!3d25.6391525!4d85.1102531!9m1!1b1!16s%2Fg%2F11pvch6p79!3m9!1s0x39ed598ff5dfa4cf:0xb9409840a0507522!5m3!1s2026-11-18!4m1!1i2!8m2!3d25.6391525!4d85.1102531!16s%2Fg%2F11pvch6p79?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D';

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

// Authentic human review building blocks for Raj Resort Patna (English & Hindi)
const ENGLISH_OPENERS = [
  "Attended a cousin's wedding reception at Raj Resort Patna last week.",
  "Had an unforgettable experience celebrating a family function at Raj Resort.",
  "Recently attended my friend's marriage ceremony here near Kurji Mor.",
  "We booked Raj Resort for our family anniversary celebration and it was fantastic.",
  "Visited Raj Resort Patna for an engagement function and was genuinely impressed.",
  "Stayed and attended a grand wedding here in Patliputra.",
  "One of the best celebration venues we have experienced in Patna.",
  "Such a beautiful and well-maintained resort for grand celebrations.",
];

const ENGLISH_HIGHLIGHTS = [
  "The 3.5-acre open lawn was decorated beautifully and the illuminated couple walkway was breathtaking.",
  "The banquet hall AC was cooling perfectly and the open lawn with the Ganga breeze created a royal ambience.",
  "The lawn lighting, floral stage decor, and spacious guest seating made the evening magical.",
  "The outdoor garden is huge, perfectly maintained, and easily accommodated all guests without any crowd.",
  "From the majestic grand entry gate to the themed Varmala stage, every arrangement looked royal.",
];

const ENGLISH_FOOD_SERVICE = [
  "Food was hot, flavorful, specially the live chaat counter and paneer starter were top notch.",
  "The dinner buffet had great variety with authentic taste, and the service staff was polite and humble.",
  "Delicious catering with fresh ingredients, and the banquet team ensured prompt refills throughout.",
  "Starters and main course were delicious, and the management team was cooperative at every step.",
];

const ENGLISH_CLOSINGS = [
  "Spacious parking for 400+ cars made arrival hassle-free. Full 5 stars well deserved!",
  "Courteous management, clean AC rooms, and smooth parking assistance. Highly recommended in Patna!",
  "Reliable power backup, humble staff, and great hospitality throughout. Must visit for weddings!",
  "Thank you to the whole team for making our family event so memorable and special!",
];

const HINDI_OPENERS = [
  "Raj Resort Patna me hamare cousin ki shadi attend kiya tha.",
  "Family wedding ke liye Raj Resort Patna book kiya tha, bohot shandar anubhav raha.",
  "Pichhle hafte dost ki engagement ceremony attend ki yaha Kurji Mor ke paas.",
  "Patna ka one of the best wedding venues laga hum sabhi family members ko.",
  "Bhai ke reception function ke liye venue bohot sundar aur royal saabit hua.",
  "Ganga kinare ka resort hai, shaam ka mahaul bohot peaceful aur grand rehta hai.",
];

const HINDI_HIGHLIGHTS = [
  "3.5 acre ka open lawn bohot sundar sajaya gaya tha aur bride-groom entry ka walkway lajawab laga.",
  "Banquet hall ka AC cooling first-class tha aur night lighting me lawn royal lag raha tha.",
  "Stage decoration aur seating arrangement bohot spacious tha, 700+ guests aaram se aa gaye.",
  "Ganga Marine Drive se aana bohot aasan raha aur venue ka grand look dil jeet leta hai.",
];

const HINDI_FOOD_SERVICE = [
  "Khana bilkul fresh, garam aur authentic taste ka tha. Live chaat aur starters sabko pasand aaye.",
  "Dinner buffet me kaafi variety thi, taste lajawab tha aur serving staff bohot humble tha.",
  "Catering arrangements lajawab the, garam khana aur prompt service continuously chali.",
];

const HINDI_CLOSINGS = [
  "400+ gaadiyo ki parking aur security guard ki wajah se koi dikkat nahi hui. 5 star experience!",
  "Management full supportive raha aur AC rooms bhi clean the. Patna me highly recommended!",
  "Continuous power backup aur humble staff. Bahut hi pyara resort hai weddings ke liye!",
];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomHumanReview(lang: 'en' | 'hi' = 'en'): string {
  if (lang === 'hi') {
    const o = getRandomElement(HINDI_OPENERS);
    const h = getRandomElement(HINDI_HIGHLIGHTS);
    const f = getRandomElement(HINDI_FOOD_SERVICE);
    const c = getRandomElement(HINDI_CLOSINGS);
    return `${o} ${h} ${f} ${c}`;
  }
  const o = getRandomElement(ENGLISH_OPENERS);
  const h = getRandomElement(ENGLISH_HIGHLIGHTS);
  const f = getRandomElement(ENGLISH_FOOD_SERVICE);
  const c = getRandomElement(ENGLISH_CLOSINGS);
  return `${o} ${h} ${f} ${c}`;
}

// Transliterates Devanagari script to Latin characters (Hinglish) so voice typing outputs English letters only
function devanagariToLatin(str: string): string {
  if (!str || !/[\u0900-\u097F]/.test(str)) return str;

  const VOWELS: Record<string, string> = {
    'अ':'a','आ':'aa','इ':'i','ई':'ee','उ':'u','ऊ':'oo','ऋ':'ri',
    'ए':'e','ऐ':'ai','ओ':'o','औ':'au','अं':'an','अः':'ah'
  };

  const MATRAS: Record<string, string> = {
    'ा':'a','ि':'i','ी':'i','ु':'u','ू':'u','ृ':'ri',
    'े':'e','ै':'ai','ो':'o','ौ':'au'
  };

  const CONSONANTS: Record<string, string> = {
    'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ng',
    'च':'ch','छ':'chh','ज':'j','झ':'jh','ञ':'ny',
    'ट':'t','ठ':'th','ड':'d','ढ':'dh','ण':'n',
    'त':'t','थ':'th','द':'d','ध':'dh','न':'n',
    'प':'p','फ':'f','ब':'b','भ':'bh','म':'m',
    'य':'y','र':'r','ल':'l','व':'v',
    'श':'sh','ष':'sh','स':'s','ह':'h'
  };

  const text = str
    .replace(/क़/g, 'q').replace(/ख़/g, 'kh').replace(/ग़/g, 'g')
    .replace(/ज़/g, 'z').replace(/ड़/g, 'd').replace(/ढ़/g, 'dh').replace(/फ़/g, 'f')
    .replace(/क्ष/g, 'ksh').replace(/त्र/g, 'tr').replace(/ज्ञ/g, 'gya')
    .replace(/ऑ/g, 'o').replace(/ॉ/g, 'o');

  let out = '';
  const len = text.length;

  for (let i = 0; i < len; i++) {
    const ch = text[i];
    const next = text[i + 1] || '';

    if (VOWELS[ch]) {
      out += VOWELS[ch];
      continue;
    }

    if (CONSONANTS[ch]) {
      const c = CONSONANTS[ch];
      if (next === '्') {
        out += c;
        i++;
      } else if (MATRAS[next]) {
        out += c + MATRAS[next];
        i++;
      } else if (next === 'ं' || next === 'ँ') {
        out += c + 'an';
        i++;
      } else if (!next || /[\s\.,!?:;\-–—\(\)\[\]"']/.test(next)) {
        out += c;
      } else if (CONSONANTS[next]) {
        out += c + 'a';
      } else {
        out += c;
      }
      continue;
    }

    if (MATRAS[ch]) {
      out += MATRAS[ch];
      continue;
    }

    if (ch === 'ं' || ch === 'ँ') {
      out += 'n';
      continue;
    }

    if (ch === 'ः') {
      out += 'h';
      continue;
    }

    if (ch === '्') {
      continue;
    }

    out += ch;
  }

  return out.replace(/\s+/g, ' ');
}

// Merges speech recognition transcripts preventing Android/Chromium duplication bugs.
function mergeSpeechChunks(existing: string, incoming: string): string {
  const a = existing.trim();
  const b = incoming.trim();
  if (!a) return b;
  if (!b) return a;
  if (a === b || a.endsWith(b)) return a;
  if (b.startsWith(a)) return b;
  if (a.toLowerCase().includes(b.toLowerCase())) return a;

  const aWords = a.split(/\s+/);
  const bWords = b.split(/\s+/);
  const maxOverlap = Math.min(aWords.length, bWords.length);
  for (let overlap = maxOverlap; overlap > 0; overlap--) {
    const aTail = aWords.slice(aWords.length - overlap).join(' ').toLowerCase();
    const bHead = bWords.slice(0, overlap).join(' ').toLowerCase();
    if (aTail === bHead) {
      return `${aWords.slice(0, aWords.length - overlap).join(' ')} ${b}`.trim();
    }
  }

  return `${a} ${b}`.trim();
}

export const GoogleReviewBooster: React.FC = () => {
  // Overall Rating only (1-5 stars)
  const [overallRating, setOverallRating] = useState<number>(5);

  const [selectedLang, setSelectedLang] = useState<'en' | 'hi'>('hi');
  // Starts empty so the user can type manually, voice-type, or tap Generate Review
  const [reviewText, setReviewText] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isPolishing, setIsPolishing] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [showStandee, setShowStandee] = useState<boolean>(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [micError, setMicError] = useState<string | null>(null);

  // ChatGPT-like streaming typewriter effect
  const [isTypingEffect, setIsTypingEffect] = useState<boolean>(false);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [voiceLang, setVoiceLang] = useState<'en-IN' | 'hi-IN'>('hi-IN');
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const baseTextRef = useRef<string>('');

  const cancelTypewriter = useCallback(() => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    setIsTypingEffect(false);
  }, []);

  const applyTypewriterEffect = useCallback((targetText: string) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    setIsTypingEffect(true);
    setReviewText('');
    let idx = 0;
    const total = targetText.length;
    // Step 2-3 characters every 12ms for a responsive, natural ChatGPT typing sensation
    typingTimerRef.current = setInterval(() => {
      idx += Math.min(2, total - idx);
      setReviewText(targetText.slice(0, idx));
      if (idx >= total) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
        setIsTypingEffect(false);
      }
    }, 12);
  }, []);

  // Generate QR on mount (Canonical URL with high resolution for sharp physical printing)
  useEffect(() => {
    QRCode.toDataURL('https://www.rajresortpatna.com/feedback', {
      width: 500,
      margin: 1.5,
      color: { dark: '#181210', light: '#FFFFFF' },
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('QR code error:', err));

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  // Generate unique review (Hybrid: instant AI API with high diversity + procedural fallback + ChatGPT typing effect)
  const handleGenerateReview = useCallback(async (langToUse?: 'en' | 'hi') => {
    cancelTypewriter();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      recognitionRef.current = null;
      setIsListening(false);
    }
    baseTextRef.current = '';

    const lang = langToUse || selectedLang;
    setIsGenerating(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2800);

      const res = await fetch('/api/feedback/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate', language: lang }),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId));

      if (res.ok) {
        const data = await res.json();
        if (data.improved) {
          applyTypewriterEffect(data.improved);
          setIsGenerating(false);
          return;
        }
      }
    } catch {
      // Fallback to instant procedural generator
    }

    // Instant unique combinatorial generator (hundreds of variations) with ChatGPT typing effect
    const proceduralReview = generateRandomHumanReview(lang);
    applyTypewriterEffect(proceduralReview);
    setIsGenerating(false);
  }, [selectedLang, cancelTypewriter, applyTypewriterEffect]);

  // Handle switching language: if review already exists, regenerate in new language; otherwise update preference
  const handleSelectLanguage = (newLang: 'en' | 'hi') => {
    if (newLang === selectedLang) return;
    setSelectedLang(newLang);
    setVoiceLang(newLang === 'hi' ? 'hi-IN' : 'en-IN');
    if (reviewText.trim().length > 0) {
      handleGenerateReview(newLang);
    }
  };

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
        let finalChunk = '';
        let interimChunk = '';

        for (let i = 0; i < event.results.length; i++) {
          const item = event.results[i];
          const rawTranscript = item[0]?.transcript?.trim() || '';
          if (!rawTranscript) continue;
          const transcript = devanagariToLatin(rawTranscript);

          if (item.isFinal) {
            finalChunk = mergeSpeechChunks(finalChunk, transcript);
          } else {
            interimChunk = mergeSpeechChunks(interimChunk, transcript);
          }
        }

        const sessionSpeech = mergeSpeechChunks(finalChunk, interimChunk);
        const mergedTotal = mergeSpeechChunks(baseTextRef.current, sessionSpeech);
        setReviewText(mergedTotal);
      };

      recognition.onerror = () => {
        setIsListening(false);
        recognitionRef.current = null;
        baseTextRef.current = reviewText.trim();
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
        setReviewText((current) => {
          baseTextRef.current = current.trim();
          return current;
        });
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

  // Full reset: cleanly tears down active speech recognition, cancels typewriter, clears text & baseline
  const handleReset = () => {
    cancelTypewriter();
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

  // AI Polish with rate-limited API (fixes spelling errors while preserving natural human grammar)
  const handleAIPolish = async () => {
    if (!reviewText.trim()) return;
    cancelTypewriter();
    setIsPolishing(true);

    try {
      const res = await fetch('/api/feedback/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: reviewText, language: selectedLang }),
      });
      const data = await res.json();
      if (data.success && data.improved) {
        applyTypewriterEffect(data.improved);
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
    let textToCopy = reviewText.trim();
    if (!textToCopy) {
      textToCopy = generateRandomHumanReview(selectedLang);
      setReviewText(textToCopy);
    }
    copyToClipboardRobust(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 5000);
  };

  const copyOnlyText = () => {
    let textToCopy = reviewText.trim();
    if (!textToCopy) {
      textToCopy = generateRandomHumanReview(selectedLang);
      setReviewText(textToCopy);
    }
    copyToClipboardRobust(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  // Reception Desk QR Standee Handlers
  const handlePrintStandee = () => {
    setShowStandee(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleDownloadQr = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'raj-resort-patna-reception-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Brand Header */}
      <div className="text-center mb-6 no-print">
        <div className="flex justify-center mb-2.5">
          <RajResortLogo variant="full-circle" size={54} />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
          Review Raj Resort Patna
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans max-w-sm mx-auto">
          Share your 5-star experience on our official Google Business Profile.
        </p>
      </div>

      {/* Main Review Card */}
      <div className="rounded-3xl bg-white dark:bg-stone-900 border border-[#FFE5BF] dark:border-[#352520] p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] space-y-6 no-print">
        
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
            {overallRating === 5 ? '5.0 — Exceptional Hospitality & Stay' : `${overallRating}.0 Star Rating`}
          </div>
        </div>

        {/* 2. Review Text Area with Auto-Generation, Manual Typing & Voice Typing */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400">
                Your Review
              </label>
              {isTypingEffect && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFE5BF] dark:bg-[#352520] text-[#F62440] dark:text-[#FFE5BF] animate-pulse">
                  <Sparkles className="w-2.5 h-2.5" />
                  AI writing...
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Language Switcher (Hindi in English / Hinglish | English) - Defaults to Hindi in English */}
              <div className="inline-flex items-center p-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('hi')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                    selectedLang === 'hi'
                      ? 'bg-[#F62440] text-white shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                  title="Hindi reviews written in English letters (Hinglish)"
                >
                  Hindi (Hinglish)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('en')}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                    selectedLang === 'en'
                      ? 'bg-[#F62440] text-white shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                  title="English reviews"
                >
                  English
                </button>
              </div>

              {/* Generate Review Button (prominent when empty, New Review when text present) */}
              <button
                type="button"
                onClick={() => handleGenerateReview()}
                disabled={isGenerating || isTypingEffect}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                  !reviewText.trim()
                    ? 'bg-[#F62440] text-white border-[#F62440] shadow-xs hover:bg-[#d61b34]'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:text-[#F62440] hover:bg-[#FFE5BF]/70'
                }`}
                title={reviewText.trim() ? "Generate another unique review" : "Generate a natural review automatically"}
              >
                {reviewText.trim() ? (
                  <RefreshCw className={`w-3 h-3 ${isGenerating || isTypingEffect ? 'animate-spin' : ''}`} />
                ) : (
                  <Sparkles className={`w-3.5 h-3.5 ${isGenerating || isTypingEffect ? 'animate-spin' : ''}`} />
                )}
                <span>
                  {isGenerating || isTypingEffect
                    ? 'Writing...'
                    : !reviewText.trim()
                    ? 'Generate Review'
                    : 'New Review'}
                </span>
              </button>

              {/* Reset Button - Only appears when text is present */}
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

              {/* AI Polish Button - Appears when meaningful text is present */}
              {reviewText.trim().length > 6 && (
                <button
                  type="button"
                  onClick={handleAIPolish}
                  disabled={isPolishing || isTypingEffect}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFE5BF]/60 dark:bg-[#352520] hover:bg-[#FFE5BF] text-[11px] font-semibold text-[#F62440] dark:text-[#FFE5BF] transition-colors cursor-pointer"
                  title="Fix typos and spelling errors while preserving natural human grammar"
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
              onFocus={cancelTypewriter}
              onChange={(e) => {
                cancelTypewriter();
                setReviewText(e.target.value);
                baseTextRef.current = e.target.value;
              }}
              placeholder={selectedLang === 'hi' 
                ? "Type your review here in Hindi (using English letters), tap mic to speak, or tap 'Generate Review' above..." 
                : "Type your review here, tap the mic to speak, or tap 'Generate Review' above..."}
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
              <span>Listening ({voiceLang === 'hi-IN' ? 'Hindi / Hinglish' : 'English'})... Speak clearly into the microphone.</span>
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-stone-900 text-white shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200 max-w-sm text-center no-print">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Review copied to clipboard! Tap 5 stars &amp; tap <b>Paste</b> inside Google&apos;s review box.</span>
        </div>
      )}

      {/* Alternative Direct Link Backup */}
      <div className="mt-4 text-center no-print">
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
        <div className="flex flex-col items-center gap-2 mb-4 no-print">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <QrCode className="w-3.5 h-3.5" />
            <span>Reception Desk Counter Standee</span>
          </div>
          <p className="text-xs text-stone-500 max-w-sm">
            Print and place on the reception counter so arriving &amp; departing guests can scan and leave 5-star reviews.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              onClick={handlePrintStandee}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F62440] hover:bg-[#d61b34] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Standee</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadQr}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PNG</span>
            </button>
            <button
              type="button"
              onClick={() => setShowStandee(!showStandee)}
              className="text-xs text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 underline cursor-pointer ml-1"
            >
              {showStandee ? 'Hide Preview' : 'Show Preview'}
            </button>
          </div>
        </div>

        {/* Counter Standee Card (Always rendered for @media print, toggleable preview on screen) */}
        <div className={showStandee ? 'block' : 'hidden print:block'}>
          <div
            id="reception-qr-standee"
            className="p-7 sm:p-9 rounded-3xl bg-[#FFFDF9] dark:bg-stone-900 border-2 border-[#D4AF37] shadow-xl max-w-md mx-auto text-center relative overflow-hidden my-4"
          >
            {/* Ornate Corner Accents */}
            <div className="absolute top-2.5 left-3 text-[#D4AF37] text-xs font-serif select-none">❖</div>
            <div className="absolute top-2.5 right-3 text-[#D4AF37] text-xs font-serif select-none">❖</div>
            <div className="absolute bottom-2.5 left-3 text-[#D4AF37] text-xs font-serif select-none">❖</div>
            <div className="absolute bottom-2.5 right-3 text-[#D4AF37] text-xs font-serif select-none">❖</div>

            {/* Top Brand Seal */}
            <div className="flex justify-center mb-3">
              <div className="p-1 rounded-full border-2 border-[#D4AF37] bg-white shadow-2xs">
                <RajResortLogo variant="full-circle" size={58} />
              </div>
            </div>

            {/* Resort Name & Luxury Subtitle */}
            <h3 className="font-serif text-2xl font-bold tracking-wide text-stone-900 dark:text-stone-50 uppercase standee-ruby-text">
              Raj Resort Patna
            </h3>
            <p className="text-xs font-serif italic text-amber-800 dark:text-amber-300 mt-0.5 tracking-wider standee-gold-text">
              Grand Celebrations &amp; Royal Hospitality
            </p>
            <p className="text-[10px] uppercase font-semibold text-stone-500 tracking-widest mt-1">
              Kurji Mor • Ganga Marine Drive • Patliputra
            </p>

            {/* Google Rating Banner */}
            <div className="my-4 py-2 px-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-[#D4AF37]/50 inline-flex items-center justify-center gap-1.5 shadow-2xs standee-gold-border">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
              <div className="relative w-4 h-4">
                <Star className="w-4 h-4 text-stone-300 dark:text-stone-700 fill-stone-300/40" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
              </div>
              <span className="font-bold text-xs text-stone-900 dark:text-stone-100 ml-1.5">
                4.5 on Google (1,400+ Reviews)
              </span>
            </div>

            {/* Counter Callout */}
            <div className="space-y-1 mb-4">
              <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                Loved Your Experience With Us?
              </h4>
              <p className="text-xs text-[#F62440] font-semibold standee-ruby-text">
                Your Feedback Matters To Us • Share Your 5-Star Review
              </p>
            </div>

            {/* Big High-Res QR Code Frame */}
            <div className="p-3.5 bg-white border-2 border-[#D4AF37] rounded-2xl inline-block shadow-md standee-gold-border">
              {qrCodeUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={qrCodeUrl}
                  alt="Raj Resort Reception Google Review QR Code"
                  className="w-52 h-52 sm:w-56 sm:h-56 mx-auto rounded-xl"
                />
              ) : (
                <div className="w-52 h-52 flex items-center justify-center bg-stone-100 text-stone-400 text-xs">
                  Generating QR...
                </div>
              )}
            </div>

            {/* Friendly 3-Step Guide */}
            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 grid grid-cols-3 gap-2 text-center text-[10px] text-stone-700 dark:text-stone-300">
              <div className="p-1.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="block font-bold text-stone-900 dark:text-stone-100 text-xs">1. Scan</span>
                <span>Open Camera</span>
              </div>
              <div className="p-1.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="block font-bold text-[#F62440] text-xs">2. Rate</span>
                <span>Tap 5 Stars</span>
              </div>
              <div className="p-1.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="block font-bold text-stone-900 dark:text-stone-100 text-xs">3. Share</span>
                <span>Type or Speak</span>
              </div>
            </div>

            {/* Footer of the standee */}
            <div className="mt-4 pt-2 text-[10px] text-stone-500 tracking-wider">
              <p className="font-semibold text-stone-700 dark:text-stone-300">
                rajresortpatna.com/feedback
              </p>
              <p className="text-[9px] text-stone-400 mt-0.5">
                Front Desk Counter Standee • Raj Resort Patna
              </p>
            </div>

            {/* Screen-only action buttons inside preview */}
            <div className="no-print pt-4 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={handlePrintStandee}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F62440] text-white text-xs font-bold hover:bg-[#d61b34] shadow-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Standee</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadQr}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:text-[#F62440] shadow-2xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PNG</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
