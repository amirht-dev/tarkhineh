"use client";

import { loginAction, sendOTPAction } from "@/actions/auth";
import Button from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import { Field, FieldErrorMessage, FieldInput } from "@/components/atoms/Field";
import IconButton from "@/components/atoms/IconButton";
import { InfoCircle_Outline } from "@/components/atoms/icons/Essential/InfoCircle";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import Logo from "@/components/atoms/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/atoms/Sheet";
import Timer from "@/components/atoms/Timer";
import {
  MultiView,
  MultiViewContainer,
  MultiViewPrevButton,
  MultiViewWindow,
  useMultiViewContext,
  useMultiViewWindowContext,
} from "@/components/utils/MultiView";
import { TEST_OTP_CODE } from "@/constants";
import useBreakpointMediaQuery from "@/hooks/useBreakpointMediaQuery";
import useTimerControl from "@/hooks/useTimerControl";
import { localizeNumber } from "@/utils";
import { createCTX } from "@/utils/clientHelpers";
import {
  LoginConfirmFormType,
  LoginFormType,
  loginConfirmFormSchema,
  loginFormSchema,
} from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ConfirmOTPFormProps,
  LoginFormProps,
  LoginViewContextType,
  LoginViewProps,
} from "./index.types";

const { context: LoginViewContext, hook: useLoginViewContext } =
  createCTX<LoginViewContextType>("LoginViewContext");

const LoginView = (props: LoginViewProps) => {
  const [open, setOpen] = useState(false);

  const isLG = useBreakpointMediaQuery("lg");

  return (
    <LoginViewContext.Provider value={{ open, setOpen }}>
      {isLG ? (
        <Dialog
          open={props.open ?? open}
          onOpenChange={props.onOpenChange ?? setOpen}
        >
          <DialogTrigger asChild className="max-lg:hidden">
            <IconButton color="white" size="lg">
              <User_Outline />
            </IconButton>
          </DialogTrigger>

          <DialogContent
            dir="rtl"
            className="max-w-[392px] overflow-hidden lg:p-6"
          >
            <MultiView>
              <DialogClose className="absolute top-6 left-6 lg:[&>svg]:size-6" />
              <Logo size="sm" className="mx-auto mb-4" />
              <MultiViewPrevButton className="text-neutral-gray-7 absolute top-6 right-6 disabled:hidden lg:size-6" />

              <MultiViewContainer>
                <LoginWindow />
                <LoginConfirmCodeWindow />
              </MultiViewContainer>
            </MultiView>
          </DialogContent>
        </Dialog>
      ) : (
        <Sheet
          open={props.open ?? open}
          onOpenChange={props.onOpenChange ?? setOpen}
        >
          <SheetTrigger asChild>
            <IconButton color="white" className="lg:hidden">
              <User_Outline />
            </IconButton>
          </SheetTrigger>

          <SheetContent
            className="flex w-full flex-col justify-center gap-20 px-5"
            dir="rtl"
          >
            <MultiView>
              <MultiViewPrevButton className="text-neutral-gray-6 absolute top-6 right-6 size-6 disabled:hidden lg:size-6" />

              <SheetClose className="absolute top-5 left-5 [&>svg]:size-6" />

              <Logo size="lg" className="mx-auto" />

              <MultiViewContainer>
                <LoginWindow />
                <LoginConfirmCodeWindow />
              </MultiViewContainer>
            </MultiView>
          </SheetContent>
        </Sheet>
      )}
    </LoginViewContext.Provider>
  );
};

export default LoginView;

