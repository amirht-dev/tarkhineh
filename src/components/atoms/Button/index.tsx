"use client";

import { withResponsive } from "@/components/utils/Responsive";
import { tv } from "@/lib/tailwind-variants";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { ButtonProps } from "./index.types";

export const buttonVariants = tv(
  {
    slots: {
      root: "group inline-flex items-center rounded-sm transition-colors disabled:cursor-not-allowed",
      icon: "",
      loadingIndicator:
        "group-disabled:border-neutral-gray-4 animate-spin rounded-full border-t-transparent [animation-duration:500ms] group-disabled:border-t-transparent",
    },
    variants: {
      variant: {
        fill: {
          root: "disabled:bg-neutral-gray-3 disabled:text-neutral-gray-4",
        },
        outline: {
          root: "disabled:border-neutral-gray-4 disabled:text-neutral-gray-4 border bg-transparent",
        },
        text: {
          root: "disabled:text-neutral-gray-4",
        },
      },
      color: {
        primary: "",
        white: "",
        black: "",
      },
      size: {
        sm: {
          root: "text-caption-md h-8 px-2",
          icon: "size-4",
          loadingIndicator: "size-3 border",
        },
        md: {
          root: "text-button-lg h-10 px-4",
          icon: "size-6",
          loadingIndicator: "size-4 border-2",
        },
        lg: {
          root: "text-button-lg h-12 px-4",
          icon: "size-6",
          loadingIndicator: "size-5 border-3",
        },
        xl: {
          root: "text-button-lg h-14 px-4",
          icon: "size-6",
          loadingIndicator: "size-6 border-4",
        },
      },
      icon: {
        true: {
          root: "",
        },
      },
      loading: {
        true: {
          root: "inline-flex min-w-28 items-center justify-center",
        },
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        color: "primary",
        className: {
          root: "bg-primary text-neutral-white hover:bg-primary-shade-2 focus:bg-primary-shade-3",
          loadingIndicator: "border-neutral-white",
        },
      },
      {
        variant: "fill",
        color: "white",
        className: {
          root: "bg-primary-tint-1 text-primary hover:bg-primary-tint-2 focus:bg-primary-tint-3",
          loadingIndicator: "border-primary",
        },
      },
      {
        variant: "fill",
        color: "black",
        className: {
          root: "bg-neutral-gray-7 text-neutral-white hover:bg-neutral-gray-8 focus:bg-neutral-black",
          loadingIndicator: "border-neutral-white",
        },
      },
      {
        variant: "outline",
        color: "primary",
        className: {
          root: "border-primary text-primary hover:border-primary-shade-2 hover:text-primary-shade-2 focus:border-primary-shade-3 focus:text-primary-shade-3",
          loadingIndicator: "border-primary",
        },
      },
      {
        variant: "outline",
        color: "white",
        className: {
          root: "border-neutral-white text-neutral-white hover:border-neutral-gray-1 hover:text-neutral-gray-1 focus:border-neutral-gray-3 focus:text-neutral-gray-3",
          loadingIndicator: "border-neutral-white",
        },
      },
      {
        variant: "outline",
        color: "black",
        className: {
          root: "border-neutral-gray-7 text-neutral-gray-7 hover:border-neutral-gray-8 hover:text-neutral-gray-8 focus:border-neutral-black focus:text-neutral-black",
          loadingIndicator: "border-neutral-black",
        },
      },
      {
        variant: "text",
        color: "primary",
        className: {
          root: "text-primary hover:text-primary-shade-2 focus:text-primary-shade-3",
          loadingIndicator: "border-primary",
        },
      },
      {
        variant: "text",
        color: "white",
        className: {
          root: "text-neutral-white hover:text-neutral-gray-1 focus:text-neutral-gray-3",
          loadingIndicator: "border-neutral-white",
        },
      },
      {
        variant: "text",
        color: "black",
        className: {
          root: "text-neutral-gray-7 hover:text-neutral-gray-8 focus:text-neutral-black",
          loadingIndicator: "border-neutral-black",
        },
      },
      {
        icon: true,
        size: "sm",
        className: {
          root: "gap-1",
        },
      },
      {
        icon: true,
        size: "md",
        className: {
          root: "gap-2",
        },
      },
      {
        icon: true,
        size: "lg",
        className: {
          root: "gap-2",
        },
      },
      {
        icon: true,
        size: "xl",
        className: {
          root: "gap-2",
        },
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "fill",
      icon: false,
      loading: false,
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      variant = "fill",
      color = "primary",
      size = "md",
      loading = false,
      prefixIcon,
      suffixIcon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const cns = buttonVariants({
      color,
      variant,
      size,
      loading,
      icon: !!prefixIcon || !!suffixIcon,
    });

    if (loading)
      return (
        <button ref={ref} {...props} className={cns.root({ className })}>
          <span className={cns.loadingIndicator()} />
        </button>
      );

    return (
      <Comp ref={ref} {...props} className={cns.root({ className })}>
        <Slot className={cns.icon()}>{prefixIcon}</Slot>
        <Slottable>{children}</Slottable>
        <Slot className={cns.icon()}>{suffixIcon}</Slot>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;

export const ResponsiveButton = withResponsive(Button);
