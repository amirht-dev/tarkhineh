import React, { Suspense, SuspenseProps } from "react";
import { Merge } from "type-fest";

type SuspenseFallback = SuspenseProps["fallback"];

type WithSuspenseFinalComponentProps<TProps> = Merge<
  TProps,
  {
    suspenseFallback?: SuspenseFallback;
    noSuspense?: boolean;
  }
>;

function withSuspense<TProps>(
  Component: React.FC<TProps>,
  defaultFallback?: SuspenseFallback,
) {
  const func: React.FC<WithSuspenseFinalComponentProps<TProps>> = ({
    suspenseFallback,
    noSuspense,
    ...props
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const comp = <Component {...(props as any)} />;

    if (noSuspense) return comp;

    return (
      <Suspense fallback={suspenseFallback ?? defaultFallback}>{comp}</Suspense>
    );
  };

  func.displayName = Component.displayName;

  return func;
}

export default withSuspense;
