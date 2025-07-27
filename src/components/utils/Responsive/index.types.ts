import { breakpoint } from "@/constants";
import { ComponentProps, ReactNode } from "react";
import { Merge } from "type-fest";

export type ResponsiveValueObject<T> = Partial<
  Record<keyof typeof breakpoint, T>
>;

export type ResponsiveComponentProps<TProps> = {
  [P in keyof TProps]?: ResponsiveValueObject<TProps[P]>;
};

export type ResponsiveProps<TProps> = Merge<
  ResponsiveComponentProps<
    TProps extends React.ComponentType ? ComponentProps<TProps> : TProps
  >,
  {
    component: ReactNode;
  }
>;
