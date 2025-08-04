import type { Meta, StoryObj } from "@storybook/react";
import Factor from ".";
import { ResponsiveButton } from "@/components/atoms/Button";
import { CheckCircle_Outline } from "@/components/atoms/icons/Essential/CheckCircle";

const meta = {
  component: Factor,
  args: {
    buttonAction: (
      <ResponsiveButton
        className="w-full"
        size={{ initial: "sm", lg: "lg" }}
        prefixIcon={<CheckCircle_Outline />}
      >
        ثبت سفارش
      </ResponsiveButton>
    ),
  },
} satisfies Meta<typeof Factor>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const ShowList = {
  args: {
    showList: true,
  },
} satisfies Story;

export const HideList = {
  args: {
    showList: false,
  },
} satisfies Story;
