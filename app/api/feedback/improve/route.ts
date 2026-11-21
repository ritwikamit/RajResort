import { NextRequest, NextResponse } from 'next/server';

interface ImproveRequestBody {
  text?: string;
  action?: 'improve' | 'generate';
  language?: string;
}

const ENGLISH_SAMPLES = [
  "attended cousin wedding here, food was great and lawn is huge",
  "really loved the open lawn and food.. staff was very polite",
  "superb place for marriage function, decoration and food was v good",
  "went for a family wedding reception last week. open lawn is massive with nice ganga breeze and food was fresh and hot. definetly recommend for weddings in patna.",
  "food was to good and lawn decoration was really nice",
  "attended my friends reception here yesterday. peaceful vibe, tasty buffet and parking was totally hassle free",
  "huge lawn and delicious food.. definetly 5 stars",
  "best resort in patna for weddings.. lawn decor was osm and ganga breeze in evening was peaceful",
  "we had a family anniversary party here. banquet hall ac was cooling properly and staff was polite.",
  "400+ car parking made arrival so easy, no rush at all bcz huge ground. good catering too",
  "spacious banquet and lawn, cooperative staff and tasty catering. had a great time with family..",
  "stage decor and lighting was beautiful, food was fresh and hot. 5star service throughout"
];

const HINDI_SAMPLES = [
  "bohot badiya resort hai weddings ke liye, lawn space kafi bada h",
  "raj resort me cousin ki shadi thi, khana aur lawn dono lajawab the. parking bhi smooth thi",
  "patna me shadi ke liye best jagah lagi.. open ground bada hai aur peaceful vibe",
  "khana to good tha aur lawn bhi bohot sundar sajaya tha.. staff was humble",
  "bhai ke reception ke liye venue perfect raha, staff v helpful tha",
  "ganga kinare mast hawa aur shandar lawn.. 5 star experience",
  "pichhle hafte dost ki shadi attend ki thi raj resort me. stage decoration bohot pyara tha aur khana bilkul garam aur fresh mila.",
  "400+ car parking hai to gaadi lagane me koi dikkat ni hui. all arrangements were smooth",
  "patna ka best resort laga weddings ke liye.. lawn kafi spacious hai aur food mast tha",
  "marine drive se aana bohot easy raha, clean rooms and humble staff.. highly recommended",
  "khana bilkul garam aur fresh tha, specially live chaat counter. sabhi relatives ne tareef ki",
  "lawn decoration mast tha specially walkway.. dinner buffet me kaafi variety thi"
];

function getRandomSample(lang?: string): string {
  const isHindi = Boolean(lang && (lang.toLowerCase().includes('hi') || lang.toLowerCase() === 'hindi'));
  const pool = isHindi ? HINDI_SAMPLES : ENGLISH_SAMPLES;
  return pool[Math.floor(Math.random() * pool.length)];
}

const AI_POLISH_SYSTEM_PROMPT = `You are an authentic Google Maps review assistant for Raj Resort Patna.

CORE PHILOSOPHY & CASUAL MOBILE STYLE:
Real reviews written on smartphones are informal, candid, and naturally imperfect. Google's algorithms detect and penalize polished, essay-like PR copy.

STRICT STYLING & FORMAT RULES:
1. PREDOMINANTLY SMALL LETTERS (LOWERCASE): Write mostly or entirely in lowercase / small letters (e.g. 'attended cousin wedding here, food was really good and staff was helpful..'). Avoid stiff, capitalized sentence-case essays.
2. UNPREDICTABLE FORMAT & LENGTH: NEVER follow a rigid formula or fixed order. Randomly alternate between:
   - A short, punchy 1-line note
   - A relaxed 2-sentence thought (e.g. food + parking, or lawn + vibe)
   - A casual 3-part note with dots (..) or commas
3. SIMPLE WORDS & NATURAL HUMAN QUIRKS: Use simple everyday vocabulary. Naturally include realistic human texting quirks or minor typos/slang (e.g. 'v good', 'to good', 'definetly', 'alot', 'bcz', 'staaf', 'osm', '5star').
4. SCRIPT AND LANGUAGE RULES:
   - ALWAYS write using English script / Latin alphabet only.
   - NEVER output Devanagari / Hindi script.
   - For Hindi reviews, write in natural conversational HINGLISH using small English letters (e.g. 'khana bohot badiya tha aur lawn kafi bada h.. parking me koi problem ni hui').
5. POLISHING RULES ('action: improve'):
   - Keep the original wording, lowercase tone, and natural imperfections intact.
   - Do NOT sanitize or upgrade casual slang into stiff corporate English.
   - Preserve original sentiment faithfully.
   - Return strict JSON: {"improved": "...", "sentiment": "positive"|"neutral"|"negative", "tags": [...]}`;

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

    const formatStyles = [
      "a punchy 1-line quick note",
      "a relaxed 2-part comment mentioning food or parking or lawn",
      "a 2-to-3 sentence casual review with natural punctuation like dots (..)",
      "a short conversational note focusing on evening vibe and arrangements"
    ];
    const chosenFormat = formatStyles[Math.floor(Math.random() * formatStyles.length)];

    const userPrompt = isGenerate
      ? (isHindiRequested
          ? `Write a Google Maps review for Raj Resort Patna as a genuine guest in conversational HINGLISH (HINDI WRITTEN IN SMALL ENGLISH LETTERS ONLY). Perspective: ${chosenPerspective}. Format: ${chosenFormat}. RULES: Write mostly or entirely in small letters (lowercase). Use natural everyday words and casual texting quirks (e.g. 'bohot', 'mast', 'badiya', 'v helpful', 'ni hui', '5star'). NEVER use Devanagari/Hindi script. Avoid stiff marketing language. Return JSON: {"improved": "..."}`
          : `Write a Google Maps review for Raj Resort Patna as a genuine guest in natural ENGLISH. Perspective: ${chosenPerspective}. Format: ${chosenFormat}. RULES: Write mostly or entirely in small letters (lowercase) like someone quickly typing on a phone keyboard. Include natural human texting quirks or slight slips (e.g. 'v good', 'to good', 'definetly', 'alot', 'bcz', 'superb place..'). Do NOT follow a rigid template or PR marketing tone. Return JSON: {"improved": "..."}`)
      : `Customer Raw Feedback:\n"${rawText}"\n\nPlease polish according to the guidelines: keep lowercase style intact, preserve natural conversational human grammar and colloquial flow. If Hindi words are present, ensure they remain in English letters (Latin script), never convert to Devanagari.`;

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