function LoginForm({ onSuccessfullySubmit }: LoginFormProps) {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<LoginFormType>({
    defaultValues: {
      phoneNumber: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const isDisabled = !isDirty || isSubmitting;

  const onSubmit: SubmitHandler<LoginFormType> = async (data, event) => {
    const res = await sendOTPAction(data.phoneNumber);

    if (res.success) onSuccessfullySubmit?.(data, event);
    else
      setError("root", {
        message: "خطایی در ارسال OTP رخ داده است",
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field error={!!errors.phoneNumber || !!errors.root} className="mt-6">
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field, fieldState: { error }, formState }) => (
            <>
              <FieldInput
                type="text"
                label="شماره همراه"
                error={!!error}
                placeholder="09123456789"
                {...field}
              />
              <FieldErrorMessage>
                {error?.message || formState.errors.root?.message}
              </FieldErrorMessage>
            </>
          )}
        />
      </Field>

      <Button type="submit" disabled={isDisabled} className="mt-4 block w-full">
        ادامه
      </Button>
    </form>
  );
}

function ConfirmOTPForm({ onSuccessfullySubmit }: ConfirmOTPFormProps) {
  const {
    handleSubmit,
    control,
    setError,
    formState: { isDirty, isSubmitting },
  } = useForm<LoginConfirmFormType>({
    resolver: zodResolver(loginConfirmFormSchema),
  });
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  const { isActiveWindow } = useMultiViewWindowContext();

  const timerControlRef = useTimerControl();

  useEffect(() => {
    if (isActiveWindow) {
      timerControlRef.current?.reset();
      timerControlRef.current?.start();
    } else {
      timerControlRef.current?.stop();
      timerControlRef.current?.reset();
    }
  }, [isActiveWindow, timerControlRef]);

  useEffect(() => {
    setIsTimerVisible(isActiveWindow);
  }, [isActiveWindow]);

  useEffect(() => {
    if (!isActiveWindow) return;

    if (isTimerVisible) {
      timerControlRef.current?.reset();
      timerControlRef.current?.start();
    } else {
      timerControlRef.current?.stop();
      timerControlRef.current?.reset();
    }
  }, [isTimerVisible, timerControlRef, isActiveWindow]);

  const isDisabled = !isDirty || isSubmitting;

  const onSubmit: SubmitHandler<LoginConfirmFormType> = async (data, event) => {
    const res = await loginAction(data);

    if (res.success) {
      onSuccessfullySubmit?.(data, event);
    } else {
      setError("root", {
        message: res.error,
      });
    }
  };

  const handleResendCode = () => {
    setIsTimerVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="otpCode"
        render={({ field, fieldState, formState }) => (
          <Field
            className="mt-6 px-2"
            error={!!fieldState.error || !!formState.errors.root}
          >
            <div dir="ltr">
              <FieldInput type="otp" fullWidth {...field} />
            </div>
            <FieldErrorMessage>
              {fieldState.error?.message || formState.errors.root?.message}
            </FieldErrorMessage>
          </Field>
        )}
      />

      <div className="flex justify-between">
        {isTimerVisible ? (
          <div className="text-neutral-gray-7 text-caption-sm flex items-center gap-1 font-normal">
            <Clock_Outline className="size-4" />
            <Timer
              duration={120}
              warningStart={30}
              className="data-[state=warning]:text-status-error transition-colors"
              onFinish={() => setIsTimerVisible(false)}
              controlRef={timerControlRef}
            />{" "}
            <span>تا دریافت مجدد کد</span>
          </div>
        ) : (
          <Button
            variant="text"
            type="button"
            size="sm"
            className="px-0"
            onClick={handleResendCode}
          >
            دریافت مجدد کد
          </Button>
        )}

        <MultiViewPrevButton asChild>
          <Button variant="text" size="sm" className="px-0" type="button">
            ویرایش شماره
          </Button>
        </MultiViewPrevButton>
      </div>

      {process.env.NODE_ENV === "development" && (
        <p className="text-neutral-gray-7 text-caption-sm flex items-center gap-1 font-normal">
          <InfoCircle_Outline className="size-4" />
          <span>کد تست {localizeNumber(TEST_OTP_CODE)} میباشد</span>
        </p>
      )}

      <Button type="submit" disabled={isDisabled} className="mt-4 block w-full">
        ثبت کد
      </Button>
    </form>
  );
}

function LoginWindow() {
  const { setMeta, next } = useMultiViewContext();

  return (
    <MultiViewWindow windowIdx={0}>
      <DialogTitle className="lg:text-body-md text-heading-6 text-center max-lg:font-bold">
        ورود / ثبت ‌نام
      </DialogTitle>

      <DialogDescription className="lg:text-caption-md text-body-sm text-neutral-gray-7 text-center max-lg:mt-6">
        با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
      </DialogDescription>

      <LoginForm
        onSuccessfullySubmit={(data) => {
          setMeta(data);
          next();
        }}
      />

      <p className="text-caption-sm text-neutral-gray-8 mt-2 text-center font-normal lg:mt-4">
        ورود و عضویت در ترخینه به منزله قبول{" "}
        <Link href="#" className="text-primary hover:underline">
          قوانین و مقررات
        </Link>{" "}
        است.
      </p>
    </MultiViewWindow>
  );
}

function LoginConfirmCodeWindow() {
  const { meta } = useMultiViewContext();

  const { data } = loginFormSchema.safeParse(meta);

  const { setOpen } = useLoginViewContext();

  const router = useRouter();

  return (
    <MultiViewWindow windowIdx={1}>
      <DialogTitle className="lg:text-body-md text-heading-6 text-center max-lg:font-bold">
        کد تائید
      </DialogTitle>

      {!!data?.phoneNumber && (
        <DialogDescription className="lg:text-caption-md text-body-sm text-neutral-gray-7 text-center max-lg:mt-6">
          <span>کد تایید پنج‌رقمی به شماره</span>{" "}
          <span>{localizeNumber(data.phoneNumber)}</span> <span>ارسال شد.</span>
        </DialogDescription>
      )}

      <ConfirmOTPForm
        onSuccessfullySubmit={() => {
          setOpen(false);
          router.refresh();
        }}
      />
    </MultiViewWindow>
  );
}
