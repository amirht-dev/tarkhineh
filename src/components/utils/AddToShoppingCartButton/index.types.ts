import { ResponsiveButton } from "@/components/atoms/Button";
import { Food } from "@/constants";
import {
  PropsWithAsChild,
  PropsWithComponentPropsWithRef,
} from "@/types/utils";

type SharedProps = {
  foodId: Food["id"];
};

export type AddToShoppingCartButtonProps = PropsWithAsChild<
  PropsWithComponentPropsWithRef<"button", SharedProps>
>;

export type ResponsiveAddToShoppingCartButtonProps = Omit<
  PropsWithComponentPropsWithRef<typeof ResponsiveButton, SharedProps>,
  "key"
>;
