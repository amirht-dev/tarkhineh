import type { Meta, StoryObj } from "@storybook/react";
import HeroSlider from ".";

const meta = {
  component: HeroSlider,
  tags: ["!autodocs"],
} satisfies Meta<typeof HeroSlider>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "HeroSlider",
} satisfies Story;
