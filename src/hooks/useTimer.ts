import { useCounter } from "@uidotdev/usehooks";
import { add, differenceInSeconds, Duration } from "date-fns";
import { useCallback, useEffect, useMemo, useRef } from "react";

export type UseTimerOptions = {
  autoStart?: boolean;
};

export type UseTimerApiType = ReturnType<typeof useTimer>[1];

function timerDurationToSeconds(duration: Parameters<typeof useTimer>[0]) {
  return typeof duration === "number"
    ? duration
    : differenceInSeconds(add(Date.now(), duration), Date.now());
}

function useTimer(
  duration: Duration | number,
  { autoStart = true }: UseTimerOptions = {},
) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [value, api] = useCounter(timerDurationToSeconds(duration), { min: 0 });

  const start = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(api.decrement, 1000);
  }, [api]);

  const stop = useCallback(() => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    stop();
    api.reset();
  }, [stop, api]);

  useEffect(() => {
    api.set(timerDurationToSeconds(duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  useEffect(() => {
    if (autoStart) start();
  }, [start, autoStart]);

  useEffect(() => {
    if (value <= 0) stop();
  }, [value, stop]);

  const timerApi = useMemo(
    () => ({ start, stop, reset }),
    [start, stop, reset],
  );

  return [value, timerApi] as const;
}

export default useTimer;
