import {
  DistributedMerge,
  PropsWithAsChild,
  UnwrapLiteralUnion,
} from "@/types/utils";
import { ComponentProps, HTMLInputTypeAttribute } from "react";
import { Merge } from "type-fest";
import { InputProps } from "../Input/index.types";
import { InputOTPProps } from "../InputOTP/index.types";

export type FieldContextType = { error: boolean };

export type FieldRootProps = PropsWithAsChild<
  Merge<ComponentProps<"div">, { error?: boolean }>
>;

export type FieldInputTextTypeProps = Merge<
  InputProps,
  {
    type?: UnwrapLiteralUnion<HTMLInputTypeAttribute, string>;
  }
>;

export type FieldInputOTPTypeProps = Merge<
  InputOTPProps,
  {
    type: "otp";
  }
>;

export type FieldInputProps = FieldInputTextTypeProps | FieldInputOTPTypeProps;

export type FieldErrorMessageProps = PropsWithAsChild<ComponentProps<"p">>;

type FieldSharedProps = {
  error?: boolean | string;
  rootClassName?: string;
  errorMessageClassName?: string;
};

export type FieldTextTypeProps = Merge<
  FieldInputTextTypeProps,
  FieldSharedProps
>;
export type FieldOTPTypeProps = Merge<FieldInputOTPTypeProps, FieldSharedProps>;

export type FieldProps = DistributedMerge<FieldInputProps, FieldSharedProps>;
