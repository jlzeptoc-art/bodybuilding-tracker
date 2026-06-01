"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/ThemeProvider";
import { useWeightUnit } from "@/components/WeightUnitProvider";

type HeaderProps = {
  saveStatus: string;
  onReset: () => void;
};

export function Header({ saveStatus, onReset }: HeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const { cycleMode, mode } = useTheme();
  const { unit, toggleUnit } = useWeightUnit();
  const router = useRouter();

  const themeIcon = mode === "light" ? "☀" : mode === "dark" ? "☾" : "◐";
  const isSaved = saveStatus === t("save.saved");

  async function logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="site-header">
      <div className="header-brand">
        <h1 className="font-display font-black text-lg uppercase tracking-wide header-title-full">
          {t("app.title")}
        </h1>
        <h1 className="font-display font-black text-base uppercase header-title-short">
          {t("app.titleShort")}
        </h1>
        <div className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] mt-0.5 header-subtitle">
          {t("app.subtitle")}
        </div>
      </div>

      <div className="header-controls">
        <span
          className={`save-indicator ${isSaved ? "saved" : ""}`}
          title={saveStatus}
          aria-live="polite"
        >
          <span className="save-dot" aria-hidden />
          <span className="save-label">{saveStatus}</span>
        </span>

        <div className="header-icon-group">
          <button
            type="button"
            className="icon-btn unit-toggle"
            onClick={toggleUnit}
            aria-label={t("unit.toggle")}
            title={t("unit.toggle")}
          >
            {unit}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Language"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={cycleMode}
            aria-label="Theme"
            title={mode}
          >
            {themeIcon}
          </button>
          <button
            type="button"
            className="icon-btn header-reset-btn"
            onClick={onReset}
            aria-label={t("btn.reset")}
            title={t("btn.reset")}
          >
            ↺
          </button>
          <button
            type="button"
            className="btn btn-ghost header-logout-btn"
            onClick={logout}
          >
            <span className="logout-short" aria-hidden>
              ⎋
            </span>
            <span className="logout-full">{t("btn.logout")}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
