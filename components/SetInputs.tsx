"use client";

import { loadVal, saveVal } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";
import { useWeightUnit } from "@/components/WeightUnitProvider";
import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  window.addEventListener("bts-storage-update", cb);
  return () => window.removeEventListener("bts-storage-update", cb);
}

function getSnapshot() {
  return Date.now();
}

export function notifyStorageUpdate() {
  window.dispatchEvent(new Event("bts-storage-update"));
}

type SetInputsProps = {
  storageKey: string;
  maxSets: number;
  exerciseIndex: number;
  week: number;
  dayKey: string;
  variant: "table" | "card";
};

function WeightField({
  className,
  unit,
  placeholder,
  defaultValue,
  onChange,
}: {
  className: string;
  unit: string;
  placeholder: string;
  defaultValue: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="set-weight-field">
      <input
        className={className}
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
      />
      <span className="set-unit" aria-hidden>
        {unit}
      </span>
    </div>
  );
}

export function SetInputs({
  week,
  dayKey,
  exerciseIndex,
  maxSets,
  variant,
}: SetInputsProps) {
  const { t } = useI18n();
  const { unit } = useWeightUnit();
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const weightPh = t("input.weight");

  const rows = [];
  for (let s = 1; s <= 4; s++) {
    const storageKey = `w${week}_${dayKey}_${exerciseIndex}_s${s}`;
    const wVal = loadVal(`${storageKey}_w`);
    const rVal = loadVal(`${storageKey}_r`);
    const isLastSet = s === maxSets;
    const disabled = s > maxSets;

    if (variant === "card") {
      if (disabled) continue;
      rows.push(
        <div key={s} className="set-row-mobile">
          <div className="set-row-label">
            {t("table.set", { n: s })}
            {isLastSet && <span className="set-last-badge">{t("table.lastSet")}</span>}
          </div>
          <div className="set-row-fields">
            <WeightField
              className="set-input-mobile set-input-wt"
              unit={unit}
              placeholder={weightPh}
              defaultValue={wVal}
              onChange={(v) => {
                saveVal(`${storageKey}_w`, v);
                notifyStorageUpdate();
              }}
            />
            <span className="set-separator" aria-hidden>
              ×
            </span>
            <div className="set-reps-field">
              <input
                className="set-input-mobile set-input-reps"
                type="text"
                inputMode="numeric"
                placeholder={t("input.reps")}
                defaultValue={rVal}
                onChange={(e) => {
                  saveVal(`${storageKey}_r`, e.target.value);
                  notifyStorageUpdate();
                }}
              />
              <span className="set-unit set-unit-reps" aria-hidden>
                {t("input.repsLabel")}
              </span>
            </div>
          </div>
        </div>
      );
      continue;
    }

    if (disabled) {
      rows.push(
        <td key={s} className="set-cell">
          <span className="text-[var(--text-dim)]">—</span>
        </td>
      );
    } else {
      rows.push(
        <td key={s} className="set-cell">
          <div className="set-cell-inner">
            <div className="set-cell-inputs">
              <WeightField
                className={`set-input ${isLastSet ? "last-set-input" : ""}`}
                unit={unit}
                placeholder={weightPh}
                defaultValue={wVal}
                onChange={(v) => {
                  saveVal(`${storageKey}_w`, v);
                  notifyStorageUpdate();
                }}
              />
              <span className="set-separator">×</span>
              <input
                className={`set-input ${isLastSet ? "last-set-input" : ""}`}
                type="text"
                placeholder={t("input.reps")}
                defaultValue={rVal}
                onChange={(e) => {
                  saveVal(`${storageKey}_r`, e.target.value);
                  notifyStorageUpdate();
                }}
              />
            </div>
            {isLastSet && (
              <span className="set-last-badge-table">{t("table.lastSet")}</span>
            )}
          </div>
        </td>
      );
    }
  }

  if (variant === "card") {
    return <div className="set-inputs-mobile">{rows}</div>;
  }
  return <>{rows}</>;
}
