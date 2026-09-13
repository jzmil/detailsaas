import Link from "next/link";

const bookings = [
  { name: "Oliver Lane", service: "Full Detail", time: "Today, 11:00", status: "Confirmed" },
  { name: "Sophia Clarke", service: "Interior Clean", time: "Today, 14:00", status: "Confirmed" },
  { name: "Marcus Bell", service: "Full Detail", time: "Tomorrow, 10:00", status: "Pending" },
  { name: "Lily Harris", service: "Maintenance Wash", time: "Tomorrow, 13:00", status: "Confirmed" },
  { name: "Noah Turner", service: "Exterior Wash", time: "Fri, 09:00", status: "Confirmed" },
];

const overdueCustomers = [
  { name: "Sarah Mitchell", days: 120 },
  { name: "Daniel Carter", days: 92 },
  { name: "Laura Bennett", days: 87 },
  { name: "James Wilson", days: 63 },
  { name: "Emma Knight", days: 58 },
];

const chartLabels = ["Aug 14", "Aug 21", "Aug 28", "Sep 4", "Sep 11"];

export default function DashboardPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8">
      {/* Topbar */}
      <div className="flex items-center justify-between gap-4 animate-fade-in-up">
        <div className="w-full max-w-xl rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search customers, bookings, or anything..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/90 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
          </button>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow transition hover:scale-105">
            JA
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 p-7 text-white shadow-xl shadow-blue-200 animate-fade-in-up" style={{ animationDelay: "60ms" }}>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-blue-100">Welcome back,</p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight">Jamil 👋</h1>
            <p className="mt-3 text-blue-100">Here&apos;s what&apos;s happening with your business today.</p>
          </div>
          <div className="max-w-sm rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-lg italic">&ldquo;Consistency turns bookings into growth.&rdquo;</p>
            <p className="mt-2 text-sm text-blue-100">Repeatr</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon="calendar" label="Total Bookings" value="48" change="+12%" color="blue" delay="120ms" />
        <StatCard icon="customers" label="Active Customers" value="36" change="+8%" color="violet" delay="180ms" />
        <StatCard icon="revenue" label="Total Revenue" value="£1,240" change="+18%" color="emerald" delay="240ms" />
        <StatCard icon="messages" label="Messages Sent" value="112" change="+22%" color="sky" delay="300ms" />
      </div>

      {/* Middle row */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Revenue */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "360ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Revenue Overview</h2>
              <p className="mt-1 text-sm text-slate-500">Track your earnings and growth over time.</p>
            </div>
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm transition hover:border-slate-300">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <p className="text-4xl font-bold text-slate-900">£1,240</p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">↑ 18%</span>
          </div>
          <div className="mt-6 flex gap-3">
            {/* Y-axis */}
            <div className="flex flex-col justify-between py-2 text-right text-xs text-slate-400" style={{ height: "220px" }}>
              <span>£600</span>
              <span>£450</span>
              <span>£300</span>
              <span>£150</span>
              <span>£0</span>
            </div>
            {/* Chart */}
            <div className="flex-1">
              <div className="relative" style={{ height: "220px" }}>
                <svg viewBox="0 0 600 220" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0, 55, 110, 165, 220].map((y) => (
                    <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                  ))}
                  <path d="M0 180 C80 150, 100 90, 170 130 S300 150, 340 110 S430 120, 480 70 S560 50, 600 35" fill="none" stroke="#2563eb" strokeWidth="3" />
                  <path d="M0 180 C80 150, 100 90, 170 130 S300 150, 340 110 S430 120, 480 70 S560 50, 600 35 L600 220 L0 220 Z" fill="url(#area)" />
                </svg>
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                {chartLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overdue */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "420ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Customers Overdue</h2>
              <p className="mt-1 text-sm text-slate-500">These customers haven&apos;t booked in a while.</p>
            </div>
            <Link href="/customers" className="text-sm font-medium text-blue-600 transition hover:text-blue-700">View all</Link>
          </div>
          <div className="mt-5 divide-y divide-slate-100">
            {overdueCustomers.map((customer) => (
              <div key={customer.name} className="flex items-center gap-3 py-3.5 transition duration-200 hover:translate-x-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                  {customer.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-slate-900">{customer.name}</p>
                  <p className="text-sm text-slate-500">Last booking a few months ago</p>
                </div>
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">{customer.days} days</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Recent bookings */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "480ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Recent Bookings</h2>
              <p className="mt-1 text-sm text-slate-500">Your latest appointments.</p>
            </div>
            <Link href="/calendar" className="text-sm font-medium text-blue-600 transition hover:text-blue-700">View all</Link>
          </div>
          <div className="mt-5 divide-y divide-slate-100">
            {bookings.map((booking) => (
              <div key={booking.name} className="flex items-center gap-4 py-3.5 transition duration-200 hover:translate-x-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                  {booking.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-slate-900">{booking.name}</p>
                  <p className="text-sm text-slate-500">{booking.service}</p>
                </div>
                <p className="hidden text-sm text-slate-500 sm:block">{booking.time}</p>
                <StatusBadge status={booking.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "540ms" }}>
          <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
          <p className="mt-1 text-sm text-slate-500">Get things done faster.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <QuickAction href="/calendar" label="Add Booking" icon="calendar" />
            <QuickAction href="/messages" label="Send Reminder" icon="messages" />
            <QuickAction href="/customers" label="Add Customer" icon="customers" />
            <QuickAction href="/calendar" label="View Calendar" icon="external" />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-r from-sky-100 via-blue-100 to-blue-200 p-7 sm:flex-row sm:items-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Grow your business with Repeatr</h3>
          <p className="mt-1 text-slate-600">More bookings. Happier customers. Less time chasing messages.</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
          Upgrade Now →
        </button>
      </div>
    </section>
  );
}

const iconColors: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  emerald: "bg-emerald-50 text-emerald-600",
  sky: "bg-sky-50 text-sky-600",
};

function StatIcon({ name, className }: { name: string; className?: string }) {
  const p = { className: className || "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  switch (name) {
    case "calendar": return <svg {...p}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>;
    case "customers": return <svg {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.5a5 5 0 0 1 5 5.5" /></svg>;
    case "revenue": return <svg {...p}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
    case "messages": return <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    default: return null;
  }
}

function StatCard({ icon, label, value, change, color, delay }: { icon: string; label: string; value: string; change: string; color: string; delay: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: delay }}>
      <div className="flex items-center justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconColors[color]}`}>
          <StatIcon name={icon} />
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">↑ {change.replace("+", "")}</span>
      </div>
      <p className="mt-5 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-xs text-slate-400">vs last month</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const pending = status === "Pending";
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${pending ? "bg-sky-50 text-sky-600" : "bg-emerald-50 text-emerald-600"}`}>
      {status}
    </span>
  );
}

function QuickAction({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link href={href} className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <StatIcon name={icon === "external" ? "calendar" : icon} className="h-5 w-5" />
      </span>
      <span className="mt-3 text-sm font-semibold text-slate-700">{label}</span>
    </Link>
  );
}
