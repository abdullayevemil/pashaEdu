import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // fast + cost-effective
      messages: [
        { role: "system", content: "You are a helpful assistant. Keep answers concise, 4-5 sentences max." },
        { role: "user", content: question }
      ],
      max_tokens: 120
    });

    const answer = completion.choices[0].message?.content ?? "Sorry, I couldn't generate an answer.";
    return NextResponse.json({ answer });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
