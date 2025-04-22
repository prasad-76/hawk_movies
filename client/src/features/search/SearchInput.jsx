import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useSearchContext from "../../providers/SearchProvider";
import Loader from "../../components/common/Loader";

export default function SearchInput() {
  const { searching, searchText, searchForResults } = useSearchContext();
  return <label target="search-field" className="px-4 bg-1 h-20 flex items-center gap-4 rounded-t-[8px]">
    <MagnifyingGlassIcon className="icon-md text-light" />
    <input
      id="search-field"
      type="text"
      autoFocus
      value={searchText}
      onChange={e => searchForResults(e.target.value)}
      placeholder="Search movie/show name"
      className="bg-inherit text-light grow border-0 "
    />
    {searching && <Loader styles="w-6 h-6" />}
  </label>
};