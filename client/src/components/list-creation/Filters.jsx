import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import useCreationListContext from "../../providers/CreationListProvider";

const allGenres = [
  { "title": "Action", "selected": false, id: 28 },
  { "title": "Adventure", "selected": false, id: 12 },
  { "title": "Animation", "selected": false, id: 16 },
  { "title": "Comedy", "selected": false, id: 35 },
  { "title": "Crime", "selected": false, id: 80 },
  { "title": "Documentary", "selected": false, id: 99 },
  { "title": "Drama", "selected": false, id: 18 },
  { "title": "Family", "selected": false, id: 10751 },
  { "title": "Fantasy", "selected": false, id: 14 },
  { "title": "History", "selected": false, id: 36 },
  { "title": "Horror", "selected": false, id: 27 },
  { "title": "Music", "selected": false, id: 10402 },
  { "title": "Mystery", "selected": false, id: 9648 },
  { "title": "Romance", "selected": false, id: 10749 },
  { "title": "Thriller", "selected": false, id: 53 },
  { "title": "War", "selected": false, id: 10752 },
  { "title": "Western", "selected": false, id: 37 }
  // { "title": "Science Fiction", "selected": false },
  // { "title": "TV Movie", "selected": false },
]


export default function Filters() {
  const { searchQuery, changeSearchQuery, creationType, changeCreationType, changeSlug } = useCreationListContext();
  const [genres, setGenres] = useState({ opened: false, selected: allGenres });
  const selectedGenres = genres.selected.filter(genre => genre.selected).map(genre => (genre.id).toString()).join(",")

  useEffect(function () {
    const searchQueries = `${selectedGenres === "," ? "" : "with_genres=" + selectedGenres}`
    changeSlug(searchQueries)

  }, [selectedGenres]);

  return <div className="text-[#999999] flex items-center gap-4">
    {/* searchBar */}
    <div className="max-w-64 relative">
      <input
        type="text"
        className="input !pl-10"
        placeholder="search"
        value={searchQuery}
        onChange={e => changeSearchQuery(e.target.value)} />
      <MagnifyingGlassIcon className="w-6 text-[#999999] absolute top-1/2 left-2 translate-y-[-50%]" />
    </div>

    {/* Creation Type */}
    <select id="countries" onChange={(e) => changeCreationType(e.target.value)} className="max-w-64 input w-full rounded-[0.375rem] cursor-pointer">
      <option value="movie" defaultValue={creationType === "movie"}>Movies</option>
      <option value="tv" defaultValue={creationType === "tv"}>TV</option>
    </select>

    {/* Genres */}
    <div id="countries" className="max-w-64 input w-full relative rounded-[0.375rem] cursor-pointer">
      <div onClick={() => setGenres(prev => ({ ...prev, opened: !prev.opened }))}>Genres</div>
      {genres.opened && <div className="absolute top-full left-0 p-2 input">
        {genres.selected.map((genre, idx) => <div
          key={idx}
          className={`${genre.selected ? "opacity-100 text-white" : "opacity-40"} my-2 hover:opacity-100`}
          onClick={() => setGenres(prev => ({
            ...prev,
            selected: prev.selected
              .map(lastGenre => lastGenre.title === genre.title ? { ...lastGenre, selected: !lastGenre.selected } : lastGenre)
          }))}
        >{genre.title}</div>)}
      </div>}
    </div>
  </div>
}