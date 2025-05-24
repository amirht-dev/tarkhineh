import { ComponentPropsWithoutRef, ElementType } from 'react';
import { Merge } from 'type-fest';

export type PropsWithAsChild<P = object> = Merge<
  P,
  {
    asChild?: boolean;
  }
>;

export type PropsWithComponentPropsWithoutRef<
  T extends ElementType,
  P = object
> = Merge<ComponentPropsWithoutRef<T>, P>;
