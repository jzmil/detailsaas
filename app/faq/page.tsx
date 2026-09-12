import Link from "next/link";

const faqs = [
  {
    question: "What is Recur?",
    answer:
      "Recur is a simple tool for detailers to manage customers, bookings, follow ups and sales in one place.",
  },
  {
    question: "Who is Recur for?",
    answer:
      "Recur is being built mainly for mobile detailers and other service businesses that rely on repeat customers.",
  },
  {
    question: "Can customers book through Recur?",
    answer:
      "Yes. Recur will let customers book appointments through a simple booking page linked to your business.",
  },
  {
    question: "Can Recur remind customers about bookings?",
    answer:
      "Yes. Recur is designed to help send reminders before appointments so you can reduce missed bookings.",
  },
  {
    question: "Can I keep track of my customers?",
    answer:
      "Yes. You can keep customer details such as their name, vehicle, area, postcode and booking history in one place.",
  },
  {
    question: "Can I see how much money I have made?",
    answer:
      "Yes. Recur will include simple sales and revenue tracking so you can see how your business is doing.",
  },
  {
    question: "Will Recur work on mobile?",
    answer:
      "Yes. Recur is being designed to work on desktop, tablet and mobile.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You will be able to cancel your subscription whenever you want.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            R
          </div>

          <span className="text-2xl font-bold">Recur</span>
        </Link>

        <div className="hidden items-center gap-10 text-sm text-slate-600 md:flex">
          <Link href="/#features" className="hover:text-slate-950">
            Features
          </Link>

          <Link href="/pricing" className="hover:text-slate-950">
            Pricing
          </Link>

          <Link href="/faq" className="font-medium text-slate-950">
            FAQs
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-slate-950"
          >
            Log in
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            FAQs
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Questions about Recur?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Here are some quick answers to the questions detailers might have
            before getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <span>{faq.question}</span>

                <span className="text-xl text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-slate-950 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">Still have a question?</h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Recur is still being built, so feedback and questions are always
            useful.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
          >
            Back to Recur
          </Link>
        </div>
      </section>
    </main>
  );
}