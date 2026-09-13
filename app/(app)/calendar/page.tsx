"use client";

import { useState } from "react";

const days = [
  { name: "Mon", date: "14" },
  { name: "Tue", date: "15" },
  { name: "Wed", date: "16" },
  { name: "Thu", date: "17" },
  { name: "Fri", date: "18" },
  { name: "Sat", date: "19" },
  { name: "Sun", date: "20" },
];

const bookings = [
  {
    id: 1,
    name: "Liam Carter",
    vehicle: "BMW X5",
    day: "Mon",
    start: "09:00",
    end: "11:00",
    color: "blue",
  },
  {
    id: 2,
    name: "Sophie Miller",
    vehicle: "Audi A3",
    day: "Tue",
    start: "10:00",
    end: "11:30",
    color: "green",
  },
  {
    id: 3,
    name: "Daniel Brooks",
    vehicle: "Tesla Model 3",
    day: "Tue",
    start: "14:00",
    end: "16:00",
    color: "purple",
  },
  {
    id: 4,
    name: "Olivia Bennett",
    vehicle: "Range Rover",
    day: "Thu",
    start: "08:00",
    end: "11:00",
    color: "orange",
  },
  {
    id: 5,
    name: "Mohamed Ali",
    vehicle: "VW Golf",
    day: "Thu",
    start: "12:00",
    end: "13:00",
    color: "blue",
  },
  {
    id: 6,
    name: "James Wilson",
    vehicle: "Ford Focus",
    day: "Fri",
    start: "10:00",
    end: "12:30",
    color: "green",
  },
  {
    id: 7,
    name: "Aisha Khan",
    vehicle: "Mercedes C-Class",
    day: "Sun",
    start: "10:00",
    end: "12:00",
    color: "purple",
  },
];

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

export default function CalendarPage() {
  const [view, setView] = useState("Week");

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>

          <p className="mt-1 text-slate-500">
            View and manage your bookings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-slate-50">
            Today
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            ←
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            →
          </button>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium">
            September 2026
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
            + New Booking
          </button>
        </div>
      </div>

      {/* View switcher */}
      <div className="mt-6">
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          {["Day", "Week", "Month"].map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                view === item
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="mt-4 overflow-hidden rounded-3xl border border-white bg-white shadow-sm">
        <div className="overflow-x-auto">
          <div
            className="grid min-w-[1100px]"
            style={{
              gridTemplateColumns:
                "80px repeat(7, minmax(130px, 1fr))",
              gridTemplateRows:
                "70px repeat(20, 36px)",
            }}
          >
            {/* Top left blank */}
            <div className="border-b border-r border-slate-200 bg-slate-50" />

            {/* Day headers */}
            {days.map((day) => (
              <div
                key={day.name}
                className="flex flex-col items-center justify-center border-b border-r border-slate-200 bg-white last:border-r-0"
              >
                <p className="text-sm font-medium text-slate-500">
                  {day.name}
                </p>

                <p className="mt-1 text-lg font-bold">
                  {day.date}
                </p>
              </div>
            ))}

            {/* Time column + empty grid cells */}
            {timeSlots.map((time, slotIndex) => (
              <TimeRow
                key={time}
                time={time}
                slotIndex={slotIndex}
              />
            ))}

            {/* Booking blocks */}
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeRow({
  time,
  slotIndex,
}: {
  time: string;
  slotIndex: number;
}) {
  const showLabel = time.endsWith(":00");

  return (
    <>
      {/* Time */}
      <div
        className="border-b border-r border-slate-100 pr-3 pt-1 text-right text-xs text-slate-400"
        style={{
          gridColumn: 1,
          gridRow: slotIndex + 2,
        }}
      >
        {showLabel ? time : ""}
      </div>

      {/* Seven day cells */}
      {days.map((day, dayIndex) => (
        <div
          key={`${day.name}-${time}`}
          className={`border-b border-r border-slate-100 ${
            time.endsWith(":00")
              ? "border-b-slate-200"
              : ""
          }`}
          style={{
            gridColumn: dayIndex + 2,
            gridRow: slotIndex + 2,
          }}
        />
      ))}
    </>
  );
}

function BookingCard({
  booking,
}: {
  booking: (typeof bookings)[number];
}) {
  const dayIndex = days.findIndex(
    (day) => day.name === booking.day
  );

  const startSlot = getSlot(booking.start);
  const endSlot = getSlot(booking.end);

  const duration = endSlot - startSlot;

  const colors = {
    blue:
      "border-blue-300 bg-blue-100 text-blue-950 hover:bg-blue-200",
    green:
      "border-emerald-300 bg-emerald-100 text-emerald-950 hover:bg-emerald-200",
    purple:
      "border-violet-300 bg-violet-100 text-violet-950 hover:bg-violet-200",
    orange:
      "border-orange-300 bg-orange-100 text-orange-950 hover:bg-orange-200",
  };

  return (
    <button
      className={`z-10 m-1 overflow-hidden rounded-xl border p-2 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        colors[booking.color as keyof typeof colors]
      }`}
      style={{
        gridColumn: dayIndex + 2,
        gridRow: `${startSlot + 2} / span ${duration}`,
      }}
    >
      <p className="truncate text-sm font-semibold">
        {booking.name}
      </p>

      <p className="mt-0.5 truncate text-xs opacity-75">
        {booking.vehicle}
      </p>

      <p className="mt-1 text-xs font-medium opacity-80">
        {booking.start} - {booking.end}
      </p>
    </button>
  );
}

function getSlot(time: string) {
  const [hour, minute] = time
    .split(":")
    .map(Number);

  return (hour - 8) * 2 + (minute === 30 ? 1 : 0);
}