import { breakpoint, breakpointEntires } from "@/constants";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";
import { cloneElement, ReactElement, ReactNode, useMemo } from "react";
import { Entries, Merge } from "type-fest";

type ResponsiveValueObject<T> = Partial<Record<keyof typeof breakpoint, T>>;

type ResponsiveComponentProps<TProps> = {
  [P in keyof TProps]?: ResponsiveValueObject<TProps[P]>;
};

type Props<TProps> = Merge<
  ResponsiveComponentProps<TProps>,
  {
    component: ReactNode;
  }
>;

function resolveResponsiveProps(props: object) {
  return (
    Object.entries(props) as Entries<
      ResponsiveComponentProps<Record<string, unknown>>
    >
  ).reduce(
    (resolvedProps, [propName, propResponsiveObj]) => {
      if (!propResponsiveObj) return resolvedProps;

      const resolvedPropValue = breakpointEntires.reduce<unknown>(
        (resolvedPropValue, [bpName, bpValue]) => {
          if (
            bpName in propResponsiveObj &&
            propResponsiveObj[bpName] !== undefined &&
            window.matchMedia(`only screen and (min-width: ${bpValue}px)`)
              .matches
          ) {
            return propResponsiveObj[bpName];
          }
          return resolvedPropValue;
        },
        undefined,
      );

      return {
        ...resolvedProps,
        [propName]: resolvedPropValue,
      };
    },
    {} as Record<string, unknown>,
  );
}

const Responsive = <TProps,>({ component, ...props }: Props<TProps>) => {
  const [bp] = useCurrentBreakpoint();

  const resolvedProps = useMemo(() => {
    return resolveResponsiveProps(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp]);

  return cloneElement(component as ReactElement, resolvedProps);
};

export default Responsive;
