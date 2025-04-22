export default function Position({ position, img, name, location }) {
  return <div className="mb-8">
    {/* <p className="mb-4">{position}</p> */}

    <div className="flex gap-2 bg-2 p-3 rounded-md">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="w-16 h-16 object-cover border-2 border-[#262626] rounded-md" />

      <div>
        {name}
        {/* <p>From {location}</p> */}
        <p>{position}</p>
      </div>
    </div>

  </div>
}