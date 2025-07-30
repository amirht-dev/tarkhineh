import { tv } from "@/lib/tailwind-variants";
import { Star_Bold, Star_Outline } from "../icons/Support-Like-Question/Star";
import { Skeleton } from "../Skeleton";
import { RattingProps, RattingSkeletonProps } from "./index.types";

const rattingBaseVariants = tv({
  slots: {
    root: "inline-flex",
    button: "",
    icon: "size-6",
  },
});

const rattingVariants = tv(
  {
    extend: rattingBaseVariants,
    variants: {
      readonly: {
        true: {
          button: "cursor-default",
        },
        false: {
          button: "cursor-pointer",
        },
      },
      disabled: {
        true: {
          icon: "text-neutral-gray-4 cursor-not-allowed",
        },
        false: {
          icon: "text-status-warning-l",
        },
      },
    },
    defaultVariants: {
      readonly: false,
      disabled: false,
    },
  },
  {
    twMerge: true,
  },
);

const Ratting = ({
  count = 5,
  value,
  onChange,
  readonly,
  disabled,
  containerClassName,
  buttonClassName,
  iconClassName,
}: RattingProps) => {
  const changeHandler = (value: number) => {
    if (readonly || disabled) return;
    onChange?.(value);
  };
  const cns = rattingVariants({ readonly, disabled });

  return (
    <div className={cns.root({ className: containerClassName })}>
      {Array.from({ length: count }, (_, idx) => {
        const number = idx + 1;

        const isActive = number <= value;

        const Icon = isActive ? Star_Bold : Star_Outline;

        return (
          <button
            data-state={isActive ? "active" : "disactive"}
            className={cns.button({ className: buttonClassName })}
            key={number}
            onClick={() => changeHandler(number)}
          >
            <Icon
              className={cns.icon({ className: iconClassName })}
              data-state={isActive ? "active" : "disactive"}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Ratting;

const rattingSkeletonVariants = tv(
  {
    extend: rattingBaseVariants,
  },
  {
    twMerge: true,
  },
);

export const RattingSkeleton = ({
  count = 5,
  containerClassName,
  skeletonClassName,
  iconClassName,
}: RattingSkeletonProps) => {
  const cns = rattingSkeletonVariants();
  return (
    <div className={cns.root({ className: containerClassName })}>
      {Array.from({ length: count }, (_, idx) => {
        return (
          <Skeleton type="text" key={idx} className={skeletonClassName}>
            <Star_Bold className={cns.icon({ className: iconClassName })} />
          </Skeleton>
        );
      })}
    </div>
  );
};
