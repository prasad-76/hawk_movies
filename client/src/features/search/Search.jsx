import SearchLayout from "./SearchLayout";
import { SearchProvider } from "../../providers/SearchProvider";
import { useState } from "react";
import useKeyDown from "../../hooks/useKeyDown";
import Modal from "../../components/common/Modal";

export default function SearchContextWrapper() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  useKeyDown("Slash", () => setToggleSearchBar(true));
  useKeyDown("Escape", () => setToggleSearchBar(false));
  return (
    <SearchProvider>
      {toggleSearchBar && <Modal>
        <SearchLayout />
      </Modal>}
    </SearchProvider>
  )
};