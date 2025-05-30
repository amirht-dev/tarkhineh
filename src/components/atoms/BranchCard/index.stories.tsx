import { branches } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";
import BranchCard from ".";
import { BranchCardProps } from "./index.types";
const meta = {
  component: BranchCard,
  args: {
    name: branches.ekbatan.name,
    address: branches.ekbatan.address,
    images: branches.ekbatan.images,
    slug: branches.ekbatan.slug,
    fullWidth: false,
  },
} satisfies Meta<BranchCardProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;

export const LongContent = {
  args: {
    name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    address:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و",
  },
} satisfies Story;

export const Popup = {
  args: {
    popup: true,
  },
} satisfies Story;
