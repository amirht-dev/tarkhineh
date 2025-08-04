import { Dialog } from "@/components/atoms/Dialog";
import { LoginConfirmFormType, LoginFormType } from "@/utils/schemas";
import { ComponentProps, Dispatch, ReactElement, SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";

export type LoginPopupContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

export type LoginPopupProps = Pick<
  ComponentProps<typeof Dialog>,
  "open" | "onOpenChange"
> & {
  /**
   * @description trigger must be react component that receive onClick and ref props
   */
  trigger: ReactElement;
};

export type LoginFormProps = {
  onSuccessfullySubmit?: SubmitHandler<LoginFormType>;
};

export type ConfirmOTPFormProps = {
  onSuccessfullySubmit?: SubmitHandler<LoginConfirmFormType>;
};
