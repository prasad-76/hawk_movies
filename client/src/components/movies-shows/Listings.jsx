import MoviesBar from "../../features/movies-listings/MovieBar";

export default function Listings({ id, title, creations, creationType }) {
  return <div id={id} className="relative px-4 lg:px-10 pt-20 my-20 border-2 border-[#262626] rounded-lg">
    <span className="bg-[#E50000] absolute top-0 left-5 translate-y-[-50%] px-4 py-2 rounded-md">
      {title}
    </span>
    {creations.map(creation => <MoviesBar
      key={creation.id}
      endpoint={creation.endpoint}
      carouselId={creation.carouselId}
      cardsType={creation.cardsType}
      title={creation.title}
      component={creation.component}
      creationType={creationType}
    />)}
  </div>
}