import { breakpoint } from "@/constants";
import { DependencyList, useEffect } from "react";
import useCurrentBreakpoint from "./useCurrentBreakpoint";

function useBreakpointChangeEvent(
  callback: (bp: keyof typeof breakpoint) => void,
  deps?: DependencyList,
) {
  const bp = useCurrentBreakpoint();

  useEffect(() => {
    callback(bp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp, ...(deps ?? [callback])]);
}

export default useBreakpointChangeEvent;
