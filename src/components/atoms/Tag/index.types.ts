import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { VariantProps } from "tailwind-variants";
import { tagSkeletonVariants, tagVariants } from ".";

export type TagOwnProps = VariantProps<typeof tagVariants>;

export type TagProps = PropsWithComponentPropsWithRef<"span", TagOwnProps>;

export type TagSkeletonOwnProps = VariantProps<typeof tagSkeletonVariants>;

export type TagSkeletonProps = PropsWithComponentPropsWithRef<
  "div",
  TagSkeletonOwnProps
>;
