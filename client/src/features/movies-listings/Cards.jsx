import Card from "./Card";

export default function Cards({ creations, carouselId, cardsType, creationType, component }) {
  if (!creations) return <>No results</>;

  return <div id={carouselId} className={`w-full custom-scrollbar lg:no-scrollbar snap-x scroll-smooth pb-10 lg:pb-0 my-8 flex gap-4 overflow-x-auto ${cardsType}`}>
    {creations?.map((creation, index) => <Card
      key={index}
      index={index}
      creation={creation}
      component={component}
      creationType={creationType}
    />)}
  </div>
}