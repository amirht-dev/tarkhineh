import type { Meta, StoryObj } from "@storybook/react";
import ProductCard, { ProductCardSkeleton } from ".";

const meta = {
  component: ProductCard,
  subcomponents: { ProductCardSkeleton },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Skeleton = {
  render: () => <ProductCardSkeleton />,
} satisfies Story;
