import { Edit2_Outline } from "@/components/atoms/icons/Content-Edit/Edit2";
import { Trash_Outline } from "@/components/atoms/icons/Essential/Trash";
import { twMerge } from "@/lib/tailwind-merge";

const AddressCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-gray-1 border-neutral-gray-4 flex flex-col gap-2 rounded-sm border p-4",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h5 className="text-caption-sm text-neutral-gray-8 lg:text-body-sm line-clamp-2 font-normal">
          تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
        </h5>

        <div className="flex items-center gap-3">
          <button>
            <Edit2_Outline className="text-neutral-gray-8 hover:text-primary size-4 transition-colors lg:size-6" />
          </button>
          <button>
            <Trash_Outline className="text-neutral-gray-8 hover:text-status-error size-4 transition-colors lg:size-6" />
          </button>
        </div>
      </div>

      <div className="text-neutral-gray-7 lg:text-body-sm text-caption-sm flex items-center justify-between font-normal">
        <span>محل کار</span>
        <span>سردار وظیفه</span>
        <span>۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
      </div>
    </div>
  );
};

export default AddressCard;
