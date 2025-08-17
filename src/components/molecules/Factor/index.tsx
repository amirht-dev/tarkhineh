"use client";

import { useGlobalStore } from "@/Providers/global-store";
import { ResponsiveButton } from "@/components/atoms/Button";
import Counter from "@/components/atoms/Counter";
import { WarningHexagon_Outline } from "@/components/atoms/icons/Essential/WarningHexagon";
import { User_Outline } from "@/components/atoms/icons/Users/User";
import { SignedIn, SignedOut } from "@/components/utils/Auth";
import { foods } from "@/constants";
import { calcPercentOf, discountedPrice } from "@/utils";
import { ReactNode } from "react";
import ClearShoppingCartPopup from "../ClearShoppingCartPopup";
import LoginPopup from "../LoginPopup";

type FactorProps = { buttonAction: ReactNode; showList?: boolean };

const Factor = ({ buttonAction, showList = false }: FactorProps) => {
  const shoppingCart = useGlobalStore((state) => state.shoppingCart);
  const addToShoppingCart = useGlobalStore((state) => state.addToShoppingCart);
  const removeFromShoppingCart = useGlobalStore(
    (state) => state.removeFromShoppingCart,
  );

  if (!shoppingCart.length) return;

  const totalAmount = shoppingCart.reduce((total, cart) => {
    const food = foods.find((food) => food.id === cart.foodId);

    if (!food) return total;

    return total + food.price * cart.count;
  }, 0);

  const totalDiscountedAmount = shoppingCart.reduce((total, cart) => {
    const food = foods.find((food) => food.id === cart.foodId);

    if (!food || !food.discount) return total;

    return total + calcPercentOf(food.price, food.discount) * cart.count;
  }, 0);

  const payableAmount = totalAmount - totalDiscountedAmount;

  return (
    <div className="bg-neutral-white border-neutral-gray-4 divide-neutral-gray-4 max-w-[496px] divide-y rounded-lg border p-6 [&>*]:py-3 [&>*]:first:pt-0">
      <div className="flex items-center justify-between max-lg:hidden">
        <span className="text-body-md text-neutral-gray-8">
          ({shoppingCart.length}) سبد خرید
        </span>

        <ClearShoppingCartPopup />
      </div>

      {showList && (
        <div>
          <ul className="max-h-[187px] overflow-y-auto">
            {shoppingCart.map((cart) => {
              const food = foods.find((food) => food.id === cart.foodId);

              if (!food) return;

              const price = !!food.discount
                ? discountedPrice(food.price, food.discount)
                : food.price;

              return (
                <li
                  key={cart.foodId}
                  className="bg-neutral-gray-1 even:bg-neutral-gray-3 flex items-center justify-between p-2"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-neutral-gray-8 text-caption-md lg:text-body-sm">
                      {food.name}
                    </span>

                    {food.discount ? (
                      <div className="flex gap-2">
                        <span className="text-neutral-gray-4 text-caption-sm lg:text-caption-md font-normal line-through">
                          {food.price.toLocaleString("fa")}
                        </span>

                        <span className="text-neutral-gray-7 text-caption-sm lg:text-caption-md font-normal">
                          {discountedPrice(
                            food.price,
                            food.discount,
                          ).toLocaleString("fa")}{" "}
                          <span>تومان</span>
                        </span>
                      </div>
                    ) : (
                      <span className="text-neutral-gray-7 text-caption-sm lg:text-caption-md font-normal">
                        {price.toLocaleString("fa")} <span>تومان</span>
                      </span>
                    )}
                  </div>

                  <Counter
                    value={cart.count}
                    onIncrement={() => addToShoppingCart(food.id)}
                    onDecrement={() => removeFromShoppingCart(food.id)}
                    onDelete={() => removeFromShoppingCart(food.id, "all")}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-body-sm text-neutral-gray-8">تخفیف محصولات</span>

        <span className="text-body-sm text-neutral-gray-7">
          {totalDiscountedAmount.toLocaleString("fa")} <span>تومان</span>
        </span>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <span className="text-body-sm text-neutral-gray-8">هزینه ارسال</span>

          <span className="text-body-sm text-neutral-gray-7">۰ تومان</span>
        </div>

        <div className="text-status-warning mt-2 flex items-start gap-2">
          <WarningHexagon_Outline className="size-4 shrink-0 lg:size-6" />

          <p className="text-caption-sm lg:text-caption-md font-normal">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-none">
        <span className="text-neutral-gray-8 text-body-sm">
          مبلغ قابل پرداخت
        </span>

        <span className="text-body-sm text-primary">
          {payableAmount.toLocaleString("fa")} <span>تومان</span>
        </span>
      </div>

      <SignedIn>{buttonAction}</SignedIn>

      <SignedOut>
        <LoginPopup
          trigger={
            <ResponsiveButton
              className="w-full justify-center"
              size={{ initial: "sm", lg: "md" }}
              prefixIcon={<User_Outline />}
            >
              ورود/ثبت نام
            </ResponsiveButton>
          }
        />
      </SignedOut>
    </div>
  );
};

export default Factor;
