import * as L from "leaflet";
import { DependencyList, RefObject, useEffect, useRef, useState } from "react";

export function useMapEvent<T extends keyof L.LeafletEventHandlerFnMap>(
  mapRef: RefObject<L.Map | null>,
  type: T,
  fn: (
    event: Parameters<NonNullable<L.LeafletEventHandlerFnMap[T]>>[0],
    map: L.Map,
  ) => void,
  deps?: DependencyList,
): void;
export function useMapEvent<T extends keyof L.LeafletEventHandlerFnMap>(
  mapRef: RefObject<L.Map | null>,
  type: T,
  fn: (
    event: Parameters<NonNullable<L.LeafletEventHandlerFnMap[T]>>[0],
    map: L.Map,
  ) => void,
  options?: { context?: unknown; deps?: DependencyList },
): void;
export function useMapEvent<T extends keyof L.LeafletEventHandlerFnMap>(
  mapRef: RefObject<L.Map | null>,
  type: T,
  fn: (
    event: Parameters<NonNullable<L.LeafletEventHandlerFnMap[T]>>[0],
    map: L.Map,
  ) => void,
  optionsOrDeps?: { context?: unknown; deps?: DependencyList } | DependencyList,
) {
  const deps = optionsOrDeps
    ? Array.isArray(optionsOrDeps)
      ? optionsOrDeps
      : "deps" in optionsOrDeps
        ? optionsOrDeps.deps
        : undefined
    : undefined;

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const listener = (event: L.LeafletEvent) => fn(event, map);

    const context =
      optionsOrDeps && "context" in optionsOrDeps
        ? optionsOrDeps.context
        : undefined;

    map.on(type, listener, context);

    return () => {
      map.off(type, listener, context);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef, type, ...(deps ?? [fn])]);
}

export function useMap(id: string, options: L.MapOptions) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    mapRef.current ??= L.map(id, options);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return mapRef;
}

export function useMarker<P = unknown>(
  mapRef: ReturnType<typeof useMap>,
  ...args: Parameters<typeof L.marker>
) {
  const markerRef = useRef<L.Marker<P>>(null);

  useEffect(() => {
    const marker = (markerRef.current ??= L.marker(...args));

    if (mapRef.current) marker.addTo(mapRef.current);
  }, [args, mapRef]);

  return markerRef;
}

export function useIsMapMoving(mapRef: ReturnType<typeof useMap>) {
  const [moving, setMoving] = useState(false);

  useMapEvent(mapRef, "movestart", () => setMoving(true));
  useMapEvent(mapRef, "moveend", () => setMoving(false));

  return moving;
}
