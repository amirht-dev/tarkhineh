import type { VariantProps } from "@/lib/tailwind-variants";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { ChangeEvent, ReactNode } from "react";
import { Merge } from "type-fest";
import { inputVariants } from ".";

export type InputOwnProps = Merge<
  VariantProps<typeof inputVariants>,
  {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    error?: boolean | string;
  }
>;

export type InputProps = PropsWithComponentPropsWithoutRef<
  "input",
  InputOwnProps
>;
