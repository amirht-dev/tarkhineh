"use server";

import { signIn, signOut } from "@/lib/auth";
import { UseActionStateFunction } from "@/types/next";

export async function sendOTPAction(
  phoneNumber: string,
): Promise<
  { success: true; phoneNumber: string } | { success: false; error: Error }
> {
  return {
    success: true,
    phoneNumber,
  };
}

export async function loginAction(data: Record<string, unknown>) {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "failed to login",
    };
  }
}

export const signoutAction: UseActionStateFunction<
  { success: true } | { success: false; error: string } | null
> = async () => {
  await signOut();
  return null;
};
