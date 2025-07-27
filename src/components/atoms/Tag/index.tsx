import { tv } from "@/lib/tailwind-variants";
import { TagProps } from "./index.types";

const tagVariants = tv({
  base: "inline-flex items-center justify-center font-normal",
  variants: {
    variant: {
      square: "rounded-sm",
      pill: "rounded-full",
    },
    color: {
      primary: "text-primary bg-primary-tint-1",
      neutral: "text-neutral-gray-8 bg-neutral-gray-3",
      success: "bg-status-success-el text-status-success",
      warning: "bg-status-warning-el text-status-warning",
      error: "bg-status-error-el text-status-error",
    },
    size: {
      "16": "text-caption-sm h-4 px-2",
      "22": "text-caption-sm h-5.5 px-2",
      "26": "text-caption-md h-6.5 px-3",
    },
  },
  defaultVariants: {
    variant: "square",
    color: "primary",
    size: "22",
  },
});

const Tag = ({
  className,
  variant = "square",
  color = "primary",
  size = "22",
  ...props
}: TagProps) => {
  return (
    <span
      {...props}
      className={tagVariants({ className, variant, color, size })}
    />
  );
};

export default Tag;
