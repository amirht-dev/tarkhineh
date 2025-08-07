import { Breakpoint, breakpoint } from "@/constants";
import { getCurrentBreakpoint } from "@/utils";
import { useEffect, useState } from "react";

function useBreakpoint() {
  const [value, setValue] = useState<Breakpoint>();

  useEffect(() => {
    const setBreakpoint = () => setValue(getCurrentBreakpoint());

    setBreakpoint();

    window.addEventListener("resize", setBreakpoint);

    return () => {
      window.removeEventListener("resize", setBreakpoint);
    };
  }, []);

  if (value) return [value, breakpoint[value]] as const;
}

export default useBreakpoint;
