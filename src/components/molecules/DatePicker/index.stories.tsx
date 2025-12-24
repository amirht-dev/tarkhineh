import { Meta, StoryObj } from "@storybook/react";
import DatePicker from ".";

const meta = {
  component: DatePicker,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Story = {
  name: "DatePicker",
} satisfies Story;
