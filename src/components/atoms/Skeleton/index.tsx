import { twMerge } from "@/lib/tailwind-merge";
import { PropsWithComponentPropsWithRef } from "@/types/utils";

function Skeleton({
  className,
  type = "box",
  size = "box",
  ...props
}: PropsWithComponentPropsWithRef<
  "div",
  {
    type?: "text" | "box";
    size?: "text" | "box";
  }
>) {
  return (
    <div
      data-slot="skeleton"
      className={twMerge(
        "animate-pulse rounded-md",
        type === "text"
          ? "text-neutral-gray-3 h-[1em]"
          : "bg-neutral-gray-3 h-full",
        size === "text" ? "h-[1em]" : "h-full",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
