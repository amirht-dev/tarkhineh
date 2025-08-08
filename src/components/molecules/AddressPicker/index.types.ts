import { PropsWithComponentPropsWithRef } from "@/types/utils";

export type AddressValue = {
  position: Pick<L.LatLng, "alt" | "lat" | "lng" | "toString">;
  address: string;
};

export type AddressPickerOwnProps = {
  initialCenter?: L.LatLngLiteral | L.LatLngTuple;
  onChange?: (value: AddressValue) => void;
};

export type AddressPickerProps = PropsWithComponentPropsWithRef<
  "div",
  AddressPickerOwnProps
>;
