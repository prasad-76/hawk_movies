import { formatDate } from "../../utils/date";

export default function ReleaseDate({ creation }) {
  return <>
    <p className="font-semibold text-ellipsis truncate mt-4">{creation.original_name || creation.original_title}</p>
    <div className="text-center text-sm bg-2 px-4 py-2 mt-4 rounded-2xl border-2 border-[#262626]">
      <p>{formatDate(creation.first_air_date || creation.release_date)}</p>
    </div>
  </>
}