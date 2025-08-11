"use client";

import { twMerge } from "@/lib/tailwind-merge";
import { tv } from "@/lib/tailwind-variants";
import { lastIndex } from "@/utils";
import { createCTX } from "@/utils/clientHelpers";
import { OTPInput, OTPInputContext } from "input-otp";
import sum from "lodash/sum";
import * as React from "react";
import { Minus_Outline } from "../icons/Essential/Minus";
import {
  InputOTPContextType,
  InputOTPGroupProps,
  InputOTPProps,
  InputOTPRootProps,
  InputOTPSeparatorProps,
  InputOTPSlotProps,
} from "./index.types";

const { context: InputOTPContext, hook: useInputOTPContext } =
  createCTX<InputOTPContextType>("InputOTP");

function InputOTPRoot({
  className,
  containerClassName,
  color = "dark",
  fullWidth = false,
  children,
  ...props
}: InputOTPRootProps) {
  return (
    <InputOTPContext value={{ color, fullWidth }}>
      <OTPInput
        data-slot="input-otp"
        containerClassName={twMerge(
          "flex items-center gap-2 group/root",
          !fullWidth && "w-fit",
          containerClassName,
        )}
        className={twMerge("disabled:cursor-not-allowed", className)}
        {...props}
      >
        {children}
      </OTPInput>
    </InputOTPContext>
  );
}

function InputOTPGroup({
  className,
  variant = "separate",
  ...props
}: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      data-variant={variant}
      className={twMerge(
        "group/slotsGroup flex flex-1 items-center",
        variant === "separate" && "gap-2",
        className,
      )}
      {...props}
    />
  );
}

const inputOTPSlotVariants = tv({
  slots: {
    slot: [
      "relative flex h-8 items-center justify-center shadow-xs transition-all outline-none data-[active=true]:z-10 lg:h-10",
      "text-caption-md lg:text-body-sm group-has-disabled/root:text-neutral-gray-4",
      "group-data-[variant=separate]/slotsGroup:rounded-sm group-data-[variant=sticky]/slotsGroup:first:rounded-s-sm group-data-[variant=sticky]/slotsGroup:last:rounded-e-sm",
      [
        "group-has-disabled/root:border-neutral-gray-4",
        ["group-data-[variant=separate]/slotsGroup:border"],
        [
          "group-data-[variant=sticky]/slotsGroup:border-y group-data-[variant=sticky]/slotsGroup:border-e group-data-[variant=sticky]/slotsGroup:first:border-s",
        ],
      ],
      "data-[active=true]:ring-[3px]",
    ],
    caret:
      "animate-caret-blink data-[error=true]:group-not-has-disabled/root:bg-status-error h-4 w-px duration-1000",
  },
  variants: {
    fullWidth: {
      true: {
        slot: "flex-1",
      },
      false: {
        slot: "w-12 lg:w-14",
      },
    },
    color: {
      dark: {
        slot: "text-neutral-gray-8 border-neutral-gray-7 hover:border-neutral-gray-8 data-[active=true]:border-primary ring-primary",
        caret: "bg-neutral-gray-8",
      },
      light: "",
      primary: {
        slot: "text-primary border-primary hover:border-primary-shade-2",
        caret: "bg-primary",
      },
      error: {
        slot: "text-status-error border-status-error hover:border-status-error",
        caret: "bg-status-error",
      },
      success: {
        slot: "text-status-success border-status-success hover:border-status-success",
        caret: "bg-status-success",
      },
      warning: {
        slot: "text-status-warning border-status-warning hover:border-status-warning",
        caret: "bg-status-warning",
      },
    },
  },
});

function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const { color, fullWidth } = useInputOTPContext();

  const cns = inputOTPSlotVariants({ color, fullWidth });

  return (
    <div
      data-slot="input-otp-slot"
      data-color={color}
      data-active={isActive}
      className={cns.slot({ className })}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className={cns.caret()} />
        </div>
      )}
    </div>
  );
}

const InputOTPSeparatorVariants = tv({
  base: "group-has-disabled/root:text-neutral-gray-4",
  variants: {
    color: {
      dark: "text-neutral-gray-8",
      light: "",
      primary: "text-primary",
      error: "text-status-error",
      success: "text-status-success",
      warning: "text-status-warning",
    },
  },
});

function InputOTPSeparator(props: InputOTPSeparatorProps) {
  const { color } = useInputOTPContext();

  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      {...props}
      className={InputOTPSeparatorVariants({ color })}
    >
      <Minus_Outline />
    </div>
  );
}

export default function InputOTP({
  slots = [5],
  separator,
  groupClassName,
  slotClassName,
  variant,
  ...props
}: InputOTPProps) {
  let index = 0;

  return (
    <InputOTPRoot {...props} maxLength={sum(slots)}>
      {slots.map((groupSlotsCount, groupIdx) => (
        <>
          <InputOTPGroup
            key={groupIdx}
            className={groupClassName}
            variant={variant}
          >
            {Array.from({ length: groupSlotsCount }, (_, idx) => (
              <InputOTPSlot
                index={index++}
                key={idx}
                className={slotClassName}
              />
            ))}
          </InputOTPGroup>
          {separator && groupIdx !== lastIndex(slots) && <InputOTPSeparator />}
        </>
      ))}
    </InputOTPRoot>
  );
}

export {
  InputOTPRoot as InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
};
