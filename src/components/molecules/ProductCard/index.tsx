import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import SingleRate, { SingleRateSkeleton } from "@/components/atoms/SingleRate";
import { Skeleton } from "@/components/atoms/Skeleton";
import Tag, { TagSkeleton } from "@/components/atoms/Tag";
import { tv } from "@/lib/tailwind-variants";
import { localizeNumber } from "@/utils";
import Image from "next/image";
import { ProductCardAddToCartButton } from "./client";

const productCardBaseVariants = tv({
  slots: {
    root: "border-neutral-gray-4 bg-neutral-white w-[168px] overflow-hidden rounded-sm border lg:w-[288px] lg:rounded-lg",
    image_wrapper: "h-[109px] w-full lg:h-[240px]",
    body: "p-2 pt-1 lg:p-4",
    title: "text-caption-md lg:text-heading-7",
    favorite_discount_wrapper: "mt-1 flex items-center lg:mt-4",
    favorite_wrapper: "lg:flex lg:items-center lg:gap-1",
    favorite_icon: "size-4",
    favorite_text: "text-caption-sm max-lg:hidden",
    discount_wrapper: "ms-auto flex items-center gap-1",
    discount_price: "text-caption-sm",
    rate_price_wrapper: "mt-2 flex items-center justify-between lg:mt-4",
    rate_wrapper: "flex items-center gap-1",
    rate_icon: "size-4",
    rate: "text-caption-sm lg:text-button-sm",
    votes: "text-caption-sm max-lg:hidden",
    price: "text-caption-sm lg:text-body-md",
  },
});

const productCardVariants = tv({
  extend: productCardBaseVariants,
  slots: {
    image_wrapper: "relative",
    image: "object-cover object-center",
    title: "text-center leading-none",
    favorite_text: "text-neutral-gray-5 font-normal",
    discount_price: "text-neutral-gray-5 leading-none font-normal line-through",
    rate: "text-neutral-gray-8 leading-none font-normal",
    votes: "text-neutral-gray-5 leading-none font-normal",
    price: "text-neutral-gray-8 leading-none font-normal",
  },
});

const ProductCard = () => {
  const discount = true;
  const cns = productCardVariants();
  return (
    <div className={cns.root()}>
      <div className={cns.image_wrapper()}>
        <Image
          src="/images/products/demo.jpg"
          alt=""
          fill
          className={cns.image()}
        />
      </div>

      <div className={cns.body()}>
        <h4 className={cns.title()}>غذای گیاهی</h4>

        <div className={cns.favorite_discount_wrapper()}>
          <label className={cns.favorite_wrapper()}>
            <Checkbox
              checkedIcon={<Heart_Bold className="text-status-error" />}
              uncheckedIcon={<Heart_Outline className="text-neutral-gray-5" />}
              className={cns.favorite_icon()}
            />
            <span className={cns.favorite_text()}>افزودن به علاقمندی‌ها</span>
          </label>

          {discount && (
            <div className={cns.discount_wrapper()}>
              <span className={cns.discount_price()}>
                {localizeNumber(175000)}
              </span>

              <Tag variant="pill" color="error" size="16">
                ٪۲۰
              </Tag>
            </div>
          )}
        </div>

        <div className={cns.rate_price_wrapper()}>
          <div className={cns.rate_wrapper()}>
            <SingleRate
              direction="y"
              containerProps={{
                className: cns.rate_icon(),
              }}
              value={(1 * 3) / 5}
            />
            <span className={cns.rate()}>۳</span>
            <span className={cns.votes()}>(۶۲ امتیاز)</span>
          </div>

          <span className={cns.price()}>
            <span>{localizeNumber(150000)}</span> <span>تومان</span>
          </span>
        </div>
        <ProductCardAddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;

const productCardSkeletonVariants = tv({
  extend: productCardBaseVariants,
  slots: {
    title: "mx-auto w-25",
    favorite_text: "w-10",
    discount_price: "w-8",
    tag: "w-8",
    rate: "w-4",
    votes: "w-12",
    price: "w-14",
  },
});

export const ProductCardSkeleton = () => {
  const cns = productCardSkeletonVariants();
  return (
    <div className={cns.root()}>
      <Skeleton className={cns.image_wrapper()} />

      <div className={cns.body()}>
        <Skeleton size="text" className={cns.title()} />

        <div className={cns.favorite_discount_wrapper()}>
          <div className={cns.favorite_wrapper()}>
            <Skeleton type="text">
              <Heart_Bold className={cns.favorite_icon()} />
            </Skeleton>

            <Skeleton size="text" className={cns.favorite_text()} />
          </div>

          <div className={cns.discount_wrapper()}>
            <Skeleton size="text" className={cns.discount_price()} />

            <TagSkeleton size="16" variant="pill" className={cns.tag()} />
          </div>
        </div>

        <div className={cns.rate_price_wrapper()}>
          <div className={cns.rate_wrapper()}>
            <SingleRateSkeleton className={cns.rate_icon()} />

            <Skeleton size="text" className={cns.rate()} />

            <Skeleton size="text" className={cns.votes()} />
          </div>

          <Skeleton size="text" className={cns.price()} />
        </div>
        <ProductCardAddToCartButton disabled />
      </div>
    </div>
  );
};
