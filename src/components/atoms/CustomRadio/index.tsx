import { twMerge } from "@/lib/tailwind-merge";
import { CustomRadioIndicatorProps, CustomRadioProps } from "./index.types";

export const CustomRadio = ({
  children,
  labelClassName,
  ...props
}: CustomRadioProps) => {
  return (
    <label className={twMerge("group/custom-radio", labelClassName)}>
      <input
        {...props}
        type="radio"
        hidden
        className={twMerge(props.className, "peer h-0 w-0 appearance-none")}
      />
      {typeof children === "function"
        ? children({ checked: props.checked })
        : children}
    </label>
  );
};

export const CustomRadioIndicator = ({
  className,
  ...props
}: CustomRadioIndicatorProps) => {
  return (
    <span
      {...props}
      className={twMerge(
        "ring-neutral-gray-4 group-has-checked/custom-radio:bg-status-success-l size-3 rounded-full ring ring-offset-1",
        className,
      )}
    />
  );
};
