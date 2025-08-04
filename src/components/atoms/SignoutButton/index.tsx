"use client";

import { SignedIn } from "@/components/utils/Auth";
import { twMerge } from "@/lib/tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { SignoutButtonProps } from "./index.types";

const SignoutButton = ({
  asChild,
  className,
  ...props
}: SignoutButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await signOut({ redirect: false });

      router.refresh();
    });
  };

  return (
    <SignedIn>
      <Comp
        type="submit"
        disabled={pending}
        className={twMerge("disabled:cursor-not-allowed", className)}
        onClick={handleClick}
        {...props}
      />
    </SignedIn>
  );
};

export default SignoutButton;
