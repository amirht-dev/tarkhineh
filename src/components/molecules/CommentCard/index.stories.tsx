import type { Meta, StoryObj } from "@storybook/react";
import CommentCard from ".";

const meta = {
  component: CommentCard,
  tags: ["!autodocs"],
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "CommentCard",
} satisfies Story;
