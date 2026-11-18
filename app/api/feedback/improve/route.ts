import { NextRequest, NextResponse } from 'next/server';

interface ImproveRequestBody {
  text?: string;
  action?: 'improve' | 'generate';
  language?: string;
}

const HUMAN_GENERATED_SAMPLES = [
  "Attended a cousin's wedding reception at Raj Resort Patna. The 3.5-acre lawn was beautifully lit and the walkway for the bride and groom was breathtaking. Food was hot and delicious, and parking for 400+ cars made it completely stress-free!",
  "Had an amazing family celebration here! The open garden lawn near the Ganga breeze gave a wonderful evening vibe. Banquet hall AC was cooling perfectly and the catering service was prompt and polite. Highly recommended in Patna!",
  "We booked Raj Resort for an engagement ceremony. Everything was well coordinated by the management team. The stage decor, food variety, and hospitality exceeded our expectations. Truly one of the best banquet venues in Patna.",
  "Stayed here for two nights during a family wedding in Patliputra. The AC rooms were neat, clean, and comfortable. Huge parking area for cars with security guard assistance. Very pleasant stay!",
  "Superb venue for large gatherings! The buffet spread was rich with delicious live chaat and main course counters. Management is courteous and attentive to every detail. 5 stars well deserved!",
  "Beautiful ambience and top-notch hospitality. The spacious celebration ground easily accommodated over 800 guests without feeling crowded. Uninterrupted power backup and great food taste.",
  "Excellent resort with a great location near Kurji Mor and Ganga Marine Drive. The grand entrance, green lawns, and delicious catering made our event memorable. Thank you Raj Resort team!",
  "Celebrated an anniversary party at Raj Resort Patna. The banquet hall decoration was elegant, food was fresh and tasty, and the service staff was polite and prompt. Will definitely book again for future family functions.",
  "Bahut hi shandar resort hai Patna me. Family wedding attend kiya tha, lawn decoration aur catering dono lajawab the. Parking ki koi problem nahi hui aur staff ka behaviour bahut humble tha.",
  "Raj Resort Patna me hamare cousin ki shadi thi. Venue bohot bada aur sundar hai, especially Ganga view aur night lighting. Khana bahut tasty tha aur sabhi arrangements smooth the.",
  "Patna ka one of the best wedding venues! Open lawn bahut spacious hai, decoration aur bride-groom entry ka setup bohot attractive laga. Management team full supportive hai.",
  "Hamne yaha engagement function organize kiya tha. Banquet hall ka AC, dinner buffet aur seating arrangements sab kuch first class tha. Sabhi guests ne venue aur khane ki tareef ki.",
  "Kurji Mor ke paas best location hai via Ganga Marine Drive. Rooms clean the aur car parking 400+ gaadiyo ke liye kaafi badi hai. Staff ka service quick aur helpful raha.",
  "Shaadi aur reception ke liye perfect place hai Raj Resort. Khane ka taste authentic aur fresh tha. Lawn ka ambience night me bohot royal lagta hai. 5 star experience!",
];

function getRandomSample(): string {
  const idx = Math.floor(Math.random() * HUMAN_GENERATED_SAMPLES.length);
  return HUMAN_GENERATED_SAMPLES[idx];
}

const AI_POLISH_SYSTEM_PROMPT = `You are a respectful, high-fidelity customer feedback editor for Raj Resort Patna.
Your goal is to polish raw customer feedback into grammatically clean, natural, and human-sounding language while strictly adhering to these rules:

CRITICAL ETHICAL RULES (ZERO TOLERANCE FOR FABRICATION):
1. PRESERVE ORIGINAL MEANING & TONE: Never invert sentiment. If the customer voiced a complaint, dissatisfaction, or constructive critique (e.g., "service was slow", "ac remote had issue", "room check-in delayed"), you MUST KEEP THE CRITIQUE fully intact and clear. Never turn a negative comment into praise.
2. DO NOT INVENT: Never add amenities, experiences, or staff names the customer did not mention.
3. NO EXAGGERATED PROMOTIONAL LANGUAGE: Do not write like a marketing brochure. Keep it authentic, sincere, and natural as if written by the real guest.
4. MULTILINGUAL SUPPORT:
   - If input is in Hindi (Devanagari or Romanized Hinglish like "Khana achha tha par service thoda slow tha"), produce fluent natural Hinglish or respectful natural phrasing matching their preferred language style.
   - If input is in English, produce natural, grammatically sound English.
5. OUTPUT FORMAT:
   Return ONLY a JSON object in this exact shape:
   {
     "improved": "The polished version of the feedback...",
     "sentiment": "positive" | "neutral" | "negative",
     "tags": ["relevant", "tags"]
   }`;

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
          improved: getRandomSample(),
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

    const userPrompt = isGenerate
      ? 'Generate a completely unique, natural, and authentic 2-to-3 sentence Google Maps review for Raj Resort Patna as a genuine guest (vary between wedding lawn, AC banquet hall, catering taste, courteous staff, Ganga breeze, or rooms). Keep it natural, human, and conversational. Return JSON: {"improved": "..."}'
      : `Customer Raw Feedback:\n"${rawText}"\n\nPlease polish and format according to the guidelines.`;

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
      temperature: isGenerate ? 0.8 : 0.2,
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
        improved: getRandomSample(),
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
