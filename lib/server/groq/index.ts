"use server";
import { GroqTemplate } from "@/app/types";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function main(template: GroqTemplate) {
  const chatCompletion = await getGroqChatCompletion(template);
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(template: GroqTemplate) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: template.system,
      },
      {
        role: "user",
        content: template.user,
      },
    ],
    temperature: 0.8,
    model: "llama-3.3-70b-versatile",
  });
}
