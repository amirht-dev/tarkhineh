import { PropsWithComponentPropsWithRef } from "@/types/utils";
import { LatLngLiteral, LatLngTuple } from "leaflet";

export type StaticMapProps = PropsWithComponentPropsWithRef<
  "div",
  {
    center: LatLngLiteral | LatLngTuple;
    zoom?: number;
    hasMarker?: boolean;
  }
>;
