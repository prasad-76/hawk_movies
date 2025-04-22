import { useState } from "react";
import FeaturedInfo from "../movies-shows/FeaturedInfo";
import Loader from "../common/Loader";

export default function Featured({creation}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(prev => prev === 0 ? 7 : prev - 1);
  const next = () => setCurrent(prev => prev === 7 ? 0 : prev + 1);

  if(!creation) return <div className="w-full bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex items-center justify-center rounded-lg animate-skeleton">
    <Loader />
  </div>

  return (
    <div className="w-full bg-center bg-gradient-to-t from-[#141414] to-transparent h-[50vh] md:h-[85vh] flex flex-col rounded-lg overflow-hidden262626 bg-cover relative">
    {/* <iframe
      src={`https://www.youtube.com/embed/${creation.videos.results[current].id}?rel=0&enablejsapi=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
      className="absolute h-full w-full left-0 top-0 z-[-1]"
    /> */}
    <img
      src={`https://image.tmdb.org/t/p/w1280${creation?.images?.backdrops[current].file_path || 'ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg'}`}
      className="w-full h-full absolute z-[-1] object-cover rounded-xl"
      style={{ backgroundImage: `linear-gradient(to top, #141414, 95%,transparent)` }}
    />
    <FeaturedInfo
      title={creation.original_name || creation.original_title}
      overview=""
      prev={prev}
      next={next}
    />
    </div>
  )
};