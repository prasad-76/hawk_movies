import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { scrollMoviesBar } from "../../utils/events";

export default function BarNavigation({ carouselId }) {

  function scrollToLeft() {
    scrollMoviesBar(carouselId, -1);
  }

  function scrollToRight() {
    scrollMoviesBar(carouselId);
  }

  return <div className="w-max mt-8 hidden lg:flex lg:mt-0 ml-auto bg-2 p-2 items-center gap-4 rounded-md border-4 border-[#141414]">
    <ArrowLeftIcon onClick={scrollToLeft} className="w-10 bg-[#1A1A1A] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:opacity-50 border-[#1a1a1a]" />

    {/* {[1, 2, 3, 4].map(index => <div key={index} className={`w-2 h-[1px] md:w-4 md:h-[4px] ${index === 1 ? "bg-red-500" : "bg-[#333333]"} rounded-md`}></div>)} */}

    <ArrowRightIcon onClick={scrollToRight} className="w-10 bg-[#1A1A1A] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:opacity-50 border-[#1a1a1a]" />
  </div >
}