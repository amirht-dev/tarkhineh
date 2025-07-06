import { Dialog } from "@/components/atoms/Dialog";
import { LoginConfirmFormType, LoginFormType } from "@/utils/schemas";
import { ComponentProps } from "react";
import { SubmitHandler } from "react-hook-form";

export type LoginViewProps = Pick<
  ComponentProps<typeof Dialog>,
  "open" | "onOpenChange"
>;

export type LoginFormProps = {
  onSuccessfullySubmit?: SubmitHandler<LoginFormType>;
};

export type ConfirmOTPFormProps = {
  onSuccessfullySubmit?: SubmitHandler<LoginConfirmFormType>;
};
