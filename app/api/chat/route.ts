import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the warm, polite, and caring digital reception concierge at Raj Resort Patna (located at Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010).

CRITICAL CONSTRAINTS:
1. ONLY ANSWER QUERIES DIRECTLY RELATED TO RAJ RESORT PATNA (e.g. weddings, wedding celebration lawns, AC banquet halls, catering, guest capacity, venue tours, directions, phone/WhatsApp contact, parking, generator backup, and date booking).
2. If a user asks ANYTHING unrelated to Raj Resort Patna (such as general knowledge, coding, weather, politics, homework, or other businesses), politely and warmly decline and guide them back:
"Namaste! I am here exclusively to help your family with weddings, celebrations, and venue bookings at Raj Resort Patna. How can I assist you with your wedding or event plans today?"
3. Tone: Respectful, warm, human-like Indian hospitality (caring, welcoming, polite tone). Keep answers concise, helpful, and pleasant.
4. FORMATTING RULE: Whenever you list points, amenities, features, or steps, ALWAYS format them using bullet dots (•). Never use numbers or asterisks for lists. Example:
• Grand open-air celebration lawn for 400 to 1,200+ guests
• Air-conditioned Shahi Darbar banquet hall for 150 to 500 guests
• 24/7 heavy-duty generator power backup
• Gated valet parking and 150-ft floral pergola entrance
5. KEY INFORMATION TO SHARE:
• Phone & Call: +91 7360800001
• WhatsApp: +91 7360800001
• Official Email: Rajresortpatna@gmail.com
• Address: Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010 (close to Ganga Marine Drive and Patliputra Junction)
• Spaces:
  • The Starlit Celebration Lawn (capacity 400 to 1,200+ guests, open sky, high Varmala stage, 150-ft illuminated floral pergola walkway for Baraat)
  • The Shahi Darbar AC Banquet Hall (capacity 150 to 500 guests, royal air-conditioned comfort)
• Remind families that auspicious wedding (lagan) dates fill up quickly, and encourage them to connect via WhatsApp or phone (+91 7360800001) or visit in person between 10:00 AM and 8:00 PM.`;

function generateFallbackResponse(query: string): string {
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
    return "Namaste! I am here exclusively to help your family with weddings, celebrations, and venue bookings at Raj Resort Patna. How can I assist you with your wedding or event plans today?";
  }

  if (lower.includes('capacity') || lower.includes('guest') || lower.includes('size')) {
    return `Namaste! Raj Resort offers expansive spaces designed comfortably for both grand weddings and intimate ceremonies:

• The Starlit Celebration Lawn: Welcomes 400 to 1,200+ guests under the open sky with a 150-ft floral pergola entrance.
• The Shahi Darbar AC Banquet Hall: Comfortably seats 150 to 500 guests with full climate control and crystal chandeliers.
• Dedicated dining area and live kitchen setups for seamless catering.

Would you like to check date availability for your family? You can also message our front desk directly at +91 7360800001.`;
  }

  if (lower.includes('date') || lower.includes('book') || lower.includes('price') || lower.includes('rate') || lower.includes('cost')) {
    return `Namaste! Auspicious wedding and lagan dates fill up several months in advance:

• You can connect directly on WhatsApp at +91 7360800001.
• Call our front desk anytime at +91 7360800001.
• Email your enquiry to Rajresortpatna@gmail.com.

Please share your expected wedding date and approximate guest count, and we will immediately check availability and customize a package for your family.`;
  }

  if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('reach')) {
    return `Namaste! Raj Resort is conveniently situated in Patliputra, Patna:

• Address: Near Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010.
• Easy access via the Ganga Marine Drive from Digha.
• Close to Patliputra Junction and Patna Airport for arriving guests.
• Gated valet parking inside the premises for up to 100+ vehicles.`;
  }

  if (lower.includes('power') || lower.includes('generator') || lower.includes('light') || lower.includes('facility') || lower.includes('amenities')) {
    return `Namaste! We ensure your wedding celebrations run smoothly without interruption:

• 100% 24/7 heavy-duty generator power backup for stage, AC, lighting, and sound.
• Illuminated 150-ft floral pergola walkway for a memorable Baraat welcome.
• Dedicated bridal suite with green rooms for the family.
• Gated on-site parking with valet assistance.`;
  }

  if (lower.includes('visit') || lower.includes('see') || lower.includes('tour')) {
    return `Namaste! We would be delighted to welcome you and your family for a personal walkthrough of the lawns and banquet hall:

• Visiting hours: 10:00 AM to 8:00 PM daily.
• Location: Near Gate No. 62, Kurji Mor, Patliputra, Patna.
• You can call +91 7360800001 or message on WhatsApp to let us know when you plan to visit so our manager can receive you personally.`;
  }

  return `Namaste! Welcome to Raj Resort Patna. We are honored to assist your family:

• For instant date checks and pricing, call or WhatsApp our reception at +91 7360800001.
• Email us anytime at Rajresortpatna@gmail.com.
• You can ask me about lawn capacity, banquet halls, parking, or scheduling a visit to Kurji Mor!`;
}

async function requestOpenRouter(apiKey: string, query: string, model: string) {
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
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query },
      ],
      temperature: 0.4,
      max_tokens: 450,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query: string = body.message || (body.messages && body.messages[body.messages.length - 1]?.content) || '';

    if (!query.trim()) {
      return NextResponse.json({ reply: 'Please provide a question about Raj Resort Patna.' }, { status: 400 });
    }

    // Support all casing variants of the OpenRouter API key
    const rawApiKey = 
      process.env.Openrouter_API || 
      process.env.OPENROUTER_API || 
      process.env.OPENROUTER_API_KEY || 
      process.env.openrouter_api ||
      process.env.NEXT_PUBLIC_OPENROUTER_API;

    if (!rawApiKey) {
      console.warn('Chatbot: OpenRouter API key not configured in environment variables');
      return NextResponse.json({ reply: generateFallbackResponse(query) });
    }

    const cleanApiKey = rawApiKey.replace(/['"]/g, '').trim();

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
        const response = await requestOpenRouter(cleanApiKey, query, model);
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
      return NextResponse.json({ reply: generateFallbackResponse(query) });
    }

    // Ensure all list bullet points are formatted as dots (•)
    const formattedReply = replyText.replace(/^[\*\-]\s+/gm, '• ');
    return NextResponse.json({ reply: formattedReply });
  } catch (err) {
    console.error('Chatbot POST handler error:', err);
    return NextResponse.json({ 
      reply: 'Namaste! We are here to assist with all your wedding queries at Raj Resort Patna. Please contact our reception desk at +91 7360800001 or email Rajresortpatna@gmail.com for immediate help.' 
    });
  }
}
