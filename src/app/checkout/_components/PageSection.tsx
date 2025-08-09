import { twMerge } from "@/lib/tailwind-merge";
import { ComponentProps } from "react";

function PageSection({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "border-neutral-gray-4 rounded-lg border p-4 lg:px-6",
        className,
      )}
    />
  );
}

export default PageSection;
