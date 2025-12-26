import { tv } from "@/lib/tailwind-variants";
import { Skeleton } from "../Skeleton";
import { TagProps, TagSkeletonProps } from "./index.types";

const tagBaseVariants = tv({
  variants: {
    variant: {
      square: "rounded-sm",
      pill: "rounded-full",
    },

    size: {
      "16": "text-caption-sm h-4 px-2",
      "22": "text-caption-sm h-5.5 px-2",
      "26": "text-caption-md h-6.5 px-3",
      responsive:
        "text-caption-sm lg:text-caption-md h-5.5 px-2 lg:h-6.5 lg:px-3",
    },
  },
  defaultVariants: {
    variant: "square",
    size: "22",
  },
});

export const tagVariants = tv({
  extend: tagBaseVariants,
  base: "inline-flex items-center justify-center gap-1 font-normal text-nowrap [&_svg]:size-3 lg:[&_svg]:size-4",
  variants: {
    color: {
      primary: "text-primary bg-primary-tint-1",
      neutral: "text-neutral-gray-8 bg-neutral-gray-3",
      success: "bg-status-success-el text-status-success",
      warning: "bg-status-warning-el text-status-warning",
      error: "bg-status-error-el text-status-error",
    },
  },
  defaultVariants: {
    color: "primary",
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

export const tagSkeletonVariants = tv({
  extend: tagBaseVariants,
  base: "inline-block",
});

export const TagSkeleton = ({
  size = "22",
  variant = "square",
  className,
  ...props
}: TagSkeletonProps) => (
  <Skeleton
    {...props}
    className={tagSkeletonVariants({ size, variant, className })}
  />
);
