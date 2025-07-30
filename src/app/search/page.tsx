import SearchBox from "@/components/atoms/SearchBox";
import ProductCard from "@/components/molecules/ProductCard";
import { NextPage } from "@/types/next";
import { wait } from "@/utils";
import clamp from "lodash/clamp";
import Image from "next/image";
import { CSSProperties } from "react";

async function getProductsByName(name: string) {
  await wait();
  return Array(name === "پاستا" ? 3 : 0).fill(undefined);
}

const SearchPage: NextPage = async ({ searchParams }) => {
  const searchTermQuery = (await searchParams).q;

  const searchTerm = Array.isArray(searchTermQuery)
    ? searchTermQuery[0]
    : (searchTermQuery ?? "");

  const notFond = (
    <div className="my-12 flex flex-col items-center">
      <h4 className="text-body-xl text-neutral-gray-8 text-center">
        موردی با این مشخصات پیدا نکردیم!
      </h4>

      <SearchBox className="mt-4 max-w-[392px]" initialValue={searchTerm} />

      <Image
        src="/images/match-not-found.png"
        alt="match not found"
        width={390}
        height={345}
        className="mt-14 h-[345px] w-[390px]"
      />
    </div>
  );

  if (!searchTerm || !searchTerm.length) return notFond;

  const products = await getProductsByName(searchTerm);

  if (!products.length) return notFond;

  const count = products.length;

  return (
    <div className="container my-6 flex flex-col items-center lg:my-12">
      <h4 className="text-heading-6 lg:text-heading-4 text-center">
        <span className="text-neutral-gray-8">نتایج جستجو برای:</span>
        <span className="text-primary">{searchTerm}</span>
      </h4>

      <SearchBox className="mt-4 max-w-[392px]" initialValue={searchTerm} />

      <div
        className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-(--grid-cols) lg:gap-6"
        style={
          {
            "--grid-cols": `repeat(${clamp(count, 0, 3)}, minmax(0, 1fr))`,
          } as CSSProperties
        }
      >
        {Array.from({ length: count }, (_, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
