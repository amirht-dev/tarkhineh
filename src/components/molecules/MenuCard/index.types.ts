import { Food } from "@/constants";
import { VariantProps } from "tailwind-variants";
import { Merge } from "type-fest";
import { menuCardSkeletonVariants, menuCardVariants } from ".";

export type MenuCardProps = Merge<
  VariantProps<typeof menuCardVariants>,
  {
    food: Food;
  }
>;

export type MenuCardSkeletonProps = VariantProps<
  typeof menuCardSkeletonVariants
>;
