import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">R</div>
          <span className="text-2xl font-bold">Repeatr</span>
        </div>
        <div className="hidden items-center gap-10 text-sm text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-slate-950">Features</a>
          <Link href="/pricing" className="transition hover:text-slate-950">Pricing</Link>
          <Link href="/faq" className="transition hover:text-slate-950">FAQs</Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Log in</Link>
          <Link href="/login" className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-14">
        <div className="mx-auto max-w-5xl text-center animate-fade-in-up">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Built to keep your schedule full and take the busywork off your plate.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Manage your customers, bookings and follow ups in one place so you can spend less time on admin and more time detailing.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/login" className="rounded-lg bg-slate-950 px-7 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">Get Started for Free</Link>
            <a href="#features" className="rounded-lg border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50">See how it works</a>
          </div>
          <p className="mt-5 text-sm text-slate-400">No credit card required · Cancel anytime</p>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-2xl shadow-slate-200/70 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">R</div>
                <span className="font-bold">Repeatr</span>
              </div>
              <div className="hidden w-80 rounded-lg bg-slate-100 px-4 py-2 text-left text-sm text-slate-400 md:block">Search customers, bookings...</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">J</div>
            </div>
            <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[210px_1fr]">
              <aside className="hidden border-r border-slate-200 p-4 md:block">
                <div className="space-y-2 text-sm">
                  <SidebarItem text="Dashboard" active />
                  <SidebarItem text="Calendar" />
                  <SidebarItem text="Customers" />
                  <SidebarItem text="Messages" />
                  <SidebarItem text="Sales" />
                  <SidebarItem text="AI Assistant" />
                  <SidebarItem text="Settings" />
                </div>
              </aside>
              <section className="p-6">
                <h2 className="text-2xl font-bold">Good morning, Jack</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard title="Total Revenue" value="£8,420" change="↑ 12%" />
                  <StatCard title="Bookings" value="28" change="↑ 17%" />
                  <StatCard title="Active Customers" value="412" change="↑ 6%" />
                  <StatCard title="Avg. Booking Value" value="£89" change="↑ 8%" />
                </div>
                <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
                  <div className="rounded-2xl bg-slate-950 p-7 text-white">
                    <div className="mb-16 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">✦</div>
                    <h3 className="max-w-xs text-3xl font-bold">37 customers are overdue for a detail.</h3>
                    <p className="mt-3 text-sm text-slate-300">That&apos;s an estimated £4,820 in potential revenue.</p>
                    <button className="mt-7 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">View customers →</button>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Recent bookings</h3>
                      <button className="text-sm text-slate-500">View all →</button>
                    </div>
                    <div className="mt-4 divide-y divide-slate-100">
                      <BookingRow name="Liam Carter" car="BMW X5" time="Today, 09:00" status="Confirmed" />
                      <BookingRow name="Sophie Miller" car="Audi A3" time="Today, 11:00" status="Confirmed" />
                      <BookingRow name="Daniel Brooks" car="Tesla Model 3" time="Today, 14:00" status="Confirmed" />
                      <BookingRow name="Olivia Bennett" car="Range Rover" time="Tomorrow, 08:00" status="Pending" />
                      <BookingRow name="James Wilson" car="Ford Focus" time="Tomorrow, 11:00" status="Confirmed" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything you need to stay on top of your bookings</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard icon="calendar" title="Calendar & Bookings" desc="See your week at a glance. Add, edit and manage bookings in seconds." />
            <FeatureCard icon="customers" title="Customer List" desc="Keep every customer, vehicle and booking history in one organised place." />
            <FeatureCard icon="messages" title="Follow Ups & Reminders" desc="Never lose a repeat customer. Send reminders and follow ups with a tap." />
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-5xl rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 p-10 text-center text-white shadow-xl shadow-blue-200">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to fill your schedule?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Join Repeatr and spend less time on admin and more time detailing.</p>
          <Link href="/login" className="mt-7 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50">Get Started for Free</Link>
        </div>
      </section>
    </main>
  );
}

function SidebarItem({ text, active = false }: { text: string; active?: boolean }) {
  return <div className={`rounded-lg px-4 py-3 ${active ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-500 hover:bg-slate-50"}`}>{text}</div>;
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm font-medium text-emerald-600">{change}</p>
      </div>
      <p className="mt-1 text-xs text-slate-400">vs last month</p>
    </div>
  );
}

function BookingRow({ name, car, time, status }: { name: string; car: string; time: string; status: string }) {
  const pending = status === "Pending";
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="font-medium text-slate-900">{name}</p>
        <p className="text-sm text-slate-400">{car}</p>
      </div>
      <div className="ml-auto hidden text-sm text-slate-500 sm:block">{time}</div>
      <span className={`rounded-full px-3 py-1 text-xs font-medium ${pending ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"}`}>{status}</span>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const icons: Record<string, React.ReactNode> = {
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></>,
    customers: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.5a5 5 0 0 1 5 5.5" /></>,
    messages: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">{icons[icon]}</svg>
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}
