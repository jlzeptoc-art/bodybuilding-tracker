"use client";

import { LocaleProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WeightUnitProvider } from "@/components/WeightUnitProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <WeightUnitProvider>{children}</WeightUnitProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
