"use client";

import { tv } from "@/lib/tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { InputProps } from "./index.types";

export const inputVariants = tv(
  {
    slots: {
      root: "group has-disabled:border-neutral-gray-3 flex items-center gap-1 rounded-sm border px-4 transition-colors has-[input:disabled]:[&,&_*]:cursor-not-allowed",
      icon: "group-has-[input:disabled]:text-neutral-gray-3 shrink-0 transition-colors",
      inputLabelWrapper: "relative flex-1",
      input:
        "disabled:text-neutral-gray-3 w-full border-none bg-transparent outline-none placeholder:transition-opacity group-has-focus-within:placeholder:opacity-100 data-[has-label=true]:group-not-has-focus-within:placeholder:opacity-0",
      label:
        "group-focus-within:text-caption-md data-[has-value=true]:text-caption-md group-has-[input:disabled]:text-neutral-gray-3 pointer-events-none absolute -translate-y-1/2 px-1 leading-none text-nowrap transition-all select-none rtl:top-1/2 rtl:right-0",
    },
    variants: {
      size: {
        responsive: {
          root: "text-caption-md lg:text-body-sm h-8 lg:h-10",
          icon: "size-4 lg:size-6",
          label:
            "group-focus-within:-top-2 data-[has-value=true]:-top-2 lg:group-focus-within:-top-2 lg:data-[has-value=true]:-top-2 rtl:group-focus-within:data-[has-prefix-icon=true]:-right-5 rtl:data-[has-prefix-icon=true]:data-[has-value=true]:-right-5",
        },
        sm: {
          root: "text-caption-md h-8",
          icon: "size-4",
          label:
            "group-focus-within:-top-2 data-[has-value=true]:-top-2 rtl:group-focus-within:data-[has-prefix-icon=true]:-right-5 rtl:data-[has-prefix-icon=true]:data-[has-value=true]:-right-5",
        },
        md: {
          root: "text-body-sm h-10",
          icon: "size-6",
          label: "group-focus-within:-top-2 data-[has-value=true]:-top-2",
        },
        lg: {
          root: "text-body-sm h-12",
          icon: "size-6",
          label: "group-focus-within:-top-3 data-[has-value=true]:-top-3",
        },
        xl: {
          root: "text-body-sm h-14",
          icon: "size-6",
          label: "group-focus-within:-top-4 data-[has-value=true]:-top-4",
        },
      },
      color: {
        primary: {
          root: "border-primary hover:border-primary-shade-2 data-[has-value=true]:not-has-[input:disabled]:border-primary-shade-2",
          icon: "text-primary group-hover:text-primary-shade-2 data-[has-value=true]:group-not-has-[input:disabled]:text-primary-shade-2",
          input:
            "text-primary group-hover:text-primary-shade-2 data-[has-value=true]:not-disabled:text-primary-shade-2",
          label:
            "text-primary group-hover:text-primary-shade-2 data-[has-value=true]:group-not-has-[input:disabled]:text-primary-shade-2",
        },
        error: {
          root: "border-status-error-l hover:border-status-error data-[has-value=true]:not-has-[input:disabled]:border-status-error",
          icon: "text-status-error-l group-hover:text-status-error data-[has-value=true]:group-not-has-[input:disabled]:text-status-error",
          input:
            "text-status-error-l group-hover:text-status-error data-[has-value=true]:not-disabled:text-status-error",
          label:
            "text-status-error-l group-hover:text-status-error data-[has-value=true]:group-not-has-[input:disabled]:text-status-error",
        },
        success: {
          root: "border-status-success-l hover:border-status-success data-[has-value=true]:not-has-[input:disabled]:border-status-success",
          icon: "text-status-success-l group-hover:text-status-success data-[has-value=true]:group-not-has-[input:disabled]:text-status-success",
          input:
            "text-status-success-l group-hover:text-status-success data-[has-value=true]:not-disabled:text-status-success",
          label:
            "text-status-success-l group-hover:text-status-success data-[has-value=true]:group-not-has-[input:disabled]:text-status-success",
        },
        warning: {
          root: "border-status-warning-l hover:border-status-warning data-[has-value=true]:not-has-[input:disabled]:border-status-warning",
          icon: "text-status-warning-l group-hover:text-status-warning data-[has-value=true]:group-not-has-[input:disabled]:text-status-warning",
          input:
            "text-status-warning-l group-hover:text-status-warning data-[has-value=true]:not-disabled:text-status-warning",
          label:
            "text-status-warning-l group-hover:text-status-warning data-[has-value=true]:group-not-has-[input:disabled]:text-status-warning",
        },
        light: {
          root: "border-neutral-gray-6 hover:border-neutral-white data-[has-value=true]:not-has-[input:disabled]:border-neutral-white",
          icon: "text-neutral-gray-6 group-hover:text-neutral-white data-[has-value=true]:group-not-has-[input:disabled]:text-neutral-white",
          input:
            "text-neutral-gray-6 group-hover:text-neutral-white data-[has-value=true]:not-disabled:text-neutral-white",
          label:
            "text-neutral-gray-6 group-hover:text-neutral-white data-[has-value=true]:group-not-has-[input:disabled]:text-neutral-white bg-[var(--label-bg,#333)]",
        },
        dark: {
          root: "border-neutral-gray-4 hover:border-neutral-gray-8 data-[has-value=true]:not-has-[input:disabled]:border-neutral-gray-8",
          icon: "text-neutral-gray-4 group-hover:text-neutral-gray-8 data-[has-value=true]:group-not-has-[input:disabled]:text-neutral-gray-8",
          input:
            "text-neutral-gray-4 group-hover:text-neutral-gray-8 data-[has-value=true]:not-disabled:text-neutral-gray-8",
          label:
            "text-neutral-gray-4 group-hover:text-neutral-gray-8 data-[has-value=true]:group-not-has-[input:disabled]:text-neutral-gray-8",
        },
      },
    },
    compoundVariants: [
      {
        size: ["md", "lg", "xl"],
        className: {
          label:
            "rtl:group-focus-within:data-[has-prefix-icon=true]:-right-7 rtl:data-[has-prefix-icon=true]:data-[has-value=true]:-right-7",
        },
      },
      {
        color: ["dark", "primary", "success", "error", "warning"],
        className: {
          label: "bg-[var(--label-bg,theme(colors.neutral.white))]",
        },
      },
    ],
    defaultVariants: {
      mode: "dark",
      size: "md",
      color: "dark",
    },
  },
  {
    twMerge: true,
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      label,
      prefixIcon,
      suffixIcon,
      className,
      onChange,
      value,
      containerProps,
      color = "dark",
      ...props
    },
    ref,
  ) => {
    const cns = inputVariants({
      color,
      size,
      className,
    });

    return (
      <div
        {...containerProps}
        className={cns.root({ className: containerProps?.className })}
        data-has-value={!!value}
        data-has-prefix-icon={!!prefixIcon}
        aria-disabled={!!props.disabled}
      >
        <Slot
          className={cns.icon()}
          data-has-value={!!value}
          aria-disabled={!!props.disabled}
        >
          {prefixIcon}
        </Slot>
        <div className={cns.inputLabelWrapper()}>
          <input
            {...props}
            ref={ref}
            className={cns.input({ className })}
            onChange={(e) => {
              onChange?.(e, e.target.value);
            }}
            value={value}
            data-has-value={!!value}
            data-has-prefix-icon={!!prefixIcon}
            data-has-label={!!label}
          />
          {!!label && (
            <span
              className={cns.label()}
              data-has-value={!!value}
              data-has-prefix-icon={!!prefixIcon}
              aria-disabled={!!props.disabled}
            >
              {label}
            </span>
          )}
        </div>
        <Slot
          className={cns.icon()}
          data-has-value={!!value}
          aria-disabled={!!props.disabled}
        >
          {suffixIcon}
        </Slot>
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
