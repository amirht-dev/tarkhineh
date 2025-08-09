"use client";

import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import Button, { ResponsiveButton } from "@/components/atoms/Button";
import {
  CustomRadio,
  CustomRadioIndicator,
} from "@/components/atoms/CustomRadio";
import { DocumentNormal_Outline } from "@/components/atoms/icons/Content-Edit/DocumentNormal";
import { Truck_Outline } from "@/components/atoms/icons/Delivery/Truck";
import { CheckCircle_Outline } from "@/components/atoms/icons/Essential/CheckCircle";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { ShoppingBag_Outline } from "@/components/atoms/icons/Shop/ShoppingBag";
import Textarea from "@/components/atoms/Textarea";
import AddressCard from "@/components/molecules/AdressCard";
import Factor from "@/components/molecules/Factor";
import { useStepViewContext } from "@/components/molecules/Steps";
import Responsive from "@/components/utils/Responsive";
import { useGlobalStore } from "@/Providers/global-store";
import Image from "next/image";
import { useState } from "react";
import { ArrayValues } from "type-fest";
import AddAddressPopup from "./AddAddressPopup";
import PageSection from "./PageSection";

const deliveryTypes = [
  {
    type: "courier",
    label: "ارسال توسط پیک",
    subLabel: "توسط پیک رستوران ارسال شود.",
    icon: Truck_Outline,
  },
  {
    type: "in-person",
    label: "تحویل حضوری",
    subLabel: "توسط پیک رستوران ارسال شود.",
    icon: ShoppingBag_Outline,
  },
] as const;

export default function CompleteInformationView() {
  const { goToNextSiblingStep } = useStepViewContext();

  const shoppingCartCount = useGlobalStore(
    (state) => state.shoppingCart.length,
  );

  const [deliveryType, setDeliveryType] =
    useState<ArrayValues<typeof deliveryTypes>["type"]>("courier");

  const [addresses, setAddresses] = useState([{}, {}]);

  const handleAddAddress = () => setAddresses((prev) => [...prev, {}]);

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
      <div className="flex flex-col gap-3 lg:flex-1 lg:gap-6">
        <PageSection className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex items-center gap-1 max-lg:border-b max-lg:pb-2">
            <Truck_Outline className="size-4 lg:size-6" />

            <span className="text-body-sm lg:text-body-md">
              روش تحویل سفارش
            </span>
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            {deliveryTypes.map(({ type, label, subLabel, icon: Icon }) => {
              const isChecked = deliveryType === type;

              return (
                <CustomRadio
                  key={type}
                  name="deliveryType"
                  value={type}
                  onChange={(e) => e.target.checked && setDeliveryType(type)}
                  checked={isChecked}
                >
                  <div className="text-neutral-gray-7 flex items-center">
                    <CustomRadioIndicator className="mt-0.5" />

                    <div className="ms-2 lg:flex lg:flex-col">
                      <span className="text-caption-md lg:text-body-sm">
                        {label}
                      </span>
                      <span className="text-caption-sm font-normal max-lg:hidden">
                        {subLabel}
                      </span>
                    </div>

                    <Icon className="ms-1 size-4 lg:size-6" />
                  </div>
                </CustomRadio>
              );
            })}
          </div>
        </PageSection>

        {deliveryType === "courier" && (
          <PageSection>
            <div className="border-neutral-gray-4 flex items-center justify-between border-b pb-2">
              <div className="text-neutral-gray-8 flex items-center gap-1">
                <Location_Outline className="size-4 lg:size-6" />

                <span className="text-body-sm lg:text-body-md">آدرس‌ها</span>
              </div>

              <AddAddressPopup onSuccessfullySubmit={handleAddAddress} />
            </div>

            {!!addresses.length ? (
              <div className="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                {Array.from({ length: addresses.length }, (_, idx) => (
                  <CustomRadio key={idx} name="address">
                    <AddressCard
                      key={idx}
                      className="peer-checked:border-primary"
                    />
                  </CustomRadio>
                ))}
              </div>
            ) : (
              <div className="relative flex h-40 items-center justify-center">
                <Image
                  src={emptyDesktopImage}
                  alt=""
                  className="absolute h-[127px] w-[131px]"
                />

                <p className="text-caption-sm text-neutral-gray-6 lg:text-body-sm font-normal">
                  شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
                </p>
              </div>
            )}
          </PageSection>
        )}

        {deliveryType === "in-person" && (
          <PageSection className="lg:flex lg:items-start">
            <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
              <div className="text-neutral-gray-8 max-lg:border-neutral-gray-4 flex items-center gap-1 max-lg:border-b max-lg:pb-2">
                <Location_Outline className="size-4 lg:size-6" />

                {/* TODO: show selected branch details */}
                <span className="text-body-sm lg:text-body-md">
                  آدرس شعبه اکباتان
                </span>
              </div>

              <div className="text-caption-sm lg:text-caption-md text-neutral-gray-7 space-y-1 font-normal">
                <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
                <div>
                  <p>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</p>
                  <p>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </p>
                </div>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</p>
              </div>

              {/* TODO: add link to show branch address in map */}
              <Button
                variant="outline"
                size="sm"
                color="black"
                className="mx-auto w-[152px]"
              >
                مشاهده در نقشه
              </Button>
            </div>

            <div className="bg-neutral-gray-2 flex h-[205px] w-[264px] items-center justify-center max-lg:hidden">
              {/* TODO: add branch map address location */}
              <span className="text-body-lg text-neutral-gray-7">map</span>
            </div>
          </PageSection>
        )}

        <Responsive
          component={Textarea}
          size={{ initial: "md", lg: "xl" }}
          containerProps={{
            className: "rounded-lg h-[141px] lg:h-[169px]",
          }}
          maxLength={200}
          label={
            <span className="-mb-2 flex items-center gap-1">
              <DocumentNormal_Outline className="size-4 lg:size-6" />
              <span>توضیحات سفارش (اختیاری)</span>
            </span>
          }
        />
      </div>

      <Factor
        buttonAction={
          <ResponsiveButton
            onClick={goToNextSiblingStep}
            suffixIcon={<CheckCircle_Outline />}
            size={{ initial: "sm", lg: "md" }}
            className="w-full"
            disabled={!shoppingCartCount}
          >
            ثبت سفارش
          </ResponsiveButton>
        }
        showList
      />
    </div>
  );
}
