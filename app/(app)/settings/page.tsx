"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [appearance, setAppearance] = useState("Light");
  const [toast, setToast] = useState("");

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  return (
    <section className="p-4 text-slate-950 md:p-6 lg:p-8">
      {toast && (
        <div className="fixed top-6 left-1/2 z-[60] -translate-x-1/2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg animate-toast-in">{toast}</div>
      )}

      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-slate-500">Manage your account and business preferences.</p>
      </div>

      <div className="mt-6 max-w-3xl space-y-6">
        {/* Appearance */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "60ms" }}>
          <h2 className="text-lg font-bold">Appearance</h2>
          <p className="mt-1 text-sm text-slate-500">Choose how Repeatr looks on this device.</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Light", "Dark", "System"].map((mode) => (
              <button key={mode} onClick={() => { setAppearance(mode); showToast(`Appearance set to ${mode}`); }} className={`rounded-2xl border-2 px-4 py-4 text-sm font-semibold transition duration-200 ${appearance === mode ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}>
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Account */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <h2 className="text-lg font-bold">Account</h2>
          <p className="mt-1 text-sm text-slate-500">Your personal account details.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
              <input type="text" defaultValue="Jamil" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" defaultValue="jamil@repeatr.co" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
            </div>
          </div>
          <button onClick={() => showToast("Change password email sent")} className="mt-4 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">Change password</button>
        </div>

        {/* Business */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "180ms" }}>
          <h2 className="text-lg font-bold">Business</h2>
          <p className="mt-1 text-sm text-slate-500">Your business information.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Business name</label>
              <input type="text" defaultValue="Repeatr Detailing" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
              <input type="tel" defaultValue="07700 900123" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Area</label>
              <input type="text" defaultValue="Bristol" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
            </div>
          </div>
          <button onClick={() => showToast("Business settings saved")} className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">Save changes</button>
        </div>

        {/* Data */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          <h2 className="text-lg font-bold">Data</h2>
          <p className="mt-1 text-sm text-slate-500">Download a copy of your data.</p>
          <button onClick={() => showToast("Data export started")} className="mt-4 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">Export data</button>
        </div>

        {/* Danger Zone */}
        <div className="rounded-3xl border border-red-200 bg-red-50/50 p-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h2 className="text-lg font-bold text-red-700">Danger Zone</h2>
          <p className="mt-1 text-sm text-red-600">This action cannot be undone.</p>
          <button onClick={() => showToast("Please contact support to delete your account")} className="mt-4 rounded-xl border border-red-300 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100">Delete account</button>
        </div>
      </div>
    </section>
  );
}
