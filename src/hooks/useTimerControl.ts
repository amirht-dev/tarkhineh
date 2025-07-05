import { useRef } from "react";
import { UseTimerApiType } from "./useTimer";

export function useTimerControl() {
  return useRef<UseTimerApiType>(null);
}

export default useTimerControl;
