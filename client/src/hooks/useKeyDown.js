import { useEffect } from "react";

export default function useKeyDown(key, callback) {
  function handleKeyDown(e) {
    if(e.code === key) {
      e.preventDefault();
      callback(e);
    }
  }
  useEffect(function() {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
};
