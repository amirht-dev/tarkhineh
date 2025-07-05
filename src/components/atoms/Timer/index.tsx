import useTimer from "@/hooks/useTimer";
import {
  formatTimerDuration,
  secondsToDuration,
  timerDurationToSeconds,
} from "@/utils";
import { useEffect, useImperativeHandle } from "react";
import { TimerProps } from "./index.types";

const Timer = ({
  duration,
  onFinish,
  warningStart,
  controlRef,
  autoStart = false,
  ...props
}: TimerProps) => {
  const [timer, api] = useTimer(duration, { autoStart });

  useImperativeHandle(controlRef, () => api);

  useEffect(() => {
    if (timer === 0 && onFinish) onFinish(api);
  }, [timer, onFinish, api]);

  return (
    <div
      {...props}
      data-state={
        warningStart && timer <= timerDurationToSeconds(warningStart)
          ? "warning"
          : "idle"
      }
      data-timer={timer}
    >
      {formatTimerDuration(secondsToDuration(timer))}
    </div>
  );
};
Timer.displayName = "Timer";

export default Timer;
