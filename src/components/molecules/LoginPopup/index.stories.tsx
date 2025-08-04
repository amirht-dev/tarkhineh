import { ResponsiveIconButton } from "@/components/atoms/IconButton";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import BreakpointProvider from "@/contexts/breakpoint";
import type { Meta, StoryObj } from "@storybook/react";
import LoginPopup from ".";
import { LoginPopupProps } from "./index.types";

const meta = {
  component: LoginPopup,
  tags: ["!autodocs"],
  args: {
    trigger: (
      <ResponsiveIconButton size={{ initial: "md", lg: "lg" }} color="white">
        <User_Outline />
      </ResponsiveIconButton>
    ),
  },
  decorators: [(Story) => <BreakpointProvider>{Story()}</BreakpointProvider>],
} satisfies Meta<LoginPopupProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "LoginPopup",
} satisfies Story;
