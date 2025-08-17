"use client";

import {
  GlobalStore,
  GlobalStoreApi,
  GlobalStoreState,
  createGlobalStore,
} from "@/stores/global-store";
import { createCTX } from "@/utils/clientHelpers";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useStore } from "zustand";

export const { context: GlobalStoreContext, hook: useGlobalStoreContext } =
  createCTX<GlobalStoreApi>("GlobalStore");

export type GlobalStoreProviderProps = PropsWithChildren<{
  initialState?: Partial<GlobalStoreState>;
  store?: GlobalStoreApi | null;
}>;

export const GlobalStoreProvider = ({
  children,
  initialState,
  store = null,
}: GlobalStoreProviderProps) => {
  const globalStoreRef = useRef<GlobalStoreApi | null>(store);

  if (globalStoreRef.current === null)
    globalStoreRef.current = createGlobalStore(initialState);

  useEffect(() => {
    globalStoreRef.current?.persist.rehydrate();
  }, []);

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

export function StorybookGlobalStoreProvider({
  initialState,
  resetStorage = false,
  children,
}: PropsWithChildren<{
  initialState?: GlobalStoreState;
  resetStorage?: boolean;
}>) {
  const store = createGlobalStore({ shoppingCart: [], ...initialState });

  useEffect(() => {
    if (!resetStorage) return;

    store.persist.clearStorage();

    if (initialState) store.setState(initialState);
  }, [store, resetStorage, initialState]);

  return <GlobalStoreProvider store={store}>{children}</GlobalStoreProvider>;
}
