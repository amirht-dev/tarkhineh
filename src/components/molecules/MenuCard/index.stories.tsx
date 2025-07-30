import type { Meta, StoryObj } from "@storybook/react";
import MenuCard, { MenuCardSkeleton } from ".";

const meta = {
  component: MenuCard,
  args: {
    fullWidth: false,
  },
} satisfies Meta<typeof MenuCard>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;

export const Skeleton = {
  render: (args) => <MenuCardSkeleton {...args} />,
} satisfies Story;
