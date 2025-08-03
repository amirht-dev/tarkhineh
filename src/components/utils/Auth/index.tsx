"use client";

import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

export const SignedIn = ({ children }: PropsWithChildren) => {
  const session = useSession();

  if (session.status === "authenticated") return children;
};

export const SignedOut = ({ children }: PropsWithChildren) => {
  const session = useSession();

  if (session.status === "unauthenticated") return children;
};

export const SigningIn = ({ children }: PropsWithChildren) => {
  const session = useSession();

  if (session.status === "loading") return children;
};
