import { Link } from 'react-router-dom';

import DurationRating from "./DurationRating"
import LikesCount from "./LikesCount"
import ReleaseDate from "./ReleaseDate"
import TitleArrow from "./TitleArrow"

const componentMap = {
  "title-arrow": TitleArrow,
  "release-date": ReleaseDate,
  "duration-seasons": LikesCount,
  "duration-rating": DurationRating
}

export default function Card({ creation, component, creationType, styles }) {
  const Component = componentMap[component]
  return <Link to={`/movies-shows/${creationType + "/" + creation.id}`} className={`carousel-card snap-start border-2 border-[#262626] bg-[#1A1A1A] p-6 rounded-lg ${styles}`}>
    <img
      src={`https://image.tmdb.org/t/p/w780/${creation.poster_path}`}
      className="w-full object-contain rounded-md"
      alt="poster"
    />
    <Component creation={creation} />
  </Link>
}