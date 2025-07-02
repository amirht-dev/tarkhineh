import useTimer from "@/hooks/useTimer";
import {
  formatTimerDuration,
  secondsToDuration,
  timerDurationToSeconds,
} from "@/utils";
import { useEffect } from "react";
import { TimerProps } from "./index.types";

const Timer = ({ duration, onFinish, warningStart, ...props }: TimerProps) => {
  const [timer, api] = useTimer(duration, { autoStart: true });

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

export default Timer;
