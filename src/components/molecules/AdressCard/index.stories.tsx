import type { Meta, StoryObj } from "@storybook/react";
import AddressCard from ".";

const meta = {
  component: AddressCard,
} satisfies Meta<typeof AddressCard>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
