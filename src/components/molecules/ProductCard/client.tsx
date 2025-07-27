"use client";

import Button from "@/components/atoms/Button";
import Responsive from "@/components/utils/Responsive";
import { ComponentPropsWithRef } from "react";

const ProductCardAddToCartButton = (
  props: ComponentPropsWithRef<typeof Button>,
) => {
  return (
    <Responsive
      component={Button}
      size={{ initial: "sm", lg: "md" }}
      className="mt-3 w-full justify-center lg:mt-4"
      {...props}
    >
      افزودن به سبد خرید
    </Responsive>
  );
};

export { ProductCardAddToCartButton };
