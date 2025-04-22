import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function searchForResults(query) {
    try {
      setSearching(true);
      setSearchText(query);
    } catch (error) {
      console.log(error)
    } finally {
      setSearching(false);
    }
  }

  return <SearchContext.Provider value={{ searchText, searchForResults, searchResults, searching }}>
    {children}
  </SearchContext.Provider>
}

export default function useSearchContext() {
  const searchContext = useContext(SearchContext);
  return searchContext;
}