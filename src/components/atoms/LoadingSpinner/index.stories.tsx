import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from ".";

const meta = {
  component: LoadingSpinner,
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;
