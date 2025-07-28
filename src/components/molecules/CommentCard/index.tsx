import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import SingleRate from "@/components/atoms/SingleRate";
import { formateDate } from "@/utils/date";

const CommentCard = () => {
  return (
    <div className="bg-neutral-white border-neutral-gray-4 relative flex max-w-[252px] items-center gap-2 rounded-sm border px-4 py-5 lg:max-w-[600px] lg:rounded-lg lg:px-8 lg:py-6">
      <div className="flex shrink-0 flex-col items-center">
        <Avatar className="size-14 lg:size-24">
          <AvatarImage />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>

        <span className="text-caption-sm text-neutral-gray-7 lg:text-body-sm mt-1 font-normal">
          سردار وظیفه
        </span>

        <span className="text-caption-sm text-neutral-gray-7 lg:text-body-sm font-normal">
          {formateDate(new Date())}
        </span>
      </div>

      <p className="text-caption-sm text-neutral-gray-8 lg:text-body-md line-clamp-5 text-right font-normal lg:line-clamp-4 rtl:text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که
      </p>

      <div className="absolute bottom-2 flex items-center gap-1 lg:bottom-4 ltr:right-4 ltr:lg:right-8 rtl:left-4 rtl:lg:left-8">
        <SingleRate
          value={0.8}
          containerProps={{
            className: "size-3 lg:size-4",
          }}
        />
        <span className="text-caption-md text-neutral-gray-8 lg:text-button-lg">
          ۴
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
