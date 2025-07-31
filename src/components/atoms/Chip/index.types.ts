import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import { chipVariants } from ".";

export type ChipOwnProps = {
  icon?: ReactNode;
} & VariantProps<typeof chipVariants>;

export type ChipProps = PropsWithComponentPropsWithRef<"button", ChipOwnProps>;
