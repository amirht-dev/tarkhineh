"use client";

import { signoutAction } from "@/actions/auth";
import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { useActionState } from "react";
import { SignoutButtonProps } from "./index.types";

const SignoutButton = ({
  asChild,
  className,
  ...props
}: SignoutButtonProps) => {
  const [, action, pending] = useActionState(signoutAction, null);

  const Comp = asChild ? Slot : "button";

  return (
    <form action={action}>
      <Comp
        type="submit"
        disabled={pending}
        data-state={pending ? "pending" : "idle"}
        className={twMerge("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </form>
  );
};

export default SignoutButton;
