import useTimer from "@/hooks/useTimer";
import {
  add,
  differenceInSeconds,
  Duration,
  intervalToDuration,
} from "date-fns";

export function lastIndex(target: { length: number }) {
  return target.length - 1;
}

export function localizeNumber(value: number | string, locale = "fa") {
  return typeof value === "number"
    ? value.toLocaleString(locale)
    : value
        .split("")
        .filter((item) => !isNaN(parseInt(item)))
        .map((item) => Number(item).toLocaleString(locale))
        .join("");
}

export function formatTimerDuration(duration: Duration) {
  const { format } = Intl.NumberFormat("fa", { minimumIntegerDigits: 2 });
  return `${format(duration.minutes ?? 0)}:${format(duration.seconds ?? 0)}`;
}

export function secondsToDuration(seconds: number) {
  return intervalToDuration({
    start: Date.now(),
    end: add(Date.now(), { seconds }),
  });
}

export function timerDurationToSeconds(
  duration: Parameters<typeof useTimer>[0],
) {
  return typeof duration === "number"
    ? duration
    : differenceInSeconds(add(Date.now(), duration), Date.now());
}

export function wait(ms = 1000) {
  return new Promise((res) => setTimeout(res, ms));
}
