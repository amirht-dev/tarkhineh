import { breakpoint } from "@/constants";
import { useMediaQuery } from "@uidotdev/usehooks";

function useBreakpointMediaQuery(bp: keyof typeof breakpoint) {
  const isMatch = useMediaQuery(
    `only screen and (min-width : ${breakpoint[bp]}px)`,
  );

  return isMatch;
}

export default useBreakpointMediaQuery;
