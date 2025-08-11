import {
  DistributedMerge,
  PropsWithAsChild,
  UnwrapLiteralUnion,
} from "@/types/utils";
import { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";
import { Except, Merge } from "type-fest";
import { InputProps } from "../Input/index.types";
import { InputOTPProps } from "../InputOTP/index.types";

export type FieldContextType = { color: InputProps["color"] };

export type FieldRootProps = PropsWithAsChild<
  Merge<
    ComponentProps<"div">,
    {
      color?: InputProps["color"];
    }
  >
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

export type FieldDescriptionProps = PropsWithAsChild<ComponentProps<"p">>;

export type FieldErrorMessageProps = Merge<
  FieldDescriptionProps,
  {
    icon?: ReactNode;
  }
>;

export type FieldSuccessMessageProps = Merge<
  FieldDescriptionProps,
  {
    icon?: ReactNode;
  }
>;

type FieldSharedProps = {
  description?: ReactNode;
  error?: string;
  success?: string;
  rootClassName?: string;
  descriptionClassName?: string;
};

export type FieldTextTypeProps = Merge<
  FieldInputTextTypeProps,
  FieldSharedProps
>;
export type FieldOTPTypeProps = Merge<FieldInputOTPTypeProps, FieldSharedProps>;

export type FieldProps = Except<
  DistributedMerge<FieldInputProps, FieldSharedProps>,
  "children"
>;
