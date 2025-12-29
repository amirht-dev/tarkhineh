import { breakpoint } from "@/constants";
import { useEffect, useState } from "react";

function useBreakpointMediaQuery(bp: keyof typeof breakpoint) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };

    const media = window.matchMedia(
      `only screen and (min-width : ${breakpoint[bp]}px)`,
    );

    setIsMatch(media.matches);

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, [bp]);

  return isMatch;
}

export default useBreakpointMediaQuery;
