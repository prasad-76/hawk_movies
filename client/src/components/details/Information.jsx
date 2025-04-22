import Cast from "./Cast"
import Reviews from "./Reviews"

export default function Information({ data }) {
  if(!data) return <div className="w-full bg-[#141414] animate-skeleton mr-10"></div>
  return <div>
    <div className={`mb-4 info`}>
      <p className="mb-4">Description</p>
      <div>{data?.overview}</div>
    </div>
    <Cast data={data} />
    <Reviews data={data} />
  </div>
}