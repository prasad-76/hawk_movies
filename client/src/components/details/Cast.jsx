import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { scrollMoviesBar } from "../../utils/events";

export default function Cast({ data }) {
  function scrollToLeft(carouselId) {
    scrollMoviesBar(carouselId, -1);
  }

  function scrollToRight(carouselId) {
    scrollMoviesBar(carouselId);
  }

  if(!data) return <></>
  return <div className={`mb-4 infoStyles grow`}>
    <div className="flex justify-between items-center mb-4">
      <p>Credits</p>
      <div className="flex">
        <ArrowLeftIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full mr-2" onClick={() => scrollToLeft("cast-carousel")} />
        <ArrowRightIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full" onClick={() => scrollToRight("cast-carousel")} />
      </div>
    </div>

    <div id="cast-carousel" className="w-full custom-scrollbar lg:no-scrollbar lg:snap-x flex gap-4 overflow-x-auto">
      {data?.credits?.cast && data.credits.cast.map((cast, index) => <div key={index} className="carousel-card min-w-28">
        <img
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          className=" snap-start aspect-square rounded-md object-cover hover:shadow-2xl hover:shadow-[#000] h- full"
        />
        <p className="font-semibold text-[12px] lg:text-[14px] mt-2">{cast.name}</p>
      </div>)}
    </div>
  </div>
}