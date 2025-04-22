import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Loader from './../common/Loader';
import Error from '../common/Error';
import { retrieve } from '../../utils/user';
import FeaturedInfo from './FeaturedInfo';

export default function Featured() {
  const [current, setCurrent] = useState(0);

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ["banner-movies/shows"],
    queryFn: () => retrieve("movies/banner-movies")
  });

  if(isLoading) return <div className="w-full bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex items-center justify-center rounded-lg animate-skeleton">
    <Loader />
  </div>

  if(error || !data.success) return <div className="w-full h-[85vh] bg-[#212121] flex flex-col items-center justify-center rounded-lg border-2 border-[#222]">
    <Error />
    <button className="btn-red" onClick={refetch}>Load Again</button>
  </div>

  return <div className="w-full bg-center bg-gradient-to-t from-[#141414] to-transparent h-[50vh] md:h-[85vh] flex flex-col rounded-lg overflow-hidden262626 bg-cover relative">
    <img
      src={`https://image.tmdb.org/t/p/w1280${data.payload.results[current].backdrop_path || 'ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg'}`}
      className="w-full h-full absolute z-[-1] object-cover rounded-xl"
      style={{ backgroundImage: `linear-gradient(to top, #141414, 95%,transparent)` }}
    />
    <FeaturedInfo
      title={data.payload.results[current].original_title}
      overview={data.payload.results[current].overview}
      id={data.payload.results[current].id}
      prev={() => setCurrent(prev => prev === 0 ? 7 : prev - 1)}
      next={() => setCurrent(prev => prev === 7 ? 0 : prev + 1)}
    />
  </div>
}