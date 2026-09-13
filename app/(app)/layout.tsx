import { redirect } from "next/navigation";
import Sidebar from "../../components/Sidebar";
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
    <div className="min-h-screen bg-[#eff6ff]">
      <Sidebar email={user.email!} />
      <main className="min-h-screen pt-14 md:pl-[250px] md:pt-0">
        {children}
      </main>
    </div>
  );
}
