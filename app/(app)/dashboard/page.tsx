import Link from "next/link";

const bookings = [
  {
    name: "Oliver Lane",
    service: "Full Detail",
    time: "Today, 11:00",
    status: "Confirmed",
  },
  {
    name: "Sophia Clarke",
    service: "Interior Clean",
    time: "Today, 14:00",
    status: "Confirmed",
  },
  {
    name: "Marcus Bell",
    service: "Full Detail",
    time: "Tomorrow, 10:00",
    status: "Pending",
  },
  {
    name: "Lily Harris",
    service: "Maintenance Wash",
    time: "Tomorrow, 13:00",
    status: "Confirmed",
  },
  {
    name: "Noah Turner",
    service: "Exterior Wash",
    time: "Fri, 09:00",
    status: "Confirmed",
  },
];

const overdueCustomers = [
  { name: "Sarah Mitchell", days: 120 },
  { name: "Daniel Carter", days: 92 },
  { name: "Laura Bennett", days: 87 },
  { name: "James Wilson", days: 63 },
  { name: "Emma Knight", days: 58 },
];

export default function DashboardPage() {

  return (
        <section className="p-4 md:p-6 lg:p-8">
          {/* Topbar */}
          <div className="flex items-center justify-between gap-4">
            <div className="w-full max-w-xl rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
              <input
                type="text"
                placeholder="Search customers, bookings, or anything..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5">
                🔔
              </button>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow">
                JA
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 p-7 text-white shadow-xl shadow-blue-200">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-blue-100">Welcome back,</p>
                <h1 className="mt-1 text-4xl font-bold tracking-tight">
                  Jamil 👋
                </h1>
                <p className="mt-3 text-blue-100">
                  Here&apos;s what&apos;s happening with your business today.
                </p>
              </div>

              <div className="max-w-sm rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-lg italic">
                  “Consistency turns bookings into growth.”
                </p>
                <p className="mt-2 text-sm text-blue-100">Repeatr</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon="📅"
              label="Total Bookings"
              value="48"
              change="+12%"
            />
            <StatCard
              icon="👥"
              label="Active Customers"
              value="36"
              change="+8%"
            />
            <StatCard
              icon="£"
              label="Total Revenue"
              value="£1,240"
              change="+18%"
            />
            <StatCard
              icon="💬"
              label="Messages Sent"
              value="112"
              change="+22%"
            />
          </div>

          {/* Middle row */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Revenue */}
            <div className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">Revenue Overview</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Track your earnings and growth over time.
                  </p>
                </div>

                <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <p className="text-4xl font-bold">£1,240</p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                  ↑ 18%
                </span>
              </div>

              <div className="mt-8 h-64 rounded-2xl bg-gradient-to-b from-blue-50 to-white p-4">
                <div className="relative h-full">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />

                  <svg
                    viewBox="0 0 600 220"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 180 C80 150, 100 90, 170 130 S300 150, 340 110 S430 120, 480 70 S560 50, 600 35"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                    />

                    <path
                      d="M0 180 C80 150, 100 90, 170 130 S300 150, 340 110 S430 120, 480 70 S560 50, 600 35 L600 220 L0 220 Z"
                      fill="url(#area)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Overdue */}
            <div className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">Customers Overdue</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    These customers haven&apos;t booked in a while.
                  </p>
                </div>

                <Link
                  href="/customers"
                  className="text-sm font-medium text-blue-600"
                >
                  View all
                </Link>
              </div>

              <div className="mt-5 divide-y divide-slate-100">
                {overdueCustomers.map((customer) => (
                  <div
                    key={customer.name}
                    className="flex items-center gap-3 py-4 transition hover:translate-x-1"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                      {customer.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-slate-500">
                        Last booking a few months ago
                      </p>
                    </div>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                      {customer.days} days
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Recent bookings */}
            <div className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">Recent Bookings</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your latest appointments.
                  </p>
                </div>

                <Link
                  href="/calendar"
                  className="text-sm font-medium text-blue-600"
                >
                  View all
                </Link>
              </div>

              <div className="mt-5 divide-y divide-slate-100">
                {bookings.map((booking) => (
                  <div
                    key={booking.name}
                    className="flex items-center gap-4 py-4 transition hover:translate-x-1"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold">
                      {booking.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{booking.name}</p>
                      <p className="text-sm text-slate-500">
                        {booking.service}
                      </p>
                    </div>

                    <p className="hidden text-sm text-slate-500 sm:block">
                      {booking.time}
                    </p>

                    <StatusBadge status={booking.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-xl font-bold">Quick Actions</h2>
              <p className="mt-1 text-sm text-slate-500">
                Get things done faster.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <QuickAction href="/calendar" label="Add Booking" icon="📅" />
                <QuickAction href="/messages" label="Send Reminder" icon="✈️" />
                <QuickAction href="/customers" label="Add Customer" icon="👥" />
                <QuickAction href="/calendar" label="View Calendar" icon="↗" />
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-r from-sky-200 via-blue-100 to-blue-300 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">
                Grow your business with Repeatr
              </h3>
              <p className="mt-1 text-slate-600">
                More bookings. Happier customers. Less time chasing messages.
              </p>
            </div>

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-700">
              Upgrade Now →
            </button>
          </div>
        </section>
  );
}

function SidebarLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-2xl px-4 py-3 transition ${
        active
          ? "bg-white/20 font-semibold shadow-sm"
          : "text-blue-50 hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: string;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
          {icon}
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          ↑ {change.replace("+", "")}
        </span>
      </div>

      <p className="mt-5 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">vs last month</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const pending = status === "Pending";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        pending
          ? "bg-sky-50 text-sky-600"
          : "bg-emerald-50 text-emerald-600"
      }`}
    >
      {status}
    </span>
  );
}

function QuickAction({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/70 p-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow"
    >
      <span className="text-2xl">{icon}</span>
      <span className="mt-3 text-sm font-semibold">{label}</span>
    </Link>
  );
}