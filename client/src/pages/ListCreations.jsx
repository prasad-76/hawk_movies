import useCreationListContext, { CreationListProvider } from "../providers/CreationListProvider";
import Filters from "../components/list-creation/Filters";
import ListCreationResults from "../components/list-creation/ListCreationResults";

export default function ListCreations() {
  return <CreationListProvider>
    <div className="mt-32 padding-inline">
      <Filters /> {/* FILTERS */}
      <ListCreationResults /> {/* LISTINGS */}
    </div>
  </CreationListProvider>
};