"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ExerciseBlock } from "@/components/ExerciseBlock";
import { useI18n } from "@/lib/i18n";
import { programNotes as notesEn, warmupContent as warmupEn } from "@/lib/i18n/notes-en";
import { programNotes as notesEs, warmupContent as warmupEs } from "@/lib/i18n/notes-es";
import { getLocalizedWeekDays, blockLabelForWeek } from "@/lib/week-utils";
import { getLink } from "@/lib/program-data";
import { loadVal } from "@/lib/storage";
import {
  clearAllData,
  flushSave,
  importLocalLegacy,
  loadFromSupabase,
  setOnSaved,
  setStorageUser,
  wasLocalMigrated,
  getLocalLegacyData,
} from "@/lib/storage";
import { notifyStorageUpdate } from "@/components/SetInputs";

type TrackerAppProps = {
  userId: string;
};

type SectionKey = "overview" | "notes" | "warmup" | `week-${number}`;

export function TrackerApp({ userId }: TrackerAppProps) {
  const { t, locale } = useI18n();
  const [section, setSection] = useState<SectionKey>("overview");
  const [saveStatus, setSaveStatus] = useState("");
  const [ready, setReady] = useState(false);
  const [dayIndexByWeek, setDayIndexByWeek] = useState<Record<number, number>>({});
  const [storageTick, setStorageTick] = useState(0);

  const notes = locale === "es" ? notesEs : notesEn;
  const warmup = locale === "es" ? warmupEs : warmupEn;

  useEffect(() => {
    setSaveStatus(t("save.auto"));
  }, [t]);

  useEffect(() => {
    const onUpdate = () => setStorageTick((n) => n + 1);
    window.addEventListener("bts-storage-update", onUpdate);
    return () => window.removeEventListener("bts-storage-update", onUpdate);
  }, []);

  useEffect(() => {
    setStorageUser(userId);
    setOnSaved(() => {
      setSaveStatus(t("save.saved"));
      setTimeout(() => setSaveStatus(t("save.auto")), 1200);
    });

    (async () => {
      try {
        await loadFromSupabase(userId);
        if (!wasLocalMigrated() && getLocalLegacyData()) {
          if (window.confirm(t("confirm.import"))) {
            await importLocalLegacy();
          } else {
            localStorage.setItem("bts_tracker_migrated", "1");
          }
        }
        setReady(true);
        notifyStorageUpdate();
      } catch (e) {
        console.error(e);
        setReady(true);
      }
    })();

    return () => {
      void flushSave();
    };
  }, [userId, t]);

  const overview = useMemo(() => {
    let totalSets = 0;
    let filledSets = 0;
    const weekData: Record<number, number> = {};

    for (let w = 1; w <= 12; w++) {
      weekData[w] = 0;
      const days = getLocalizedWeekDays(w, t);
      days.forEach((day) => {
        if (!day.isRest && day.exercises) {
          day.exercises.forEach((ex, i) => {
            const maxSets = parseInt(String(ex.working)) || 1;
            for (let s = 1; s <= maxSets; s++) {
              totalSets++;
              const key = `w${w}_${day.key}_${i}_s${s}_w`;
              if (loadVal(key)) {
                filledSets++;
                weekData[w]++;
              }
            }
          });
        }
      });
    }

    const pct = totalSets ? Math.round((filledSets / totalSets) * 100) : 0;
    return { totalSets, filledSets, pct, weekData };
  }, [t, section, ready, storageTick]);

  const handleReset = useCallback(async () => {
    if (!window.confirm(t("confirm.reset"))) return;
    await clearAllData();
    notifyStorageUpdate();
    window.location.reload();
  }, [t]);

  const getDayIndex = (week: number) => dayIndexByWeek[week] ?? 0;

  function linkText(text: string) {
    const url = getLink(text);
    if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="exercise-link">
          {text}
        </a>
      );
    }
    return text;
  }

  const setDayIndex = (week: number, index: number) => {
    setDayIndexByWeek((prev) => ({ ...prev, [week]: index }));
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--text-dim)]">
        {t("auth.loading")}
      </div>
    );
  }

  return (
    <>
      <Header saveStatus={saveStatus} onReset={handleReset} />

      <nav className="nav-bar">
        <button
          type="button"
          className={`nav-tab ${section === "overview" ? "active" : ""}`}
          onClick={() => setSection("overview")}
        >
          {t("nav.overview")}
        </button>
        <button
          type="button"
          className={`nav-tab ${section === "notes" ? "active" : ""}`}
          onClick={() => setSection("notes")}
        >
          {t("nav.notes")}
        </button>
        <button
          type="button"
          className={`nav-tab ${section === "warmup" ? "active" : ""}`}
          onClick={() => setSection("warmup")}
        >
          {t("nav.warmup")}
        </button>
        <span className="nav-tab block-header nav-block-label">│ {t("nav.foundation")}</span>
        {[1, 2, 3, 4, 5].map((w) => (
          <button
            key={w}
            type="button"
            className={`nav-tab ${section === `week-${w}` ? "active" : ""}`}
            onClick={() => setSection(`week-${w}`)}
          >
            {t("nav.week")} {w}
          </button>
        ))}
        <span className="nav-tab block-header nav-block-label">│ {t("nav.ramping")}</span>
        {[6, 7, 8, 9, 10, 11, 12].map((w) => (
          <button
            key={w}
            type="button"
            className={`nav-tab ${section === `week-${w}` ? "active" : ""}`}
            onClick={() => setSection(`week-${w}`)}
          >
            {t("nav.week")} {w}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {section === "overview" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="stat-card">
                <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-display font-bold">
                  {t("overview.setsLogged")}
                </div>
                <div className="stat-value">{overview.filledSets}</div>
                <div className="text-xs text-[var(--text-dim)]">
                  {t("overview.ofTotal", { total: overview.totalSets })}
                </div>
              </div>
              <div className="stat-card">
                <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-display font-bold">
                  {t("overview.progress")}
                </div>
                <div className="stat-value">{overview.pct}%</div>
                <div className="text-xs text-[var(--text-dim)]">{t("overview.basedOnSets")}</div>
              </div>
              <div className="stat-card">
                <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-display font-bold">
                  {t("overview.length")}
                </div>
                <div className="stat-value">12</div>
                <div className="text-xs text-[var(--text-dim)]">{t("overview.weeksSub")}</div>
              </div>
            </div>

            <div className="text-[11px] uppercase tracking-wider text-[var(--text-dim)] font-display font-bold mb-2">
              {t("overview.map")}
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 mb-5">
              {Array.from({ length: 12 }, (_, i) => {
                const w = i + 1;
                const hasData = overview.weekData[w] > 0;
                const prevHas = w > 1 && overview.weekData[w - 1] > 0;
                const isCurrent = !hasData && (w === 1 || prevHas);
                return (
                  <button
                    key={w}
                    type="button"
                    className={`week-dot ${hasData ? "has-data" : ""} ${isCurrent ? "current" : ""}`}
                    onClick={() => setSection(`week-${w}`)}
                  >
                    <div className="font-display font-bold text-xs">W{w}</div>
                  </button>
                );
              })}
            </div>

            <div className="info-block max-w-2xl">
              <div className="info-block-header">{t("overview.howToUse")}</div>
              <ul className="p-4 space-y-2 text-sm text-[var(--text-secondary)] list-disc pl-6">
                <li>{t("overview.how1")}</li>
                <li>{t("overview.how2")}</li>
                <li>{t("overview.how3")}</li>
                <li>{t("overview.how4")}</li>
                <li>{t("overview.how5")}</li>
              </ul>
            </div>
          </div>
        )}

        {section === "notes" && (
          <div className="max-w-3xl">
            <div className="info-block">
              <div className="info-block-header">{notes.header}</div>
              <ul className="p-4 space-y-3 text-sm text-[var(--text-secondary)] list-disc pl-6">
                {notes.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {section === "warmup" && (
          <div className="max-w-3xl">
            <div className="info-block">
              <div className="info-block-header">{warmup.header}</div>
              <div className="px-4 py-2 text-xs font-display font-bold uppercase text-[var(--text-dim)] bg-[var(--bg-row-alt)]">
                {warmup.generalHeader}
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {warmup.generalRows.map(([a, b], i) => (
                    <tr key={i} className="border-t border-[var(--border)]">
                      <td className="p-3 font-semibold whitespace-nowrap">{a}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{linkText(b)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-2 text-xs font-display font-bold uppercase text-[var(--text-dim)] bg-[var(--bg-row-alt)]">
                {warmup.specificHeader}
              </div>
              <p className="px-4 py-2 text-sm text-[var(--text-dim)]">{warmup.specificIntro}</p>
              {warmup.warmupSets.map((row, i) => (
                <div key={i} className="px-4 py-3 border-t border-[var(--border)] text-sm">
                  <strong>{row.label}</strong>
                  <p className="mt-1 text-[var(--text-secondary)]">{row.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {section.startsWith("week-") && (() => {
          const week = parseInt(section.replace("week-", ""), 10);
          const days = getLocalizedWeekDays(week, t);
          const dayIdx = getDayIndex(week);
          const day = days[dayIdx];
          const block = blockLabelForWeek(week, t);

          return (
            <div className="workout-view">
              <div className="workout-header mb-3">
                <div className="text-xs uppercase text-[var(--accent)] font-display font-bold">
                  {block}
                </div>
                <h2 className="workout-week-title font-display font-black uppercase">
                  {t("week.title", { n: week })}
                </h2>
                <div className="h-1 bg-[var(--border)] rounded mt-2 overflow-hidden">
                  <div
                    className="progress-bar-fill h-full"
                    style={{ width: `${(week / 12) * 100}%` }}
                  />
                </div>
              </div>

              <div className="day-tabs-scroll">
                {(() => {
                  let trainingDayNum = 0;
                  return days.map((d, i) => {
                    const dayNum = d.isRest ? null : (trainingDayNum += 1);
                    const shortLabel = d.isRest ? "💤" : `D${dayNum}`;
                    return (
                      <button
                        key={d.key}
                        type="button"
                        className={`day-tab ${i === dayIdx ? "active" : ""} ${d.isRest ? "rest-tab" : ""}`}
                        onClick={() => setDayIndex(week, i)}
                        title={d.label}
                      >
                        <span className="day-tab-short">{shortLabel}</span>
                        <span className="day-tab-full">
                          {d.isRest ? `💤 ${t("day.rest")}` : d.label.split("—")[0]?.trim() || d.label}
                        </span>
                      </button>
                    );
                  });
                })()}
              </div>

              {!day.isRest && (
                <p className="workout-day-label">{day.label}</p>
              )}

              {day.isRest ? (
                <div className="info-block text-center py-12">
                  <h3 className="font-display text-3xl font-black uppercase text-[var(--text-dim)]">
                    {t("rest.title")}
                  </h3>
                  <p className="text-[var(--text-dim)] mt-2">{t("rest.body")}</p>
                </div>
              ) : (
                <div className="exercise-list">
                  {day.exercises?.map((ex, i) => (
                    <ExerciseBlock
                      key={`${week}-${day.key}-${i}`}
                      ex={ex}
                      exerciseIndex={i}
                      week={week}
                      dayKey={day.key}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </main>
    </>
  );
}
