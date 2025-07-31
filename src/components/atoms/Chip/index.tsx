import { tv } from "@/lib/tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { Check_Outline } from "../icons/Essential/Check";
import { ChipProps } from "./index.types";

export const chipVariants = tv({
  slots: {
    root: [
      "group disabled:bg-neutral-gray-1 disabled:text-neutral-gray-4 relative inline-flex h-6 items-center gap-1 overflow-hidden rounded-lg px-2 transition-colors focus:outline-none disabled:cursor-not-allowed lg:h-8 lg:rounded-full",
    ],
    effect:
      "bg-neutral-gray-4 group-focus:animate-click ease absolute top-1/2 left-1/2 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full",
    text: "text-caption-sm lg:text-button-lg relative font-normal",
    icon: "relative size-3 lg:size-4",
    check_icon: "relative size-3 lg:size-4",
  },
  variants: {
    selected: {
      true: {
        root: "bg-primary-tint-1 text-primary",
      },
      false: {
        root: "bg-neutral-gray-3 text-neutral-gray-8",
      },
    },
  },
});

const Chip = ({
  className,
  icon,
  selected = false,
  children,
  ...props
}: ChipProps) => {
  const cns = chipVariants({ selected });

  return (
    <button {...props} className={cns.root({ className })}>
      <span className={cns.effect()} />
      {selected && <Check_Outline className={cns.check_icon()} />}
      <span className={cns.text()}>{children}</span>

      <Slot className={cns.icon()}>{icon}</Slot>
    </button>
  );
};

export default Chip;
