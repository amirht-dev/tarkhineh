import type { Meta, StoryObj } from "@storybook/react";
import RestaurantMenuSection from ".";

const meta = {
  component: RestaurantMenuSection,
  tags: ["!autodocs"],
} satisfies Meta<typeof RestaurantMenuSection>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "RestaurantMenuSection",
} satisfies Story;
