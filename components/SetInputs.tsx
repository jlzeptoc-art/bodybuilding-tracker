"use client";

import { loadVal, saveVal } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";
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

export function SetInputs({
  week,
  dayKey,
  exerciseIndex,
  maxSets,
  variant,
}: SetInputsProps) {
  const { t } = useI18n();
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

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
          <label>
            {t("table.set", { n: s })}
            {isLastSet ? " ★" : ""}
          </label>
          <input
            className="set-input-mobile"
            type="text"
            inputMode="decimal"
            placeholder={t("input.weight")}
            defaultValue={wVal}
            onChange={(e) => {
              saveVal(`${storageKey}_w`, e.target.value);
              notifyStorageUpdate();
            }}
          />
          <span className="text-[var(--text-dim)]">×</span>
          <input
            className="set-input-mobile"
            type="text"
            inputMode="numeric"
            placeholder={t("input.reps")}
            defaultValue={rVal}
            onChange={(e) => {
              saveVal(`${storageKey}_r`, e.target.value);
              notifyStorageUpdate();
            }}
          />
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
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <input
                className={`set-input ${isLastSet ? "last-set-input" : ""}`}
                type="text"
                placeholder={t("input.weight")}
                defaultValue={wVal}
                onChange={(e) => {
                  saveVal(`${storageKey}_w`, e.target.value);
                  notifyStorageUpdate();
                }}
              />
              <span className="text-[var(--text-dim)]">×</span>
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
              <span className="text-[9px] text-[var(--accent)] uppercase">
                {t("table.lastSet")}
              </span>
            )}
          </div>
        </td>
      );
    }
  }

  if (variant === "card") {
    return <div className="mt-2">{rows}</div>;
  }
  return <>{rows}</>;
}
