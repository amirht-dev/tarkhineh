import { paymentGateways } from "@/constants";
import { ComponentProps } from "react";
import { ArrayValues, Except } from "type-fest";
import { CustomRadio } from "../CustomRadio";

export type GatewayRadioProps = Except<
  ComponentProps<typeof CustomRadio> & {
    gateway: ArrayValues<typeof paymentGateways>;
    onChecked?: (value: string) => void;
  },
  "children"
>;
