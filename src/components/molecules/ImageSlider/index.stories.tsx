import { branches } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";
import ImageSlider from ".";

const meta = {
  component: ImageSlider,
  tags: ["!autodocs"],
  args: {
    images: branches.ekbatan.images,
  },
} satisfies Meta<typeof ImageSlider>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "ImageSlider",
} satisfies Story;
