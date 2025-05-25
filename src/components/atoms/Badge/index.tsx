import { tv } from "@/lib/tailwind-variants";
import { forwardRef } from "react";
import { BadgeProps } from "./index.types";

export const badgeVariants = tv({
  base: "text-caption-sm inline-flex size-3 items-center justify-center rounded-full leading-none",
  variants: {
    color: {
      primary: "bg-primary-tint-6 text-neutral-white",
      white: "bg-neutral-white text-primary-tint-6",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color = "primary", className, children, ...props }, ref) => {
    return (
      <span
        {...props}
        ref={ref}
        className={badgeVariants({ color, className })}
      >
        {children ? (children > 9 ? "+9" : children) : null}
      </span>
    );
  },
);
Badge.displayName = "Badge";

export default Badge;
