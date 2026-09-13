import Link from "next/link";

export default function PricingPage() {
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
          <Link href="/pricing" className="font-medium text-slate-950">Pricing</Link>
          <Link href="/faq" className="transition hover:text-slate-950">FAQs</Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Log in</Link>
          <Link href="/login" className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">Get Started</Link>
        </div>
      </nav>

      {/* Heading */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">Simple pricing</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Pick the plan that works for you.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Start with the basics and upgrade when you need more. No complicated packages or hidden extras.</p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Starter */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: "60ms" }}>
            <div>
              <h2 className="text-xl font-bold">Starter</h2>
              <p className="mt-2 text-sm text-slate-500">Everything you need to stay organised.</p>
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight">£19</span>
              <span className="pb-1 text-slate-500">/ month</span>
            </div>
            <Link href="/login" className="mt-8 flex w-full items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50">Get Started</Link>
            <div className="mt-8 border-t border-slate-100 pt-8">
              <p className="mb-5 text-sm font-semibold">What&apos;s included</p>
              <div className="space-y-4">
                <Feature text="Calendar and bookings" />
                <Feature text="Customer list" />
                <Feature text="Sales tracking" />
                <Feature text="Booking reminders" />
                <Feature text="Customer follow ups" />
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl shadow-blue-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute right-6 top-6 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Most popular</div>
            <div>
              <h2 className="text-xl font-bold">Pro</h2>
              <p className="mt-2 text-sm text-slate-500">For detailers who want Repeatr to do more of the work.</p>
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight">£39</span>
              <span className="pb-1 text-slate-500">/ month</span>
            </div>
            <Link href="/login" className="mt-8 flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">Get Started</Link>
            <div className="mt-8 border-t border-slate-100 pt-8">
              <p className="mb-5 text-sm font-semibold">Everything in Starter, plus</p>
              <div className="space-y-4">
                <Feature text="Automated customer follow ups" />
                <Feature text="AI Assistant" />
                <Feature text="More customer messages" />
                <Feature text="Customer rebooking suggestions" />
                <Feature text="More automation" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-sm text-slate-500">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </main>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-600">✓</div>
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}
