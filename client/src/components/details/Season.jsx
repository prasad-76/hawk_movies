import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

import Loader from '../common/Loader';
import Error from '../common/Error';
import Episode from './Episode';
import { retrieve } from '../../utils/user';

export default function Season({seasonNo}) {
  const {id} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const {data, isLoading, error} = useQuery({
    queryKey: [`show-${id}/${seasonNo}`],
    queryFn: () => retrieve(`shows/season-details/${id}/${seasonNo}`)
  });

  if(isLoading) return <div className="bg-2 my-4 p-8 rounded-md border-2 border-[#262626] flex items-center justify-center">
    <Loader />
  </div>

  if(!data.success || error) return <div className="bg-2 my-4 py-2 rounded-md border-2 border-[#262626] flex items-center justify-center">
    <Error />
  </div>

  return <div className="bg-2 my-4 p-8 rounded-md border-2 border-[#262626]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h3>Season {seasonNo.toString().padStart(2, "0")}</h3>
        <p>{data?.payload?.episodes?.length.toString().padStart(2, "0")} Episodes</p>
      </div>
      <span onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? <ArrowUpIcon className="logo-md" /> : <ArrowDownIcon className="logo-md" />}
      </span>
    </div>
    {isOpen && data.payload.episodes.map(episode => <Episode key={episode.episode_number} episode={episode} />)}
  </div>
}