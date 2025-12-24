"use client";

import Button from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import { Box_Outline } from "@/components/atoms/icons/Delivery/Box";
import { Truck_Outline } from "@/components/atoms/icons/Delivery/Truck";
import { Home_Outline } from "@/components/atoms/icons/Essential/Home";
import { TickCircle_Outline } from "@/components/atoms/icons/Essential/TickCircle";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { Clock_Outline } from "@/components/atoms/icons/Time/Clock";
import Tag from "@/components/atoms/Tag";
import { TagProps } from "@/components/atoms/Tag/index.types";
import Timer from "@/components/atoms/Timer";
import useBreakpointMediaQuery from "@/hooks/useBreakpointMediaQuery";
import Image from "next/image";
import { useState } from "react";
import { Steps, StepsBar, StepsBarItem } from "../Steps";

export type OrderCardProps = {
  deliverType: "in-person" | "courier";
  status: "cancelled" | "in-progress" | "completed";
};

const deliveryStatusTagColorMap: Record<
  OrderCardProps["status"],
  TagProps["color"]
> = {
  "in-progress": "warning",
  cancelled: "error",
  completed: "success",
};

const deliveryStatusTagLabelMap: Record<OrderCardProps["status"], string> = {
  "in-progress": "جاری",
  cancelled: "لغو شده",
  completed: "تحویل شده",
};

const deliveryTypeTagLabelMap: Record<OrderCardProps["deliverType"], string> = {
  "in-person": "تحویل حضوری",
  courier: "ارسال توسط پیک",
};

const OrderCard = ({ deliverType, status }: OrderCardProps) => {
  const [showAll, setShowAll] = useState(false);

  const isLarge = useBreakpointMediaQuery("lg");

  const count = 10;

  return (
    <div className="bg-neutral-white border-neutral-gray-4 rounded-sm border px-3 pt-2 pb-4 lg:rounded-md lg:p-6">
      <div className="flex items-center justify-between">
        <span className="text-caption-md text-neutral-gray-6 lg:text-body-sm">
          شعبه اقدسیه
        </span>

        <div className="flex items-center gap-2">
          <Tag color="neutral" size="responsive">
            {deliveryTypeTagLabelMap[deliverType]}
          </Tag>
          <Tag color={deliveryStatusTagColorMap[status]} size="responsive">
            {deliveryStatusTagLabelMap[status]}
          </Tag>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-neutral-gray-6 flex items-center gap-1">
            <Location_Outline className="size-3" />
            <span className="text-caption-sm lg:text-caption-md font-normal">
              شنبه، ۸ مرداد، ساعت ۱۸:۵۳
            </span>
          </div>

          {status === "in-progress" && (
            <div className="text-caption-sm lg:text-caption-md text-neutral-gray-6 flex items-center gap-1 font-normal">
              <Clock_Outline className="size-4" />
              <span>تحویل تا</span>
              <span className="text-primary">
                <Timer duration={{ minutes: 20 }} autoStart />
              </span>
            </div>
          )}
        </div>
        <div className="text-neutral-gray-6 flex items-center gap-1">
          <Location_Outline className="size-3" />
          <span className="text-caption-sm lg:text-caption-md font-normal">
            تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
          </span>
        </div>
        <div className="text-neutral-gray-6 flex items-center gap-1">
          <Location_Outline className="size-3" />
          <span className="text-caption-sm lg:text-caption-md space-x-1 font-normal">
            <span>مبلغ: ۲۲۸٬۵۰۰ تومان</span> <span>تخفیف: ۲۸٬۵۰۰ تومان</span>
          </span>
        </div>
      </div>

      {status === "in-progress" && (
        <Steps stepsCount={3}>
          <StepsBar className="my-2 lg:my-3">
            <StepsBarItem index={0} asChild disabled>
              <span>
                <Home_Outline className="size-6 data-[state=active]:size-8 lg:size-10 lg:data-[state=active]:size-12" />
                <span className="max-lg:hidden">در حال آماده‌سازی</span>
              </span>
            </StepsBarItem>
            <StepsBarItem index={1} asChild disabled>
              {deliverType === "courier" ? (
                <span>
                  <Truck_Outline className="size-6 data-[state=active]:size-8 lg:size-10 lg:data-[state=active]:size-12" />
                  <span className="max-lg:hidden">ارسال توسط پیک</span>
                </span>
              ) : (
                <span>
                  <Box_Outline className="size-6 data-[state=active]:size-8 lg:size-10 lg:data-[state=active]:size-12" />
                  <span className="max-lg:hidden">آماده تحویل</span>
                </span>
              )}
            </StepsBarItem>
            <StepsBarItem index={2} asChild disabled>
              <span>
                <TickCircle_Outline className="size-6 data-[state=active]:size-8 lg:size-10 lg:data-[state=active]:size-12" />
                <span className="max-lg:hidden">تحویل سفارش</span>
              </span>
            </StepsBarItem>
          </StepsBar>
        </Steps>
      )}

      <div className="mt-2 grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-4">
        {Array.from({ length: showAll ? count : isLarge ? 6 : 3 }, (_, idx) => (
          <div
            className="border-neutral-gray-4 bg-neutral-white overflow-hidden rounded-lg border"
            key={idx}
          >
            <div className="relative h-12 lg:h-20">
              <Image
                fill
                src="/images/products/demo.jpg"
                alt=""
                className="object-cover object-center"
              />

              <span className="text-caption-sm bg-primary-tint-1 text-primary absolute end-1 bottom-1 rounded-xs p-1 leading-none">
                1&times;
              </span>
            </div>

            <div className="text-caption-sm text-neutral-gray-8 flex flex-col px-2 py-1 text-center font-semibold">
              <span className="line-clamp-1">پاستا سبزیجات</span>
              <span className="line-clamp-1">۱۵۰٬۰۰۰ تومان</span>
            </div>
          </div>
        ))}
      </div>

      {count > 3 && (
        <button
          className="text-neutral-gray-6 text-caption-sm lg:text-caption-md mx-auto mt-2 block font-normal lg:mt-3"
          onClick={() => setShowAll((p) => !p)}
        >
          {showAll ? "مشاهده کمتر" : "مشاهده همه سفارشات"}
        </button>
      )}

      {status === "in-progress" ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="responsive"
              variant="outline"
              color="error"
              className="mt-4 block max-lg:mx-auto lg:ms-auto"
            >
              لغو سفارش
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-sm overflow-hidden rounded-md border-none p-0">
            <DialogHeader className="grid grid-cols-3">
              <DialogTitle className="col-start-2 text-center">
                لغو سفارش
              </DialogTitle>
              <DialogClose className="col-start-3 justify-self-end" />
            </DialogHeader>

            <div className="px-2 py-4 lg:py-8">
              <DialogDescription className="text-center">
                آیا از لغو سفارش خود مطمئن هستید؟
              </DialogDescription>
            </div>

            <DialogFooter className="mx-auto flex max-w-3xs items-center justify-center gap-4 pb-4">
              <DialogClose asChild>
                <Button
                  size="responsive"
                  autoFocus
                  className="text-neutral-white flex-1"
                >
                  بازگشت
                </Button>
              </DialogClose>

              <Button
                size="responsive"
                variant="twotone"
                color="error"
                className="flex-1"
              >
                لغو سفارش
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Button
          size="responsive"
          variant="outline"
          color="primary"
          className="mt-4 block max-lg:mx-auto lg:ms-auto"
        >
          سفارش مجدد
        </Button>
      )}
    </div>
  );
};

export default OrderCard;
