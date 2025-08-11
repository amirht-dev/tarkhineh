import { DistributedMerge } from "@/types/utils";
import { ArrayValues, DistributedOmit, Merge } from "type-fest";
import { INPUT_COLORS } from "../Input/index.constants";
import { INPUT_OTP_GROUP_VARIANTS } from "./index.constants";

type OTPInputBaseProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: unknown[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
  }
>;

export type InputOTPContextType = {
  color: ArrayValues<typeof INPUT_COLORS>;
  fullWidth: boolean;
};

export type InputOTPRootProps = Merge<
  OTPInputBaseProps,
  {
    containerClassName?: string;
    color?: ArrayValues<typeof INPUT_COLORS>;
    fullWidth?: boolean;
  }
>;

export type InputOTPGroupProps = Merge<
  React.ComponentProps<"div">,
  {
    variant?: ArrayValues<typeof INPUT_OTP_GROUP_VARIANTS>;
  }
>;

export type InputOTPSlotProps = Merge<
  React.ComponentProps<"div">,
  {
    index: number;
  }
>;

export type InputOTPSeparatorProps = React.ComponentProps<"div">;

export type InputOTPProps = DistributedMerge<
  DistributedMerge<
    DistributedOmit<InputOTPRootProps, "maxLength">,
    Pick<InputOTPGroupProps, "variant">
  >,
  {
    slots?: number[];
    separator?: boolean;
    groupClassName?: string;
    slotClassName?: string;
  }
>;
