import { foods } from "@/constants";
import { useGlobalStore } from "@/Providers/global-store";
import type { Meta, StoryObj } from "@storybook/react";
import ShoppingCard, { ShoppingCardSkeleton } from ".";

const food = foods[0];

function Comp() {
  const cart = useGlobalStore((state) => state.shoppingCart).find(
    (cart) => cart.foodId === food.id,
  );

  if (!cart) return null;

  return <ShoppingCard cart={cart} />;
}

const meta = {
  component: ShoppingCard,
} satisfies Meta<typeof ShoppingCard>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  parameters: {
    initialState: {
      shoppingCart: [{ foodId: food.id, count: 1 }],
    },
  },
  render() {
    return <Comp />;
  },
} satisfies Story<typeof ShoppingCard>;

export const Skeleton = {
  render: () => <ShoppingCardSkeleton />,
} satisfies Story<typeof ShoppingCardSkeleton>;
