"use client";

import { ResponsiveIconButton } from "@/components/atoms/IconButton";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import { useGlobalStore } from "@/Providers/global-store";
import Link from "next/link";

export const ShoppingCardIconButton = () => {
  const shoppingCartCount = useGlobalStore(
    (state) => state.shoppingCart.length,
  );

  return (
    <ResponsiveIconButton
      asChild
      color={shoppingCartCount ? "primary" : "white"}
      size={{ initial: "md", lg: "lg" }}
      badge={shoppingCartCount > 0 ? shoppingCartCount : undefined}
    >
      <Link href="/checkout">
        <ShoppingCard_Outline data-slot="icon" />
      </Link>
    </ResponsiveIconButton>
  );
};
