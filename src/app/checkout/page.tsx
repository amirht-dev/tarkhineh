"use client";

import { CheckSquare_Outline } from "@/components/atoms/icons/Essential/CheckSquare";
import { Wallet2_Outline } from "@/components/atoms/icons/Money/Wallet2";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import ClearShoppingCartPopup from "@/components/molecules/ClearShoppingCartPopup";
import { Steps, StepsBar, StepsBarItem } from "@/components/molecules/Steps";
import CompleteInformationView from "./_components/CompleteInformationView";
import ShoppingCartView from "./_components/ShoppingCartView";
import StepViewContent from "./_components/StepViewContent";

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
          <CompleteInformationView />
        </StepViewContent>
      </Steps>
    </div>
  );
}
