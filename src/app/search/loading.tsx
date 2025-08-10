"use client";

import SearchBox from "@/components/atoms/SearchBox";
import { ProductCardSkeleton } from "@/components/molecules/ProductCard";
import SearchResultTitleSuspense from "./_components/SearchResultTitleSuspense";

export default function SearchLoading() {
  return (
    <div className="container my-6 flex flex-col items-center lg:my-12">
      <SearchResultTitleSuspense />

      <SearchBox className="mt-4 max-w-[392px]" disabled />

      <div className="mt-12">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
          {Array.from({ length: 3 }, (_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
