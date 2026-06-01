import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseKey, getSupabaseUrl } from "@/utils/supabase/env";

export function createClient() {
  return createBrowserClient(getSupabaseUrl(), getSupabaseKey());
}
