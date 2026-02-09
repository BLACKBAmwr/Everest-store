
import { GoogleGenAI } from "@google/genai";
import { STORE_NAME, CONTACT_NUMBER, VODAFONE_CASH, FACEBOOK_URL } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Everest Store Assistant", the official AI helper for Everest Store on Facebook.
Store Mission: Providing the fastest and safest Robux in Egypt.

Team Information:
- Creative Leader / Boss: Abdalla Emad (also known as BAmwr). He is the creative mind behind Everest Company.
- Lead Programmer: Hamza Elhawy.
- Team Member: Iyed Chraiti from Tunisia.

Payment & Delivery:
- Payment: Vodafone Cash (${VODAFONE_CASH}).
- Contact: ${CONTACT_NUMBER} (Chat only, NO CALLS).
- Delivery: Via Gamepass (safe) or Gift.
- Facebook Page: ${FACEBOOK_URL}

Pricing & Rules:
- 100 Robux = 50 EGP.
- Taxes: 
  * Under 500 Robux: +5 EGP.
  * 500-999 Robux: +10 EGP.
  * For every additional 500 Robux, add 5 EGP.
- Delivery Time: Instant after payment, but Robux takes 5-7 days "Pending" in Roblox (Roblox rules).

Tone: Friendly, professional, Egyptian Arabic dialect (Ammiya).
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "عذراً، حدث خطأ في معالجة طلبك. يرجى المحاولة لاحقاً.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "نعتذر، المساعد الذكي يواجه بعض الصعوبات الفنية حالياً.";
  }
}
