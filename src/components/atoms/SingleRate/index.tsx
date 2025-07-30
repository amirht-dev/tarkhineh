import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import clamp from "lodash/clamp";
import { ComponentProps, CSSProperties } from "react";
import { Star_Bold, Star_Outline } from "../icons/Support-Like-Question/Star";
import { Skeleton } from "../Skeleton";
import { SingleRateProps } from "./index.types";

const SingleRate = ({
  fillIcon = <Star_Bold className="text-status-warning-l" />,
  emptyIcon = <Star_Outline className="text-status-warning-l" />,
  value,
  containerProps,
  className,
  direction = "x",
}: SingleRateProps) => {
  return (
    <div
      {...containerProps}
      className={twMerge(
        "relative aspect-square size-6",
        containerProps?.className,
      )}
    >
      <Slot className={twMerge("absolute h-full w-full", className)}>
        {emptyIcon}
      </Slot>

      <Slot
        className={twMerge(
          "absolute h-full w-full transition-all data-[direction=x]:[clip-path:polygon(0%_0%,var(--progress)_0%,var(--progress)_100%,0%_100%)] data-[direction=y]:[clip-path:polygon(100%_100%,0%_100%,0%_calc(100%-var(--progress)),100%_calc(100%-var(--progress)))] data-[direction=x]:rtl:[clip-path:polygon(100%_0%,100%_100%,calc(100%-var(--progress))_100%,calc(100%-var(--progress))_0%)]",
          className,
        )}
        data-direction={direction}
        style={
          {
            "--progress": `${clamp(value * 100, 0, 100)}%`,
          } as CSSProperties
        }
      >
        {fillIcon}
      </Slot>
    </div>
  );
};

export default SingleRate;

export const SingleRateSkeleton = (props: ComponentProps<"div">) => (
  <Skeleton
    {...props}
    className={twMerge("size-6", props.className)}
    type="text"
  >
    <Star_Bold className="size-[inherit]" />
  </Skeleton>
);
