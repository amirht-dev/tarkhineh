import { VariantProps } from "tailwind-variants";
import { shoppingCardSkeletonVariants, shoppingCardVariants } from ".";

export type ShoppingCardProps = VariantProps<typeof shoppingCardVariants>;

export type ShoppingCardSkeletonProps = VariantProps<
  typeof shoppingCardSkeletonVariants
>;
