import { OTPInput } from "input-otp";
import { ComponentProps } from "react";
import { ArrayValues, Except, Merge } from "type-fest";
import { InputOTP, InputOTPGroup } from ".";
import { INPUT_OTP_GROUP_VARIANTS } from "./index.constants";

export type InputOTPContextType = {
  error: boolean;
  fullWidth: boolean;
};

export type InputOTPRootProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  error?: boolean;
  fullWidth?: boolean;
};

export type InputOTPGroupProps = React.ComponentProps<"div"> & {
  variant?: ArrayValues<typeof INPUT_OTP_GROUP_VARIANTS>;
};

export type InputOTPSlotProps = React.ComponentProps<"div"> & {
  index: number;
};

export type InputOTPSeparatorProps = React.ComponentProps<"div">;

export type InputOTPProps = Merge<
  Except<ComponentProps<typeof InputOTP>, "render" | "maxLength"> &
    Pick<ComponentProps<typeof InputOTPGroup>, "variant">,
  {
    slots: number[];
    separator?: boolean;
    groupClassName?: string;
    slotClassName?: string;
  }
>;
