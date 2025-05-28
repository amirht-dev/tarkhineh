import type { Meta, StoryObj } from "@storybook/react";
import AboutSection from ".";

const meta = {
  component: AboutSection,
  tags: ["!autodocs"],
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "AboutSection",
} satisfies Story;
