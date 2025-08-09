"use server";

import { UseActionStateServerFunctionFunction } from "@/types/next";
import { wait } from "@/utils";
import { LatLng } from "leaflet";

export const convertGeolocationToAddressAction: UseActionStateServerFunctionFunction<
  | {
      success: true;
      address: string;
    }
  | {
      success: false;
      error: string;
    }
  | null,
  [location: LatLng]
> = async () => {
  await wait(500);

  // TODO: implement reverse geolocation with address

  return {
    success: true,
    address: "ولیعصر، خیابان بزرگمهر، کوچه نسیم",
  };

  return {
    success: false,
    error: "",
  };
};
