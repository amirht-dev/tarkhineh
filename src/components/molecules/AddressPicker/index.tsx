"use client";

import { convertGeolocationToAddressAction } from "@/actions/location";
import locationSignImage from "@/assets/images/location-sign.svg";
import Button, { ResponsiveButton } from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import { Add_Outline } from "@/components/atoms/icons/Essential/Add";
import { Minus_Outline } from "@/components/atoms/icons/Essential/Minus";
import { GPS_Outline } from "@/components/atoms/icons/Location/GPS";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { useIsMapMoving, useMap, useMapEvent, useMarker } from "@/hooks/map";
import useGeolocation from "@/hooks/useGeolocation";
import { twMerge } from "@/lib/tailwind-merge";
import { useDebounce } from "@uidotdev/usehooks";
import * as L from "leaflet";
import {
  RefObject,
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useId,
} from "react";
import { AddressPickerProps } from "./index.types";

export default function AddressPicker({
  initialCenter = [50.5, 30.5],
  onChange,
  className,
  id,
  ...props
}: AddressPickerProps) {
  const _id = useId();
  const [geolocation, { requestLocation }] = useGeolocation();
  const [
    geolocationReverseState,
    reverseGeolocationAction,
    isReversingGeolocation,
  ] = useActionState(convertGeolocationToAddressAction, null);

  const mapId = id ?? _id;

  const mapRef = useMap(mapId, {
    layers: [
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoomControl: false,
    center: initialCenter,
    zoom: 13,
    scrollWheelZoom: "center",
    doubleClickZoom: "center",
    touchZoom: "center",
  });

  const markerRef = useMarker(mapRef, initialCenter, {
    riseOnHover: true,
    icon: L.icon({
      iconUrl: locationSignImage.src,
      className: "w-10 h-12",
      iconAnchor: [20, 48],
    }),
  });

  const isMoving = useIsMapMoving(mapRef);

  const debouncedIsMoving = useDebounce(isMoving, 500);

  const reverseGeolocation = useCallback(
    (geolocation: L.LatLng) => {
      startTransition(() => {
        reverseGeolocationAction(geolocation);
      });
    },
    [reverseGeolocationAction],
  );

  useEffect(() => {
    const timeout = !isMoving
      ? setTimeout(() => {
          const geolocation = mapRef.current?.getCenter();
          if (geolocation) reverseGeolocation(geolocation);
        }, 500)
      : undefined;

    return () => {
      clearTimeout(timeout);
    };
  }, [debouncedIsMoving, isMoving, mapRef, reverseGeolocation]);

  useMapEvent(
    mapRef,
    "move",
    (_, map) => {
      markerRef.current?.setLatLng(map.getCenter());
    },
    [],
  );

  const handleSetClick = () => {
    if (!mapRef.current || !geolocationReverseState?.success) return;

    const { lat, lng, toString, alt } = mapRef.current.getCenter();

    onChange?.({
      position: { lat, lng, toString, alt },
      address: geolocationReverseState.address,
    });
  };

  const handleSetCurrentLocation = async () => {
    const { latitude: lat, longitude: lng } = await requestLocation();

    const geoLocation = L.latLng({ lat, lng });

    if (mapRef.current) mapRef.current.flyTo(geoLocation, 15);
  };

  return (
    <div {...props} className={twMerge("relative", className)} id={mapId}>
      <Button
        size="sm"
        variant="twotone"
        prefixIcon={<GPS_Outline />}
        className="font-estedad drop-shadow-4 absolute top-6 right-5 z-1000"
        loading={geolocation.status === "loading"}
        onClick={handleSetCurrentLocation}
      >
        موقعیت من
      </Button>
      <ZoomControls mapRef={mapRef} />
      {(isReversingGeolocation || geolocationReverseState?.success) && (
        <SuggestionAddress
          address={
            geolocationReverseState?.success
              ? geolocationReverseState.address
              : undefined
          }
          loading={isReversingGeolocation}
        />
      )}
      <ResponsiveButton
        size={{ initial: "sm", lg: "md" }}
        className="font-estedad absolute bottom-6 left-1/2 z-1000 w-[152px] -translate-x-1/2 lg:w-[266px]"
        onClick={handleSetClick}
        disabled={isReversingGeolocation || !geolocationReverseState?.success}
      >
        ثبت موقعیت
      </ResponsiveButton>
    </div>
  );
}

function ZoomControls({ mapRef }: { mapRef: RefObject<L.Map | null> }) {
  const handleZoomIn = () => mapRef.current?.zoomIn();
  const handleZoomOut = () => mapRef.current?.zoomOut();

  return (
    <div className="font-estedad absolute top-6 left-5 z-1000 flex flex-col gap-2">
      <IconButton
        color="white"
        size="lg"
        onClick={handleZoomIn}
        className="drop-shadow-4"
      >
        <Add_Outline />
      </IconButton>
      <IconButton
        color="white"
        size="lg"
        onClick={handleZoomOut}
        className="drop-shadow-4"
      >
        <Minus_Outline />
      </IconButton>
    </div>
  );
}

function SuggestionAddress({
  address,
  loading = false,
}: {
  address?: string;
  loading?: boolean;
}) {
  return (
    <div className="bg-neutral-gray-1 drop-shadow-4 font-estedad text-neutral-gray-8 absolute bottom-17 left-1/2 z-1000 flex h-8 w-full max-w-[320px] -translate-x-1/2 items-center gap-1 rounded-sm p-2 lg:bottom-22 lg:h-10 lg:max-w-[409px]">
      {loading ? (
        <LoadingSpinner className="size-4 lg:size-6" />
      ) : (
        <Location_Outline className="size-4 shrink-0 lg:size-6" />
      )}
      {address && (
        <span
          className="text-caption-md lg:text-body-sm line-clamp-1 leading-none"
          title={address}
        >
          {address}
        </span>
      )}
    </div>
  );
}
