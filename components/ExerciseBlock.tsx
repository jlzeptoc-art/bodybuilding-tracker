"use client";

import { getLink } from "@/lib/program-data";
import type { Exercise } from "@/lib/program-data";
import { useI18n } from "@/lib/i18n";
import { useWeightUnit } from "@/components/WeightUnitProvider";
import { SetInputs } from "@/components/SetInputs";

type ExerciseBlockProps = {
  ex: Exercise;
  exerciseIndex: number;
  week: number;
  dayKey: string;
};

export function ExerciseBlock({
  ex,
  exerciseIndex,
  week,
  dayKey,
}: ExerciseBlockProps) {
  const { t } = useI18n();
  const { unit } = useWeightUnit();
  const maxSets = parseInt(String(ex.working)) || 1;
  const link = getLink(ex.name);

  const nameEl = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="exercise-link">
      {ex.name}
    </a>
  ) : (
    ex.name
  );

  const subLink = (name?: string) => {
    if (!name) return "—";
    const l = getLink(name);
    return l ? (
      <a href={l} target="_blank" rel="noopener noreferrer" className="exercise-link">
        {name}
      </a>
    ) : (
      name
    );
  };

  return (
    <article className="exercise-block">
      <div className="exercise-cards">
        <div className="exercise-card">
          <div className="ex-title">{nameEl}</div>
          <div className="chips">
            <span className="chip">
              {t("card.warmup")}: {ex.warmup}
            </span>
            <span className="chip">
              {t("card.working")}: {ex.working} × {ex.reps}
            </span>
            <span className="chip">
              RPE {ex.earlyRPE}/{ex.lastRPE}
            </span>
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
            <div className="ex-subs">
              <strong>{t("card.subs")}</strong>
              <div className="ex-subs-list">
                {ex.sub1 && <span>{subLink(ex.sub1)}</span>}
                {ex.sub2 && <span>{subLink(ex.sub2)}</span>}
              </div>
            </div>
          )}
          {ex.notes && <p className="ex-notes">{ex.notes}</p>}
        </div>
      </div>

      <div className="exercise-table-wrap">
        <table className="exercise-table">
          <colgroup>
            <col className="col-exercise" />
            <col className="col-technique" />
            <col className="col-warmup" />
            <col className="col-working" />
            <col className="col-reps" />
            <col className="col-set" />
            <col className="col-set" />
            <col className="col-set" />
            <col className="col-set" />
            <col className="col-rpe" />
            <col className="col-rpe" />
            <col className="col-rest" />
            <col className="col-sub" />
            <col className="col-sub" />
            <col className="col-notes" />
          </colgroup>
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
                <th key={n}>
                  {t("table.set", { n })}
                  <span className="set-col-unit">
                    {" "}
                    ({unit}×{t("input.repsLabel")})
                  </span>
                </th>
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
    </article>
  );
}
