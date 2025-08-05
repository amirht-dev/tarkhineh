"use client";

import Button, { ResponsiveButton } from "@/components/atoms/Button";
import { useGlobalStore } from "@/Providers/global-store";
import { ComponentPropsWithRef } from "react";

const ProductCardAddToCartButton = (
  props: ComponentPropsWithRef<typeof Button>,
) => {
  const addToShoppingCart = useGlobalStore((state) => state.addToShoppingCart);

  return (
    <ResponsiveButton
      size={{ initial: "sm", lg: "md" }}
      className="mt-3 w-full justify-center lg:mt-4"
      {...props}
      onClick={(e) => {
        props.onClick?.(e);

        if (!e.isDefaultPrevented()) {
          addToShoppingCart({});
        }
      }}
    >
      افزودن به سبد خرید
    </ResponsiveButton>
  );
};

export { ProductCardAddToCartButton };
