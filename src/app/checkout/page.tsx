"use client";

import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import { ResponsiveButton } from "@/components/atoms/Button";
import { CheckSquare_Outline } from "@/components/atoms/icons/Essential/CheckSquare";
import { Wallet2_Outline } from "@/components/atoms/icons/Money/Wallet2";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import {
  Steps,
  StepsBar,
  StepsBarItem,
  StepsPrevButton,
  StepsView,
} from "@/components/molecules/Steps";
import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
import { ComponentProps, ReactNode } from "react";
import { ValueOf } from "type-fest";

const step = {
  cart: { label: "سبد خرید", icon: <ShoppingCard_Outline /> },
  information: { label: "تکمیل اطلاعات", icon: <CheckSquare_Outline /> },
  payment: { label: "پرداخت", icon: <Wallet2_Outline /> },
};

export default function CheckoutPage() {
  return (
    <div className="container my-6 lg:my-10 lg:mb-12">
      <Steps stepsCount={3}>
        <StepsBar className="mx-auto max-w-[730px] max-lg:hidden">
          {Object.values(step).map((step, idx) => (
            <StepsBarItem key={idx} index={idx} prefixIcon={step.icon}>
              {step.label}
            </StepsBarItem>
          ))}
        </StepsBar>

        <CartStepView />
      </Steps>
    </div>
  );
}

function CartStepView() {
  const stepIndex = 0;
  return (
    <StepViewContent index={stepIndex} label={step.cart.label}>
      <div className="border-neutral-gray-4 relative flex h-[375px] flex-col items-center justify-center gap-4 rounded-lg border lg:h-[422px] lg:gap-8">
        <Image
          src={emptyDesktopImage}
          alt="empty"
          className="absolute w-[200px] lg:w-[325px]"
        />
        <p className="text-caption-md text-neutral-gray-7 lg:text-body-xl mt-12">
          شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
        </p>
        <ResponsiveButton
          variant="outline"
          size={{ initial: "sm", lg: "md" }}
          className="w-38 justify-center"
        >
          منوی رستوران
        </ResponsiveButton>
      </div>
    </StepViewContent>
  );
}

function StepViewContent({
  children,
  index,
  label,
  sectionActionButton,
}: Pick<ComponentProps<typeof StepsView>, "children" | "index"> &
  Pick<ValueOf<typeof step>, "label"> & {
    sectionActionButton?: ReactNode;
  }) {
  return (
    <StepsView index={index} key={index}>
      <Section key={index} className="lg:hidden">
        <SectionHeader className="grid grid-cols-3">
          <SectionActionIconButton className="justify-self-start" asChild>
            <StepsPrevButton className="disabled:invisible" />
          </SectionActionIconButton>
          <SectionTitle className="justify-self-center">{label}</SectionTitle>
          {!!sectionActionButton && (
            <SectionActionIconButton className="justify-self-end" asChild>
              {sectionActionButton}
            </SectionActionIconButton>
          )}
        </SectionHeader>

        <SectionBody className="mt-6">{children}</SectionBody>
      </Section>

      <Slot className="max-lg:hidden">{children}</Slot>
    </StepsView>
  );
}
