"use client";

import { twMerge } from "@/lib/tailwind-merge";
import { createCTX } from "@/utils/clientHelpers";
import { OTPInput, OTPInputContext } from "input-otp";
import * as React from "react";
import { ArrayValues } from "type-fest";
import { Minus_Outline } from "../icons/Essential/Minus";
import { INPUT_OTP_GROUP_VARIANTS } from "./index.constants";
import { InputOTPContextType } from "./index.types";

const { context: InputOTPContext, hook: useInputOTPContext } =
  createCTX<InputOTPContextType>("InputOTP");

function InputOTP({
  className,
  containerClassName,
  error = false,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  error?: boolean;
}) {
  return (
    <InputOTPContext value={{ error }}>
      <OTPInput
        data-slot="input-otp"
        containerClassName={twMerge(
          "flex items-center gap-2 group/root",
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
}: React.ComponentProps<"div"> & {
  variant?: ArrayValues<typeof INPUT_OTP_GROUP_VARIANTS>;
}) {
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

function InputOTPSlot({
  index,
  className,
  fullWidth = false,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
  fullWidth?: boolean;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const { error } = useInputOTPContext();

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

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
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

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
