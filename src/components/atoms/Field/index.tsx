"use client";

import { twMerge } from "@/lib/tailwind-merge";
import { createCTX } from "@/utils/clientHelpers";
import { Slot } from "@radix-ui/react-slot";
import { InfoCircle_Outline } from "../icons/Essential/InfoCircle";
import Input from "../Input";
import InputOTP from "../InputOTP";
import {
  FieldContextType,
  FieldErrorMessageProps,
  FieldInputProps,
  FieldProps,
  FieldRootProps,
} from "./index.types";

const { context: FieldContext, hook: useFieldContext } =
  createCTX<FieldContextType>("Field");

const FieldRoot = ({ asChild, error = false, ...props }: FieldRootProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <FieldContext.Provider value={{ error }}>
      <Comp {...props} />
    </FieldContext.Provider>
  );
};

const FieldInput = (props: FieldInputProps) => {
  const { error } = useFieldContext();

  if (props.type === "otp") return <InputOTP error={error} {...props} />;
  return <Input error={error} {...props} />;
};

const FieldErrorMessage = ({ children, ...props }: FieldErrorMessageProps) => {
  const { error } = useFieldContext();

  if (!error) return null;

  return (
    <div
      {...props}
      className={twMerge(
        "text-status-error mt-1 flex items-center gap-1",
        props.className,
      )}
    >
      <InfoCircle_Outline className="size-4" />
      <p className="text-caption-sm font-normal">{children}</p>
    </div>
  );
};

export default function Field({
  error,
  rootClassName,
  errorMessageClassName,
  ...props
}: FieldProps) {
  return (
    <FieldRoot error={!!error} className={rootClassName}>
      <FieldInput {...props} />
      {typeof error === "string" && (
        <FieldErrorMessage className={errorMessageClassName}>
          {error}
        </FieldErrorMessage>
      )}
    </FieldRoot>
  );
}

export { FieldRoot as Field, FieldErrorMessage, FieldInput };
