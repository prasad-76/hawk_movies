import BarNavigation from "./BarNavigation";

export default function BarHeading({ title, description, carouselId }) {
  return <div>
    <div className="lg:flex items-center justify-between">
      <div>
        <h2>{title}</h2>
        {description && <p className="mt-4">{description}</p>}
      </div>
      <BarNavigation carouselId={carouselId} />
    </div>
  </div>
}