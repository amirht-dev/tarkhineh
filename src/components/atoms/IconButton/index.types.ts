import { VariantProps } from "@/lib/tailwind-variants";
import {
  PropsWithAsChild,
  PropsWithComponentPropsWithoutRef,
} from "@/types/utils";
import { Merge } from "type-fest";
import { iconButtonVariants } from ".";

export type IconButtonOwnProps = Merge<
  VariantProps<typeof iconButtonVariants>,
  {
    badge?: number;
  }
>;

export type IconButtonProps = PropsWithComponentPropsWithoutRef<
  "button",
  PropsWithAsChild<IconButtonOwnProps>
>;
