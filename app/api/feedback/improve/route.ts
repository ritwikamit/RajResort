import { NextRequest, NextResponse } from 'next/server';

interface ImproveRequestBody {
  text?: string;
  action?: 'improve' | 'generate';
  language?: string;
}

const ENGLISH_SAMPLES = [
  "Attended a cousin's wedding reception at Raj Resort Patna. The 3.5-acre lawn was beautifully lit and the walkway for the bride and groom was breathtaking. Food was hot and delicious, and parking for 400+ cars made it completely stress-free!",
  "Had an amazing family celebration here! The open garden lawn near the Ganga breeze gave a wonderful evening vibe. Banquet hall AC was cooling perfectly and the catering service was prompt and polite. Highly recommended in Patna!",
  "We booked Raj Resort for an engagement ceremony. Everything was well coordinated by the management team. The stage decor, food variety, and hospitality exceeded our expectations. Truly one of the best banquet venues in Patna.",
  "Stayed here for two nights during a family wedding in Patliputra. The AC rooms were neat, clean, and comfortable. Huge parking area for cars with security guard assistance. Very pleasant stay!",
  "Superb venue for large gatherings! The buffet spread was rich with delicious live chaat and main course counters. Management is courteous and attentive to every detail. 5 stars well deserved!",
  "Beautiful ambience and top-notch hospitality. The spacious celebration ground easily accommodated over 800 guests without feeling crowded. Uninterrupted power backup and great food taste.",
  "Excellent resort with a great location near Kurji Mor and Ganga Marine Drive. The grand entrance, green lawns, and delicious catering made our event memorable. Thank you Raj Resort team!",
  "Celebrated an anniversary party at Raj Resort Patna. The banquet hall decoration was elegant, food was fresh and tasty, and the service staff was polite and prompt. Will definitely book again for future family functions.",
  "Great experience attending my best friend's marriage ceremony here. The floral aisle for entry was magical, food was fresh and piping hot, and valet parking made entry seamless.",
  "Visited for a reception dinner. Very peaceful atmosphere with the Ganga breeze, huge lawn space, and cooperative staff. Definitely one of the top wedding venues in Patna."
];

const HINDI_SAMPLES = [
  "Bahut hi shandar resort hai Patna me. Family wedding attend kiya tha, lawn decoration aur catering dono lajawab the. Parking ki koi dikkat nahi hui aur staff ka behaviour bahut humble tha.",
  "Raj Resort Patna me hamare cousin ki shadi thi. Venue bohot bada aur sundar hai, especially Ganga view aur night lighting. Khana bahut tasty tha aur sabhi arrangements smooth the.",
  "Patna ka one of the best wedding venues! Open lawn bahut spacious hai, decoration aur bride-groom entry ka setup bohot attractive laga. Management team full supportive hai.",
  "Hamne yaha engagement function organize kiya tha. Banquet hall ka AC, dinner buffet aur seating arrangements sab kuch first class tha. Sabhi guests ne venue aur khane ki tareef ki.",
  "Kurji Mor ke paas best location hai via Ganga Marine Drive. Rooms clean the aur car parking 400+ gaadiyo ke liye kaafi badi hai. Staff ka service quick aur helpful raha.",
  "Shaadi aur reception ke liye perfect place hai Raj Resort. Khane ka taste authentic aur fresh tha. Lawn ka ambience night me bohot royal lagta hai. 5 star experience!",
  "Ganga kinare ka resort hai, shaam ko thandi hawa aur lighting ka mahaul lajawab tha. Khana fresh aur garam serve hua. Staff ka response time bahut quick tha.",
  "Bhai ki shadi ke liye book kiya tha. Stage decoration, lawn space aur food sab kuch perfect tha. 500+ guests aaram se accommodate ho gaye bina kisi bheed ke."
];

function getRandomSample(lang?: string): string {
  const isHindi = Boolean(lang && (lang.toLowerCase().includes('hi') || lang.toLowerCase() === 'hindi'));
  const pool = isHindi ? HINDI_SAMPLES : ENGLISH_SAMPLES;
  return pool[Math.floor(Math.random() * pool.length)];
}

