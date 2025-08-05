"use client";

import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import { ResponsiveButton } from "@/components/atoms/Button";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
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
import Factor from "@/components/molecules/Factor";
import ClearShoppingCartPopup from "@/components/molecules/ClearShoppingCartPopup";
import ShoppingCard from "@/components/molecules/ShoppingCard";
import {
  Steps,
  StepsBar,
  StepsBarItem,
  StepsPrevButton,
  StepsView,
  useStepViewContext,
} from "@/components/molecules/Steps";
import Responsive, { Visible } from "@/components/utils/Responsive";
import Image from "next/image";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { ValueOf } from "type-fest";

const step = {
  cart: { label: "سبد خرید", icon: <ShoppingCard_Outline /> },
  information: { label: "تکمیل اطلاعات", icon: <CheckSquare_Outline /> },
  payment: { label: "پرداخت", icon: <Wallet2_Outline /> },
};

export default function CheckoutPage() {
  // TODO: add control state of steps to set step to 0 when user signed out during making order
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

        <StepViewContent
          index={0}
          label={step.cart.label}
          sectionActionButton={
            <ClearShoppingCartPopup triggerClassName="justify-self-end" />
          }
        >
          <ShoppingCartView />
        </StepViewContent>

        <StepViewContent index={1} label={step.information.label}>
          <InformationView />
        </StepViewContent>
      </Steps>
    </div>
  );
}

function ShoppingCartView() {
  const { goToNextSiblingStep } = useStepViewContext();
  const cart = 10;

  if (cart > 0)
    return (
      <div className="flex items-start gap-6">
        <div className="border-neutral-gray-4 flex max-h-[554px] flex-1 flex-col gap-4 overflow-auto rounded-lg border p-6 max-lg:hidden">
          {Array.from({ length: cart }, (_, idx) => (
            <ShoppingCard fullWidth key={idx} />
          ))}
        </div>

        <Responsive
          component={Factor}
          showList={{ initial: true, lg: false }}
          buttonAction={
            <ResponsiveButton
              className="w-full"
              size={{ initial: "sm", lg: "md" }}
              suffixIcon={<ChevronLeft_Outline />}
              onClick={goToNextSiblingStep}
            >
              تکمیل اطلاعات
            </ResponsiveButton>
          }
        />
      </div>
    );

  return (
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
  );
}

function InformationView() {
  return null;
}

function StepViewContent({
  children,
  index,
  label,
  sectionActionButton,
}: PropsWithChildren<
  Pick<ComponentProps<typeof StepsView>, "index"> &
    Pick<ValueOf<typeof step>, "label"> & {
      sectionActionButton?: ReactNode;
    }
>) {
  return (
    <StepsView index={index} key={index}>
      <Visible on="initial">
        <Section key={index}>
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
      </Visible>

      <Visible on="lg">{children}</Visible>
    </StepsView>
  );
}
