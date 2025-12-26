import { Meta, StoryObj } from "@storybook/react";
import FavoriteCard from ".";

const meta = {
  component: FavoriteCard,
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Story = {
  name: "FavoriteCard",
} satisfies Story;
