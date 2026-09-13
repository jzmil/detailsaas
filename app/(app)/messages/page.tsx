"use client";

import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    vehicle: "BMW X5",
    lastMessage: "Yes that works for me!",
    time: "2m ago",
    unread: 2,
    messages: [
      { from: "business", text: "Hi Sarah, just checking if you'd like to get your car booked in for another detail.", time: "09:00" },
      { from: "customer", text: "Hi! Yes I've been meaning to book in.", time: "09:15" },
      { from: "business", text: "Great! I have Thursday at 13:00 or Friday at 08:00 available.", time: "09:16" },
      { from: "customer", text: "Yes that works for me!", time: "09:20" },
    ],
  },
  {
    id: 2,
    name: "Daniel Carter",
    vehicle: "Tesla Model 3",
    lastMessage: "Can you do Saturday morning?",
    time: "1h ago",
    unread: 0,
    messages: [
      { from: "business", text: "Hi Daniel, your Tesla is due for another detail soon. Want me to book you in?", time: "Yesterday" },
      { from: "customer", text: "Can you do Saturday morning?", time: "Yesterday" },
    ],
  },
  {
    id: 3,
    name: "Laura Bennett",
    vehicle: "Range Rover",
    lastMessage: "Thanks, see you then!",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "business", text: "Hi Laura, your next detail is booked for Thursday at 08:00.", time: "Mon" },
      { from: "customer", text: "Thanks, see you then!", time: "Mon" },
    ],
  },
  {
    id: 4,
    name: "James Wilson",
    vehicle: "Ford Focus",
    lastMessage: "How much for an exterior wash?",
    time: "2d ago",
    unread: 0,
    messages: [
      { from: "customer", text: "How much for an exterior wash?", time: "Fri" },
      { from: "business", text: "It's £60 for a full exterior wash and dry.", time: "Fri" },
    ],
  },
  {
    id: 5,
    name: "Emma Knight",
    vehicle: "Audi A3",
    lastMessage: "The car looks amazing, thank you!",
    time: "3d ago",
    unread: 0,
    messages: [
      { from: "business", text: "Hi Emma, your detail is all done. The car is ready for pickup.", time: "Thu" },
      { from: "customer", text: "The car looks amazing, thank you!", time: "Thu" },
    ],
  },
];

export default function MessagesPage() {
  const [selected, setSelected] = useState(conversations[0]);
  const [input, setInput] = useState("");
  const [threads, setThreads] = useState(conversations);

  function sendMessage() {
    if (!input.trim()) return;
    setThreads((prev) =>
      prev.map((c) =>
        c.id === selected.id
          ? { ...c, messages: [...c.messages, { from: "business", text: input, time: "Now" }], lastMessage: input, unread: 0 }
          : c
      )
    );
    setInput("");
  }

  const currentThread = threads.find((c) => c.id === selected.id) || selected;

  return (
    <section className="flex h-[calc(100vh-56px)] flex-col p-4 text-slate-950 md:h-screen md:p-6 lg:p-8">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="mt-1 text-slate-500">Chat with your customers and keep on top of follow ups.</p>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm animate-fade-in-up" style={{ animationDelay: "60ms" }}>
        {/* Conversation list */}
        <div className={`${selected ? "hidden md:flex" : "flex"} w-full shrink-0 flex-col border-r border-slate-100 md:w-80 lg:w-96`}>
          <div className="border-b border-slate-100 px-4 py-3">
            <input type="text" placeholder="Search conversations..." className="w-full rounded-xl bg-slate-100 px-4 py-2.5 text-sm outline-none transition focus:bg-white focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {threads.map((c) => (
              <button key={c.id} onClick={() => setSelected(c)} className={`flex w-full items-center gap-3 border-b border-slate-50 px-4 py-4 text-left transition duration-200 hover:bg-slate-50 ${selected.id === c.id ? "bg-blue-50" : ""}`}>
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">{c.name.split(" ").map((w) => w[0]).join("")}</div>
                  {c.unread > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">{c.unread}</span>}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate font-semibold">{c.name}</p>
                    <span className="shrink-0 text-xs text-slate-400">{c.time}</span>
                  </div>
                  <p className="truncate text-sm text-slate-500">{c.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        {selected && (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
              <button onClick={() => setSelected(threads[0])} className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 md:hidden">←</button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">{currentThread.name.split(" ").map((w) => w[0]).join("")}</div>
              <div className="min-w-0">
                <p className="font-semibold">{currentThread.name}</p>
                <p className="text-xs text-slate-500">{currentThread.vehicle}</p>
              </div>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {currentThread.messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "business" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm leading-6 ${msg.from === "business" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"}`}>
                    {msg.text}
                    <p className={`mt-1 text-[10px] ${msg.from === "business" ? "text-blue-200" : "text-slate-400"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 p-4">
              <div className="flex gap-3">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Type your message..." className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
                <button onClick={sendMessage} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-50" disabled={!input.trim()}>Send</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
