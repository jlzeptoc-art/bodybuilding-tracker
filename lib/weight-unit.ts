export type WeightUnit = "kg" | "lb";

const STORAGE_KEY = "bts_weight_unit";

export function getStoredWeightUnit(): WeightUnit {
  if (typeof window === "undefined") return "kg";
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "lb" ? "lb" : "kg";
}

export function setStoredWeightUnit(unit: WeightUnit) {
  localStorage.setItem(STORAGE_KEY, unit);
}
