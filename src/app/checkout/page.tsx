"use client";

import { CheckSquare_Outline } from "@/components/atoms/icons/Essential/CheckSquare";
import { Wallet2_Outline } from "@/components/atoms/icons/Money/Wallet2";
import { ShoppingCard_Outline } from "@/components/atoms/icons/Shop/ShoppingCard";
import ClearShoppingCartPopup from "@/components/molecules/ClearShoppingCartPopup";
import { Steps, StepsBar, StepsBarItem } from "@/components/molecules/Steps";
import { DevTool } from "@hookform/devtools";
import { useForm, UseFormReturn } from "react-hook-form";
import { Merge } from "type-fest";
import CompleteInformationView from "./_components/CompleteInformationView";
import PaymentView from "./_components/PaymentView";
import ShoppingCartView from "./_components/ShoppingCartView";
import StepViewContent from "./_components/StepViewContent";

const step = {
  cart: { label: "سبد خرید", icon: <ShoppingCard_Outline /> },
  information: { label: "تکمیل اطلاعات", icon: <CheckSquare_Outline /> },
  payment: { label: "پرداخت", icon: <Wallet2_Outline /> },
};

export type CheckoutFormType = {
  items: unknown[];
  orderDescription: string;
  discountCode: string;
} & (
  | {
      deliveryType: "courier";
      address: string;
    }
  | {
      deliveryType: "in-person";
    }
) &
  (
    | {
        paymentMethod: "internet";
        paymentGateway: string;
      }
    | {
        paymentMethod: "on-site";
      }
  );

export type PropsWithCheckoutFormProps<P = unknown> = Merge<
  P,
  { checkoutForm: UseFormReturn<CheckoutFormType, unknown, CheckoutFormType> }
>;

export default function CheckoutPage() {
  // TODO: add control state of steps to set step to 0 when user signed out during making order

  const checkoutForm = useForm<CheckoutFormType>({
    defaultValues: {
      deliveryType: "courier",
      address: "",
      orderDescription: "",
      paymentMethod: "internet",
      paymentGateway: "",
      discountCode: "",
    },
  });

  return (
    <>
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
            <ShoppingCartView checkoutForm={checkoutForm} />
          </StepViewContent>

          <StepViewContent index={1} label={step.information.label}>
            <CompleteInformationView checkoutForm={checkoutForm} />
          </StepViewContent>

          <StepViewContent index={2} label={step.payment.label}>
            <PaymentView checkoutForm={checkoutForm} />
          </StepViewContent>
        </Steps>
      </div>

      <DevTool control={checkoutForm.control} />
    </>
  );
}
