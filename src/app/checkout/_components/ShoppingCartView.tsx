"use client";

import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import { ResponsiveButton } from "@/components/atoms/Button";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import Factor from "@/components/molecules/Factor";
import ShoppingCard from "@/components/molecules/ShoppingCard";
import { useStepViewContext } from "@/components/molecules/Steps";
import Responsive from "@/components/utils/Responsive";
import { useGlobalStore } from "@/Providers/global-store";
import Image from "next/image";
import PageSection from "./PageSection";

function ShoppingCartView() {
  const { goToNextSiblingStep } = useStepViewContext();

  const shoppingCart = useGlobalStore((state) => state.shoppingCart);

  if (shoppingCart.length)
    return (
      <div className="flex items-start gap-6">
        <PageSection className="flex max-h-[554px] flex-1 flex-col gap-4 overflow-auto max-lg:hidden">
          {Array.from({ length: shoppingCart.length }, (_, idx) => (
            <ShoppingCard fullWidth key={idx} />
          ))}
        </PageSection>

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
    <PageSection className="relative flex h-[375px] flex-col items-center justify-center gap-4 lg:h-[422px] lg:gap-8">
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
    </PageSection>
  );
}

export default ShoppingCartView;
