import { useParams } from "react-router-dom";

import Information from "../components/details/Information";
import Seasons from "../components/details/Seasons";
import Sidebar from "../components/details/Sidebar";
import { useQuery } from '@tanstack/react-query';
import { retrieve } from "../utils/user";
import Featured from "../components/details/Featured";
import Error from './../components/common/Error';
import Loader from './../components/common/Loader';
import useScroll from "../hooks/useScroll";

export default function Details() {
  const {type, id} = useParams();
  const {data, isLoading} = useQuery({
    queryKey: [`${type}/${id}`],
    queryFn: () => retrieve(`${type}/details/${id}`)
  });

  const {scroller} = useScroll(0, 0);
  scroller();

  if(isLoading) return <div className="w-full bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex items-center justify-center rounded-lg animate-skeleton">
    <Loader />
  </div>
  
  if(!data.payload) return <Error styles="h-[80vh] flex flex-col justify-center mt-20" />

  return <div className="padding-inline mt-24 relative">
    {!isLoading && data.payload && <Featured creation={data.payload} />}

    {!isLoading && data.payload && <div className="lg:flex items-start gap-4 py-20">
      <div className="details-container grow">
        {type === "shows" && <Seasons totalSeasons={data.payload.number_of_seasons} />}
        <Information data={data?.payload} />
      </div>
      <Sidebar creation={data?.payload} />
    </div>}
  </div>
}