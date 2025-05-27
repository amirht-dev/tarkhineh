import { menus } from "@/constants";
import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import MenuCard from ".";
import { MenuCardProps } from "./index.types";

const meta = {
  component: MenuCard,
  argTypes: {
    imageSrc: {
      control: false,
      table: {
        type: {
          summary: T.union(T.primitive.string, "StaticImport"),
        },
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<MenuCardProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const MainFood = {
  args: {
    imageSrc: menus.mainFood.imageSrc,
    label: menus.mainFood.label,
  },
} satisfies Story;

export const Appetizer = {
  args: {
    imageSrc: menus.appetizer.imageSrc,
    label: menus.appetizer.label,
  },
} satisfies Story;

export const Dessert = {
  args: {
    imageSrc: menus.dessert.imageSrc,
    label: menus.mainFood.label,
  },
} satisfies Story;

export const Drink = {
  args: {
    imageSrc: menus.drink.imageSrc,
    label: menus.drink.label,
  },
} satisfies Story;
