"use client";

import { useState } from "react";

const customers = [
  {
    name: "Sarah Mitchell",
    phone: "07700 123456",
    email: "sarah@email.com",
    vehicle: "BMW X5",
    postcode: "BS1 6AA",
    area: "Bristol",
    lastService: "12 Aug 2026",
    nextDue: "12 Nov 2026",
  },
  {
    name: "Daniel Carter",
    phone: "07700 234567",
    email: "daniel@email.com",
    vehicle: "Tesla Model 3",
    postcode: "BS3 4QP",
    area: "Southville",
    lastService: "28 Jul 2026",
    nextDue: "28 Oct 2026",
  },
  {
    name: "Laura Bennett",
    phone: "07700 345678",
    email: "laura@email.com",
    vehicle: "Range Rover",
    postcode: "BS9 1DP",
    area: "Henleaze",
    lastService: "20 Jul 2026",
    nextDue: "20 Oct 2026",
  },
  {
    name: "James Wilson",
    phone: "07700 456789",
    email: "james@email.com",
    vehicle: "Ford Focus",
    postcode: "BS5 0HW",
    area: "Easton",
    lastService: "18 Jul 2026",
    nextDue: "18 Oct 2026",
  },
  {
    name: "Emma Knight",
    phone: "07700 567890",
    email: "emma@email.com",
    vehicle: "Audi A3",
    postcode: "BS7 8QH",
    area: "Horfield",
    lastService: "15 Jul 2026",
    nextDue: "15 Oct 2026",
  },
];

export default function CustomersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<
    (typeof customers)[number] | null
  >(null);

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Customers</h1>

          <p className="mt-1 text-slate-500">
            Keep track of everyone who has booked with you.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
          + Add Customer
        </button>
      </div>

      {/* Customer table */}
      <div className="mt-6 rounded-3xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

          <div className="flex gap-3">
            <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
              <option>All areas</option>
              <option>Bristol</option>
              <option>Southville</option>
              <option>Henleaze</option>
              <option>Easton</option>
              <option>Horfield</option>
            </select>

            <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-slate-50">
              Export
            </button>
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
              {customers.map((customer) => (
                <tr
                  key={customer.email}
                  onClick={() => setSelectedCustomer(customer)}
                  className="cursor-pointer border-b border-slate-100 transition duration-200 hover:bg-blue-50/70"
                >
                  <td className="px-4 py-4 font-semibold">
                    {customer.name}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.phone}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.email}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.vehicle}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.postcode}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.area}
                  </td>

                  <td className="px-4 py-4 text-slate-600">
                    {customer.lastService}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {customer.nextDue}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

     {/* Customer modal */}
{selectedCustomer !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

    {/* Dimmed background */}
    <div
      className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
      onClick={() => setSelectedCustomer(null)}
    />

    {/* Modal */}
    <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 bg-white p-6 shadow-2xl">

      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-200">
            {selectedCustomer.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {selectedCustomer.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Repeat customer
            </p>
          </div>
        </div>

        <button
          onClick={() => setSelectedCustomer(null)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
        >
          ×
        </button>
      </div>

      {/* Vehicle */}
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 p-5 text-white shadow-lg shadow-blue-100">
        <p className="text-sm text-blue-100">
          Vehicle
        </p>

        <p className="mt-1 text-xl font-bold">
          {selectedCustomer.vehicle}
        </p>

        <p className="mt-3 text-sm text-blue-100">
          {selectedCustomer.area}, {selectedCustomer.postcode}
        </p>
      </div>

      {/* Customer details */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <CustomerInfo
          label="Phone"
          value={selectedCustomer.phone}
        />

        <CustomerInfo
          label="Email"
          value={selectedCustomer.email}
        />

        <CustomerInfo
          label="Last service"
          value={selectedCustomer.lastService}
        />

        <CustomerInfo
          label="Next due"
          value={selectedCustomer.nextDue}
        />
      </div>

      {/* Notes */}
      <div className="mt-5 rounded-2xl bg-blue-50 p-5">
        <p className="text-sm font-semibold text-blue-950">
          Customer notes
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-800">
          Usually books every few months. Prefers weekday mornings.
        </p>
      </div>

      {/* Actions */}
      <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 py-4 text-left text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <p className="font-semibold">
          Inquire about detailing?
        </p>

        <p className="mt-1 text-sm text-blue-100">
          Send message
        </p>
      </button>

      <button className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-700 transition hover:bg-slate-50">
        View full history
      </button>

    </div>
  </div>
)}
    </section>
  );
}

function CustomerInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-medium text-slate-800">
        {value}
      </p>
    </div>
  );
}