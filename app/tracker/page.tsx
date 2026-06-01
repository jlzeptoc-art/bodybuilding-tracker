import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TrackerApp } from "@/components/TrackerApp";

export default async function TrackerPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return <TrackerApp userId={user.id} />;
}
