"use client";

import { twMerge } from "@/lib/tailwind-merge";
import { tv } from "@/lib/tailwind-variants";
import { createCTX } from "@/utils/clientHelpers";
import { Slot } from "@radix-ui/react-slot";
import { CheckCircle_Outline } from "../icons/Essential/CheckCircle";
import { InfoCircle_Outline } from "../icons/Essential/InfoCircle";
import Input from "../Input";
import InputOTP from "../InputOTP";
import {
  FieldContextType,
  FieldDescriptionProps,
  FieldErrorMessageProps,
  FieldInputProps,
  FieldProps,
  FieldRootProps,
  FieldSuccessMessageProps,
} from "./index.types";

const { context: FieldContext, hook: useFieldContext } =
  createCTX<FieldContextType>("Field");

const FieldRoot = ({ asChild, color = "dark", ...props }: FieldRootProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <FieldContext.Provider value={{ color }}>
      <Comp {...props} />
    </FieldContext.Provider>
  );
};

const FieldInput = (props: FieldInputProps) => {
  const { color } = useFieldContext();

  if (props.type === "otp")
    return <InputOTP color={props.color ?? color} {...props} />;
  return <Input color={props.color ?? color} {...props} />;
};

const fieldDescriptionVariants = tv({
  base: "text-caption-sm mt-1 font-normal",
  variants: {
    color: {
      dark: "text-neutral-gray-6",
      light: "",
      primary: "text-primary",
      error: "text-status-error",
      success: "text-status-success",
      warning: "text-status-warning",
    },
  },
});

const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  const { color } = useFieldContext();

  return (
    <p {...props} className={fieldDescriptionVariants({ color, className })} />
  );
};

const FieldErrorMessage = ({
  children,
  icon = <InfoCircle_Outline />,
  className,
  ...props
}: FieldErrorMessageProps) => {
  return (
    <FieldDescription
      {...props}
      className={twMerge("flex items-center gap-1", className)}
    >
      <Slot className="size-4">{icon}</Slot>
      {children}
    </FieldDescription>
  );
};

const FieldSuccessMessage = ({
  children,
  icon = <CheckCircle_Outline />,
  className,
  ...props
}: FieldSuccessMessageProps) => {
  return (
    <FieldDescription
      {...props}
      className={twMerge("flex items-center gap-1", className)}
    >
      <Slot className="size-4">{icon}</Slot>
      {children}
    </FieldDescription>
  );
};

export default function Field({
  color = "dark",
  description,
  rootClassName,
  descriptionClassName,
  error,
  success,
  ...props
}: FieldProps) {
  return (
    <FieldRoot
      color={!!error ? "error" : !!success ? "success" : color}
      className={rootClassName}
    >
      <FieldInput {...props} />
      {!!error ? (
        <FieldErrorMessage>{error}</FieldErrorMessage>
      ) : !!success ? (
        <FieldSuccessMessage>{success}</FieldSuccessMessage>
      ) : (
        description && (
          <FieldDescription className={descriptionClassName}>
            {description}
          </FieldDescription>
        )
      )}
    </FieldRoot>
  );
}

export {
  FieldRoot as Field,
  FieldDescription,
  FieldErrorMessage,
  FieldInput,
  FieldSuccessMessage,
};
