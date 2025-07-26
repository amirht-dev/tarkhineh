import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { CheckboxProps } from "./index.types";

const shareClassNames =
  "size-6 peer-disabled:opacity-50 transition-opacity peer-disabled:cursor-not-allowed";

const Checkbox = ({
  checkedIcon,
  uncheckedIcon,
  labelProps,
  ...props
}: CheckboxProps) => {
  return (
    <label {...labelProps}>
      <input
        {...props}
        type="checkbox"
        hidden
        className="peer appearance-none"
      />
      <Slot
        className={twMerge(
          "peer-not-checked:hidden",
          shareClassNames,
          props.className,
        )}
      >
        {checkedIcon}
      </Slot>
      <Slot
        className={twMerge(
          "peer-checked:hidden",
          shareClassNames,
          props.className,
        )}
      >
        {uncheckedIcon}
      </Slot>
    </label>
  );
};

export default Checkbox;
