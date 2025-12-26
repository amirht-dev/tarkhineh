import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import {
  Heart_Bold,
  Heart_Outline,
} from "@/components/atoms/icons/Support-Like-Question/Heart";
import Ratting from "@/components/atoms/Ratting";
import SingleRate from "@/components/atoms/SingleRate";
import Image from "next/image";

const FavoriteCard = () => {
  return (
    <div className="border-neutral-gray-4 bg-neutral-white rounded-sm border">
      <div className="relative h-[104px] lg:h-[140px]">
        <Image
          fill
          src="/images/products/demo.jpg"
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="p-2 lg:p-4">
        <div className="flex items-center justify-between">
          <span className="text-caption-md text-neutral-gray-8 lg:text-heading-7 line-clamp-1 font-semibold">
            پاستا سبزیجات
          </span>
          <Checkbox
            className="text-status-error size-4 lg:size-6"
            checked
            checkedIcon={<Heart_Bold />}
            uncheckedIcon={<Heart_Outline />}
          />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-end gap-0.5 lg:hidden">
            <SingleRate value={0.8} containerProps={{ className: "size-3" }} />

            <span className="text-caption-md text-neutral-gray-8 leading-none">
              ۴
            </span>
          </div>

          <Ratting value={4} containerClassName="max-lg:hidden" />

          <span className="text-caption-md text-neutral-gray-8 lg:text-body-md">
            ۱۵۰٬۰۰۰ تومان
          </span>
        </div>

        <Button size="responsive" className="mt-2 w-full lg:mt-4">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default FavoriteCard;
