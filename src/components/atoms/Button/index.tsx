"use client";

import { withResponsive } from "@/components/utils/Responsive";
import { tv } from "@/lib/tailwind-variants";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { ButtonProps } from "./index.types";

export const buttonVariants = tv(
  {
    slots: {
      root: "group inline-flex items-center justify-center rounded-sm transition-colors disabled:cursor-not-allowed",
      icon: "",
      loadingIndicator:
        "group-disabled:border-neutral-gray-4 border-[inherit] group-disabled:border-t-transparent",
    },
    variants: {
      variant: {
        fill: {
          root: "disabled:bg-neutral-gray-3 disabled:text-neutral-gray-4",
        },
        outline: {
          root: "disabled:border-neutral-gray-4 disabled:text-neutral-gray-4 border bg-transparent",
        },
        twotone: {
          root: "disabled:bg-neutral-gray-3 disabled:text-neutral-gray-4",
        },
        text: {
          root: "disabled:text-neutral-gray-4",
        },
      },
      color: {
        primary: "",
        white: "",
        black: "",
        error: "",
        success: "",
        warning: "",
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
          loadingIndicator: "",
        },
      },
      {
        variant: "fill",
        color: "white",
        className: {
          root: "bg-neutral-white text-neutral-black hover:bg-neutral-gray-2 focus:bg-neutral-gray-2",
          loadingIndicator: "",
        },
      },
      {
        variant: "fill",
        color: "black",
        className: {
          root: "bg-neutral-gray-7 text-neutral-white hover:bg-neutral-gray-8 focus:bg-neutral-black",
          loadingIndicator: "",
        },
      },
      {
        variant: "fill",
        color: "error",
        className: {
          root: "bg-status-error-l text-neutral-white hover:bg-status-error focus:bg-status-error",
          loadingIndicator: "",
        },
      },
      {
        variant: "fill",
        color: "success",
        className: {
          root: "bg-status-success-l text-neutral-white hover:bg-status-success focus:bg-status-success",
          loadingIndicator: "",
        },
      },
      {
        variant: "fill",
        color: "warning",
        className: {
          root: "bg-status-warning-l text-neutral-white hover:bg-status-warning focus:bg-status-warning",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "primary",
        className: {
          root: "border-primary text-primary hover:border-primary-shade-2 hover:text-primary-shade-2 focus:border-primary-shade-3 focus:text-primary-shade-3",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "white",
        className: {
          root: "border-neutral-white text-neutral-white hover:border-neutral-gray-2 hover:text-neutral-gray-2 focus:border-neutral-gray-2 focus:text-neutral-gray-2",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "black",
        className: {
          root: "border-neutral-gray-7 text-neutral-gray-7 hover:border-neutral-gray-8 hover:text-neutral-gray-8 focus:border-neutral-black focus:text-neutral-black",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "error",
        className: {
          root: "border-status-error-l text-status-error-l hover:border-status-error hover:text-status-error focus:border-status-error focus:text-status-error",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "success",
        className: {
          root: "border-status-success-l text-status-success-l hover:border-status-success hover:text-status-success focus:border-status-success focus:text-status-success",
          loadingIndicator: "",
        },
      },
      {
        variant: "outline",
        color: "warning",
        className: {
          root: "border-status-warning-l text-status-warning-l hover:border-status-warning hover:text-status-warning focus:border-status-warning focus:text-status-warning",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "primary",
        className: {
          root: "text-primary hover:text-primary-shade-2 focus:text-primary-shade-3",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "white",
        className: {
          root: "text-neutral-white hover:text-neutral-gray-2 focus:text-neutral-gray-2",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "black",
        className: {
          root: "text-neutral-gray-7 hover:text-neutral-gray-8 focus:text-neutral-black",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "error",
        className: {
          root: "text-status-error-l hover:text-status-error focus:text-status-error",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "success",
        className: {
          root: "text-status-success-l hover:text-status-success focus:text-status-success",
          loadingIndicator: "",
        },
      },
      {
        variant: "text",
        color: "warning",
        className: {
          root: "text-status-warning-l hover:text-status-warning focus:text-status-warning",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "primary",
        className: {
          root: "text-primary bg-primary-tint-1 hover:bg-primary-tint-2 hover:text-primary-shade-2 focus:text-primary-shade-3 focus:bg-primary-tint-2",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "white",
        className: {
          root: "text-neutral-white bg-neutral-gray-7 hover:bg-neutral-gray-6 focus:bg-neutral-gray-6",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "black",
        className: {
          root: "text-neutral-gray-8 bg-neutral-gray-2 hover:text-neutral-black hover:bg-neutral-gray-4 focus:text-neutral-black focus:bg-neutral-gray-4",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "error",
        className: {
          root: "text-status-error-l bg-status-error-el hover:text-status-error hover:bg-status-error-l/15 focus:text-status-error focus:bg-status-error-l/15",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "success",
        className: {
          root: "text-status-success-l bg-status-success-el hover:text-status-success hover:bg-status-success-l/15 focus:text-status-success focus:bg-status-success-l/15",
          loadingIndicator: "",
        },
      },
      {
        variant: "twotone",
        color: "warning",
        className: {
          root: "text-status-warning-l bg-status-warning-el hover:text-status-warning hover:bg-status-warning-l/15 focus:text-status-warning focus:bg-status-warning-l/15",
          loadingIndicator: "",
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
          <LoadingSpinner className={cns.loadingIndicator()} />
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
