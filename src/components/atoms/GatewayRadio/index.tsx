"use client";

import { CustomRadio } from "@/components/atoms/CustomRadio";
import Image from "next/image";
import { GatewayRadioProps } from "./index.types";

function GatewayRadio({ gateway, onChecked, ...props }: GatewayRadioProps) {
  return (
    <CustomRadio
      {...props}
      name="paymentGateway"
      key={gateway.name}
      value={gateway.name}
      onChange={(e) => e.target.checked && onChecked?.(e.target.value)}
    >
      <div className="border-neutral-gray-4 peer-checked:border-primary relative size-16 cursor-pointer rounded-sm border grayscale transition-all peer-checked:grayscale-0 hover:grayscale-0 lg:size-24">
        <Image
          src={gateway.image}
          alt={gateway.name}
          fill
          className="object-cover object-center"
        />
      </div>
    </CustomRadio>
  );
}

export default GatewayRadio;
