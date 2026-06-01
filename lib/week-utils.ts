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

  return days.map((day, i) => {
    if (day.isRest) {
      return { ...day, label: t("day.rest") };
    }
    const dayNum = i < 2 ? i + 1 : i - 1;
    const typeLabel = dayLabels[day.key] || day.key;
    return {
      ...day,
      label: `${t("day.label", { n: dayNum })} — ${typeLabel}`,
    };
  });
}

export function blockLabelForWeek(week: number, t: TFn): string {
  return week <= 5 ? t("block.foundation") : t("block.ramping");
}
