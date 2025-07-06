import { z } from "zod/v4";
import { isValidNumber } from "./validations";

export type LoginFormType = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z.object({
  phoneNumber: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "پر کردن این فیلد الزامی است!"
          : "شماره همراه وارد شده معتبر نمی باشد",
    })
    .refine(isValidNumber, { error: "شماره همراه وارد شده معتبر نمی باشد" }),
});

export type LoginConfirmFormType = z.infer<typeof loginConfirmFormSchema>;

export const loginConfirmFormSchema = z.object({
  otpCode: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "پر کردن این فیلد الزامی است!"
          : "کد تایید وارد شده معتبر نمی باشد",
    })
    .length(5, { error: "کد تایید وارد شده معتبر نمی باشد" }),
});
