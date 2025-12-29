"use client";

import { sendOTPAction } from "@/actions/auth";
import Button from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import Field from "@/components/atoms/Field";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import Logo from "@/components/atoms/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/Sheet";
import Timer from "@/components/atoms/Timer";
import { Visible } from "@/components/utils/Responsive";
import { localizeNumber } from "@/utils";
import { createCTX } from "@/utils/clientHelpers";
import {
  loginConfirmFormSchema,
  LoginConfirmFormType,
  loginFormSchema,
  LoginFormType,
} from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Steps,
  StepsPrevButton,
  StepsView,
  useStepViewContext,
} from "../Steps";
import { LoginPopupContextType, LoginPopupProps } from "./index.types";
import { TEST_OTP_CODE } from "@/constants";

const { context: LoginPopupContext, hook: useLoginPopupContext } =
  createCTX<LoginPopupContextType>("LoginPopupContext");

const LoginPopupProvider = ({
  children,
  open,
  setOpen,
}: PropsWithChildren<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <LoginPopupContext.Provider
      value={{ phoneNumber, setPhoneNumber, open, setOpen }}
    >
      {children}
    </LoginPopupContext.Provider>
  );
};

const LoginPopup = ({ trigger }: LoginPopupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Visible on="initial">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>{trigger}</SheetTrigger>

          <SheetContent className="flex w-full p-5" dir="rtl">
            <Steps stepsCount={2} initialStepIndex={0}>
              <div className="flex shrink-0 items-center justify-between">
                <StepsPrevButton className="text-neutral-gray-7 size-6 disabled:hidden" />

                <SheetClose className="text-neutral-gray-7 ms-auto size-6" />
              </div>

              <div className="flex flex-1 flex-col justify-center gap-20">
                <Logo className="mx-auto" />

                <LoginPopupProvider open={open} setOpen={setOpen}>
                  <StepsView index={0}>
                    <LoginForm />
                  </StepsView>

                  <StepsView index={1}>
                    <ConfirmForm />
                  </StepsView>
                </LoginPopupProvider>
              </div>
            </Steps>
          </SheetContent>
        </Sheet>
      </Visible>

      <Visible on="lg">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>{trigger}</DialogTrigger>

          <DialogContent
            className="max-w-[392px] overflow-hidden lg:p-6"
            dir="rtl"
          >
            <Steps stepsCount={2} initialStepIndex={0}>
              <div className="mb-4 grid grid-cols-3">
                <StepsPrevButton className="text-neutral-gray-7 col-start-1 justify-self-start disabled:hidden [&>svg]:size-6" />
                <Logo size="sm" className="col-start-2 justify-self-center" />
                <DialogClose className="col-start-3 justify-self-end lg:[&>svg]:size-6" />
              </div>

              <LoginPopupProvider open={open} setOpen={setOpen}>
                <StepsView index={0} className="mt-0 lg:mt-0">
                  <LoginForm />
                </StepsView>

                <StepsView index={1} className="mt-0 lg:mt-0">
                  <ConfirmForm />
                </StepsView>
              </LoginPopupProvider>
            </Steps>
          </DialogContent>
        </Dialog>
      </Visible>
    </>
  );
};

export default LoginPopup;

function LoginForm() {
  const { phoneNumber, setPhoneNumber } = useLoginPopupContext();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      phoneNumber,
    },
    resolver: zodResolver(loginFormSchema),
  });

  const { goToNextSiblingStep } = useStepViewContext();

  const onLoginSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const res = await sendOTPAction(data.phoneNumber);

    if (!res.success) {
      console.error(res.error.message);
      // TODO: handle error when sending OTP fails. e.g. show toast or set input error
      return;
    }

    setPhoneNumber(data.phoneNumber);
    goToNextSiblingStep();
  };
  return (
    <>
      <form
        className="space-y-6 lg:space-y-4"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <SheetTitle className="text-heading-6 lg:text-body-md text-neutral-gray-8 text-center lg:mb-0">
          ورود / ثبت‌نام
        </SheetTitle>

        <SheetDescription className="text-body-sm text-neutral-gray-7 lg:text-caption-md text-center">
          شماره همراه خود را وارد کنید.
        </SheetDescription>

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field, fieldState: { error } }) => (
            <Field
              {...field}
              error={error?.message}
              label="شماره همراه"
              placeholder="09123456789"
              autoFocus
            />
            // <Field error={!!error}>
            //   <FieldInput
            //     {...field}
            //     label="شماره همراه"
            //     placeholder="09123456789"
            //     autoFocus
            //   />
            //   <FieldErrorMessage>{error?.message}</FieldErrorMessage>
            // </Field>
          )}
        />

        <Button
          size="md"
          className="w-full"
          disabled={!isValid || isSubmitting}
        >
          ورود
        </Button>
      </form>

      <p className="text-caption-sm mt-2 text-center font-normal lg:mt-4">
        ورود و عضویت در ترخینه به منزله قبول{" "}
        <Link href="" className="text-primary hover:underline">
          قوانین و مقررات
        </Link>{" "}
        است.
      </p>
    </>
  );
}

function ConfirmForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      otpCode: "",
    },
    resolver: zodResolver(loginConfirmFormSchema),
  });

  const { phoneNumber, setOpen } = useLoginPopupContext();

  const [timerFinished, setTimerFinished] = useState(false);

  const router = useRouter();

  const onConfirmSubmit: SubmitHandler<LoginConfirmFormType> = async (data) => {
    const res = await signIn("credentials", { ...data, redirect: false });

    if (!res?.ok) {
      console.error({ code: res.code, error: res.error });
      // TODO: handle error occurred when login fails
      return;
    }

    router.refresh();
    setOpen(false);
  };

  const handleResendCode = () => {
    setTimerFinished(false);
    // TODO: implement ability to resend code after timer finished
  };

  return (
    <form
      className="space-y-6 lg:space-y-4"
      onSubmit={handleSubmit(onConfirmSubmit)}
    >
      <SheetTitle className="text-heading-6 lg:text-body-md text-neutral-gray-8 text-center lg:mb-0">
        کد تائید
      </SheetTitle>

      <SheetDescription className="text-body-sm text-neutral-gray-7 lg:text-caption-md text-center">
        کد تایید پنج‌رقمی به شماره <span>{localizeNumber(phoneNumber)}</span>{" "}
        ارسال شد.
      </SheetDescription>

      <div className="border-status-warning text-caption-md text-status-warning bg-status-warning-el rounded-md border p-2">
        کد تست برای ورود <strong>{TEST_OTP_CODE}</strong> می‌باشد
      </div>

      <Controller
        control={control}
        name="otpCode"
        render={({ field, fieldState, formState }) => (
          <div dir="ltr" className="mb-0">
            <Field
              {...field}
              error={
                fieldState.error?.message || formState.errors.root?.message
              }
              type="otp"
              autoFocus
              fullWidth
            />
          </div>
          // <Field
          //   error={fieldState.error?.message || formState.errors.root?.message}
          //   className="mb-0"
          // >
          //   <div dir="ltr">
          //     <FieldInput type="otp" autoFocus fullWidth {...field} />
          //   </div>
          //   <FieldErrorMessage>
          //     {fieldState.error?.message || formState.errors.root?.message}
          //   </FieldErrorMessage>
          // </Field>
        )}
      />

      <div className="mt-1 flex items-center justify-between">
        {timerFinished ? (
          <Button
            variant="text"
            type="button"
            size="sm"
            className="px-0"
            onClick={handleResendCode}
          >
            دریافت مجدد کد
          </Button>
        ) : (
          <div className="text-neutral-gray-7 text-caption-sm flex items-center gap-1 font-normal">
            <Clock_Outline className="size-4" />
            <Timer
              autoStart
              duration={120}
              warningStart={30}
              className="data-[state=warning]:text-status-error transition-colors"
              onFinish={() => setTimerFinished(true)}
            />{" "}
            <span>تا دریافت مجدد کد</span>
          </div>
        )}

        <StepsPrevButton asChild>
          <Button variant="text" size="sm" className="h-auto p-0">
            ویرایش شماره
          </Button>
        </StepsPrevButton>
      </div>

      <Button size="md" className="w-full" disabled={!isValid || isSubmitting}>
        تائید
      </Button>
    </form>
  );
}
