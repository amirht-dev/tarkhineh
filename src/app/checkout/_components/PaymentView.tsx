"use client";

import { validateDiscountCodeAction } from "@/actions/user";
import { ResponsiveButton } from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import { FieldTextTypeProps } from "@/components/atoms/Field/index.types";
import GatewayRadio from "@/components/atoms/GatewayRadio";
import { WarningHexagon_Outline } from "@/components/atoms/icons/Essential/WarningHexagon";
import { Card_Outline } from "@/components/atoms/icons/Money/Card";
import { DiscountShape_Outline } from "@/components/atoms/icons/Money/DiscountShape";
import { WalletMoney_Outline } from "@/components/atoms/icons/Money/WalletMoney";
import Factor from "@/components/molecules/Factor";
import Radio from "@/components/molecules/Radio";
import Responsive from "@/components/utils/Responsive";
import { paymentGateways, paymentMethods } from "@/constants";
import { startTransition, useActionState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CheckoutFormType } from "../page";
import PageSection from "./PageSection";

export default function PaymentView() {
  const [
    isDiscountCodeValidated,
    validateDiscountCode,
    isValidatingDiscountCode,
  ] = useActionState(validateDiscountCodeAction, null);

  const {
    register,
    control,
    watch,
    getValues,
    formState: { isValid },
  } = useFormContext<CheckoutFormType>();

  const paymentMethod = watch("paymentMethod");

  const handleValidateDiscountCode = () =>
    startTransition(() => validateDiscountCode(getValues("discountCode")));

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
      <div className="flex flex-col gap-3 lg:flex-1 lg:gap-6">
        <PageSection className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:py-6">
          <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex shrink-0 items-center gap-1 max-lg:border-b max-lg:pb-2">
            <DiscountShape_Outline className="size-4 lg:size-6" />

            <span className="text-body-sm lg:text-body-md">ثبت کد تخفیف</span>
          </div>

          <div className="flex w-full max-w-[400px] gap-4">
            <Controller
              control={control}
              name="discountCode"
              disabled={isValidatingDiscountCode}
              render={({ field }) => (
                <Responsive<FieldTextTypeProps>
                  component={Field}
                  label="کد تخفیف"
                  description="کد تست code است"
                  error={
                    isDiscountCodeValidated === false && "کد تخفیف نامعتبر!"
                  }
                  success={
                    isDiscountCodeValidated === true &&
                    "کد تخفیف با موفقیت اعمال شد!"
                  }
                  spellCheck={false}
                  size={{ initial: "sm", lg: "md" }}
                  rootClassName="flex-1"
                  onKeyDown={(e) =>
                    e.key.toLowerCase() === "enter" &&
                    handleValidateDiscountCode()
                  }
                  {...field}
                />
              )}
            />
            <ResponsiveButton
              size={{ initial: "sm", lg: "md" }}
              onClick={handleValidateDiscountCode}
              disabled={isValidatingDiscountCode}
            >
              ثبت کد
            </ResponsiveButton>
          </div>
        </PageSection>

        <PageSection className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:py-8">
          <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex items-center gap-1 max-lg:border-b max-lg:pb-2">
            <WalletMoney_Outline className="size-4 lg:size-6" />

            <span className="text-body-sm lg:text-body-md">روش پرداخت</span>
          </div>

          <div className="flex gap-6 lg:flex-row lg:gap-12">
            {paymentMethods.map(({ type, label, subLabel, icon }) => {
              return (
                <Radio
                  key={type}
                  value={type}
                  label={label}
                  subLabel={subLabel}
                  icon={icon}
                  {...register("paymentMethod")}
                />
              );
            })}
          </div>
        </PageSection>

        {paymentMethod === "internet" && (
          <PageSection className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:py-6">
            <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex items-center gap-1 max-lg:border-b max-lg:pb-2">
              <Card_Outline className="size-4 lg:size-6" />

              <span className="text-body-sm lg:text-body-md">درگاه پرداخت</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 lg:gap-4">
                {paymentGateways.map((gateway) => {
                  return (
                    <GatewayRadio
                      key={gateway.name}
                      gateway={gateway}
                      value={gateway.name}
                      {...register("paymentGateway", {
                        validate: (value, { paymentMethod }) => {
                          if (paymentMethod === "internet" && !value)
                            return "درگاه پرداخت اجباری است";
                        },
                      })}
                    />
                  );
                })}
              </div>

              <p className="text-neutral-gray-7 text-center">
                <span className="text-caption-sm lg:text-caption-md font-normal">
                  پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.
                </span>
                <br />
                <span className="text-caption-sm font-normal">
                  (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
                </span>
              </p>
            </div>
          </PageSection>
        )}

        {paymentMethod === "on-site" && (
          <PageSection className="bg-neutral-gray-1 flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-18 lg:py-6">
            <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex shrink-0 items-center gap-1 max-lg:border-b max-lg:pb-2">
              <WarningHexagon_Outline className="size-4 lg:size-6" />

              <span className="text-body-sm lg:text-body-md">قابل توجه</span>
            </div>

            <p className="text-caption-sm text-neutral-gray-7 font-normal">
              هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
              تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
              درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر
              از همراهی شما.
            </p>
          </PageSection>
        )}
      </div>

      <Factor
        buttonAction={
          <ResponsiveButton
            suffixIcon={<Card_Outline />}
            size={{ initial: "sm", lg: "md" }}
            className="w-full"
            disabled={!isValid}
          >
            {paymentMethod === "internet" ? "تایید و پرداخت" : "ثبت سفارش"}
          </ResponsiveButton>
        }
        showList
      />
    </div>
  );
}
