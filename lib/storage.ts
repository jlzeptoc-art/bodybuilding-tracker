"use client";

import { createClient } from "@/lib/supabase/client";

const LOCAL_KEY = "bts_tracker";
const LOCAL_MIGRATED_KEY = "bts_tracker_migrated";

let cache: Record<string, string> = {};
let userId: string | null = null;
let saveTimer: ReturnType<typeof setTimeout> | null = null;
let onSaved: (() => void) | null = null;
let dirty = false;

export function setStorageUser(id: string) {
  userId = id;
}

export function setOnSaved(cb: () => void) {
  onSaved = cb;
}

export function getCache(): Record<string, string> {
  return { ...cache };
}

export function setCache(data: Record<string, string>) {
  cache = { ...data };
}

export async function loadFromSupabase(uid: string): Promise<Record<string, string>> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("tracker_data")
    .select("data")
    .eq("user_id", uid)
    .maybeSingle();

  if (error) throw error;
  const raw = data?.data;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    cache = Object.fromEntries(
      Object.entries(raw as Record<string, unknown>).map(([k, v]) => [k, String(v ?? "")])
    );
  } else {
    cache = {};
  }
  return cache;
}

export function loadVal(key: string): string {
  return cache[key] || "";
}

export function saveVal(key: string, value: string) {
  cache[key] = value;
  dirty = true;
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => void persist(), 400);
}

async function persist() {
  if (!userId || !dirty) return;
  dirty = false;
  const supabase = createClient();
  const { error } = await supabase.from("tracker_data").upsert({
    user_id: userId,
    data: cache,
    updated_at: new Date().toISOString(),
  });
  if (error) {
    dirty = true;
    console.error("Save failed:", error);
    return;
  }
  onSaved?.();
}

export async function flushSave() {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  await persist();
}

export async function clearAllData() {
  cache = {};
  dirty = true;
  await flushSave();
}

export function getLocalLegacyData(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return null;
  }
}

export function wasLocalMigrated(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(LOCAL_MIGRATED_KEY) === "1";
}

export function markLocalMigrated() {
  localStorage.setItem(LOCAL_MIGRATED_KEY, "1");
  localStorage.removeItem(LOCAL_KEY);
}

export async function importLocalLegacy(): Promise<boolean> {
  const legacy = getLocalLegacyData();
  if (!legacy || Object.keys(legacy).length === 0) return false;
  cache = { ...cache, ...legacy };
  dirty = true;
  await flushSave();
  markLocalMigrated();
  return true;
}
