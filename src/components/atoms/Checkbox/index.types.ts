import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { ComponentPropsWithRef, ReactNode } from "react";
import { Except } from "type-fest";

export type CheckboxProps = Except<
  PropsWithComponentPropsWithRef<
    "input",
    {
      checkedIcon: ReactNode;
      uncheckedIcon: ReactNode;
      labelProps?: ComponentPropsWithRef<"label">;
    }
  >,
  "type"
>;
