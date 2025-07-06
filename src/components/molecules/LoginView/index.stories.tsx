/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginView from ".";
import { LoginViewProps } from "./index.types";

const meta = {
  component: LoginView,
  tags: ["!autodocs"],
  args: {
    open: false,
    onOpenChange: fn(),
  },
  render(args) {
    const [{ open }, updateArgs] = useArgs<LoginViewProps>();
    return (
      <LoginView
        open={open}
        onOpenChange={(open) => {
          args.onOpenChange?.(open);
          updateArgs({ open });
        }}
      />
    );
  },
} satisfies Meta<LoginViewProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "LoginView",
} satisfies Story;
