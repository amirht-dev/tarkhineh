"use client";

import { SignedIn } from "@/components/utils/Auth";
import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { signOut, useSession } from "next-auth/react";
import { SignoutButtonProps } from "./index.types";

const SignoutButton = ({
  asChild,
  className,
  ...props
}: SignoutButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const session = useSession();

  return (
    <SignedIn>
      <Comp
        type="submit"
        disabled={session.status === "loading"}
        className={twMerge("disabled:cursor-not-allowed", className)}
        onClick={() => signOut({ redirect: false })}
        {...props}
      />
    </SignedIn>
  );
};

export default SignoutButton;
