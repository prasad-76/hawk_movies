import { useEffect } from "react"
import { toggleBodyScroll } from "../../utils/events"

export default function Modal({children}) {
  useEffect(function() {
    toggleBodyScroll(true)
    return () => toggleBodyScroll(false);
  },[]);
  return (
    <div className="bg-[#0000007d] backdrop-blur-[4px] flex items-center justify-center absolute inset-0 z-[100]">
      {children}
    </div>
  )
};
