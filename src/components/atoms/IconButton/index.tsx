"use client";

import { tv } from "@/lib/tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import Badge from "../Badge";
import { IconButtonProps } from "./index.types";
import { withResponsive } from "@/components/utils/Responsive";

export const iconButtonVariants = tv(
  {
    slots: {
      button: "relative inline-flex items-center justify-center rounded-sm",
      icon: "",
      badge: "absolute",
    },
    variants: {
      size: {
        md: {
          icon: "h-4 w-4",
          button:
            "h-6 w-6 [&_[data-slot=icon]]:size-4 [&_svg:only-child]:size-4",
          badge: "rtl:-top-1 rtl:-right-1",
        },
        lg: {
          icon: "h-6 w-6",
          button:
            "h-10 w-10 [&_[data-slot=icon]]:size-6 [&_svg:only-child]:size-6",
          badge: "rtl:top-1 rtl:right-1",
        },
      },
      color: {
        primary: {
          button: "bg-primary text-neutral-white",
        },
        white: {
          button: "bg-primary-tint-1 text-primary",
        },
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  },
  {
    twMerge: true,
  },
);

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      asChild,
      size = "md",
      color = "primary",
      badge,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const cns = iconButtonVariants({ size, color });

    return (
      <Comp {...props} ref={ref} className={cns.button({ className })}>
        {children}
        {badge != null && (
          <Badge color={color} className={cns.badge()}>
            {badge}
          </Badge>
        )}
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";

export default IconButton;

export const ResponsiveIconButton = withResponsive(IconButton);
