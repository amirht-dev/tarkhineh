import { breakpoint } from "@/constants";
import { UnSimplifiedMerge } from "@/types/utils";
import { ComponentType } from "react";
import type { RequiredKeysOf, SetRequired } from "type-fest";

export type ResponsiveValueObject<T> = Partial<
  Record<keyof typeof breakpoint, T>
>;

export type ResponsiveComponentProps<TProps extends object> = {
  [RP in RequiredKeysOf<TProps>]:
    | SetRequired<ResponsiveValueObject<TProps[RP]>, "initial">
    | TProps[RP];
} & {
  [OP in Exclude<keyof TProps, RequiredKeysOf<TProps>>]?:
    | ResponsiveValueObject<TProps[OP]>
    | TProps[OP];
};

export type ResponsiveProps<TProps extends object> = UnSimplifiedMerge<
  ResponsiveComponentProps<TProps>,
  {
    component: ComponentType<TProps>;
  }
>;
