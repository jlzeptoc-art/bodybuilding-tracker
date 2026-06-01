"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/ThemeProvider";

type HeaderProps = {
  saveStatus: string;
  onReset: () => void;
};

export function Header({ saveStatus, onReset }: HeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const { cycleMode, mode } = useTheme();
  const router = useRouter();

  const themeIcon =
    mode === "light" ? "☀" : mode === "dark" ? "☾" : "◐";

  async function logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="site-header">
      <div>
        <h1 className="font-display font-black text-lg uppercase tracking-wide header-title-full">
          {t("app.title")}
        </h1>
        <h1 className="font-display font-black text-lg uppercase header-title-short">
          {t("app.titleShort")}
        </h1>
        <div className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] mt-0.5 header-title-full">
          {t("app.subtitle")}
        </div>
      </div>
      <div className="header-controls">
        <span
          className={`text-[10px] uppercase font-display font-semibold ${saveStatus === t("save.saved") ? "save-status saved" : ""}`}
        >
          {saveStatus}
        </span>
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
        <button type="button" className="btn btn-ghost hidden sm:inline-flex" onClick={onReset}>
          {t("btn.reset")}
        </button>
        <button type="button" className="btn btn-ghost" onClick={logout}>
          {t("btn.logout")}
        </button>
      </div>
    </header>
  );
}
