import { FunnelIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

export default function SearchFilters() {
  return <div className="px-4 py-8 [&>button]:p-0 flex items-center gap-4">
    <button className="flex items-center">
      <FunnelIcon className="icon-md text-light" />
      <p>Filters</p>
    </button>
    <button className="flex items-center">
      <VideoCameraIcon className="icon-md text-light" />
      <select name="" className="bg-transparent text-light">
        <option value="movie" className="text-light bg-transparent">Movie</option>
        <option value="show" className="text-light bg-transparent">Show</option>
      </select>
    </button>
  </div>
};
