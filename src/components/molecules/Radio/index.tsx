import {
  CustomRadio,
  CustomRadioIndicator,
} from "@/components/atoms/CustomRadio";
import { Slot } from "@radix-ui/react-slot";
import { RadioProps } from "./index.types";

function Radio({ label, subLabel, icon, ...props }: RadioProps) {
  return (
    <CustomRadio {...props}>
      <div className="text-neutral-gray-7 flex items-center gap-2">
        <CustomRadioIndicator className="mt-0.5" />

        <div className="lg:flex lg:flex-col">
          <span className="text-caption-md lg:text-body-sm">{label}</span>
          <span className="text-caption-sm font-normal max-lg:hidden">
            {subLabel}
          </span>
        </div>

        <Slot className="size-4 lg:size-6">{icon}</Slot>
      </div>
    </CustomRadio>
  );
}

export default Radio;
