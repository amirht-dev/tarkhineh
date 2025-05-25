import { VariantProps } from "@/lib/tailwind-variants";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { Merge } from "type-fest";
import { badgeVariants } from ".";

export type BadgeOwnProps = Merge<
  VariantProps<typeof badgeVariants>,
  {
    children?: number;
  }
>;

export type BadgeProps = PropsWithComponentPropsWithoutRef<
  "span",
  BadgeOwnProps
>;
