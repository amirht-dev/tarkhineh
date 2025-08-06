import type { VariantProps } from "@/lib/tailwind-variants";
import { PropsWithComponentPropsWithoutRef } from "@/types/utils";
import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from "react";
import { Merge } from "type-fest";
import { textareaVariants } from ".";

export type TextareaOwnProps = Merge<
  VariantProps<typeof textareaVariants>,
  {
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
    error?: boolean | string;
    label?: ReactNode;
    containerProps?: ComponentPropsWithoutRef<"div">;
  }
>;

export type TextareaProps = PropsWithComponentPropsWithoutRef<
  "textarea",
  TextareaOwnProps
>;
