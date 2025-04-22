import { StarIcon } from "@heroicons/react/24/solid";

export default function Rating({ rating }) {
  return <div className="flex gap-0 mt-1">
    {Array.from({ length: Math.floor(rating) }, (_, i) => i).map(index =>
      <StarIcon key={index} className="logo-md text-[#E50000]" />
    )}

    {Array.from({ length: Math.ceil(5 - rating) }, (_, i) => i).map(index =>
      <StarIcon key={index} className="logo-md text-[#707070]" />
    )}

    <div className="ml-2">{rating}</div>
  </div>
}