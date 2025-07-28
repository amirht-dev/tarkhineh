import { branches } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";
import ThumbnailGallery from ".";

const meta = {
  component: ThumbnailGallery,
  tags: ["!autodocs"],
  args: {
    images: branches.ekbatan.images,
  },
} satisfies Meta<typeof ThumbnailGallery>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  name: "ThumbnailGallery",
} satisfies Story;
