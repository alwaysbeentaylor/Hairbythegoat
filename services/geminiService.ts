import { GoogleGenAI } from "@google/genai";
import { PRICES } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. The Style Advisor feature will run in mock mode or be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini client", error);
}

const SYSTEM_INSTRUCTION = `
Je bent een high-end Black Hair specialist en adviseur genaamd 'Lumina'.
Je toon is elegant, professioneel, warm en je hebt diepgaande kennis van haartypes 3A tot 4C.
Je helpt klanten een haarstijl te kiezen uit de volgende Prijslijst:
${JSON.stringify(PRICES)}

Regels:
1. Adviseer ALLEEN stijlen die op de prijslijst staan.
2. Stel verduidelijkende vragen als de gebruiker vaag is (bijv. "Wat is je haarlengte?" of "Zoek je een beschermende stijl?").
3. Houd antwoorden kort (onder de 60 woorden), beknopt en gericht op het maken van een boeking.
4. Als een gebruiker naar de prijs vraagt, citeer dan exact de prijs uit de lijst.
5. Sluit behulpzaam advies af met een zachte aansporing om via WhatsApp te boeken.
6. Reageer altijd in het Nederlands.
`;

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "Ik ben momenteel offline, maar ik raad je aan onze 'Specialiteiten' sectie te bekijken om de perfecte look te vinden!";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });

    return response.text || "Ik kon op dit moment geen specifieke aanbeveling genereren. Bekijk alsjeblieft ons portfolio!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Er is iets misgegaan met mijn verbinding. Probeer het later opnieuw of neem direct contact op via WhatsApp.";
  }
};