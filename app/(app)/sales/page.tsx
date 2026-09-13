"use client";

import { useState } from "react";

const initialSales = [
  { name: "Oliver Lane", car: "BMW X5", location: "Clifton", amount: "£120", date: "12 Sep 2026", status: "Paid", service: "Full Detail" },
  { name: "Sophia Clarke", car: "Audi A3", location: "Redland", amount: "£85", date: "12 Sep 2026", status: "Paid", service: "Interior Clean" },
  { name: "Daniel Brooks", car: "Tesla Model 3", location: "Southville", amount: "£150", date: "11 Sep 2026", status: "Paid", service: "Full Detail" },
  { name: "Olivia Bennett", car: "Range Rover", location: "Henleaze", amount: "£130", date: "11 Sep 2026", status: "Unpaid", service: "Full Detail" },
  { name: "James Wilson", car: "Ford Focus", location: "Easton", amount: "£70", date: "10 Sep 2026", status: "Paid", service: "Exterior Wash" },
];

export default function SalesPage() {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedSale, setSelectedSale] = useState<(typeof initialSales)[number] | null>(null);

  const filtered = initialSales.filter((s) => {
    const matchesTab = tab === "All" || s.status === tab;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.car.toLowerCase().includes(search.toLowerCase()) || s.location.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold">Sales</h1>
          <p className="mt-1 text-slate-500">Keep track of every job and how much you&apos;ve made.</p>
        </div>
        <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium transition focus:border-blue-500">
          <option>1 Sep 2026 - 30 Sep 2026</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Revenue" value="£1,240" change="+12%" delay="60ms" />
        <StatCard label="Total Bookings" value="28" change="+17%" delay="120ms" />
        <StatCard label="Average Booking Value" value="£89" change="+8%" delay="180ms" />
        <StatCard label="Returning Customers" value="62%" change="+6%" delay="240ms" />
      </div>

      {/* Table */}
      <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2">
            {["All", "Paid", "Unpaid"].map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`rounded-xl px-4 py-2 text-sm font-medium transition ${tab === t ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{t === "All" ? "All Jobs" : t}</button>
            ))}
          </div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search sales..." className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
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
              {filtered.map((sale, i) => (
                <tr key={`${sale.name}-${sale.date}-${i}`} onClick={() => setSelectedSale(sale)} className="cursor-pointer border-b border-slate-100 transition duration-200 hover:bg-blue-50/60">
                  <td className="px-4 py-4 text-slate-600">{sale.date}</td>
                  <td className="px-4 py-4 font-semibold">{sale.name}</td>
                  <td className="px-4 py-4 text-slate-600">{sale.car}</td>
                  <td className="px-4 py-4 text-slate-600">{sale.location}</td>
                  <td className="px-4 py-4 font-semibold">{sale.amount}</td>
                  <td className="px-4 py-4"><StatusBadge status={sale.status} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No sales found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom summary */}
      <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 p-7 text-white shadow-xl shadow-blue-200 animate-fade-in-up" style={{ animationDelay: "360ms" }}>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-blue-100">This month</p>
            <h2 className="mt-1 text-3xl font-bold">£1,240 earned</h2>
            <p className="mt-2 text-blue-100">You&apos;re up 12% compared to last month.</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
            <p className="text-sm text-blue-100">Best performing service</p>
            <p className="mt-1 text-xl font-semibold">Full Detail</p>
          </div>
        </div>
      </div>

      {/* Sale details modal */}
      {selectedSale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setSelectedSale(null)} />
          <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">{selectedSale.name.split(" ").map((w) => w[0]).join("")}</div>
                <div>
                  <h2 className="text-xl font-bold">{selectedSale.name}</h2>
                  <p className="text-sm text-slate-500">{selectedSale.service}</p>
                </div>
              </div>
              <button onClick={() => setSelectedSale(null)} className="flex h-9 w-9 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <DetailItem label="Vehicle" value={selectedSale.car} />
              <DetailItem label="Location" value={selectedSale.location} />
              <DetailItem label="Date" value={selectedSale.date} />
              <DetailItem label="Amount" value={selectedSale.amount} />
              <DetailItem label="Service" value={selectedSale.service} />
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Status</p>
                <p className="mt-2"><StatusBadge status={selectedSale.status} /></p>
              </div>
            </div>
            <button onClick={() => setSelectedSale(null)} className="mt-5 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

function StatCard({ label, value, change, delay }: { label: string; value: string; change: string; delay: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: delay }}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">↑ {change.replace("+", "")}</span>
      </div>
      <p className="mt-4 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">vs last month</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const paid = status === "Paid";
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${paid ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>{status}</span>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
