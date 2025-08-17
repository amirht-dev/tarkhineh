"use client";

import Counter, { CounterSkeleton } from "@/components/atoms/Counter";
import { Trash_Outline } from "@/components/atoms/icons/Essential/Trash";
import Ratting, { RattingSkeleton } from "@/components/atoms/Ratting";
import { Skeleton } from "@/components/atoms/Skeleton";
import Tag, { TagSkeleton } from "@/components/atoms/Tag";
import { foods } from "@/constants";
import { tv } from "@/lib/tailwind-variants";
import { useGlobalStore } from "@/Providers/global-store";
import { average, discountedPrice } from "@/utils";
import Image from "next/image";
import { ShoppingCardProps, ShoppingCardSkeletonProps } from "./index.types";

const shoppingCardBaseVariants = tv({
  slots: {
    root: "border-neutral-gray-4 flex h-40 rounded-lg border",
    image_wrapper: "h-full w-1/4 shrink-0",
    body: "flex flex-1 flex-col justify-between px-8 py-4",
    top_wrapper: "flex items-center justify-between gap-6",
    title: "text-heading-7",
    deleteButton: "[&_svg]:size-6",
    middle_wrapper: "flex flex-1 items-center justify-between gap-6",
    ingredients: "text-body-sm",
    discount_wrapper: "flex items-center gap-2 self-end",
    discount_price: "text-overline-lg",
    bottom_wrapper: "flex items-center",
    rate: "",
    rate_icon: "size-6",
    counter: "ms-6",
    price: "text-body-xl ms-auto",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
      false: {
        root: "max-w-[656px]",
      },
    },
  },
});

export const shoppingCardVariants = tv({
  extend: shoppingCardBaseVariants,
  slots: {
    root: "",
    image_wrapper: "relative",
    image: "object-cover object-center",
    body: "",
    title: "text-neutral-gray-8 line-clamp-1",
    deleteButton: "hover:text-status-error transition-colors",
    ingredients: "text-neutral-gray-8 line-clamp-2",
    discount_wrapper: "",
    discount_price: "text-neutral-gray-5 line-through",
    rate: "",
    rate_icon: "",
    counter: "",
    price: "text-neutral-gray-8",
  },
  variants: {
    fullWidth: {
      true: {},
      false: {},
    },
  },
});

const ShoppingCard = ({ fullWidth, cart }: ShoppingCardProps) => {
  const { foodId, count } = cart;

  const addToShoppingCart = useGlobalStore((state) => state.addToShoppingCart);
  const removeFromShoppingCart = useGlobalStore(
    (state) => state.removeFromShoppingCart,
  );

  const food = foods.find((food) => food.id === foodId);

  if (!food) return;

  const averageRate = Math.floor(average(...food.rates));

  const cns = shoppingCardVariants({ fullWidth });

  return (
    <div className={cns.root()}>
      <div className={cns.image_wrapper()}>
        <Image
          src={food.images[0]}
          alt={food.name}
          fill
          className={cns.image()}
        />
      </div>

      <div className={cns.body()}>
        <div className={cns.top_wrapper()}>
          <h5 className={cns.title()}>{food.name}</h5>

          <button
            className={cns.deleteButton()}
            onClick={() => removeFromShoppingCart(food.id, "all")}
          >
            <Trash_Outline />
          </button>
        </div>

        <div className={cns.middle_wrapper()}>
          <p className={cns.ingredients()}>{food.ingredients}</p>

          {!!food.discount && (
            <div className={cns.discount_wrapper()}>
              <span className={cns.discount_price()}>
                {food.price.toLocaleString("fa")}
              </span>

              <Tag size="22" color="error" variant="pill">
                {food.discount.toLocaleString("fa")}%
              </Tag>
            </div>
          )}
        </div>

        <div className={cns.bottom_wrapper()}>
          <Ratting
            value={averageRate}
            readonly
            iconClassName={cns.rate_icon()}
            containerClassName={cns.rate()}
          />

          <Counter
            value={count}
            wrapperClassName={cns.counter()}
            onIncrement={() => addToShoppingCart(food.id)}
            onDecrement={() => removeFromShoppingCart(food.id)}
            onDelete={() => removeFromShoppingCart(food.id, "all")}
          />

          <span className={cns.price()}>
            {(!!food.discount
              ? discountedPrice(food.price, food.discount)
              : food.price
            ).toLocaleString("fa")}{" "}
            <span>تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;

export const shoppingCardSkeletonVariants = tv({
  extend: shoppingCardBaseVariants,
  slots: {
    title: "w-30",
    ingredients: "w-70",
    discount_price: "w-16",
    tag: "w-9",
    counter: "w-14",
    price: "w-30",
  },
  variants: {
    fullWidth: {
      true: {},
      false: {},
    },
  },
});

export const ShoppingCardSkeleton = ({
  fullWidth,
}: ShoppingCardSkeletonProps) => {
  const cns = shoppingCardSkeletonVariants({ fullWidth });

  return (
    <div className={cns.root()}>
      <Skeleton className={cns.image_wrapper()} />

      <div className={cns.body()}>
        <div className={cns.top_wrapper()}>
          <Skeleton size="text" className={cns.title()} />
        </div>

        <div className={cns.middle_wrapper()}>
          <Skeleton size="text" className={cns.ingredients()} />

          <div className={cns.discount_wrapper()}>
            <Skeleton size="text" className={cns.discount_price()} />

            <TagSkeleton size="22" variant="pill" className={cns.tag()} />
          </div>
        </div>

        <div className={cns.bottom_wrapper()}>
          <RattingSkeleton iconClassName={cns.rate_icon()} />

          <CounterSkeleton className={cns.counter()} />

          <Skeleton size="text" className={cns.price()} />
        </div>
      </div>
    </div>
  );
};
