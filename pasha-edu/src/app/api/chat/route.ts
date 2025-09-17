import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // store in .env.local
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an assistant for an educational website." },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const answer = response.choices[0].message?.content ?? "Sorry, I don't know.";
    return NextResponse.json({ answer });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ answer: "Error occurred." });
  }
}
