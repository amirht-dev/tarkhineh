import type { Meta, StoryObj } from "@storybook/react";
import ProductCardSlider from ".";

const meta = {
  component: ProductCardSlider,
  tags: ["!autodocs"],
} satisfies Meta<typeof ProductCardSlider>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "ProductCardSlider",
} satisfies Story;
