import { createClient } from "@/utils/supabase/server";
import { TrackerApp } from "@/components/TrackerApp";

export default async function TrackerPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <TrackerApp userId={user?.id ?? null} />;
}
