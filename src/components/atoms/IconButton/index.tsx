import { tv } from "@/lib/tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import Badge from "../Badge";
import { IconButtonProps } from "./index.types";

export const iconButtonVariants = tv({
  slots: {
    button:
      "relative inline-flex aspect-square items-center justify-center rounded-sm",
    icon: "",
    badge: "absolute",
  },
  variants: {
    size: {
      md: {
        icon: "size-4",
        button: "size-6",
        badge: "rtl:-top-1 rtl:-right-1",
      },
      lg: {
        icon: "size-6",
        button: "size-10",
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
});

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
        <Slot className={cns.icon()}>{children}</Slot>
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
