"use client";

import { getLink } from "@/lib/program-data";
import type { Exercise } from "@/lib/program-data";
import { useI18n } from "@/lib/i18n";
import { SetInputs } from "@/components/SetInputs";

type ExerciseBlockProps = {
  ex: Exercise;
  exerciseIndex: number;
  week: number;
  dayKey: string;
  sectionLabel: string;
};

export function ExerciseBlock({
  ex,
  exerciseIndex,
  week,
  dayKey,
  sectionLabel,
}: ExerciseBlockProps) {
  const { t } = useI18n();
  const maxSets = parseInt(String(ex.working)) || 1;
  const link = getLink(ex.name);

  const nameEl = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {ex.name}
    </a>
  ) : (
    ex.name
  );

  const subLink = (name?: string) => {
    if (!name) return "—";
    const l = getLink(name);
    return l ? (
      <a href={l} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      name
    );
  };

  return (
    <div className="workout-section-block border border-[var(--border)] rounded-lg overflow-hidden mb-4">
      <div className="bg-[var(--bg-row-alt)] px-4 py-2 font-display font-bold text-sm uppercase tracking-wide flex flex-wrap gap-2 items-center">
        <span className="bg-[var(--accent)] text-white text-xs px-2 py-0.5 rounded">
          {t("week.title", { n: week })}
        </span>
        <span>{sectionLabel}</span>
        <span className="text-[10px] text-[var(--text-dim)] ml-auto font-normal normal-case">
          {t("table.trackNote")}
        </span>
      </div>

      <div className="exercise-cards p-3">
        <div className="exercise-card">
          <div className="ex-title">{nameEl}</div>
          <div className="chips">
            <span className="chip">
              {t("card.warmup")}: {ex.warmup}
            </span>
            <span className="chip">
              {t("card.working")}: {ex.working} × {ex.reps}
            </span>
            <span className="chip">RPE {ex.earlyRPE} / {ex.lastRPE}</span>
            <span className="chip">{ex.rest}</span>
            {ex.technique && ex.technique !== "N/A" && (
              <span className="technique-badge">{ex.technique}</span>
            )}
          </div>
          <SetInputs
            week={week}
            dayKey={dayKey}
            exerciseIndex={exerciseIndex}
            maxSets={maxSets}
            storageKey=""
            variant="card"
          />
          {(ex.sub1 || ex.sub2) && (
            <div className="mt-3 text-xs text-[var(--text-dim)]">
              <strong>{t("card.subs")}:</strong> {subLink(ex.sub1)} · {subLink(ex.sub2)}
            </div>
          )}
          {ex.notes && (
            <p className="mt-2 text-xs text-[var(--text-dim)] leading-relaxed">{ex.notes}</p>
          )}
        </div>
      </div>

      <div className="exercise-table-wrap">
        <table className="exercise-table">
          <thead>
            <tr>
              <th rowSpan={2} className="text-left">
                {t("table.exercise")}
              </th>
              <th rowSpan={2}>{t("table.technique")}</th>
              <th rowSpan={2}>{t("table.warmup")}</th>
              <th rowSpan={2}>{t("table.working")}</th>
              <th rowSpan={2}>{t("table.reps")}</th>
              <th colSpan={4}>{t("table.tracking")}</th>
              <th rowSpan={2}>{t("table.earlyRpe")}</th>
              <th rowSpan={2}>{t("table.lastRpe")}</th>
              <th rowSpan={2}>{t("table.rest")}</th>
              <th rowSpan={2}>{t("table.sub1")}</th>
              <th rowSpan={2}>{t("table.sub2")}</th>
              <th rowSpan={2}>{t("table.notes")}</th>
            </tr>
            <tr>
              {[1, 2, 3, 4].map((n) => (
                <th key={n}>{t("table.set", { n })}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">
                <div className="font-semibold">{nameEl}</div>
              </td>
              <td>
                {ex.technique && ex.technique !== "N/A" ? (
                  <span className="technique-badge">{ex.technique}</span>
                ) : (
                  "N/A"
                )}
              </td>
              <td>{ex.warmup}</td>
              <td>{ex.working}</td>
              <td className="font-semibold text-[var(--text-primary)]">{ex.reps}</td>
              <SetInputs
                week={week}
                dayKey={dayKey}
                exerciseIndex={exerciseIndex}
                maxSets={maxSets}
                storageKey=""
                variant="table"
              />
              <td className="text-[var(--accent)] font-display font-bold">{ex.earlyRPE}</td>
              <td className="text-[var(--accent)] font-display font-bold">{ex.lastRPE}</td>
              <td>{ex.rest}</td>
              <td className="text-left text-xs">{subLink(ex.sub1)}</td>
              <td className="text-left text-xs">{subLink(ex.sub2)}</td>
              <td className="text-left text-xs max-w-[200px]">{ex.notes || ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
