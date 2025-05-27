import { twMerge } from "@/lib/tailwind-merge";
import Image from "next/image";
import { MenuCardProps } from "./index.types";

const MenuCard = ({ imageSrc, label, imageClassName }: MenuCardProps) => {
  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt={label}
        className={twMerge("mx-auto -mb-[45%] w-[85%]", imageClassName)}
      />
      <div className="bg-primary aspect-287/160 rounded-lg" />
      <div className="bg-neutral-gray-1 drop-shadow-4 text-caption-md lg:text-body-xl mx-auto -mt-[calc(var(--height)/2)] flex h-(--height) w-[96px] items-center justify-center rounded-sm [--height:32px] lg:w-[155px] lg:[--height:48px]">
        {label}
      </div>
    </div>
  );
};

export default MenuCard;
// import { twMerge } from "@/lib/tailwind-merge";
// import Image from "next/image";
// import { MenuCardProps } from "./index.types";

// const MenuCard = ({ imageSrc, label, imageClassName }: MenuCardProps) => {
//   return (
//     <div className="relative">
//       <Image
//         src={imageSrc}
//         alt={label}
//         className={twMerge("mx-auto -mb-[45%] w-[85%]", imageClassName)}
//       />
//       <div className="bg-primary aspect-287/160 rounded-lg" />
//       <div className="bg-neutral-gray-1 drop-shadow-4 text-caption-md lg:text-body-xl mx-auto -mt-[calc(var(--height)/2)] flex h-(--height) w-[96px] items-center justify-center rounded-sm [--height:32px] lg:w-[155px] lg:[--height:48px]">
//         {label}
//       </div>
//     </div>
//   );
// };

// export default MenuCard;
