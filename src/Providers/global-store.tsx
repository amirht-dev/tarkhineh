"use client";

import {
  GlobalStore,
  GlobalStoreApi,
  createGlobalStore,
} from "@/stores/global-store";
import { createCTX } from "@/utils/clientHelpers";
import { PropsWithChildren, useRef } from "react";
import { useStore } from "zustand";

const { context: GlobalStoreContext, hook: useGlobalStoreContext } =
  createCTX<GlobalStoreApi>("GlobalStore");

export const GlobalStoreProvider = ({ children }: PropsWithChildren) => {
  const globalStoreRef = useRef<GlobalStoreApi | null>(null);

  if (globalStoreRef.current === null)
    globalStoreRef.current = createGlobalStore();

  return (
    <GlobalStoreContext.Provider value={globalStoreRef.current}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = <T,>(selector: (state: GlobalStore) => T) => {
  const globalStore = useGlobalStoreContext();

  return useStore(globalStore, selector);
};
