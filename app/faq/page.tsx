"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  { question: "What is Repeatr?", answer: "Repeatr is a simple tool for detailers to manage customers, bookings, follow ups and sales in one place." },
  { question: "Who is Repeatr for?", answer: "Repeatr is being built mainly for mobile detailers and other service businesses that rely on repeat customers." },
  { question: "Can customers book through Repeatr?", answer: "Yes. Repeatr will let customers book appointments through a simple booking page linked to your business." },
  { question: "Can Repeatr remind customers about bookings?", answer: "Yes. Repeatr is designed to help send reminders before appointments so you can reduce missed bookings." },
  { question: "Can I keep track of my customers?", answer: "Yes. You can keep customer details such as their name, vehicle, area, postcode and booking history in one place." },
  { question: "Can I see how much money I have made?", answer: "Yes. Repeatr will include simple sales and revenue tracking so you can see how your business is doing." },
  { question: "Will Repeatr work on mobile?", answer: "Yes. Repeatr is being designed to work on desktop, tablet and mobile." },
  { question: "Can I cancel my subscription?", answer: "Yes. You will be able to cancel your subscription whenever you want." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8 animate-fade-in">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">R</div>
          <span className="text-2xl font-bold">Repeatr</span>
        </Link>
        <div className="hidden items-center gap-10 text-sm text-slate-600 md:flex">
          <Link href="/#features" className="transition hover:text-slate-950">Features</Link>
          <Link href="/pricing" className="transition hover:text-slate-950">Pricing</Link>
          <Link href="/faq" className="font-medium text-slate-950">FAQs</Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Log in</Link>
          <Link href="/login" className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">Get Started</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">FAQs</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Questions about Repeatr?</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Here are some quick answers to the questions detailers might have before getting started.</p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:border-slate-300">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition hover:bg-slate-50"
                >
                  <span>{faq.question}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition duration-300 ${open ? "rotate-45 bg-blue-100 text-blue-600" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-slate-950 px-8 py-12 text-center text-white animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <h2 className="text-3xl font-bold">Still have a question?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Repeatr is still being built, so feedback and questions are always useful.</p>
          <Link href="/" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100">Back to Repeatr</Link>
        </div>
      </section>
    </main>
  );
}
