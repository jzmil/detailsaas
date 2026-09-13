import Link from "next/link";
import { redirect } from "next/navigation";
import LogoutButton from "../../components/LogoutButton";
import { createClient } from "../../utils/supabase/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#eef6ff]">
      <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
        <aside className="hidden min-h-screen flex-col bg-gradient-to-b from-blue-600 via-blue-600 to-blue-700 p-5 text-white md:flex">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold">
              ↻
            </div>

            <span className="text-2xl font-bold">Repeatr</span>
          </Link>

          <nav className="mt-10 space-y-2 text-sm">
            <NavLink href="/dashboard" label="Dashboard" />
            <NavLink href="/calendar" label="Calendar" />
            <NavLink href="/customers" label="Customers" />
            <NavLink href="/messages" label="Messages" />
            <NavLink href="/sales" label="Sales" />
            <NavLink href="/assistant" label="Assistant" />
            <NavLink href="/settings" label="Settings" />
          </nav>

          <div className="mt-auto space-y-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <h3 className="font-semibold">Upgrade to Pro</h3>
              <p className="mt-2 text-sm text-blue-100">
                Unlock more features and grow faster.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold">
                JA
              </div>

              <div className="min-w-0">
                <p className="font-medium">Jamil</p>
                <p className="truncate text-xs text-blue-100">
                  {user.email}
                </p>
              </div>
            </div>

            <LogoutButton />
          </div>
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl px-4 py-3 text-blue-50 transition hover:bg-white/10"
    >
      {label}
    </Link>
  );
}