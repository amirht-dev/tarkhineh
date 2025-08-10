"use client";

import withSuspense from "@/hoc/withSuspense";
import { useSearchParams } from "next/navigation";
import SearchResultTitle from "./SearchResultTitle";

const SearchResultTitleSuspense = withSuspense(() => {
  const searchTerm = useSearchParams().get("q") ?? "";
  return <SearchResultTitle searchTerm={searchTerm} />;
});

export default SearchResultTitleSuspense;
