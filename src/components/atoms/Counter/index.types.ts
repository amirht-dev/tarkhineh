import { VariantProps } from "tailwind-variants";
import { counterVariants } from ".";
import { ComponentProps } from "react";
import { Skeleton } from "../Skeleton";

export type SharedCounterProps = {
  wrapperClassName?: string;
};

export type CounterProps = {
  value: number;
  onIncrement?: (value: number) => void;
  onDecrement?: (value: number) => void;
  onDelete?: () => void;
} & SharedCounterProps &
  VariantProps<typeof counterVariants>;

export type CounterSkeletonProps = ComponentProps<typeof Skeleton>;
