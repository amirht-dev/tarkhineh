import type { Meta, StoryObj } from "@storybook/react";
import BranchInfo from ".";

const meta = {
  component: BranchInfo,
  tags: ['!autodocs']
} satisfies Meta<typeof BranchInfo>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: 'BranchInfo'
} satisfies Story;
