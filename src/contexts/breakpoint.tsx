"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import { createCTX } from "@/utils/clientHelpers";
import { PropsWithChildren } from "react";

type BreakpointContextType = {
  currentBreakpoint: ReturnType<typeof useBreakpoint>;
};

export const { context: BreakpointContext, hook: useBreakpointContext } =
  createCTX<BreakpointContextType>("Breakpoint");

const BreakpointProvider = ({ children }: PropsWithChildren) => {
  const currentBreakpoint = useBreakpoint();

  return (
    <BreakpointContext.Provider value={{ currentBreakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;
