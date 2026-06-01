"use client";

import { LocaleProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WeightUnitProvider } from "@/components/WeightUnitProvider";
import { UiSettingsProvider } from "@/components/UiSettingsProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <UiSettingsProvider>
          <WeightUnitProvider>{children}</WeightUnitProvider>
        </UiSettingsProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
