import {
  PropsWithAsChild,
  PropsWithComponentPropsWithoutRef,
} from '@/types/utils';
import { type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import type { Except, Merge } from 'type-fest';
import { buttonVariants } from '.';

export type ButtonOwnProps = Merge<
  {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    loading?: boolean;
  },
  Except<VariantProps<typeof buttonVariants>, 'icon'>
>;

export type ButtonProps = PropsWithAsChild<
  PropsWithComponentPropsWithoutRef<'button', ButtonOwnProps>
>;
