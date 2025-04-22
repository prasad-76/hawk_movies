import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TitleArrow({creation}) {
  return <div className="mt-4 flex items-center justify-between">
    <p className="font-semibold text-ellipsis truncate">{creation.original_title || "title"}</p>
    <ArrowRightIcon className="icon-md" />
  </div>
}