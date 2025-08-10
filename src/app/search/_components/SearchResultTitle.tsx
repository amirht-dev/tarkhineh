type SearchResultTitleProps = {
  searchTerm: string;
};

const SearchResultTitle = ({ searchTerm }: SearchResultTitleProps) => {
  return (
    <h4 className="text-heading-6 lg:text-heading-4 text-center">
      <span className="text-neutral-gray-8">نتایج جستجو برای:</span>
      <span className="text-primary">{searchTerm}</span>
    </h4>
  );
};

export default SearchResultTitle;
