import SearchBox from "@/components/atoms/SearchBox";
import Image from "next/image";

export default function SearchFoundFoundPage() {
  return (
    <div className="container my-6 flex flex-col items-center lg:my-12">
      <h4 className="text-body-xl">موردی با این مشخصات پیدا نکردیم!</h4>

      <SearchBox className="mt-4 max-w-[392px]" />

      <Image
        src="/images/match-not-found.png"
        alt="match not found"
        width={390}
        height={345}
        className="mt-14 h-[345px] w-[390px]"
      />
    </div>
  );
}
