import { ClockIcon, StarIcon } from "@heroicons/react/24/solid";

export default function DurationRating({ duration = "120min", rating = 2.5 }) {
  return <div className="flex justify-between items-center">
    <p className="h-11 tag-black flex items-center gap-1">
      <ClockIcon className="icon-md" />
      {duration}
    </p>

    <p className="h-11 tag-black flex items-center gap-0">
      {Array.from({ length: 5 }, (_, i) => i + 1).
        map(index => <StarIcon
          key={index}
          className={`icon-sm ${index < rating ? "text-red" : ""} ${index === 5 && "mr-2"}`}
        />)}
      {rating}
    </p>
  </div>
}