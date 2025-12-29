import SearchBox from "@/components/atoms/SearchBox";
import ProductCard from "@/components/molecules/ProductCard";
import { foods } from "@/constants";
import { wait } from "@/utils";
import clamp from "lodash/clamp";
import Image from "next/image";
import { CSSProperties } from "react";
import SearchResultTitle from "./_components/SearchResultTitle";

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const searchTermQuery = (await searchParams).q;

  const searchTerm = Array.isArray(searchTermQuery)
    ? searchTermQuery[0]
    : (searchTermQuery ?? "");

  const filteredFoods = await getProductsByName(searchTerm);

  if (!searchTerm || !searchTerm.length || !filteredFoods.length)
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

  return (
    <div className="container my-6 flex flex-col items-center lg:my-12">
      <SearchResultTitle searchTerm={searchTerm} />

      <SearchBox className="mt-4 max-w-[392px]" initialValue={searchTerm} />

      <div className="mt-12">
        <div
          className="grid grid-cols-2 gap-3 lg:grid-cols-(--grid-cols) lg:gap-6"
          style={
            {
              "--grid-cols": `repeat(${clamp(filteredFoods.length, 0, 3)}, minmax(0, 1fr))`,
            } as CSSProperties
          }
        >
          {filteredFoods.map((food) => (
            <ProductCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

async function getProductsByName(name: string) {
  await wait(2000);
  return foods.filter((food) => food.name.includes(name));
}
