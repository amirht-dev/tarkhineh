import { tv } from "@/lib/tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { InfoCircle_Outline } from "../icons/Essential/InfoCircle";
import { InputProps } from "./index.types";

export const inputVariants = tv(
  {
    slots: {
      root: "group flex items-center gap-1 rounded-sm border px-4 transition-colors has-[input:disabled]:[&,&_*]:cursor-not-allowed",
      icon: "shrink-0 transition-colors",
      inputLabelWrapper: "relative flex-1",
      input: "w-full border-none bg-transparent outline-none",
      label:
        "group-focus-within:text-caption-md data-[has-value=true]:text-caption-md pointer-events-none absolute -translate-y-1/2 px-1 leading-none transition-all select-none rtl:top-1/2 rtl:right-0",
      errorWrapper: "text-status-error mt-1 flex items-center gap-1",
      errorIcon: "size-4",
      errorMessage: "text-caption-sm font-normal",
    },
    variants: {
      size: {
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
      mode: {
        light: {
          root: [
            "border-neutral-gray-7 not-[:focus-within]:data-[has-value=false]:not-[:has(input:disabled)]:data-[error=false]:hover:border-neutral-gray-1",
            "focus-within:border-primary",
            "data-[has-value=true]:not-[:focus-within]:data-[error=false]:not-[:has(input:disabled)]:border-neutral-gray-1",
            "has-[input:disabled]:border-neutral-gray-7",
            "data-[error=true]:border-status-error",
          ],
          label: [
            "bg-[var(--label-bg,var(--color-neutral-black))]",
            "text-neutral-gray-4 group-[:not(:focus-within)]:data-[has-value=false]:group-[:not(:has(input:disabled))]:data-[error=false]:group-hover:text-neutral-gray-1",
            "group-focus-within:text-primary",
            "data-[has-value=true]:group-[:not(:focus-within)]:data-[error=false]:group-[:not(:has(input:disabled))]:text-neutral-gray-1",
            "group-[:has(input:disabled)]:text-neutral-gray-7",
            "data-[error=true]:text-status-error",
          ],
          icon: [
            "text-neutral-gray-4 group-hover:text-neutral-gray-1",
            "group-focus-within:text-neutral-gray-1",
            "data-[has-value=true]:text-neutral-gray-1",
            "group-[:has(input:disabled)]:text-neutral-gray-7",
          ],
          input: "text-neutral-gray-1 disabled:text-neutral-gray-7",
        },
        dark: {
          root: [
            "border-neutral-gray-4 not-[:focus-within]:data-[has-value=false]:not-[:has(input:disabled)]:data-[error=false]:hover:border-neutral-gray-8",
            "focus-within:border-primary",
            "data-[has-value=true]:not-[:focus-within]:data-[error=false]:border-neutral-gray-8",
            "has-[input:disabled]:border-neutral-gray-4",
            "data-[error=true]:border-status-error",
          ],
          label: [
            "bg-[var(--label-bg,var(--color-neutral-white))]",
            "text-neutral-gray-7 group-[:not(:focus-within)]:data-[has-value=false]:group-[:not(:has(input:disabled))]:data-[error=false]:group-hover:text-neutral-gray-8",
            "group-focus-within:text-primary",
            "data-[has-value=true]:group-[:not(:focus-within)]:data-[error=false]:text-neutral-gray-8",
            "group-[:has(input:disabled)]:text-neutral-gray-4",
            "data-[error=true]:text-status-error",
          ],
          icon: [
            "text-neutral-gray-7 group-hover:text-neutral-gray-8",
            "group-focus-within:text-neutral-gray-8",
            "data-[has-value=true]:text-neutral-gray-8",
            "group-[:has(input:disabled)]:text-neutral-gray-4",
          ],
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
    ],
    defaultVariants: {
      mode: "dark",
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      mode = "dark",
      size = "md",
      prefixIcon,
      suffixIcon,
      className,
      onChange,
      value,
      error,
      ...props
    },
    ref,
  ) => {
    const cns = inputVariants({
      mode,
      size,
      className,
    });

    const input = (
      <div
        className={cns.root()}
        data-has-value={!!value}
        data-has-prefix-icon={!!prefixIcon}
        aria-disabled={!!props.disabled}
        data-error={!!error}
      >
        <Slot
          className={cns.icon()}
          data-has-value={!!value}
          aria-disabled={!!props.disabled}
          data-error={!!error}
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
            data-error={!!error}
          />
          <span
            className={cns.label()}
            data-has-value={!!value}
            data-has-prefix-icon={!!prefixIcon}
            aria-disabled={!!props.disabled}
            data-error={!!error}
          >
            رمز عبور
          </span>
        </div>
        <Slot
          className={cns.icon()}
          data-has-value={!!value}
          aria-disabled={!!props.disabled}
          data-error={!!error}
        >
          {suffixIcon}
        </Slot>
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
Input.displayName = "Input";

export default Input;
