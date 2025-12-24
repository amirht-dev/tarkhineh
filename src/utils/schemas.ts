import { z } from "zod/v4";
import { isValidNumber } from "./validations";

export type LoginFormType = z.infer<typeof loginFormSchema>;

const errorMessages = {
  invalidPhoneNumber: "شماره همراه وارد شده معتبر نمی باشد",
  required: "پر کردن این فیلد الزامی است!",
  invalidValue: "مقدار وارد شده صحیح نیست",
  invalidOTP: "کد تایید وارد شده معتبر نمی باشد",
} satisfies Record<string, string>;

const phoneNumberSchema = z
  .string({
    error: (issue) =>
      issue.input === undefined
        ? errorMessages.required
        : errorMessages.invalidPhoneNumber,
  })
  .refine((value) => value.length, errorMessages.required)
  .refine(isValidNumber, { error: errorMessages.invalidPhoneNumber });

const requiredString = z.string({
  error: (issue) =>
    issue.input === undefined
      ? errorMessages.required
      : errorMessages.invalidValue,
});

const notEmptyString = requiredString.refine(
  (value) => value.length,
  errorMessages.required,
);

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

export const addAddressFormSchema = z
  .object({
    address: notEmptyString,
    addressGeolocation: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    title: notEmptyString,
  })
  .and(
    z.discriminatedUnion("isUserRecipient", [
      z.object({
        isUserRecipient: z.literal(true),
        userPhoneNumber: phoneNumberSchema,
      }),
      z.object({
        isUserRecipient: z.literal(false),
        recipientFullName: notEmptyString,
        recipientPhoneNumber: phoneNumberSchema,
      }),
    ]),
  );

export type AddAddressFormType = z.output<typeof addAddressFormSchema>;

export const editUserProfileFormSchema = z.object({
  name: z.string().trim(),
  fname: z.string().trim(),
  email: z.email().trim(),
  phoneNumber: phoneNumberSchema,
  birthday: z.iso.datetime().nullable(),
  displayName: z.string(),
});
export type editUserProfileFormSchema = z.infer<
  typeof editUserProfileFormSchema
>;
