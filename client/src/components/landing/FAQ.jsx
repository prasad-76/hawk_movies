import { useState } from "react";

export default function FAQ({ id, question, answer }) {
  const [toggled, setToggled] = useState(false);
  return <div onClick={() => setToggled(prev => !prev)} role="button" className="select-none py-9 max-w-[400px] md:max-w-[800px] mx-auto md:mx-0 flex items-start gap-4 border-b-2 border-[#1f1f1f]">
    <div className="bg-[#1f1f1f] px-4 py-2 aspectsquare border-2 border-[#272727] rounded-md">
      {id}
    </div>
    <div className="grow">
      <div className="flex items-center justify-between">
        <h3>{question}</h3>
        <div className="text-2xl ml-auto" role="button">{toggled ? <>&minus;</> : <>+</>}</div>
      </div>
      {true && <p className={`max-w-[50ch] mt-4 ${toggled ? "h-auto" : "h-0"} overflow-hidden transition-all duration-700`}>{answer}</p>}
    </div>
  </div>
}