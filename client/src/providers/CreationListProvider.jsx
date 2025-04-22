import { createContext, useContext, useEffect, useState } from "react";
import { retrieve } from "../utils/user";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export const CreationListContext = createContext();

export function CreationListProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [slug, setSlug] = useState("");
  const [creationType, setCreationType] = useState("movie");
  const { ref: fetchNextDataRef, inView } = useInView();

  const changeCreationType = val => setCreationType(val);
  const changeSearchQuery = value => setSearchQuery(value);
  const changeSlug = (val) => setSlug(val);

  // console.log(`creations/discover/${creationType}?page=${1}&${slug}`)

  const { data, isFetching, error, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${creationType}/creations/${searchQuery}-${slug}`],
    queryFn: ({ pageParam }) => retrieve(`creations/discover/${creationType}?page=${pageParam + "&"}${"with_keywords=" + searchQuery + "&"}${slug}`),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.payload.page + 1
  });

  const creations = data?.pages?.map(page => page.payload);

  useEffect(function () {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  return <CreationListContext.Provider
    value={{ isFetching, error, searchQuery, changeSearchQuery, creations, fetchNextDataRef, creationType, changeCreationType, changeSlug }}>
    {children}
  </CreationListContext.Provider>
}

export default function useCreationListContext() {
  const context = useContext(CreationListContext);
  return context;
}