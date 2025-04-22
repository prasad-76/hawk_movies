import Featured from "../components/movies-shows/Featured";
import Listings from "../components/movies-shows/Listings";
import { moviesCarousels, showsCarousels } from "../utils/data";
import useScroll from "../hooks/useScroll";

export default function MoviesShows() {
  const {scroller} = useScroll(0, 0);
  scroller();

  return <div className="padding-inline mt-24">
    <Featured isListings />
    <Listings
      id="movies"
      title="Movies"
      creations={moviesCarousels}
      creationType="movies"
    />
    <Listings
      id="shows"
      title="Shows"
      creations={showsCarousels}
      creationType="shows"
    />
  </div>
}