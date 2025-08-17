import { Food } from "@/constants";
import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type Cart = { foodId: Food["id"]; count: number };

export type GlobalStoreState = {
  shoppingCart: Cart[];
};

export type GLobalStoreAction = {
  addToShoppingCart: (foodId: Food["id"]) => void;
  removeFromShoppingCart: (foodId: Food["id"], count?: number | "all") => void;
  clearShoppingCart: () => void;
};

export type GlobalStore = GlobalStoreState & GLobalStoreAction;

export const createGlobalStore = (initialState?: Partial<GlobalStoreState>) =>
  createStore(
    persist<GlobalStore, [], [], Partial<GlobalStoreState>>(
      (set) => ({
        shoppingCart: [],
        ...initialState,
        addToShoppingCart: (foodId) =>
          set((state) => {
            const index = state.shoppingCart.findIndex(
              (item) => item.foodId === foodId,
            );

            const newShoppingCart: GlobalStoreState["shoppingCart"] =
              index === -1
                ? [...state.shoppingCart, { foodId, count: 1 }]
                : state.shoppingCart.map((item, idx) =>
                    idx === index ? { ...item, count: item.count + 1 } : item,
                  );

            return { shoppingCart: newShoppingCart };
          }),
        clearShoppingCart: () => set(() => ({ shoppingCart: [] })),
        removeFromShoppingCart: (foodId, count = 1) =>
          set(({ shoppingCart }) => {
            const cartIndex = shoppingCart.findIndex(
              (cart) => cart.foodId === foodId,
            );

            if (cartIndex === -1) return { shoppingCart };

            const newShoppingCart = shoppingCart.slice();

            const cart = newShoppingCart[cartIndex];

            if (count === "all" || count >= cart.count)
              newShoppingCart.splice(cartIndex, 1);
            else newShoppingCart[cartIndex].count -= count;

            return { shoppingCart: newShoppingCart };
          }),
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
