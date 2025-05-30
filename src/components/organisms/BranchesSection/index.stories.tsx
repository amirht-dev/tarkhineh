import type { Meta, StoryObj } from "@storybook/react";
import BranchesSection from ".";

const meta = {
  component: BranchesSection,
  tags: ["!autodocs"],
} satisfies Meta<typeof BranchesSection>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "BranchesSection",
} satisfies Story;
