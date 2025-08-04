import { breakpoint } from "@/constants";
import { getCurrentBreakpoint } from "@/utils";
import { useEffect, useState } from "react";

function useBreakpoint() {
  const [value, setValue] = useState(getCurrentBreakpoint);

  useEffect(() => {
    const listener = () => setValue(getCurrentBreakpoint);

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return [value, breakpoint[value]] as const;
}

export default useBreakpoint;
