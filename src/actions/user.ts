"use server";

import {
  ServerFunction,
  UseActionStateServerActionFunction,
  UseActionStateServerFunctionFunction,
} from "@/types/next";
import { wait } from "@/utils";
import { AddAddressFormType } from "@/utils/schemas";

type AddAddressFormActionResponse =
  | { success: true }
  | { success: false; error: string };

export const addAddressAction: ServerFunction<
  [data: AddAddressFormType],
  AddAddressFormActionResponse
> = async () => {
  // TODO: add address to user database
  await wait();
  return {
    success: true,
  };

  return {
    success: false,
    error: "failed to add address",
  };
};

export const validateDiscountCodeAction: UseActionStateServerFunctionFunction<
  boolean | null,
  [code: string]
> = async (_, code) => {
  await wait();

  return code === "code";
};
