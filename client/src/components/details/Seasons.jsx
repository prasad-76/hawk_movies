import Season from "./Season";

export default function Seasons({totalSeasons}) {
  return <div className={`mb-4 infoStyles`}>
    <p className="pb-4 border-b-2 border-[#262626]">Seasons & Episodes</p>
    {Array.from({length: totalSeasons}, (_, i) => i).map(seasonNo => <Season
      key={seasonNo}
      seasonNo={seasonNo + 1}
    />)}
  </div>
}