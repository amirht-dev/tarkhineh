import { breakpointEntires } from "@/constants";
import useTimer from "@/hooks/useTimer";
import {
  add,
  differenceInSeconds,
  Duration,
  intervalToDuration,
} from "date-fns";
import clamp from "lodash/clamp";
import sum from "lodash/sum";

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

export function getCurrentBreakpoint() {
  return breakpointEntires.reduce((resolvedCurrentBpEntry, bpEntry) => {
    if (
      window.matchMedia(`only screen and (min-width: ${bpEntry[1]}px)`).matches
    )
      return bpEntry[0];
    return resolvedCurrentBpEntry;
  }, breakpointEntires[0][0]);
}

export function addToArrayAt<T>(array: Array<T>, index: number, value: T) {
  return [...array.slice(0, index), value, ...array.slice(index, array.length)];
}

export function average(...numbers: number[]) {
  return sum(numbers) / numbers.length;
}

export function calcPercentOf(value: number, percent: number) {
  return (value * clamp(percent, 0, 100)) / 100;
}

export function discountedPrice(price: number, discount: number) {
  return calcPercentOf(price, 100 - discount);
}
