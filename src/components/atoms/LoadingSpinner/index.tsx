import { twMerge } from "@/lib/tailwind-merge";
import { LoadingSpinnerProps } from "./index.types";

const LoadingSpinner = ({ className, ...props }: LoadingSpinnerProps) => {
  return (
    <span
      {...props}
      className={twMerge(
        "border-primary inline-block size-6 border-2 duration-500",
        className,
        "animate-spin rounded-full border-t-transparent",
      )}
    />
  );
};

export default LoadingSpinner;
