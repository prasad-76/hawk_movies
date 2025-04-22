import { useEffect } from "react";

export default function useScroll(x, y) {
  function scroller() {
    window.scrollTo(x, y);
  }
  return { scroller }
};