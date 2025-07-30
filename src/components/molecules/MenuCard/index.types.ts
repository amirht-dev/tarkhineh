import { VariantProps } from "tailwind-variants";
import { menuCardSkeletonVariants, menuCardVariants } from ".";

export type MenuCardProps = VariantProps<typeof menuCardVariants>;

export type MenuCardSkeletonProps = VariantProps<
  typeof menuCardSkeletonVariants
>;
