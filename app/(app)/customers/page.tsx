"use client";

import { useState } from "react";

const initialCustomers = [
  { name: "Sarah Mitchell", phone: "07700 123456", email: "sarah@email.com", vehicle: "BMW X5", postcode: "BS1 6AA", area: "Bristol", lastService: "12 Aug 2026", nextDue: "12 Nov 2026", notes: "Usually books every few months. Prefers weekday mornings." },
  { name: "Daniel Carter", phone: "07700 234567", email: "daniel@email.com", vehicle: "Tesla Model 3", postcode: "BS3 4QP", area: "Southville", lastService: "28 Jul 2026", nextDue: "28 Oct 2026", notes: "Likes the car looking spotless for client meetings." },
  { name: "Laura Bennett", phone: "07700 345678", email: "laura@email.com", vehicle: "Range Rover", postcode: "BS9 1DP", area: "Henleaze", lastService: "20 Jul 2026", nextDue: "20 Oct 2026", notes: "Always pays on time. Books full details." },
  { name: "James Wilson", phone: "07700 456789", email: "james@email.com", vehicle: "Ford Focus", postcode: "BS5 0HW", area: "Easton", lastService: "18 Jul 2026", nextDue: "18 Oct 2026", notes: "Budget conscious. Usually goes for exterior wash." },
  { name: "Emma Knight", phone: "07700 567890", email: "emma@email.com", vehicle: "Audi A3", postcode: "BS7 8QH", area: "Horfield", lastService: "15 Jul 2026", nextDue: "15 Oct 2026", notes: "New customer. Very happy with the first detail." },
];

const areas = ["All areas", "Bristol", "Southville", "Henleaze", "Easton", "Horfield"];

const emptyForm = { name: "", phone: "", email: "", vehicle: "", postcode: "", area: "", lastService: "", nextDue: "", notes: "" };

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState("All areas");
  const [selectedCustomer, setSelectedCustomer] = useState<(typeof initialCustomers)[number] | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [toast, setToast] = useState("");
  const [form, setForm] = useState(emptyForm);

  const filtered = customers.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.vehicle.toLowerCase().includes(search.toLowerCase());
    const matchesArea = areaFilter === "All areas" || c.area === areaFilter;
    return matchesSearch && matchesArea;
  });

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function exportCSV() {
    const headers = ["Name", "Phone", "Email", "Vehicle", "Postcode", "Area", "Last Service", "Next Due"];
    const rows = filtered.map((c) => [c.name, c.phone, c.email, c.vehicle, c.postcode, c.area, c.lastService, c.nextDue]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "customers.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Customers exported to CSV");
  }

  function handleAddCustomer(e: React.FormEvent) {
    e.preventDefault();
    setCustomers([...customers, { ...form }]);
    setForm(emptyForm);
    setShowAdd(false);
    showToast("Customer added");
  }

  function openMessage(c: (typeof initialCustomers)[number]) {
    setMessageText(`Hi ${c.name.split(" ")[0]}, just checking if you'd like to get your car booked in for another detail.`);
    setShowMessage(true);
  }

  function sendMessage() {
    setShowMessage(false);
    setSelectedCustomer(null);
    showToast("Message sent");
  }

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 z-[60] -translate-x-1/2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg animate-toast-in">{toast}</div>
      )}

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold">Customers</h1>
          <p className="mt-1 text-slate-500">Keep track of everyone who has booked with you.</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">+ Add Customer</button>
      </div>

      {/* Table */}
      <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "60ms" }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search customers..." className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
          <div className="flex gap-3">
            <select value={areaFilter} onChange={(e) => setAreaFilter(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition focus:border-blue-500">
              {areas.map((a) => <option key={a}>{a}</option>)}
            </select>
            <button onClick={exportCSV} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-slate-50">Export</button>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[950px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Vehicle</th>
                <th className="px-4 py-3 font-medium">Postcode</th>
                <th className="px-4 py-3 font-medium">Area</th>
                <th className="px-4 py-3 font-medium">Last Service</th>
                <th className="px-4 py-3 font-medium">Next Due</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr key={customer.email} onClick={() => setSelectedCustomer(customer)} className="cursor-pointer border-b border-slate-100 transition duration-200 hover:bg-blue-50/70">
                  <td className="px-4 py-4 font-semibold">{customer.name}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.phone}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.email}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.vehicle}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.postcode}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.area}</td>
                  <td className="px-4 py-4 text-slate-600">{customer.lastService}</td>
                  <td className="px-4 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{customer.nextDue}</span></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-slate-400">No customers found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer details modal */}
      {selectedCustomer && !showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedCustomer(null)} />
          <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-200">{selectedCustomer.name.split(" ").map((w) => w[0]).join("")}</div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCustomer.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">Repeat customer</p>
                </div>
              </div>
              <button onClick={() => setSelectedCustomer(null)} className="flex h-10 w-10 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 p-5 text-white shadow-lg shadow-blue-100">
              <p className="text-sm text-blue-100">Vehicle</p>
              <p className="mt-1 text-xl font-bold">{selectedCustomer.vehicle}</p>
              <p className="mt-3 text-sm text-blue-100">{selectedCustomer.area}, {selectedCustomer.postcode}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <CustomerInfo label="Phone" value={selectedCustomer.phone} />
              <CustomerInfo label="Email" value={selectedCustomer.email} />
              <CustomerInfo label="Last service" value={selectedCustomer.lastService} />
              <CustomerInfo label="Next due" value={selectedCustomer.nextDue} />
            </div>
            <div className="mt-5 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-950">Customer notes</p>
              <p className="mt-2 text-sm leading-6 text-blue-800">{selectedCustomer.notes}</p>
            </div>
            <button onClick={() => openMessage(selectedCustomer)} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 py-4 text-left text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <p className="font-semibold">Inquire about detailing?</p>
              <p className="mt-1 text-sm text-blue-100">Send message</p>
            </button>
            <button className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-700 transition hover:bg-slate-50">View full history</button>
          </div>
        </div>
      )}

      {/* Add Customer modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setShowAdd(false)} />
          <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Add Customer</h2>
              <button onClick={() => setShowAdd(false)} className="flex h-9 w-9 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <form onSubmit={handleAddCustomer} className="mt-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                <Field label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
                <Field label="Vehicle" value={form.vehicle} onChange={(v) => setForm({ ...form, vehicle: v })} required />
                <Field label="Postcode" value={form.postcode} onChange={(v) => setForm({ ...form, postcode: v })} required />
                <Field label="Area" value={form.area} onChange={(v) => setForm({ ...form, area: v })} required />
                <Field label="Last Service" value={form.lastService} onChange={(v) => setForm({ ...form, lastService: v })} placeholder="12 Aug 2026" />
                <Field label="Next Due" value={form.nextDue} onChange={(v) => setForm({ ...form, nextDue: v })} placeholder="12 Nov 2026" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Notes</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" placeholder="Any preferences or notes..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAdd(false)} className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">Add Customer</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Message composer modal */}
      {showMessage && selectedCustomer && (
        <div className="fixed inset-0 z-[55] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setShowMessage(false)} />
          <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Send Message</h2>
              <button onClick={() => setShowMessage(false)} className="flex h-9 w-9 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <p className="mt-2 text-sm text-slate-500">To: {selectedCustomer.name}</p>
            <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} rows={5} className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
            <div className="mt-4 flex gap-3">
              <button onClick={() => setShowMessage(false)} className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50">Cancel</button>
              <button onClick={sendMessage} className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">Send</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CustomerInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 break-words text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
    </div>
  );
}
