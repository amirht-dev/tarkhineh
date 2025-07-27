"use client";

import { breakpoint, breakpointEntires } from "@/constants";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";
import { useMemo } from "react";
import { Entries } from "type-fest";
import { ResponsiveComponentProps, ResponsiveProps } from "./index.types";

function resolveResponsiveProps(props: object) {
  return (
    Object.entries(props) as Entries<
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      ResponsiveComponentProps<Record<string, {}>>
    >
  ).reduce(
    (resolvedProps, [propName, propResponsiveObj]) => {
      if (!propResponsiveObj) return resolvedProps;

      let propValue: unknown = propResponsiveObj;

      if (
        typeof propResponsiveObj === "object" &&
        Object.keys(breakpoint).some((bpName) =>
          Object.keys(propResponsiveObj).includes(bpName),
        )
      ) {
        propValue = breakpointEntires.reduce<unknown>(
          (resolvedPropValue, [bpName, bpValue]) => {
            if (
              bpName in propResponsiveObj &&
              propResponsiveObj[bpName as keyof typeof propResponsiveObj] !==
                undefined &&
              window.matchMedia(`only screen and (min-width: ${bpValue}px)`)
                .matches
            ) {
              return propResponsiveObj[
                bpName as keyof typeof propResponsiveObj
              ];
            }
            return resolvedPropValue;
          },
          undefined,
        );
      }

      return {
        ...resolvedProps,
        [propName]: propValue,
      };
    },
    {} as Record<string, unknown>,
  );
}

const Responsive = <TProps extends object>({
  component: Comp,
  ...props
}: ResponsiveProps<TProps>) => {
  const [bp] = useCurrentBreakpoint();

  const resolvedProps = useMemo(() => {
    return resolveResponsiveProps(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Comp {...(resolvedProps as any)} />;
};

export default Responsive;
