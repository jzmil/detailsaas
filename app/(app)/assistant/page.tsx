"use client";

import { useState } from "react";

const suggestions = [
  "Who should I contact today?",
  "Which customers haven't booked recently?",
  "How is revenue looking?",
  "Help me fill this week's schedule",
];

const fakeResponses: Record<string, string> = {
  "Who should I contact today?":
    "Based on your customer list, Sarah Mitchell, Daniel Carter and Laura Bennett are overdue for a detail. I'd recommend reaching out to them first. That's an estimated £335 in potential revenue.",
  "Which customers haven't booked recently?":
    "You have 5 customers who haven't booked in over 60 days: Sarah Mitchell (120 days), Daniel Carter (92 days), Laura Bennett (87 days), James Wilson (63 days) and Emma Knight (58 days).",
  "How is revenue looking?":
    "You've made £1,240 this month, up 18% compared to last month. Your best performing service is Full Detail at an average of £130 per booking.",
  "Help me fill this week's schedule":
    "You have 3 open slots this week: Thursday at 13:00, Friday at 08:00 and Saturday at 14:00. I'd suggest offering these to your overdue customers as a limited availability offer.",
};

interface Message {
  from: "user" | "assistant";
  text: string;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "assistant", text: "Hi Jamil! I'm your Repeatr Assistant. Ask me anything about your customers, bookings, or revenue." },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      const response = fakeResponses[text] || "I'm still learning about your business. Try one of the suggested questions, or ask me about your customers, bookings, or revenue.";
      setMessages((prev) => [...prev, { from: "assistant", text: response }]);
    }, 600);
  }

  return (
    <section className="flex h-[calc(100vh-56px)] flex-col p-4 text-slate-950 md:h-screen md:p-6 lg:p-8">
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-lg shadow-blue-200">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.8 4.8L18.5 9.5l-4.7 1.7L12 16l-1.8-4.8L5.5 9.5l4.7-1.7z" />
            </svg>
          </span>
          <div>
            <h1 className="text-2xl font-bold">Repeatr Assistant</h1>
            <p className="text-sm text-slate-500">Your smart helper for bookings, customers and revenue.</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-3xl border border-slate-100 bg-white shadow-sm animate-fade-in-up" style={{ animationDelay: "60ms" }}>
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`} style={{ animationDelay: `${i * 30}ms` }}>
              <div className={`flex max-w-[75%] gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                {msg.from === "assistant" && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.8L18.5 9.5l-4.7 1.7L12 16l-1.8-4.8L5.5 9.5l4.7-1.7z" /></svg>
                  </span>
                )}
                <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"}`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {messages.length <= 2 && (
          <div className="flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)} className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-medium text-blue-700 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-100">{s}</button>
            ))}
          </div>
        )}

        <div className="border-t border-slate-100 p-4">
          <div className="flex gap-3">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(input)} placeholder="Ask me anything about your business..." className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
            <button onClick={() => send(input)} className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-50" disabled={!input.trim()}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
