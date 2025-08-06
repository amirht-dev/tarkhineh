import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { ComponentProps, ReactNode } from "react";
import { OverrideProperties } from "type-fest";

type Callable<T, P extends unknown[]> = ((...args: P) => T) | T;

export type CustomRadioProps = OverrideProperties<
  PropsWithComponentPropsWithRef<
    "input",
    {
      labelClassName?: string;
    }
  >,
  {
    children: Callable<
      ReactNode,
      [ctx: Pick<ComponentProps<"input">, "checked">]
    >;
  }
>;

export type CustomRadioIndicatorProps = ComponentProps<"div">;
