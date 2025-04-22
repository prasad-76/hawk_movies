import MovieBar from "../features/movies-listings/MovieBar";
import FAQs from "../components/landing/FAQs";
import Subscription from "../components/landing/Subscription";
import useScroll from "../hooks/useScroll";
import { facilities } from "../utils/data";

import heroImg from "/hero-banner-2.webp";
import { Link } from "react-router-dom";

export default function Landing() {
  const { scroller } = useScroll(0, 0);
  scroller();

  return <div>
    <div className="bg-cover bg-center h-[80vh] lg:h-[90vh] flex flex-col" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="padding-inline text-center bg-gradient-to-t from-[#141414] to-transparent mt-auto">
        <h1>The Best Streaming Experience</h1>
        <p className="mx-auto mt-8">Hawk Movies is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. <span className="hidden md:inline">With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</span></p>
      </div>
    </div>
    <Link to="/movies-shows" className="w-max font-semibold btn-red my-8 block mx-auto py-[14px] px-[20px] rounded-lg">Explore</Link>    <div className="padding-inline">
      <div className="block-margin">
        <MovieBar
          endpoint="movies/popular"
          cardsType="cards-md mb-14 lg:mb-20"
          carouselId="explore-movies"
          title="Popular Movies"
          component="release-date"
          creationType="movies"
          info="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
      </div>
      <div className="block-margin" id="devices">
        <h2>We Provide you streaming experience across various devices.</h2>
        <p className="max-w-[100ch] mt-4">With Hawk Movies, you can enjoy your favorite movies and TV shows anytime, anywhere. <span className="hidden md:inline">Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</span></p>
        <div className="md:grid grid-cols-3 gap-5 mt-16">
          {facilities.map(item => <div key={item.id} className="gradient-tr-bl max-w-[400px] md:max-w-[800px] mx-auto p-8 mb-5 md:mb-0 aspect-video rounded-lg border-2 border-[#262626]">
            <div className="flex items-center gap-4">
              {/* <item.Icon className="w-12 text-red bg-[#1a1a1a] p-2 rounded-lg border-2 border-[#262626]" /> */}
              <h3>{item.title}</h3>
            </div>
            <p className="mt-8">{item.description}</p>
          </div>)}
        </div>
      </div>
      <FAQs />
      <Subscription />
    </div>
  </div>
}