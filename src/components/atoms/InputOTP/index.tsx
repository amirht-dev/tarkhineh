"use client";

import { twMerge } from "@/lib/tailwind-merge";
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
  error = false,
  fullWidth = false,
  ...props
}: InputOTPRootProps) {
  return (
    <InputOTPContext value={{ error, fullWidth }}>
      <OTPInput
        data-slot="input-otp"
        containerClassName={twMerge(
          "flex items-center gap-2 group/root",
          !fullWidth && "w-fit",
          containerClassName,
        )}
        className={twMerge("disabled:cursor-not-allowed", className)}
        {...props}
      />
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

function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const { error, fullWidth } = useInputOTPContext();

  return (
    <div
      data-slot="input-otp-slot"
      data-error={error}
      data-active={isActive}
      className={twMerge(
        "relative flex h-8 items-center justify-center shadow-xs transition-all outline-none data-[active=true]:z-10 lg:h-10",
        fullWidth ? "flex-1" : "w-12 lg:w-14",
        // text
        "text-caption-md lg:text-body-sm text-neutral-gray-8 group-has-disabled/root:text-neutral-gray-4 data-[error=true]:group-not-has-disabled/root:text-status-error",
        // rounded
        "group-data-[variant=separate]/slotsGroup:rounded-sm group-data-[variant=sticky]/slotsGroup:first:rounded-s-sm group-data-[variant=sticky]/slotsGroup:last:rounded-e-sm",
        // border
        [
          "border-neutral-gray-7 hover:border-neutral-gray-8 data-[active=true]:border-primary group-has-disabled/root:border-neutral-gray-4 data-[error=true]:group-not-has-disabled/root:border-status-error",
          ["group-data-[variant=separate]/slotsGroup:border"],
          [
            "group-data-[variant=sticky]/slotsGroup:border-y group-data-[variant=sticky]/slotsGroup:border-e group-data-[variant=sticky]/slotsGroup:first:border-s",
          ],
        ],
        // ring
        "ring-primary data-[error=true]:ring-status-error data-[active=true]:ring-[3px]",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            data-error={error}
            className="animate-caret-blink bg-neutral-gray-8 data-[error=true]:group-not-has-disabled/root:bg-status-error h-4 w-px duration-1000"
          />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator(props: InputOTPSeparatorProps) {
  const { error } = useInputOTPContext();

  return (
    <div
      data-slot="input-otp-separator"
      data-error={error}
      role="separator"
      {...props}
      className={twMerge(
        "text-neutral-gray-8 group-has-disabled/root:text-neutral-gray-4 data-[error=true]:group-not-has-disabled/root:text-status-error",
        props.className,
      )}
    >
      <Minus_Outline />
    </div>
  );
}

export default function InputOTP({
  slots,
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
