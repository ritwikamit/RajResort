import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a helpful, polite, and natural front-desk reception concierge at Raj Resort Patna (located at Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010).

CRITICAL CONVERSATION RULES:
1. GREETING RULE (STRICT):
• DO NOT start every message with "Namaste" or "Hello".
• ONLY say "Namaste" or greet if the user explicitly greeted first (e.g. said "Hi", "Hello", or "Namaste").
• In normal ongoing conversation or when answering questions (e.g. "what is the capacity?", "can we visit?", "how much is the lawn?"), NEVER say "Namaste". Jump straight into the helpful, human-like answer.

2. EXCLUSIVELY RAJ RESORT PATNA TOPICS:
• Only answer questions about Raj Resort Patna: wedding lawns, AC banquet halls, catering, guest capacity, venue tours, directions, phone/WhatsApp contact, parking, generator backup, and booking dates.
• If asked about unrelated subjects (coding, politics, general trivia, weather, other hotels), politely decline and guide back:
"I am here specifically to assist your family with wedding and event arrangements at Raj Resort Patna. What would you like to know about our venue?"

3. FORMATTING RULE:
• Whenever you list points, amenities, features, or details, ALWAYS format them with bullet dots (•). Never use asterisks or numbers for lists.

4. OFFICIAL DETAILS:
• Phone & Call: +91 7360800001
• WhatsApp: +91 7360800001
• Official Email: Rajresortpatna@gmail.com
• Address: Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010 (close to Ganga Marine Drive and Patliputra Junction)
• Spaces:
  • The Starlit Celebration Lawn: 400 to 1,200+ guests capacity, open sky, high Varmala stage, 150-ft illuminated floral pergola walkway
  • The Shahi Darbar AC Banquet Hall: 150 to 500 guests capacity, air-conditioned royal hall
• Facilities: 24/7 heavy-duty generator backup, gated valet parking, bridal suite, live catering setups.
• Visiting hours: 10:00 AM to 8:00 PM daily.`;

function generateFallbackResponse(query: string, isGreetingQuery: boolean): string {
  const lower = query.toLowerCase();

  // Check if completely unrelated
  const isRelated = 
    lower.includes('resort') ||
    lower.includes('lawn') ||
    lower.includes('wedding') ||
    lower.includes('marriage') ||
    lower.includes('capacity') ||
    lower.includes('guest') ||
    lower.includes('date') ||
    lower.includes('book') ||
    lower.includes('price') ||
    lower.includes('rate') ||
    lower.includes('cost') ||
    lower.includes('location') ||
    lower.includes('address') ||
    lower.includes('kurji') ||
    lower.includes('patliputra') ||
    lower.includes('patna') ||
    lower.includes('parking') ||
    lower.includes('hall') ||
    lower.includes('banquet') ||
    lower.includes('power') ||
    lower.includes('light') ||
    lower.includes('generator') ||
    lower.includes('tour') ||
    lower.includes('visit') ||
    lower.includes('contact') ||
    lower.includes('phone') ||
    lower.includes('whatsapp') ||
    lower.includes('email') ||
    lower.includes('hello') ||
    lower.includes('hi') ||
    lower.includes('namaste');

  if (!isRelated) {
    return "I am here specifically to assist your family with wedding and event arrangements at Raj Resort Patna. What would you like to know about our venue?";
  }

  if (isGreetingQuery && (lower === 'hi' || lower === 'hello' || lower === 'namaste' || lower === 'hey')) {
    return `Welcome to Raj Resort Patna. How can we assist your family today with your wedding or celebration plans?

• The Starlit Celebration Lawn (up to 1,200+ guests)
• The Shahi Darbar AC Banquet Hall (150 to 500 guests)
• Checking auspicious wedding date availability
• Front Desk: +91 7360800001 (Phone & WhatsApp)`;
  }

  if (lower.includes('capacity') || lower.includes('guest') || lower.includes('size')) {
    return `Raj Resort offers expansive celebration spaces designed comfortably for both grand weddings and intimate ceremonies:

• The Starlit Celebration Lawn: Welcomes 400 to 1,200+ guests under the open sky with a 150-ft floral pergola entrance.
• The Shahi Darbar AC Banquet Hall: Comfortably seats 150 to 500 guests with full climate control and crystal chandeliers.
• Dedicated dining area and live kitchen setups for seamless catering.

Would you like to check date availability for your family? You can message our front desk directly at +91 7360800001.`;
  }

  if (lower.includes('date') || lower.includes('book') || lower.includes('price') || lower.includes('rate') || lower.includes('cost')) {
    return `Auspicious wedding and lagan dates fill up several months in advance across the season:

• Connect directly on WhatsApp at +91 7360800001.
• Call our front desk anytime at +91 7360800001.
• Email your enquiry to Rajresortpatna@gmail.com.

Please share your expected wedding date and approximate guest count, and we will immediately check availability and provide customized package details.`;
  }

  if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('reach')) {
    return `Raj Resort is conveniently situated in Patliputra, Patna:

• Address: Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010.
• Easy access via the Ganga Marine Drive from Digha.
• Close to Patliputra Junction and Patna Airport for arriving guests.
• Gated valet parking inside the premises for up to 100+ vehicles.`;
  }

  if (lower.includes('power') || lower.includes('generator') || lower.includes('light') || lower.includes('facility') || lower.includes('amenities')) {
    return `We ensure your wedding celebrations run smoothly without interruption:

