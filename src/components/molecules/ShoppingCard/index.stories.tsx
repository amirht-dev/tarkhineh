import type { Meta, StoryObj } from "@storybook/react";
import ShoppingCard, { ShoppingCardSkeleton } from ".";

const meta = {
  component: ShoppingCard,
} satisfies Meta<typeof ShoppingCard>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Skeleton = {
  render: () => <ShoppingCardSkeleton />,
} satisfies Story;
