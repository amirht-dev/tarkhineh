import { Meta, StoryObj } from "@storybook/react";
import OrderCard from ".";

const meta = {
  component: OrderCard,
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const InPerson = {
  args: {
    deliverType: "in-person",
    status: "in-progress",
  },
} satisfies Story;

export const Courier = {
  args: {
    deliverType: "courier",
    status: "in-progress",
  },
} satisfies Story;

export const InProgress = {
  args: {
    deliverType: "courier",
    status: "in-progress",
  },
} satisfies Story;

export const Cancelled = {
  args: {
    deliverType: "courier",
    status: "cancelled",
  },
} satisfies Story;

export const Completed = {
  args: {
    deliverType: "courier",
    status: "completed",
  },
} satisfies Story;
