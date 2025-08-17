"use client";

import { ResponsiveButton } from "@/components/atoms/Button";
import { useGlobalStore } from "@/Providers/global-store";
import { Slot } from "@radix-ui/react-slot";
import { MouseEventHandler } from "react";
import {
  AddToShoppingCartButtonProps,
  ResponsiveAddToShoppingCartButtonProps,
} from "./index.types";

export const AddToShoppingCartButton = ({
  asChild,
  foodId,
  onClick,
  children,
  ...props
}: AddToShoppingCartButtonProps) => {
  const addToShoppingCart = useGlobalStore((state) => state.addToShoppingCart);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (typeof onClick === "function") onClick?.(e);

    if (!e.isDefaultPrevented() && !props.disabled) addToShoppingCart(foodId);
  };

  const Comp = asChild ? Slot : ResponsiveButton;

  return (
    <Comp {...props} onClick={handleClick}>
      {children ?? "افزودن به سبد خرید"}
    </Comp>
  );
};

export const ResponsiveAddToShoppingCartButton = ({
  foodId,
  children,
  ...props
}: ResponsiveAddToShoppingCartButtonProps) => {
  return (
    <AddToShoppingCartButton asChild foodId={foodId}>
      <ResponsiveButton size={{ initial: "sm", lg: "md" }} {...props}>
        {children ?? "افزودن به سبد خرید"}
      </ResponsiveButton>
    </AddToShoppingCartButton>
  );
};
