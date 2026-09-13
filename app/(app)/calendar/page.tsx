"use client";

import { useState } from "react";

const initialBookings = [
  { id: 1, name: "Liam Carter", vehicle: "BMW X5", day: "Mon", start: "09:00", end: "11:00", color: "blue", service: "Full Detail", price: "£120", location: "Clifton" },
  { id: 2, name: "Sophie Miller", vehicle: "Audi A3", day: "Tue", start: "10:00", end: "11:30", color: "green", service: "Interior Clean", price: "£85", location: "Redland" },
  { id: 3, name: "Daniel Brooks", vehicle: "Tesla Model 3", day: "Tue", start: "14:00", end: "16:00", color: "purple", service: "Full Detail", price: "£150", location: "Southville" },
  { id: 4, name: "Olivia Bennett", vehicle: "Range Rover", day: "Thu", start: "08:00", end: "11:00", color: "orange", service: "Full Detail", price: "£130", location: "Henleaze" },
  { id: 5, name: "Mohamed Ali", vehicle: "VW Golf", day: "Thu", start: "12:00", end: "13:00", color: "blue", service: "Maintenance Wash", price: "£45", location: "Easton" },
  { id: 6, name: "James Wilson", vehicle: "Ford Focus", day: "Fri", start: "10:00", end: "12:30", color: "green", service: "Exterior Wash", price: "£60", location: "Easton" },
  { id: 7, name: "Aisha Khan", vehicle: "Mercedes C-Class", day: "Sun", start: "10:00", end: "12:00", color: "purple", service: "Full Detail", price: "£140", location: "Clifton" },
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const services = ["Full Detail", "Interior Clean", "Exterior Wash", "Maintenance Wash"];
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const fullDayNames: Record<string, string> = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };

function getWeekDays(offset: number) {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diff + offset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { name: dayNames[i], date: d.getDate(), iso: d.toISOString().split("T")[0] };
  });
}

function getMonthGrid(offset: number) {
  const today = new Date();
  const firstOfMonth = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const startDay = firstOfMonth.getDay();
  const startOffset = startDay === 0 ? -6 : 1 - startDay;
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() + startOffset);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    return { date: d.getDate(), iso: d.toISOString().split("T")[0], inMonth: d.getMonth() === firstOfMonth.getMonth() };
  });
}

const colorClasses: Record<string, string> = {
  blue: "border-blue-300 bg-blue-100 text-blue-950 hover:bg-blue-200",
  green: "border-emerald-300 bg-emerald-100 text-emerald-950 hover:bg-emerald-200",
  purple: "border-violet-300 bg-violet-100 text-violet-950 hover:bg-violet-200",
  orange: "border-orange-300 bg-orange-100 text-orange-950 hover:bg-orange-200",
};

const emptyForm = { customer: "", vehicle: "", date: "", start: "", end: "", service: "", price: "", location: "" };

