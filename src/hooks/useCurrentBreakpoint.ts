import { getCurrentBreakpoint } from "@/utils";
import { useEffect, useState } from "react";

function useCurrentBreakpoint() {
  const [currentBp, setCurrentBp] = useState(getCurrentBreakpoint);

  useEffect(() => {
    const listener = () => {
      setCurrentBp(getCurrentBreakpoint());
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return currentBp;
}

export default useCurrentBreakpoint;
