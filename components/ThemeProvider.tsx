"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  applyTheme,
  getStoredTheme,
  resolveTheme,
  setStoredTheme,
  type ThemeMode,
} from "@/lib/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (m: ThemeMode) => void;
  cycleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => getStoredTheme());
  const [resolved, setResolved] = useState<"light" | "dark">(() =>
    resolveTheme(getStoredTheme())
  );

  useEffect(() => {
    applyTheme(mode);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredTheme() === "system") {
        applyTheme("system");
        setResolved(resolveTheme("system"));
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => {
    setStoredTheme(m);
    setModeState(m);
    applyTheme(m);
    setResolved(resolveTheme(m));
  }, []);

  const cycleMode = useCallback(() => {
    const order: ThemeMode[] = ["system", "light", "dark"];
    const next = order[(order.indexOf(mode) + 1) % order.length];
    setMode(next);
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider value={{ mode, resolved, setMode, cycleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