export default function CalendarPage() {
  const [view, setView] = useState("Week");
  const [bookings, setBookings] = useState(initialBookings);
  const [weekOffset, setWeekOffset] = useState(0);
  const [monthOffset, setMonthOffset] = useState(0);
  const [showNewBooking, setShowNewBooking] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<(typeof initialBookings)[number] | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const days = getWeekDays(weekOffset);
  const monthLabel = new Date(days[0].iso).toLocaleString("en-GB", { month: "long", year: "numeric" });
  const monthGrid = getMonthGrid(monthOffset);
  const monthGridLabel = new Date(new Date().getFullYear(), new Date().getMonth() + monthOffset, 1).toLocaleString("en-GB", { month: "long", year: "numeric" });

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function openNewBooking() {
    setEditingId(null);
    setForm({ ...emptyForm, date: days[0].iso });
    setShowNewBooking(true);
  }

  function openEdit(b: (typeof initialBookings)[number]) {
    setEditingId(b.id);
    const dayIndex = days.findIndex((d) => d.name === b.day);
    setForm({ customer: b.name, vehicle: b.vehicle, date: days[dayIndex]?.iso || "", start: b.start, end: b.end, service: b.service, price: b.price, location: b.location });
    setSelectedBooking(null);
    setShowNewBooking(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dayName = new Date(form.date).toLocaleString("en-US", { weekday: "short" });
    const colors = ["blue", "green", "purple", "orange"];
    if (editingId) {
      setBookings(bookings.map((b) => (b.id === editingId ? { ...b, name: form.customer, vehicle: form.vehicle, day: dayName, start: form.start, end: form.end, service: form.service, price: form.price, location: form.location } : b)));
    } else {
      setBookings([...bookings, { id: Date.now(), name: form.customer, vehicle: form.vehicle, day: dayName, start: form.start, end: form.end, color: colors[bookings.length % 4], service: form.service, price: form.price, location: form.location }]);
    }
    setShowNewBooking(false);
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleDelete(id: number) {
    setBookings(bookings.filter((b) => b.id !== id));
    setSelectedBooking(null);
  }

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="mt-1 text-slate-500">View and manage your bookings.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => { setWeekOffset(0); setMonthOffset(0); }} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-slate-50">Today</button>
          <button onClick={() => { setWeekOffset((w) => w - 1); setMonthOffset((m) => m - 1); }} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">←</button>
          <button onClick={() => { setWeekOffset((w) => w + 1); setMonthOffset((m) => m + 1); }} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">→</button>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium">{view === "Month" ? monthGridLabel : monthLabel}</div>
          <button onClick={openNewBooking} className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">+ New Booking</button>
        </div>
      </div>

      {/* View switcher */}
      <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "60ms" }}>
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          {["Day", "Week", "Month"].map((item) => (
            <button key={item} onClick={() => setView(item)} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${view === item ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{item}</button>
          ))}
        </div>
      </div>

      {/* Week / Day view */}
      {(view === "Week" || view === "Day") && (
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-x-auto">
            <div className="grid min-w-[1100px]" style={{ gridTemplateColumns: view === "Day" ? "80px 1fr" : "80px repeat(7, minmax(130px, 1fr))", gridTemplateRows: "70px repeat(20, 36px)" }}>
              <div className="border-b border-r border-slate-200 bg-slate-50" />
              {(view === "Day" ? [days[0]] : days).map((day) => (
                <div key={day.name} className="flex flex-col items-center justify-center border-b border-r border-slate-200 bg-white last:border-r-0">
                  <p className="text-sm font-medium text-slate-500">{day.name}</p>
                  <p className="mt-1 text-lg font-bold">{day.date}</p>
                </div>
              ))}
              {timeSlots.map((time, slotIndex) => (
                <TimeRow key={time} time={time} slotIndex={slotIndex} dayCount={view === "Day" ? 1 : 7} days={view === "Day" ? [days[0]] : days} />
              ))}
              {bookings.filter((b) => view === "Day" ? b.day === days[0].name : true).map((booking) => (
                <BookingCard key={booking.id} booking={booking} days={view === "Day" ? [days[0]] : days} onClick={() => setSelectedBooking(booking)} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Month view */}
      {view === "Month" && (
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
            {dayNames.map((d) => (
              <div key={d} className="px-3 py-3 text-center text-sm font-medium text-slate-500">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {monthGrid.map((cell, i) => {
              const dayBookings = bookings.filter((b) => {
                const bookingDate = new Date(days[0].iso);
                const cellDate = new Date(cell.iso);
                return b.day === dayNames[(cellDate.getDay() + 6) % 7] && Math.abs(cellDate.getTime() - bookingDate.getTime()) < 7 * 24 * 60 * 60 * 1000;
              });
              return (
                <div key={i} className={`min-h-24 border-b border-r border-slate-100 p-2 ${cell.inMonth ? "bg-white" : "bg-slate-50/50"}`}>
                  <p className={`text-sm ${cell.inMonth ? "font-medium text-slate-700" : "text-slate-300"}`}>{cell.date}</p>
                  <div className="mt-1 space-y-1">
                    {bookings.slice(0, 3).map((b) => (
                      <div key={b.id} className="flex items-center gap-1">
                        <span className={`h-1.5 w-1.5 rounded-full ${b.color === "blue" ? "bg-blue-400" : b.color === "green" ? "bg-emerald-400" : b.color === "purple" ? "bg-violet-400" : "bg-orange-400"}`} />
                        <span className="truncate text-xs text-slate-500">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* New Booking Modal */}
      {showNewBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setShowNewBooking(false)} />
          <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{editingId ? "Edit Booking" : "New Booking"}</h2>
              <button onClick={() => setShowNewBooking(false)} className="flex h-9 w-9 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Customer" value={form.customer} onChange={(v) => updateForm("customer", v)} required />
                <FormField label="Vehicle" value={form.vehicle} onChange={(v) => updateForm("vehicle", v)} required />
                <FormField label="Date" type="date" value={form.date} onChange={(v) => updateForm("date", v)} required />
                <FormField label="Service" type="select" options={services} value={form.service} onChange={(v) => updateForm("service", v)} required />
                <FormField label="Start Time" type="time" value={form.start} onChange={(v) => updateForm("start", v)} required />
                <FormField label="End Time" type="time" value={form.end} onChange={(v) => updateForm("end", v)} required />
                <FormField label="Price" value={form.price} onChange={(v) => updateForm("price", v)} placeholder="£120" required />
                <FormField label="Location" value={form.location} onChange={(v) => updateForm("location", v)} required />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowNewBooking(false)} className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">{editingId ? "Save Changes" : "Add Booking"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setSelectedBooking(null)} />
          <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 ${colorClasses[selectedBooking.color]} text-lg font-bold`}>
                  {selectedBooking.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{selectedBooking.name}</h2>
                  <p className="text-sm text-slate-500">{selectedBooking.service}</p>
                </div>
              </div>
              <button onClick={() => setSelectedBooking(null)} className="flex h-9 w-9 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">×</button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <DetailItem label="Vehicle" value={selectedBooking.vehicle} />
              <DetailItem label="Location" value={selectedBooking.location} />
              <DetailItem label="Date" value={fullDayNames[selectedBooking.day] || selectedBooking.day} />
              <DetailItem label="Time" value={`${selectedBooking.start} - ${selectedBooking.end}`} />
              <DetailItem label="Price" value={selectedBooking.price} />
            </div>
            <div className="mt-5 flex gap-3">
              <button onClick={() => openEdit(selectedBooking)} className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">Edit</button>
              <button onClick={() => handleDelete(selectedBooking.id)} className="flex-1 rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100">Delete</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function TimeRow({ time, slotIndex, dayCount, days }: { time: string; slotIndex: number; dayCount: number; days: { name: string; date: number }[] }) {
  const showLabel = time.endsWith(":00");
  return (
    <>
      <div className="border-b border-r border-slate-100 pr-3 pt-1 text-right text-xs text-slate-400" style={{ gridColumn: 1, gridRow: slotIndex + 2 }}>{showLabel ? time : ""}</div>
      {days.map((day, dayIndex) => (
        <div key={`${day.name}-${time}`} className={`border-b border-r border-slate-100 ${time.endsWith(":00") ? "border-b-slate-200" : ""}`} style={{ gridColumn: dayIndex + 2, gridRow: slotIndex + 2 }} />
      ))}
    </>
  );
}

function BookingCard({ booking, days, onClick }: { booking: (typeof initialBookings)[number]; days: { name: string; date: number }[]; onClick: () => void }) {
  const dayIndex = days.findIndex((day) => day.name === booking.day);
  if (dayIndex === -1) return null;
  const startSlot = getSlot(booking.start);
  const endSlot = getSlot(booking.end);
  const duration = endSlot - startSlot;
  return (
    <button onClick={onClick} className={`z-10 m-1 overflow-hidden rounded-xl border p-2 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${colorClasses[booking.color]}`} style={{ gridColumn: dayIndex + 2, gridRow: `${startSlot + 2} / span ${duration}` }}>
      <p className="truncate text-sm font-semibold">{booking.name}</p>
      <p className="mt-0.5 truncate text-xs opacity-75">{booking.vehicle}</p>
      <p className="mt-1 text-xs font-medium opacity-80">{booking.start} - {booking.end}</p>
    </button>
  );
}

function FormField({ label, value, onChange, type = "text", options, placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; options?: string[]; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      {type === "select" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} required={required} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500">
          <option value="">Select...</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
      )}
    </div>
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

function getSlot(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return (hour - 8) * 2 + (minute === 30 ? 1 : 0);
}
