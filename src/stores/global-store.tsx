import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type GlobalStoreState = {
  shoppingCart: unknown[];
};

export type GLobalStoreAction = {
  addToShoppingCart: (item: unknown) => void;
  clearShoppingCart: () => void;
};

export type GlobalStore = GlobalStoreState & GLobalStoreAction;

export const createGlobalStore = () =>
  createStore(
    persist<GlobalStore, [], [], Partial<GlobalStoreState>>(
      (set) => ({
        shoppingCart: [],
        addToShoppingCart: (item) =>
          set((state) => ({ shoppingCart: [...state.shoppingCart, item] })),
        clearShoppingCart: () => set(() => ({ shoppingCart: [] })),
      }),
      {
        name: "store",
        partialize: (state) => ({
          shoppingCart: state.shoppingCart,
        }),
        skipHydration: true,
      },
    ),
  );

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;
