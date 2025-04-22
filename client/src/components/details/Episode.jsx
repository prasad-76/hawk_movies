import { ClockIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Loader from "../common/Loader";

export default function Episode({ episode }) {
  return <div className="py-8 lg:flex items-start gap-4 border-b-2 border-[#262626]">

    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div className="text-2xl text-[#707070] font-bold">
        {episode.episode_number.toString().padStart(2, 0)}
      </div>

      <Suspense fallback={<div className="grow lg:min-w-28 lg:max-w-32 aspect-[16/9] min-h-10 rounded-md border-2 animate-skeleton">
          <Loader />
        </div>}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${episode?.still_path}`}
          className="grow lg:min-w-28 lg:max-w-32 aspect-[16/9] rounded-md border-2 border-[#262626] object-cover"
        />
      </Suspense>
    </div>

    <div className="grow">
      <div className="mb-2 lg:flex items-center justify-between">
        <h4 className="my-4 lg:my-0">{episode.name}</h4>
        <p className="max-w-fit bg-1 px-2 py-0 rounded-md flex gap-2 border-2 border-[#262626]">
          <ClockIcon className="logo-md" />
          {episode.runtime} mins
        </p>
      </div>
      <p className="hidden lg:block line-clamp-1">{episode.overview}</p>
    </div>

  </div>
}