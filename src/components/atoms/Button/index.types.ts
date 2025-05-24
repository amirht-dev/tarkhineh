import {
  PropsWithAsChild,
  PropsWithComponentPropsWithoutRef,
} from "@/types/utils";
import { ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { Except, Merge } from "type-fest";
import { buttonVariants } from ".";

export type ButtonOwnProps = Merge<
  {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
  },
  Except<VariantProps<typeof buttonVariants>, "icon">
>;

export type ButtonProps = PropsWithAsChild<
  PropsWithComponentPropsWithoutRef<"button", ButtonOwnProps>
>;
