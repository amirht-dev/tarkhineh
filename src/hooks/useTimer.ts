import { timerDurationToSeconds } from "@/utils";
import { useCounter } from "@uidotdev/usehooks";
import { Duration } from "date-fns";
import { useCallback, useEffect, useMemo, useRef } from "react";

export type UseTimerOptions = {
  autoStart?: boolean;
};

export type UseTimerApiType = ReturnType<typeof useTimer>[1];

function useTimer(
  duration: Duration | number,
  { autoStart = true }: UseTimerOptions = {},
) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [value, { decrement, reset: resetCounter, set }] = useCounter(
    timerDurationToSeconds(duration),
    { min: 0 },
  );

  const start = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(decrement, 1000);
  }, [decrement]);

  const stop = useCallback(() => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    stop();
    resetCounter();
  }, [stop, resetCounter]);

  useEffect(() => {
    set(timerDurationToSeconds(duration));
  }, [duration, set]);

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
