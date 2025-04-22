import SearchFilters from "./SearchFilters";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function SearchLayout() {
  return <div className="bg-3 w-full h-full md:w-[500px] md:max-h-[80vh] lg:w-[800px] border-2 border-[#262626] rounded-[8px]">
    <SearchInput />
    {/* <SearchFilters /> */}
    <hr className="border-[var(--col-6)]" />
    <SearchResults />
  </div>
};