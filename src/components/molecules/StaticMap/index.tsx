"use client";

import locationSignImage from "@/assets/images/location-sign.svg";
import { useMap, useMarker } from "@/hooks/map";
import * as L from "leaflet";
import { useEffect, useId } from "react";
import { StaticMapProps } from "./index.types";

export default function StaticMap({
  center,
  zoom = 14,
  id,
  hasMarker = false,
  ...props
}: StaticMapProps) {
  const _id = useId();

  const mapId = id ?? _id;

  const mapRef = useMap(mapId, {
    center,
    layers: [
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    attributionControl: false,
    zoom,
    dragging: false,
    zoomControl: false,
    touchZoom: false,
    boxZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
  });

  useMarker(mapRef, center, {
    interactive: false,
    icon: L.icon({
      iconUrl: locationSignImage.src,
      className: "w-10 h-12",
      iconAnchor: [20, 48],
    }),
    showOnMap: hasMarker,
  });

  useEffect(() => {
    mapRef.current?.setZoom(zoom);
  }, [zoom, mapRef]);

  return <div id={mapId} {...props} />;
}
