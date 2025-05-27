"use client";

import { tv } from "@/lib/tailwind-variants";
import { forwardRef } from "react";
import { InfoCircle_Outline } from "../icons/Essential/InfoCircle";
import { TextareaProps } from "./index.types";

export const textareaVariants = tv(
  {
    slots: {
      root: "group relative rounded-sm border transition-colors has-[textarea:disabled]:[&,&_*]:cursor-not-allowed",
      textarea: "h-full w-full resize-none bg-transparent px-4 outline-none",
      label:
        "group-focus-within:text-caption-md data-[has-value=true]:text-caption-md pointer-events-none absolute -translate-y-1/2 px-1 leading-none transition-all select-none group-focus-within:-top-1 data-[has-value=true]:-top-1 rtl:right-4",
      errorWrapper: "text-status-error mt-1 flex items-center gap-1",
      errorIcon: "size-4",
      errorMessage: "text-caption-sm font-normal",
    },
    variants: {
      size: {
        sm: {
          root: "text-caption-md",
          textarea: "text-caption-md py-1",
          label: "top-3",
        },
        md: {
          root: "text-body-sm",
          textarea: "py-2",
          label: "top-4",
        },
        lg: {
          root: "text-body-sm",
          textarea: "py-3",
          label: "top-5",
        },
        xl: {
          root: "text-body-sm",
          textarea: "py-4",
          label: "top-6",
        },
      },
      mode: {
        light: {
          root: [
            "border-neutral-gray-7 not-[:focus-within]:data-[has-value=false]:not-[:has(textarea:disabled)]:data-[error=false]:hover:border-neutral-gray-1",
            "focus-within:border-primary",
            "data-[has-value=true]:not-[:focus-within]:data-[error=false]:not-[:has(textarea:disabled)]:border-neutral-gray-1",
            "has-[textarea:disabled]:border-neutral-gray-7",
            "data-[error=true]:border-status-error",
          ],
          label: [
            "bg-[var(--label-bg,var(--color-neutral-black))]",
            "text-neutral-gray-4 group-[:not(:focus-within)]:data-[has-value=false]:group-[:not(:has(textarea:disabled))]:data-[error=false]:group-hover:text-neutral-gray-1",
            "group-focus-within:text-primary",
            "data-[has-value=true]:group-[:not(:focus-within)]:data-[error=false]:group-[:not(:has(textarea:disabled))]:text-neutral-gray-1",
            "group-[:has(textarea:disabled)]:text-neutral-gray-7",
            "data-[error=true]:text-status-error",
          ],
          textarea: "text-neutral-gray-1 disabled:text-neutral-gray-7",
        },
        dark: {
          root: [
            "border-neutral-gray-4 not-[:focus-within]:data-[has-value=false]:not-[:has(textarea:disabled)]:data-[error=false]:hover:border-neutral-gray-8",
            "focus-within:border-primary",
            "data-[has-value=true]:not-[:focus-within]:data-[error=false]:border-neutral-gray-8",
            "has-[textarea:disabled]:border-neutral-gray-4",
            "data-[error=true]:border-status-error",
          ],
          label: [
            "bg-[var(--label-bg,var(--color-neutral-white))]",
            "text-neutral-gray-7 group-[:not(:focus-within)]:data-[has-value=false]:group-[:not(:has(textarea:disabled))]:data-[error=false]:group-hover:text-neutral-gray-8",
            "group-focus-within:text-primary",
            "data-[has-value=true]:group-[:not(:focus-within)]:data-[error=false]:text-neutral-gray-8",
            "group-[:has(textarea:disabled)]:text-neutral-gray-4",
            "data-[error=true]:text-status-error",
          ],
        },
      },
    },
    defaultVariants: {
      mode: "dark",
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      mode = "dark",
      size = "md",
      label,
      className,
      onChange,
      value,
      error,
      containerProps,
      ...props
    },
    ref,
  ) => {
    const cns = textareaVariants({
      mode,
      size,
      className,
    });

    const input = (
      <div
        {...containerProps}
        data-has-value={!!value}
        aria-disabled={!!props.disabled}
        data-error={!!error}
        className={cns.root({ className: containerProps?.className })}
      >
        <textarea
          {...props}
          ref={ref}
          className={cns.textarea({ className })}
          onChange={(e) => {
            onChange?.(e, e.target.value);
          }}
          value={value}
          data-has-value={!!value}
          data-error={!!error}
        />
        {!!label && (
          <span
            className={cns.label()}
            data-has-value={!!value}
            aria-disabled={!!props.disabled}
            data-error={!!error}
          >
            {label}
          </span>
        )}
      </div>
    );

    if (error && typeof error === "string")
      return (
        <div>
          {input}
          <div className={cns.errorWrapper()}>
            <InfoCircle_Outline className={cns.errorIcon()} />
            <p className={cns.errorMessage()}>{error}</p>
          </div>
        </div>
      );

    return input;
  },
);
Textarea.displayName = "Input";

export default Textarea;
