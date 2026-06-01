"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/ThemeProvider";
import { useWeightUnit } from "@/components/WeightUnitProvider";
import { useUiSettings } from "@/components/UiSettingsProvider";
import { flushSave } from "@/lib/storage";

type HeaderProps = {
  saveStatus: string;
  onReset: () => void;
  isGuest?: boolean;
};

export function Header({ saveStatus, onReset, isGuest = false }: HeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const { cycleMode, mode } = useTheme();
  const { unit, toggleUnit } = useWeightUnit();
  const { scale, cycleScale } = useUiSettings();
  const router = useRouter();

  const themeIcon = mode === "light" ? "☀" : mode === "dark" ? "☾" : "◐";
  const scaleLabel = scale === "standard" ? "A" : scale === "large" ? "A+" : "A++";
  const isSaved = saveStatus === t("save.saved");

  async function logout() {
    if (isGuest) {
      router.push("/login");
      return;
    }

    await flushSave();
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
          <span className="save-label">
            {isGuest ? `${t("auth.guestMode")} · ${saveStatus}` : saveStatus}
          </span>
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
            className="icon-btn scale-toggle"
            onClick={cycleScale}
            aria-label={t("ui.scale.toggle")}
            title={t(`ui.scale.${scale}`)}
          >
            {scaleLabel}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label={t("lang.toggle")}
            title={t("lang.toggle")}
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={cycleMode}
            aria-label={t("theme.toggle")}
            title={t(`theme.${mode}`)}
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
            <span className="logout-full">{isGuest ? t("btn.login") : t("btn.logout")}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
