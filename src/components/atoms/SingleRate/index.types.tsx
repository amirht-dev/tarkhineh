import { ComponentPropsWithRef, ReactNode } from "react";

export type SingleRateProps = {
  fillIcon?: ReactNode;
  emptyIcon?: ReactNode;
  value: number;
  containerProps?: ComponentPropsWithRef<"div">;
  className?: string;
  direction?: "x" | "y";
};
