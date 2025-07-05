import useTimer, { UseTimerApiType } from "@/hooks/useTimer";
import useTimerControl from "@/hooks/useTimerControl";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { Duration } from "date-fns";
import { Except } from "type-fest";

export type TimerProps = Except<
  PropsWithComponentPropsWithoutRef<
    "div",
    {
      duration: Parameters<typeof useTimer>[0];
      onFinish?: (api: UseTimerApiType) => void;
      warningStart?: number | Duration;
      controlRef?: ReturnType<typeof useTimerControl>;
      autoStart?: boolean;
    }
  >,
  "children"
>;
