import { T } from '@/utils/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';
import { ShoppingCard_Outline } from '../icons/Shop/ShoppingCard';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './index.constants';

const meta = {
  component: Button,
  args: {
    variant: 'fill',
    children: 'سفارش غذا',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: BUTTON_VARIANTS,
      table: {
        type: {
          summary: T.union(...BUTTON_VARIANTS),
        },
      },
      description: 'style of button',
    },
    prefixIcon: {
      control: 'boolean',
      mapping: {
        true: <ShoppingCard_Outline />,
      },
      description: 'prefix icon. left side if ltr and right side if rtl',
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    suffixIcon: {
      control: 'boolean',
      mapping: {
        true: <ShoppingCard_Outline />,
      },
      description: 'suffix icon. right side if ltr and left side if rtl',
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
    color: {
      control: 'inline-radio',
      options: BUTTON_COLORS,
      table: {
        type: {
          summary: T.union(...BUTTON_COLORS),
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: BUTTON_SIZES,
      table: {
        type: {
          summary: T.union(...BUTTON_SIZES),
        },
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {} satisfies Story;

export const Primary = {
  args: {
    color: 'primary',
  },
} satisfies Story;

export const White = {
  args: {
    color: 'white',
  },
} satisfies Story;

export const Black = {
  args: {
    color: 'black',
  },
} satisfies Story;

export const Fill = {
  args: {
    variant: 'fill',
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
  },
} satisfies Story;

export const Text = {
  args: {
    variant: 'text',
  },
} satisfies Story;

export const Small = {
  args: {
    size: 'sm',
  },
} satisfies Story;

export const Medium = {
  args: {
    size: 'md',
  },
} satisfies Story;

export const Large = {
  args: {
    size: 'lg',
  },
} satisfies Story;

export const ExtraLarge = {
  args: {
    size: 'xl',
  },
} satisfies Story;

export const PrefixIcon = {
  args: {
    prefixIcon: true,
  },
} satisfies Story;

export const SuffixIcon = {
  args: {
    suffixIcon: true,
  },
} satisfies Story;

export const Icon = {
  args: {
    prefixIcon: true,
    suffixIcon: true,
  },
} satisfies Story;

export const Disable = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Loading = {
  args: {
    loading: true,
  },
} satisfies Story;