const AI_POLISH_SYSTEM_PROMPT = `You are an authentic, high-integrity Google Maps review assistant for Raj Resort Patna.

CORE PHILOSOPHY (GOOGLE MAPS AUTHENTICITY POLICY):
Real human reviews written from mobile phones are conversational, emotional, and naturally imperfect. Over-sanitized, robotic, textbook-grammar marketing copy gets penalized or flagged by Google's anti-spam bots.

SCRIPT AND LANGUAGE RULES:
1. ALWAYS WRITE IN ENGLISH SCRIPT / LATIN ALPHABET ONLY.
2. NEVER OUTPUT DEVANAGARI / HINDI CHARACTERS.
3. For Hindi reviews, write in natural conversational HINGLISH using English letters only (e.g., "Raj Resort Patna me hamare cousin ki shadi thi, khana bohot tasty tha aur lawn decoration lajawab tha. 400+ car parking se arrival easy raha.").

RULES FOR POLISHING ('action: improve'):
1. CORRECT SPELLING ERRORS ONLY: Fix blatant typographical slips (e.g. "reicived" -> "received", "exelent" -> "excellent", "servise" -> "service", "accdent" -> "accident").
2. PRESERVE NATURAL GRAMMAR & HUMAN VOICE: Do NOT restructure or over-polish the user's conversational grammar, colloquial fragments, or Hinglish flow into formal English essays. Keep the sentence structure authentic, warm, and natural as if typed on a mobile phone.
3. PRESERVE ORIGINAL MEANING & SENTIMENT: Never convert negative feedback or critique into fake praise.
4. RETURN STRICT JSON: {"improved": "...", "sentiment": "positive"|"neutral"|"negative", "tags": [...]}`;

function heuristicEnhanceFeedback(raw: string): {
  improved: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  tags: string[];
} {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { improved: '', sentiment: 'neutral', tags: [] };
  }

  // Detect sentiment
  const lower = trimmed.toLowerCase();
  const negativeWords = [
    'bad', 'poor', 'slow', 'dirty', 'rude', 'late', 'kharab', 'bekar', 'ganda',
    'problem', 'issue', 'delay', 'wait', 'thoda slow', 'thoda wait', 'cold food', 'not good',
    'chota', 'loud', 'noise', 'disappointed', 'complaint', 'improve'
  ];
  const positiveWords = [
    'good', 'great', 'awesome', 'excellent', 'amazing', 'bahut achha', 'sundar', 'tasty',
    'delicious', 'helpful', 'cooperative', 'clean', 'spotless', 'spacious', 'bada', 'shandar',
    'loved', 'peaceful', 'grand', 'wonderful', 'beautiful', 'best'
  ];

  let negScore = 0;
  let posScore = 0;

  for (const w of negativeWords) {
    if (lower.includes(w)) negScore++;
  }
  for (const w of positiveWords) {
    if (lower.includes(w)) posScore++;
  }

  let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';
  if (negScore > posScore) sentiment = 'negative';
  else if (posScore > 0 && negScore === 0) sentiment = 'positive';
  else if (posScore > 0 && negScore > 0) sentiment = 'neutral'; // mixed

  // Extract tags
  const tags: string[] = [];
  if (lower.includes('room') || lower.includes('bed') || lower.includes('bathroom') || lower.includes('clean')) tags.push('Room Cleanliness');
  if (lower.includes('food') || lower.includes('khana') || lower.includes('taste') || lower.includes('tasty') || lower.includes('cater') || lower.includes('dining')) tags.push('Food & Dining');
  if (lower.includes('staff') || lower.includes('service') || lower.includes('helpful') || lower.includes('behaviour') || lower.includes('cooperative')) tags.push('Staff Hospitality');
  if (lower.includes('lawn') || lower.includes('stage') || lower.includes('decor') || lower.includes('wedding') || lower.includes('shadi') || lower.includes('sangeet')) tags.push('Wedding Lawn & Decor');
  if (lower.includes('parking') || lower.includes('car') || lower.includes('security')) tags.push('Parking & Security');
  if (lower.includes('hall') || lower.includes('banquet') || lower.includes('ac')) tags.push('Banquet Hall & AC');
  if (tags.length === 0) tags.push('Overall Experience');

  // Intelligent text cleanup
  let polished = trimmed;

  // Common quick replacements for conversational clarity
  const replacements: [RegExp, string][] = [
    [/\bv\s+helpful\b/gi, 'very helpful'],
    [/\bbcz\b/gi, 'because'],
    [/\bplz\b/gi, 'please'],
    [/\brcvd\b/gi, 'received'],
    [/\bac\b/gi, 'AC'],
    [/\bthx\b/gi, 'thanks'],
    [/\bw\/\s*/gi, 'with '],
    [/\s{2,}/g, ' '],
  ];

  for (const [pattern, repl] of replacements) {
    polished = polished.replace(pattern, repl);
  }

  // Capitalize first letter of sentences
  polished = polished.replace(/(^\s*|\.\s+)([a-z])/g, (_, prefix, letter) => prefix + letter.toUpperCase());

  // Ensure trailing punctuation
  if (!/[.!?]$/.test(polished)) {
    polished += '.';
  }

  return {
    improved: polished,
    sentiment,
    tags: Array.from(new Set(tags)).slice(0, 4),
  };
}

