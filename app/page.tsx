import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            R
          </div>

          <span className="text-2xl font-bold">Recur</span>
        </div>

        <div className="hidden items-center gap-10 text-sm text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>

          <Link href="/pricing" className="hover:text-slate-950">
            Pricing
          </Link>

          <Link href="/faq" className="hover:text-slate-950">
            FAQs
          </Link>

        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-slate-700">
            Log in
          </button>

          <button className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-14">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Built to keep your schedule full and take the busywork off your
            plate.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Manage your customers, bookings and follow ups in one place so you
            can spend less time on admin and more time detailing.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-slate-800">
              Get Started for Free
            </button>

            <button className="rounded-lg border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:bg-slate-50">
              See how it works
            </button>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            No credit card required · Cancel anytime
          </p>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-2xl shadow-slate-200/70">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                  R
                </div>

                <span className="font-bold">Recur</span>
              </div>

              <div className="hidden w-80 rounded-lg bg-slate-100 px-4 py-2 text-left text-sm text-slate-400 md:block">
                Search customers, bookings...
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                J
              </div>
            </div>

            <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[210px_1fr]">
              {/* Sidebar */}
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

              {/* Dashboard */}
              <section className="p-6">
                <h2 className="text-2xl font-bold">Good morning, Jack</h2>

                {/* Stats */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard
                    title="Total Revenue"
                    value="£8,420"
                    change="↑ 12%"
                  />

                  <StatCard
                    title="Bookings"
                    value="28"
                    change="↑ 17%"
                  />

                  <StatCard
                    title="Active Customers"
                    value="412"
                    change="↑ 6%"
                  />

                  <StatCard
                    title="Avg. Booking Value"
                    value="£89"
                    change="↑ 8%"
                  />
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
                  {/* Overdue card */}
                  <div className="rounded-2xl bg-slate-950 p-7 text-white">
                    <div className="mb-16 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                      ✦
                    </div>

                    <h3 className="max-w-xs text-3xl font-bold">
                      37 customers are overdue for a detail.
                    </h3>

                    <p className="mt-3 text-sm text-slate-300">
                      That&apos;s an estimated £4,820 in potential revenue.
                    </p>

                    <button className="mt-7 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                      View customers →
                    </button>
                  </div>

                  {/* Recent bookings */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Recent bookings</h3>

                      <button className="text-sm text-slate-500">
                        View all →
                      </button>
                    </div>

                    <div className="mt-4 divide-y divide-slate-100">
                      <BookingRow
                        name="Liam Carter"
                        car="BMW X5"
                        time="Today, 09:00"
                        status="Confirmed"
                      />

                      <BookingRow
                        name="Sophie Miller"
                        car="Audi A3"
                        time="Today, 11:00"
                        status="Confirmed"
                      />

                      <BookingRow
                        name="Daniel Brooks"
                        car="Tesla Model 3"
                        time="Today, 14:00"
                        status="Confirmed"
                      />

                      <BookingRow
                        name="Olivia Bennett"
                        car="Range Rover"
                        time="Tomorrow, 08:00"
                        status="Pending"
                      />

                      <BookingRow
                        name="James Wilson"
                        car="Ford Focus"
                        time="Tomorrow, 11:00"
                        status="Confirmed"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SidebarItem({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-lg px-4 py-3 ${active
          ? "bg-slate-100 font-semibold text-slate-950"
          : "text-slate-500 hover:bg-slate-50"
        }`}
    >
      {text}
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
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

function BookingRow({
  name,
  car,
  time,
  status,
}: {
  name: string;
  car: string;
  time: string;
  status: string;
}) {
  const pending = status === "Pending";

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="font-medium text-slate-900">{name}</p>
        <p className="text-sm text-slate-400">{car}</p>
      </div>

      <div className="ml-auto hidden text-sm text-slate-500 sm:block">
        {time}
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${pending
            ? "bg-orange-50 text-orange-600"
            : "bg-emerald-50 text-emerald-600"
          }`}
      >
        {status}
      </span>
    </div>
  );
}