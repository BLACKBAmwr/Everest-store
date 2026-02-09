
import { GoogleGenAI } from "@google/genai";
import { STORE_NAME, VODAFONE_CASH, CONTACT_PHONE, calculateTax } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_PROMPT = `
You are the professional AI Assistant for "${STORE_NAME}", a premium Roblox Robux store in Egypt.
Your tone is helpful, respectful, and authoritative. 

Key Information:
- Prices: 100 Robux = 50 EGP.
- Taxes: < 500 Robux (+5 EGP), 500-999 Robux (+10 EGP), and +5 EGP for every additional 500 Robux.
- Payment: Vodafone Cash only at ${VODAFONE_CASH}.
- Delivery: Via Gamepass or Gift in Map.
- Contact: WhatsApp/Telegram at ${CONTACT_PHONE}.
- STRICT RULE: Do not call the numbers. Messaging only to avoid embarrassment.
- Goal: Help users calculate prices, explain delivery, and guide them to the Facebook page.

Answer always in Arabic (Egyptian dialect if natural).
`;

export const getAIResponse = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "عذراً، حدث خطأ ما. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "أنا مشغول قليلاً حالياً، برجاء التواصل مع الدعم الفني مباشرة عبر الواتساب.";
  }
};