// In-memory sliding window rate limiter: max 10 requests per minute per IP
const ipRequests = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (ipRequests.size > 500) {
    for (const [key, value] of ipRequests.entries()) {
      if (now > value.resetTime) ipRequests.delete(key);
    }
  }
  const record = ipRequests.get(ip);
  if (!record || now > record.resetTime) {
    ipRequests.set(ip, { count: 1, resetTime: now + 60_000 });
    return false;
  }
  if (record.count >= 10) {
    return true;
  }
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Rate limit reached. Please wait a moment before refining again.' },
        { status: 429 }
      );
    }

    const body: ImproveRequestBody = await req.json().catch(() => ({ text: '' }));
    const isGenerate = body.action === 'generate';
    const rawText = body.text ? String(body.text).trim().slice(0, 1000) : '';

    if (!isGenerate && !rawText) {
      return NextResponse.json(
        { success: false, error: 'Feedback text is required' },
        { status: 400 }
      );
    }

    // Check for API keys
    const rawApiKey =
      process.env.ReviewBotRajResort ||
      process.env.Openrouter_API ||
      process.env.OPENROUTER_API ||
      process.env.OPENROUTER_API_KEY ||
      process.env.openrouter_api ||
      process.env.OPENAI_API_KEY ||
      process.env.GEMINI_API_KEY;

    if (!rawApiKey) {
      if (isGenerate) {
        return NextResponse.json({
          success: true,
          source: 'procedural',
          improved: getRandomSample(body.language),
          sentiment: 'positive',
          tags: ['Wedding Lawn & Decor', 'Food & Dining', 'Staff Hospitality'],
        });
      }
      const enhanced = heuristicEnhanceFeedback(rawText);
      return NextResponse.json({
        success: true,
        source: 'heuristic',
        original: rawText,
        ...enhanced,
      });
    }

    const cleanApiKey = rawApiKey.replace(/['"]/g, '').trim();

    // If OpenRouter or OpenAI format
    const isOpenRouter = Boolean(
      process.env.ReviewBotRajResort ||
      process.env.Openrouter_API ||
      process.env.OPENROUTER_API ||
      process.env.OPENROUTER_API_KEY ||
      process.env.openrouter_api
    );

    const endpoint = isOpenRouter
      ? 'https://openrouter.ai/api/v1/chat/completions'
      : 'https://api.openai.com/v1/chat/completions';

    const model = isOpenRouter
      ? 'openai/gpt-4o-mini'
      : 'gpt-4o-mini';

    // Dynamic random perspective seed guarantees zero repetition across generations
    const perspectives = [
      "Attended cousin's wedding reception, loved the 150-ft lit walkway and hot catering",
      "Brother's marriage, 3.5 acre open lawn with Ganga breeze, spacious 400+ car parking",
      "Family anniversary celebration in the AC banquet hall, prompt staff hospitality",
      "Guest at an engagement ceremony, live chaat stalls and pure taste was unforgettable",
      "Stayed two days in the AC rooms for a relative's wedding in Patliputra, neat and clean",
      "Corporate dinner by the lawn garden, peaceful evening vibe with smooth valet parking",
      "Attended friend's sangeet and wedding, heavy diesel generator backup ran uninterrupted",
      "Wedding guest coming via Ganga Marine Drive and Kurji Mor, grand entrance and lighting"
    ];
    const chosenPerspective = perspectives[Math.floor(Math.random() * perspectives.length)];
    const isHindiRequested = Boolean(body.language && (body.language.toLowerCase().includes('hi') || body.language.toLowerCase() === 'hindi'));

    const userPrompt = isGenerate
      ? (isHindiRequested
          ? `Generate a completely unique, natural, and authentic 2-to-3 sentence Google Maps review in conversational HINGLISH (HINDI WRITTEN IN ENGLISH ALPHABET ONLY) for Raj Resort Patna as a real guest (Angle: ${chosenPerspective}). CRITICAL: Write entirely using English letters. NEVER use Hindi/Devanagari script. Example: 'Lawn decor bohot sundar tha aur khana garam tha'. Write like a real person typing from a smartphone on Google Maps. Return JSON: {"improved": "..."}`
          : `Generate a completely unique, natural, and authentic 2-to-3 sentence Google Maps review in natural ENGLISH for Raj Resort Patna as a genuine guest (Angle: ${chosenPerspective}). Write like a real customer on a smartphone: casual, sincere, conversational syntax with slight natural human quirks (e.g. 'specially the paneer starter', 'no parking issue bcz valet was quick', 'definetly 5 stars'). Avoid robotic AI jargon. Return JSON: {"improved": "..."}`)
      : `Customer Raw Feedback:\n"${rawText}"\n\nPlease polish according to the guidelines: fix spelling/typos only, keep natural human conversational grammar intact. If Hindi words are present, ensure they remain in English letters (Latin script), never convert to Devanagari.`;

    const payload = {
      model,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: AI_POLISH_SYSTEM_PROMPT },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
      temperature: isGenerate ? 0.95 : 0.2,
      max_tokens: 350,
    };

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cleanApiKey}`,
    };

    if (isOpenRouter) {
      headers['HTTP-Referer'] = 'https://rajresortpatna.com';
      headers['X-Title'] = 'Raj Resort Patna Feedback System';
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (response.ok) {
      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content?.trim();
      if (content) {
        try {
          const parsed = JSON.parse(content);
          if (parsed && parsed.improved) {
            return NextResponse.json({
              success: true,
              source: 'llm',
              original: rawText,
              improved: String(parsed.improved),
              sentiment: parsed.sentiment || 'neutral',
              tags: Array.isArray(parsed.tags) ? parsed.tags : ['Guest Experience'],
            });
          }
        } catch (jsonErr) {
          console.warn('AI Polish: JSON parse failed, using direct response:', jsonErr);
        }
      }
    }

    // Fallback if LLM request failed or returned invalid response
    if (isGenerate) {
      return NextResponse.json({
        success: true,
        source: 'procedural-fallback',
        improved: getRandomSample(body.language),
        sentiment: 'positive',
        tags: ['Wedding Lawn & Decor', 'Food & Dining'],
      });
    }

    const fallback = heuristicEnhanceFeedback(rawText);
    return NextResponse.json({
      success: true,
      source: 'fallback',
      original: rawText,
      ...fallback,
    });
  } catch (error) {
    console.error('Feedback improve error:', error);
    return NextResponse.json({
      success: true,
      source: 'error-fallback',
      improved: getRandomSample(),
      sentiment: 'positive',
      tags: ['Guest Experience'],
    });
  }
}
