"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/calendar", label: "Calendar", icon: "calendar" },
  { href: "/customers", label: "Customers", icon: "customers" },
  { href: "/messages", label: "Messages", icon: "messages" },
  { href: "/sales", label: "Sales", icon: "sales" },
  { href: "/assistant", label: "Assistant", icon: "assistant", badge: "Beta" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

function NavIcon({ name, className }: { name: string; className?: string }) {
  const p = {
    className: className || "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "dashboard":
      return (
        <svg {...p}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 2v4M16 2v4" />
        </svg>
      );
    case "customers":
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3 20a6 6 0 0 1 12 0" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M16 14.5a5 5 0 0 1 5 5.5" />
        </svg>
      );
    case "messages":
      return (
        <svg {...p}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "sales":
      return (
        <svg {...p}>
          <path d="M3 3v18h18" />
          <rect x="7" y="12" width="3" height="6" rx="0.5" />
          <rect x="12" y="8" width="3" height="10" rx="0.5" />
          <rect x="17" y="5" width="3" height="13" rx="0.5" />
        </svg>
      );
    case "assistant":
      return (
        <svg {...p}>
          <path d="M12 3l1.8 4.8L18.5 9.5l-4.7 1.7L12 16l-1.8-4.8L5.5 9.5l4.7-1.7z" />
          <path d="M18 15l.6 1.6L20 17.2l-1.4.6L18 19.4l-.6-1.6L16 17.2l1.4-.6z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1.5v3M12 19.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1.5 12h3M19.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white shadow-lg md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 transition hover:bg-white/25"
          aria-label="Open menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-sm font-bold">
            ↻
          </span>
          <span className="text-lg font-bold">Repeatr</span>
        </Link>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
          JA
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[250px] flex-col bg-gradient-to-b from-blue-600 via-blue-600 to-blue-700 p-5 text-white transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold transition hover:bg-white/25">
            ↻
          </span>
          <span className="text-2xl font-bold">Repeatr</span>
        </Link>

        {/* Close (mobile) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Close menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Nav */}
        <nav className="mt-8 space-y-1.5 text-sm">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-200 ${
                  active
                    ? "bg-white font-semibold text-blue-700 shadow-sm"
                    : "text-blue-50 hover:bg-white/10 hover:text-white"
                }`}
              >
                <NavIcon name={item.icon} className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-sky-400/30 px-2 py-0.5 text-xs font-medium text-sky-100">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto space-y-3">
          {/* Upgrade card */}
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-5">
            <h3 className="font-semibold">Upgrade to Pro</h3>
            <p className="mt-1.5 text-sm text-blue-100">
              Unlock more features and grow faster.
            </p>
            <button className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50">
              Upgrade
            </button>
          </div>

          {/* User card */}
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 font-semibold">
              JA
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">Jamil</p>
              <p className="truncate text-xs text-blue-100">{email}</p>
            </div>
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="1.8" />
                <circle cx="12" cy="12" r="1.8" />
                <circle cx="12" cy="19" r="1.8" />
              </svg>
            </button>
          </div>

          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
