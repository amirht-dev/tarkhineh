import { T } from "@/utils/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import StaticMap from ".";

const meta = {
  component: StaticMap,
  argTypes: {
    center: {
      control: false,
      table: {
        type: {
          summary: T.union("LatLngLiteral", "LatLngTuple"),
        },
      },
    },
    hasMarker: {
      control: "boolean",
      table: {
        type: {
          summary: T.primitive.boolean,
        },
      },
    },
    zoom: {
      control: {
        type: "range",
        min: 1,
        max: 19,
      },
      table: {
        type: {
          summary: T.primitive.number,
        },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    className: "aspect-square w-[300px]",
    center: [35.7219, 51.3347],
    hasMarker: false,
    zoom: 14,
  },
} satisfies Meta<typeof StaticMap>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Marker = {
  args: {
    hasMarker: true,
  },
} satisfies Story;
