import { ClockIcon, RectangleStackIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function DurationSeasons({ creation }) {
  return <>
    <p className="font-semibold text-ellipsis truncate mt-4">{creation.original_name}</p>
    <div className="flex justify-between">
      <p className="tag-black flex items-center gap-1">
        <HeartIcon className="icon-md" />
        {creation.vote_average.toFixed(2)}
      </p>

      <p className="tag-black">
        <span className="leading-[30px]">{creation.vote_count} votes</span>
      </p>
    </div>
  </>
}