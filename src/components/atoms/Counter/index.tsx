"use client";

import { tv } from "@/lib/tailwind-variants";
import { localizeNumber } from "@/utils";
import { Trash_Outline } from "../icons/Essential/Trash";
import { Skeleton } from "../Skeleton";
import { CounterProps, CounterSkeletonProps } from "./index.types";

const counterBaseVariants = tv({
  slots: {
    root: "inline-flex h-8 rounded-sm",
  },
  variants: {
    variant: {
      fill: {},
      outline: {},
      text: {},
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});

export const counterVariants = tv({
  extend: counterBaseVariants,
  slots: {
    root: "items-center gap-2 px-1",
    count: "text-body-sm",
    inc_dec: "text-body-xl",
    delete_button: "[&_svg]:size-4",
  },
  variants: {
    variant: {
      fill: {
        root: "bg-primary-tint-1 text-primary",
      },
      outline: {
        root: "border-primary text-primary border",
      },
      text: {
        root: "text-primary",
      },
    },
  },
});

const Counter = ({
  value,
  variant = "fill",
  wrapperClassName,
  onIncrement,
  onDecrement,
  onDelete,
}: CounterProps) => {
  const cns = counterVariants({ variant });

  return (
    <div className={cns.root({ className: wrapperClassName })}>
      <button
        className={cns.inc_dec()}
        onClick={() => onIncrement?.(value + 1)}
      >
        +
      </button>
      <span className={cns.count()}>{localizeNumber(value)}</span>
      {value === 1 ? (
        <button className={cns.delete_button()} onClick={() => onDelete?.()}>
          <Trash_Outline />
        </button>
      ) : (
        <button
          className={cns.inc_dec()}
          onClick={() => onDecrement?.(value - 1)}
        >
          -
        </button>
      )}
    </div>
  );
};

export default Counter;

const counterSkeletonVariants = tv({
  extend: counterBaseVariants,
});

export const CounterSkeleton = ({
  className,
  ...props
}: CounterSkeletonProps) => {
  const cns = counterSkeletonVariants();
  return <Skeleton {...props} className={cns.root({ className })} />;
};
