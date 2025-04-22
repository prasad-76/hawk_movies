import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { PlusIcon, HandThumbUpIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { controlIframeVideo } from "../../utils/events";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedInfo({ prev, next, title, overview, id }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleVideoPlaying() {
    setIsPlaying(prev => !prev);
    controlIframeVideo(isPlaying ? "pauseVideo" : "playVideo");
  };

  return <div className="text-center mt-auto">
    <h2>{title || "Avengers: Endgame"}</h2>
    {overview && <p className="max-w-[80ch] mt-2 line-clamp-2 mx-auto px-4">{overview}</p>}
    <div className="mt-8 flex gap-4 items-center justify-center">
      {/* <button className="btn-red flex items-center gap-2" onClick={toggleVideoPlaying}>
        {isPlaying 
        ? <>
            <PauseIcon className="logo-md" />
            Pause
          </>
        : <>
            <PlayIcon className="logo-md" />
            Play
          </>
        }
      </button> */}
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <PlusIcon className="logo-md" />
      </button>
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <HandThumbUpIcon className="logo-md" />
      </button>
      {/* <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <SpeakerWaveIcon className="logo-md" />
      </button> */}
      {id && <Link to={`/movies-shows/movies/${id}`} className="btn-red px-4 py-[14px] rounded-md">
        Checkout
      </Link>}
    </div>

    <div className="hidden md:flex items-center justify-between mt- 2 mx-10 mb-10">
      <ArrowLeftIcon
        className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]"
        onClick={prev}
      />
      <ArrowRightIcon
        className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]"
        onClick={next}
      />
    </div>
  </div>
}