• 100% 24/7 heavy-duty generator power backup for stage, AC, lighting, and sound.
• Illuminated 150-ft floral pergola walkway for a memorable Baraat welcome.
• Dedicated bridal suite with green rooms for the family.
• Gated on-site parking with valet assistance.`;
  }

  if (lower.includes('visit') || lower.includes('see') || lower.includes('tour')) {
    return `We would be delighted to welcome you and your family for a personal walkthrough of the lawns and banquet hall:

• Visiting hours: 10:00 AM to 8:00 PM daily.
• Location: Near Gate No. 62, Kurji Mor, Patliputra, Patna.
• Call +91 7360800001 or message on WhatsApp to let us know when you plan to visit so our manager can receive you personally.`;
  }

  return `Raj Resort Patna is ready to assist your family:

• For instant date checks and pricing, call or WhatsApp our reception at +91 7360800001.
• Email us anytime at Rajresortpatna@gmail.com.
• You can ask about lawn capacity, banquet halls, parking, or scheduling a visit to Kurji Mor!`;
}

interface MessageHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

async function requestOpenRouter(apiKey: string, messagesPayload: { role: string; content: string }[], model: string) {
  return await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey.replace(/['"]/g, '').trim()}`,
      'HTTP-Referer': 'https://rajresortpatna.com',
      'X-Title': 'Raj Resort Patna Concierge',
    },
    body: JSON.stringify({
      model: model,
      messages: messagesPayload,
      temperature: 0.3,
      max_tokens: 450,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query: string = body.message || (body.messages && body.messages[body.messages.length - 1]?.content) || '';
    const incomingHistory: MessageHistoryItem[] = Array.isArray(body.history) ? body.history : [];

    if (!query.trim()) {
      return NextResponse.json({ reply: 'Please provide a question about Raj Resort Patna.' }, { status: 400 });
    }

    const trimmedQuery = query.trim();
    const lowerQuery = trimmedQuery.toLowerCase();
    const isExplicitGreeting = 
      lowerQuery.startsWith('hi') ||
      lowerQuery.startsWith('hello') ||
      lowerQuery.startsWith('namaste') ||
      lowerQuery.startsWith('hey');

    // Support all casing variants of the OpenRouter API key
    const rawApiKey = 
      process.env.Openrouter_API || 
      process.env.OPENROUTER_API || 
      process.env.OPENROUTER_API_KEY || 
      process.env.openrouter_api ||
      process.env.NEXT_PUBLIC_OPENROUTER_API;

    if (!rawApiKey) {
      console.warn('Chatbot: OpenRouter API key not configured in environment variables');
      return NextResponse.json({ reply: generateFallbackResponse(trimmedQuery, isExplicitGreeting) });
    }

    const cleanApiKey = rawApiKey.replace(/['"]/g, '').trim();

    // Prepare message payload with conversation history
    const messagesPayload: { role: string; content: string }[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

    // Include recent history (last 4 items)
    for (const h of incomingHistory.slice(-4)) {
      if (h && h.content && (h.role === 'user' || h.role === 'assistant')) {
        messagesPayload.push({ role: h.role, content: h.content });
      }
    }

    messagesPayload.push({ role: 'user', content: trimmedQuery });

    // Models to attempt: primary Google Gemini 2.0 Flash, followed by free/auto fallbacks
    const candidateModels = [
      'google/gemini-2.0-flash-001',
      'google/gemini-2.0-flash-lite-preview-02-05:free',
      'meta-llama/llama-3.3-70b-instruct:free',
      'openrouter/auto',
    ];

    let replyText = '';

    for (const model of candidateModels) {
      try {
        const response = await requestOpenRouter(cleanApiKey, messagesPayload, model);
        if (response.ok) {
          const data = await response.json();
          const content = data?.choices?.[0]?.message?.content?.trim();
          if (content) {
            replyText = content;
            break;
          }
        } else {
          const errorDetail = await response.text();
          console.warn(`Chatbot: Model ${model} returned HTTP ${response.status}:`, errorDetail);
        }
      } catch (callErr) {
        console.warn(`Chatbot: Request failed for ${model}:`, callErr);
      }
    }

    if (!replyText) {
      return NextResponse.json({ reply: generateFallbackResponse(trimmedQuery, isExplicitGreeting) });
    }

    let cleanedReply = replyText;

    // If the user did NOT greet explicitly, remove repetitive greetings like "Namaste!", "Hello!", etc.
    if (!isExplicitGreeting) {
      cleanedReply = cleanedReply.replace(/^(Namaste!?|Hello!?|Greetings!?|Hi!?)\s*/i, '');
    }

    // Ensure all list bullet points are formatted as dots (•)
    const formattedReply = cleanedReply.replace(/^[\*\-]\s+/gm, '• ');
    return NextResponse.json({ reply: formattedReply });
  } catch (err) {
    console.error('Chatbot POST handler error:', err);
    return NextResponse.json({ 
      reply: 'We are here to assist with all your wedding queries at Raj Resort Patna. Please contact our reception desk at +91 7360800001 or email Rajresortpatna@gmail.com for immediate help.' 
    });
  }
}
