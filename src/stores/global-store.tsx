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
  createStore<GlobalStore>()((set) => ({
    shoppingCart: [{}, {}],
    addToShoppingCart: (item) =>
      set((state) => ({ shoppingCart: [...state.shoppingCart, item] })),
    clearShoppingCart: () => set(() => ({ shoppingCart: [] })),
  }));

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;
