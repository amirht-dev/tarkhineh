import { VariantProps } from "tailwind-variants";
import { shoppingCardSkeletonVariants, shoppingCardVariants } from ".";
import { Merge } from "type-fest";
import { Cart } from "@/stores/global-store";

export type ShoppingCardProps = Merge<
  VariantProps<typeof shoppingCardVariants>,
  {
    cart: Cart;
  }
>;

export type ShoppingCardSkeletonProps = VariantProps<
  typeof shoppingCardSkeletonVariants
>;
