import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import SingleRate from "@/components/atoms/SingleRate";
import Tag from "@/components/atoms/Tag";
import Responsive from "@/components/utils/Responsive";
import { localizeNumber } from "@/utils";
import Image from "next/image";

const ProductCard = () => {
  const discount = true;
  return (
    <div className="border-neutral-gray-4 w-[168px] overflow-hidden rounded-sm border lg:w-[288px] lg:rounded-lg">
      <div className="relative aspect-168/109 lg:aspect-288/240">
        <Image
          src="/images/products/demo.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="p-2 pt-1 lg:p-4">
        <h4 className="text-caption-md lg:text-heading-7 text-center">
          غذای گیاهی
        </h4>

        <div className="mt-1 flex items-center lg:mt-4">
          <label className="lg:flex lg:items-center lg:gap-1">
            <Checkbox
              checkedIcon={<Heart_Bold className="text-status-error" />}
              uncheckedIcon={<Heart_Outline className="text-neutral-gray-5" />}
              className="size-4"
            />
            <span className="text-caption-sm text-neutral-gray-5 font-normal max-lg:hidden">
              افزودن به علاقمندی‌ها
            </span>
          </label>

          {discount && (
            <>
              <span className="text-neutral-gray-5 text-caption-sm ms-auto font-normal line-through">
                {localizeNumber(175000)}
              </span>

              <Tag variant="pill" color="error" size="16" className="ms-1">
                ٪۲۰
              </Tag>
            </>
          )}
        </div>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <SingleRate
              direction="y"
              containerProps={{
                className: "size-4",
              }}
              value={(1 * 3) / 5}
            />
            <span className="text-caption-sm lg:text-button-sm text-neutral-gray-8 font-normal">
              ۳
            </span>
            <span className="text-caption-sm text-neutral-gray-5 font-normal max-lg:hidden">
              (۶۲ امتیاز)
            </span>
          </div>

          <span className="text-caption-sm lg:text-body-md text-neutral-gray-8 font-normal">
            <span>{localizeNumber(150000)}</span> <span>تومان</span>
          </span>
        </div>

        <Responsive<typeof Button>
          component={
            <Button className="mt-3 w-full justify-center lg:mt-4">
              افزودن به سبد خرید
            </Button>
          }
          size={{ initial: "sm", lg: "md" }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
