import useTimer, { UseTimerApiType } from "@/hooks/useTimer";
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
    }
  >,
  "children"
>;
