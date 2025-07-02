import useTimer from "@/hooks/useTimer";
import { formatTimerDuration, secondsToDuration } from "@/utils";
import { useEffect } from "react";
import { TimerProps } from "./index.types";

const Timer = ({ duration, onFinish, ...props }: TimerProps) => {
  const [timer, api] = useTimer(duration, { autoStart: true });

  useEffect(() => {
    if (timer === 0 && onFinish) onFinish(api);
  }, [timer, onFinish, api]);

  return (
    <div {...props} data-timer={timer}>
      {formatTimerDuration(secondsToDuration(timer))}
    </div>
  );
};

export default Timer;
