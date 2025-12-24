import { Meta, StoryObj } from "@storybook/react";
import UserDashboardPanel, { UserDashboardPanelProps } from ".";

const meta = {
  component: UserDashboardPanel,
  tags: ["!autodocs"],
  args: {
    name: "کاربر ترخینه",
    phone: "09123456789",
  },
} satisfies Meta<UserDashboardPanelProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Story = {
  name: "UserDashboardPanel",
} satisfies Story;
