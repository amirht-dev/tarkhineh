import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import SingleRate, { SingleRateSkeleton } from "@/components/atoms/SingleRate";
import { Skeleton } from "@/components/atoms/Skeleton";
import Tag, { TagSkeleton } from "@/components/atoms/Tag";
import { ResponsiveAddToShoppingCartButton } from "@/components/utils/AddToShoppingCartButton";
import { SignedIn } from "@/components/utils/Auth";
import { tv } from "@/lib/tailwind-variants";
import { average, localizeNumber } from "@/utils";
import Image from "next/image";
import { ProductCartProps } from "./index.types";

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
    root: "flex flex-col",
    image_wrapper: "relative shrink-0",
    image: "object-cover object-center",
    body: "flex flex-1 flex-col",
    title: "text-center leading-none",
    favorite_text: "text-neutral-gray-5 font-normal",
    discount_price: "text-neutral-gray-5 leading-none font-normal line-through",
    rate_price_wrapper: "flex-1 items-end",
    rate: "text-neutral-gray-8 leading-none font-normal",
    votes: "text-neutral-gray-5 leading-none font-normal",
    price: "text-neutral-gray-8 leading-none font-normal",
  },
});

const ProductCard = ({ food }: ProductCartProps) => {
  const { id, name, price, rates, discount, images } = food;
  const averageRate = Math.floor(average(...rates));

  const cns = productCardVariants();
  return (
    <div className={cns.root()}>
      <div className={cns.image_wrapper()}>
        <Image src={images[0]} alt={name} fill className={cns.image()} />
      </div>

      <div className={cns.body()}>
        <h4 className={cns.title()}>{name}</h4>

        <div className={cns.favorite_discount_wrapper()}>
          <SignedIn>
            <label className={cns.favorite_wrapper()}>
              <Checkbox
                checkedIcon={<Heart_Bold className="text-status-error" />}
                uncheckedIcon={
                  <Heart_Outline className="text-neutral-gray-5" />
                }
                className={cns.favorite_icon()}
              />
              <span className={cns.favorite_text()}>افزودن به علاقمندی‌ها</span>
            </label>
          </SignedIn>

          {!!discount && (
            <div className={cns.discount_wrapper()}>
              <span className={cns.discount_price()}>
                {localizeNumber(175000)}
              </span>

              <Tag variant="pill" color="error" size="16">
                {discount.toLocaleString("fa")}%
              </Tag>
            </div>
          )}
        </div>

        <div className={cns.rate_price_wrapper()}>
          {!!rates.length && (
            <div className={cns.rate_wrapper()}>
              <SingleRate
                direction="y"
                containerProps={{
                  className: cns.rate_icon(),
                }}
                value={averageRate / 5}
              />
              <span className={cns.rate()}>
                {averageRate.toLocaleString("fa")}
              </span>
              <span className={cns.votes()}>({rates.length} امتیاز)</span>
            </div>
          )}

          <span className={cns.price()}>
            <span>{price.toLocaleString("fa")}</span> <span>تومان</span>
          </span>
        </div>

        <ResponsiveAddToShoppingCartButton
          className="mt-3 w-full lg:mt-4"
          foodId={id}
        />
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
        <ResponsiveAddToShoppingCartButton
          className="mt-3 w-full lg:mt-4"
          disabled
          foodId=""
        />
      </div>
    </div>
  );
};
