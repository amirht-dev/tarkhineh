import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";
import { Merge, Primitive } from "type-fest";

export type PropsWithAsChild<P = object> = Merge<
  P,
  {
    asChild?: boolean;
  }
>;

export type PropsWithComponentPropsWithoutRef<
  T extends ElementType,
  P = object,
> = Merge<ComponentPropsWithoutRef<T>, P>;

export type PropsWithComponentPropsWithRef<
  T extends ElementType,
  P = object,
> = Merge<ComponentPropsWithRef<T>, P>;

export type OneOrMore<T> = T | T[];

export type DistributedMerge<Destination, Source> = Destination extends infer T
  ? Merge<T, Source>
  : never;

export type UnwrapLiteralUnion<T, P extends Primitive> = T extends P & {}
  ? P extends T
    ? never
    : T // Check if T is exactly (string & {})
  : T;
