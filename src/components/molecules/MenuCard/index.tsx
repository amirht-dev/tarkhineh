import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import Ratting, { RattingSkeleton } from "@/components/atoms/Ratting";
import { Skeleton } from "@/components/atoms/Skeleton";
import Tag, { TagSkeleton } from "@/components/atoms/Tag";
import { tv } from "@/lib/tailwind-variants";
import Image from "next/image";
import { MenuCardProps, MenuCardSkeletonProps } from "./index.types";

const menuCardBaseVariants = tv({
  slots: {
    root: "border-neutral-gray-4 flex h-25 overflow-hidden rounded-sm border lg:h-40 lg:rounded-lg",
    image_wrapper: "h-full w-[30%] shrink-0",
    body: "bg-neutral-white flex flex-1 flex-col p-2 lg:px-4 lg:py-2",
    top_wrapper: "flex items-center justify-between",
    title: "text-caption-md lg:text-heading-7 leading-none",
    desktop_favorite: "ms-auto size-6 max-lg:hidden",
    mobile_discount_wrapper: "flex items-center gap-2 lg:hidden",
    discount_price: "text-caption-sm",
    middle_Wrapper: "mt-2 flex items-center justify-between gap-4",
    ingredients: "text-caption-sm lg:text-body-sm",
    desktop_discount_wrapper: "flex items-center gap-2 max-lg:hidden",
    discount_price_price_wrapper:
      "flex shrink-0 flex-col items-end gap-1 max-lg:hidden",
    price: "text-caption-sm lg:text-body-lg",
    bottom_wrapper: "mt-auto flex items-center",
    mobile_favorite: "size-4 lg:hidden",
    rate: "max-lg:ms-2",
    rate_icon: "size-4 lg:size-6",
    button: "ms-auto",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
      false: {
        root: "max-w-[600px]",
      },
    },
  },
});

export const menuCardVariants = tv({
  extend: menuCardBaseVariants,
  slots: {
    root: "group",
    image_wrapper: "relative",
    image: "object-cover object-center",
    body: "",
    top_wrapper: "",
    title: "text-neutral-gray-8",
    desktop_favorite: "opacity-0 transition-opacity group-hover:opacity-100",
    mobile_discount_wrapper: "",
    discount_price: "text-neutral-gray-4 font-normal line-through",
    middle_Wrapper: "",
    ingredients: "text-neutral-gray-8 line-clamp-1 font-normal lg:line-clamp-2",
    desktop_discount_wrapper: "",
    discount_price_price_wrapper: "",
    price: "text-neutral-gray-8 font-normal text-nowrap",
    bottom_wrapper: "",
    mobile_favorite: "",
    rate: "",
    rate_icon: "",
    button: "",
  },
  variants: {
    fullWidth: {
      true: {},
      false: {},
    },
  },
});

const MenuCard = ({ fullWidth = false }: MenuCardProps) => {
  const cns = menuCardVariants({ fullWidth });

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
        <div className={cns.top_wrapper()}>
          <h5 className={cns.title()}>پاستا سبزیجات</h5>

          <Checkbox
            checkedIcon={<Heart_Bold className="text-status-error" />}
            uncheckedIcon={<Heart_Outline className="text-neutral-gray-5" />}
            className={cns.desktop_favorite()}
          />

          <div className={cns.mobile_discount_wrapper()}>
            <span className={cns.discount_price()}>۱۷۵٬۰۰۰</span>

            <Tag size="22" color="error" variant="pill">
              %۲۰
            </Tag>
          </div>
        </div>

        <div className={cns.middle_Wrapper()}>
          <p className={cns.ingredients()}>
            پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
          </p>

          <div className={cns.discount_price_price_wrapper()}>
            <div className={cns.desktop_discount_wrapper()}>
              <span className={cns.discount_price()}>۱۷۵٬۰۰۰</span>

              <Tag size="22" color="error" variant="pill">
                %۲۰
              </Tag>
            </div>

            <span className={cns.price()}>۱۵۰٬۰۰۰ تومان</span>
          </div>
        </div>

        <div className={cns.bottom_wrapper()}>
          <Checkbox
            checkedIcon={<Heart_Bold className="text-status-error" />}
            uncheckedIcon={<Heart_Outline className="text-neutral-gray-5" />}
            className={cns.mobile_favorite()}
          />

          <Ratting
            value={3}
            readonly
            iconClassName={cns.rate_icon()}
            containerClassName={cns.rate()}
          />

          <Button size="sm" className={cns.button({ className: "lg:hidden" })}>
            افزودن به سبد خرید
          </Button>
          <Button
            size="md"
            className={cns.button({
              className: "w-[244px] justify-center max-lg:hidden",
            })}
          >
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

export const menuCardSkeletonVariants = tv({
  extend: menuCardBaseVariants,
  slots: {
    title: "w-20 lg:w-32",
    discount_price: "w-10",
    tag: "w-8",
    ingredients: "w-40 lg:w-60",
    price: "w-25",
  },
  variants: {
    fullWidth: {
      true: {},
      false: {},
    },
  },
});

export const MenuCardSkeleton = ({
  fullWidth = false,
}: MenuCardSkeletonProps) => {
  const cns = menuCardSkeletonVariants({ fullWidth });

  return (
    <div className={cns.root()}>
      <Skeleton className={cns.image_wrapper()} />

      <div className={cns.body()}>
        <div className={cns.top_wrapper()}>
          <Skeleton size="text" className={cns.title()} />

          <Skeleton type="text">
            <Heart_Bold className={cns.desktop_favorite()} />
          </Skeleton>

          <div className={cns.mobile_discount_wrapper()}>
            <Skeleton size="text" className={cns.discount_price()} />

            <TagSkeleton size="22" variant="pill" className={cns.tag()} />
          </div>
        </div>

        <div className={cns.middle_Wrapper()}>
          <Skeleton size="text" className={cns.ingredients()} />

          <div className={cns.discount_price_price_wrapper()}>
            <div className={cns.desktop_discount_wrapper()}>
              <Skeleton size="text" className={cns.discount_price()} />

              <TagSkeleton size="22" variant="pill" className={cns.tag()} />
            </div>

            <Skeleton size="text" className={cns.price()} />
          </div>
        </div>

        <div className={cns.bottom_wrapper()}>
          <Skeleton size="text" type="text" className={cns.mobile_favorite()}>
            <Heart_Bold className="size-[inherit]" />
          </Skeleton>

          <RattingSkeleton
            containerClassName={cns.rate()}
            iconClassName={cns.rate_icon()}
          />

          <Button
            size="sm"
            disabled
            className={cns.button({ className: "lg:hidden" })}
          >
            افزودن به سبد خرید
          </Button>
          <Button
            size="md"
            disabled
            className={cns.button({
              className: "w-[244px] justify-center max-lg:hidden",
            })}
          >
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};
