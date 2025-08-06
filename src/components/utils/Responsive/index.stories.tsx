import Button from "@/components/atoms/Button";
import { ButtonProps } from "@/components/atoms/Button/index.types";
import type { Meta, StoryObj } from "@storybook/react";
import Responsive from ".";

const meta = {
  component: Responsive,
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const ResponsiveButton = {
  args: {
    component: Button,
  },
  render(args) {
    return (
      <Responsive<ButtonProps>
        {...args}
        size={{
          initial: "sm",
          lg: "lg",
        }}
        variant={{
          initial: "outline",
          lg: "fill",
        }}
        color={{
          lg: "black",
        }}
      >
        button
      </Responsive>
    );
  },
} satisfies Story;
