import {
  PropsWithAsChild,
  PropsWithComponentPropsWithRef,
} from "@/types/utils";

export type SignoutButtonProps = PropsWithAsChild<
  PropsWithComponentPropsWithRef<"button">
>;
