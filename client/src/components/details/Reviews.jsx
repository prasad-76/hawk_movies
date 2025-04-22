import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import { scrollMoviesBar } from "../../utils/events";
import Rating from "./Rating";

export default function Reviews({ data }) {
  if (data?.reviews && data?.reviews?.results <= 0) return;

  const scrollToLeft = (carouselId) => scrollMoviesBar(carouselId, -1);
  const scrollToRight = (carouselId) => scrollMoviesBar(carouselId);

  return <div className="infoStyles">
    <p className="mb-4">Reviews</p>

    <div className="no-scrollbar snap-x flex gap-4 overflow-x-auto" id="review-carousel">
      {data?.reviews?.results && data.reviews.results.map(review => <div
        key={review.id}
        className="carousel-card snap-start min-w-full lg:min-w-96 lg:w-1/2 bg-2 p-8 border-2 border-[#262626] rounded-md">
        <div className="flex items-center justify-between">
          <h3>
            {review?.author}
          </h3>
          <span className="px-1 pb-1">
            {review?.author_details?.rating ? <Rating rating={review?.author_details?.rating / 2} /> : <p className="pt-1">Not Rated</p>}
          </span>
        </div>
        <p className="mt-4">
          {review?.content.slice(0, 100)}{review?.content.length > 100 && <>...</>}
        </p>
      </div>)}
    </div>

    {data?.reviews?.results.length >= 2 && <div className="flex items-center justify-center gap-2 mt-8">
      <ArrowLeftIcon
        className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full"
        onClick={() => scrollToLeft("review-carousel")}
      />
      <ArrowRightIcon
        className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full"
        onClick={() => scrollToRight("review-carousel")}
      />
    </div>}
  </div>
}