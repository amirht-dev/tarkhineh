import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import SingleRate from "@/components/atoms/SingleRate";
import Tag from "@/components/atoms/Tag";
import { localizeNumber } from "@/utils";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="border-neutral-gray-4 w-[168px] overflow-hidden rounded-sm border">
      <div className="relative aspect-168/109">
        <Image
          src="/images/products/demo.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="p-2 pt-1">
        <h4 className="text-caption-md text-center">غذای گیاهی</h4>

        <div className="mt-1 flex items-center">
          <Checkbox
            checkedIcon={<Heart_Bold className="text-status-error" />}
            uncheckedIcon={<Heart_Outline className="text-neutral-gray-5" />}
            className="size-4"
          />

          <span className="text-neutral-gray-5 text-caption-sm ms-auto font-normal line-through">
            {localizeNumber(175000)}
          </span>

          <Tag variant="pill" color="error" size="16" className="ms-1">
            ٪۲۰
          </Tag>
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
            <span className="text-caption-sm text-neutral-gray-8 font-normal">
              {localizeNumber(3)}
            </span>
          </div>

          <span className="text-caption-sm text-neutral-gray-8 font-normal">
            <span>{localizeNumber(150000)}</span> <span>تومان</span>
          </span>
        </div>

        <Button size="sm" className="mt-3 w-full justify-center">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
