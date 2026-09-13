const sales = [
  {
    name: "Oliver Lane",
    car: "BMW X5",
    location: "Clifton",
    amount: "£120",
    date: "12 Sep 2026",
    status: "Paid",
  },
  {
    name: "Sophia Clarke",
    car: "Audi A3",
    location: "Redland",
    amount: "£85",
    date: "12 Sep 2026",
    status: "Paid",
  },
  {
    name: "Daniel Brooks",
    car: "Tesla Model 3",
    location: "Southville",
    amount: "£150",
    date: "11 Sep 2026",
    status: "Paid",
  },
  {
    name: "Olivia Bennett",
    car: "Range Rover",
    location: "Henleaze",
    amount: "£130",
    date: "11 Sep 2026",
    status: "Unpaid",
  },
  {
    name: "James Wilson",
    car: "Ford Focus",
    location: "Easton",
    amount: "£70",
    date: "10 Sep 2026",
    status: "Paid",
  },
];

export default function SalesPage() {
  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Sales</h1>

          <p className="mt-1 text-slate-500">
            Keep track of every job and how much you&apos;ve made.
          </p>
        </div>

        <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium">
          <option>1 Sep 2026 - 30 Sep 2026</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="£1,240"
          change="+12%"
        />

        <StatCard
          label="Total Bookings"
          value="28"
          change="+17%"
        />

        <StatCard
          label="Average Booking Value"
          value="£89"
          change="+8%"
        />

        <StatCard
          label="Returning Customers"
          value="62%"
          change="+6%"
        />
      </div>

      {/* Sales table */}
      <div className="mt-6 rounded-3xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2">
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
              All Jobs
            </button>

            <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100">
              Paid
            </button>

            <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100">
              Unpaid
            </button>
          </div>

          <input
            type="text"
            placeholder="Search sales..."
            className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Car</th>
                <th className="px-4 py-3 font-medium">Location</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => (
                <tr
                  key={`${sale.name}-${sale.date}`}
                  className="border-b border-slate-100 transition hover:bg-blue-50/60"
                >
                  <td className="px-4 py-4 text-slate-600">
                    {sale.date}
                  </td>

                  <td className="px-4 py-4 font-semibold">
                    {sale.name}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {sale.car}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {sale.location}
                  </td>

                  <td className="px-4 py-4 font-semibold">
                    {sale.amount}
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge status={sale.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom summary */}
      <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 p-7 text-white shadow-xl shadow-blue-200">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-blue-100">This month</p>

            <h2 className="mt-1 text-3xl font-bold">
              £1,240 earned
            </h2>

            <p className="mt-2 text-blue-100">
              You&apos;re up 12% compared to last month.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
            <p className="text-sm text-blue-100">
              Best performing service
            </p>

            <p className="mt-1 text-xl font-semibold">
              Full Detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          ↑ {change.replace("+", "")}
        </span>
      </div>

      <p className="mt-4 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        vs last month
      </p>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const paid = status === "Paid";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        paid
          ? "bg-emerald-50 text-emerald-600"
          : "bg-red-50 text-red-500"
      }`}
    >
      {status}
    </span>
  );
}