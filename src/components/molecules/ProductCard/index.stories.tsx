import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";

const meta = {
  component: ProductCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "ProductCard",
} satisfies Story;
