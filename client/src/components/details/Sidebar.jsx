import { CalendarIcon, LanguageIcon, StarIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Position from "./Position";
import Cateorize from "./Cateorize";

const titleStyles = "flex items-center gap-2 mb-4";

export default function Sidebar({ creation }) {
  if(!creation) return <div className="stick top-0 w-full bg-[#141414] h-20"></div>
  return <aside className="bg-1 lg:min-w-96 lg:max-w-96 p-[32px] mt-4 lg:mt-0 border-2 border-[#262626] rounded-md">
    <div className="mb-8">
      <p className={titleStyles}><CalendarIcon className="logo-md" />Released Year</p>
      {creation?.release_date?.slice(0, 4)}
    </div>

    {creation?.spoken_languages && <Cateorize
      Icon={LanguageIcon}
      title="Available Languages"
      categories={creation?.spoken_languages?.map(language => language.name)}
    />}

    {creation.budget && <div className="mb-8">
      <p className={titleStyles}><StarIcon className="logo-md" />Finances</p>
      <div className="flex gap-2">
        <div className="bg-2 p-4 w-full border-2 border-[#262626] rounded-md">
          <h3>Budget</h3>
          <p className="mt-2">$ {creation.budget}</p>
        </div>
        <div className="bg-2 p-4 w-full border-2 border-[#262626] rounded-md">
          <h3>Revenue</h3>
          <p className="mt-2">$ {creation.revenue}</p>
        </div>
      </div>
    </div>}

    {creation?.genres && <Cateorize
      Icon={Squares2X2Icon}
      title="Genres"
      categories={creation?.genres?.slice().map(genre => genre.name)}
    />}
    {creation?.credits && <>
      <Position
        position={creation?.credits?.crew[0]?.job}
        img={creation?.credits?.crew[0]?.profile_path}
        name={creation?.credits?.crew[0]?.name}
        // location="India"
      />
      <Position
        position={creation?.credits?.crew[1]?.job}
        img={creation?.credits?.crew[1]?.profile_path}
        name={creation?.credits?.crew[1]?.name}
        // location="India"
      />
    </>}
  </aside>
}