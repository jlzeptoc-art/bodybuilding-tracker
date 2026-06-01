import { getWeekDays as getWeekDaysRaw, type WeekDay } from "@/lib/program-data";

type TFn = (key: string, vars?: Record<string, string | number>) => string;

export function getLocalizedWeekDays(week: number, t: TFn): WeekDay[] {
  const days = getWeekDaysRaw(week);
  const dayLabels: Record<string, string> = {
    upper: t("day.upper"),
    lower: t("day.lower"),
    pull: t("day.pull"),
    push: t("day.push"),
    legs: t("day.legs"),
  };

  let trainingDayNum = 0;

  return days.map((day) => {
    if (day.isRest) {
      return { ...day, label: t("day.rest") };
    }
    trainingDayNum += 1;
    const typeLabel = dayLabels[day.key] || day.key;
    return {
      ...day,
      label: `${t("day.label", { n: trainingDayNum })} — ${typeLabel}`,
    };
  });
}

export function blockLabelForWeek(week: number, t: TFn): string {
  return week <= 5 ? t("block.foundation") : t("block.ramping");
}
