"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  getStoredWeightUnit,
  setStoredWeightUnit,
  type WeightUnit,
} from "@/lib/weight-unit";

type WeightUnitContextValue = {
  unit: WeightUnit;
  setUnit: (unit: WeightUnit) => void;
  toggleUnit: () => void;
};

const WeightUnitContext = createContext<WeightUnitContextValue | null>(null);

export function WeightUnitProvider({ children }: { children: React.ReactNode }) {
  const [unit, setUnitState] = useState<WeightUnit>(() => getStoredWeightUnit());

  const setUnit = useCallback((next: WeightUnit) => {
    setStoredWeightUnit(next);
    setUnitState(next);
  }, []);

  const toggleUnit = useCallback(() => {
    setUnitState((prev) => {
      const next: WeightUnit = prev === "kg" ? "lb" : "kg";
      setStoredWeightUnit(next);
      return next;
    });
  }, []);

  return (
    <WeightUnitContext.Provider value={{ unit, setUnit, toggleUnit }}>
      {children}
    </WeightUnitContext.Provider>
  );
}

export function useWeightUnit() {
  const ctx = useContext(WeightUnitContext);
  if (!ctx) throw new Error("useWeightUnit must be used within WeightUnitProvider");
  return ctx;
}
