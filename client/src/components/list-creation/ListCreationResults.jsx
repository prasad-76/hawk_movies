import { Link } from "react-router-dom";
import useCreationListContext from "../../providers/CreationListProvider";
import TitleArrow from './../../features/movies-listings/TitleArrow';
import Loader from './../common/Loader';

export default function ListCreationResults() {
  const { isFetching, searchQuery, creations, creationType, fetchNextDataRef } = useCreationListContext();

  return <div className="mt-20 mb-10">
    {searchQuery && <h3
      className="text-light font-medium mb-10">
      Search Results For -
      <span className="text-white">{searchQuery}</span>
    </h3>}

    <div className="cards-lg w-full flex items-center justify-evenly gap-x-4 gap-y-10 flex-wrap">
      {creations?.map((creationPage, idx) => {
        return creationPage?.results?.map((creation, idx) => <Link
          to={`/movies-shows/${creationType === "movie" ? "movie/" : "shows/" + creation.id}`}
          key={idx}
          className={`w-[340px] max-w-[340px] min-h-[500px] snap-start border-2 border-[#262626] bg-[#1A1A1A] p-6 rounded-lg`}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${creation.poster_path}`}
            className="w-full object-contain rounded-md"
            alt="poster"
          />
          <TitleArrow creation={creation} />
        </Link>)
      })}
    </div>
    {isFetching && <div className="mt-20 flex justify-center">
      <Loader />
    </div>}
    <div ref={fetchNextDataRef}></div>
  </div>
}