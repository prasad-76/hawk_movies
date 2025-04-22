import useSearchContext from "../../providers/SearchProvider"
import SearchResult from "./SearchResult";

export default function SearchResults() {
  const { searchText, searchResults } = useSearchContext();
  return <div className="px-4 py-8">
    {searchText && <h3
      className="text-light font-medium mb-10">
      {searchResults.length} Search Results For -
      <span className="text-white"> {searchText}</span>
    </h3>}

    {/* {searchResults.map((result, idx) => <SearchResult key={idx} />)} */}
    <SearchResult />
    <SearchResult />
  </div>
};