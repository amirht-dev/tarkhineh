import SearchBox from "@/components/atoms/SearchBox";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/molecules/ProductCard";
import { NextPageProps } from "@/types/next";
import { wait } from "@/utils";
import clamp from "lodash/clamp";
import { redirect } from "next/navigation";
import { CSSProperties, Suspense } from "react";

export default async function SearchPage({ searchParams }: NextPageProps) {
  const searchTermQuery = (await searchParams).q;

  const searchTerm = Array.isArray(searchTermQuery)
    ? searchTermQuery[0]
    : (searchTermQuery ?? "");

  if (!searchTerm || !searchTerm.length)
    redirect(`/search/not-found?q=${searchTerm}`);

  return (
    <div className="container my-6 flex flex-col items-center lg:my-12">
      <h4 className="text-heading-6 lg:text-heading-4 text-center">
        <span className="text-neutral-gray-8">نتایج جستجو برای:</span>
        <span className="text-primary">{searchTerm}</span>
      </h4>

      <SearchBox className="mt-4 max-w-[392px]" initialValue={searchTerm} />

      <div className="mt-12">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList searchTerm={searchTerm} />
        </Suspense>
      </div>
    </div>
  );
}

async function getProductsByName(name: string) {
  await wait(2000);
  return Array(name === "پاستا" ? 3 : 0).fill(undefined);
}

const ProductList = async ({ searchTerm }: { searchTerm: string }) => {
  const products = await getProductsByName(searchTerm);

  if (!products.length) {
    redirect(`/search/not-found?q=${searchTerm}`);
  }

  return (
    <div
      className="grid grid-cols-2 gap-3 lg:grid-cols-(--grid-cols) lg:gap-6"
      style={
        {
          "--grid-cols": `repeat(${clamp(products.length, 0, 3)}, minmax(0, 1fr))`,
        } as CSSProperties
      }
    >
      {Array.from({ length: products.length }, (_, idx) => (
        <ProductCard key={idx} />
      ))}
    </div>
  );
};

const ProductListSkeleton = () => (
  <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
    {Array.from({ length: 3 }, (_, idx) => (
      <ProductCardSkeleton key={idx} />
    ))}
  </div>
);
