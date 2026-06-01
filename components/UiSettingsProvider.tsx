"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type UiScale = "standard" | "large" | "xlarge";

const STORAGE_KEY = "bts_ui_scale";
const DEFAULT_SCALE: UiScale = "large";
const SCALE_ORDER: UiScale[] = ["standard", "large", "xlarge"];

type UiSettingsContextValue = {
  scale: UiScale;
  setScale: (scale: UiScale) => void;
  cycleScale: () => void;
};

const UiSettingsContext = createContext<UiSettingsContextValue | null>(null);

function getStoredScale(): UiScale {
  if (typeof window === "undefined") return DEFAULT_SCALE;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "standard" || stored === "large" || stored === "xlarge"
    ? stored
    : DEFAULT_SCALE;
}

function applyScale(scale: UiScale) {
  document.documentElement.setAttribute("data-ui-scale", scale);
}

export function UiSettingsProvider({ children }: { children: React.ReactNode }) {
  const [scale, setScaleState] = useState<UiScale>(DEFAULT_SCALE);

  useEffect(() => {
    const stored = getStoredScale();
    setScaleState(stored);
    applyScale(stored);
  }, []);

  const setScale = useCallback((next: UiScale) => {
    localStorage.setItem(STORAGE_KEY, next);
    setScaleState(next);
    applyScale(next);
  }, []);

  const cycleScale = useCallback(() => {
    const next = SCALE_ORDER[(SCALE_ORDER.indexOf(scale) + 1) % SCALE_ORDER.length];
    setScale(next);
  }, [scale, setScale]);

  return (
    <UiSettingsContext.Provider value={{ scale, setScale, cycleScale }}>
      {children}
    </UiSettingsContext.Provider>
  );
}

export function useUiSettings() {
  const ctx = useContext(UiSettingsContext);
  if (!ctx) throw new Error("useUiSettings must be used within UiSettingsProvider");
  return ctx;
}
