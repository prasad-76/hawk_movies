import { NavLink } from "react-router-dom";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const linkStyle = "w-40 px-4 py-2 rounded-md lg:w-max my-2 lg:my-0";

export default function Tabs({ toggled, setter }) {
  return <div className={`tabsStyles ${toggled ? "left-0" : "left-[-115%]"} mt-4 z-10`}>
    <NavLink onClick={setter} to="/" className={linkStyle}>Home</NavLink>
    <NavLink onClick={setter} to="/movies-shows" className={linkStyle}>Movies & Show</NavLink>
    <NavLink onClick={setter} to="/list-creations" className={linkStyle}>Creations</NavLink>
    <NavLink onClick={setter} to="/subscriptions" className={linkStyle}>Subscriptions</NavLink>

    <NavLink onClick={setter} to="/notifications" className={`lg:hidden ${linkStyle}`}>
      <div className="flex items-center gap-4">
        Notifications
        <BellIcon className="logo-lg" />
      </div>
    </NavLink>

    <div className="flex lg:hidden items-center gap-4 mt-auto">
      <input type="text" className="bg-[#1e1e1e] border-b-2 focus:outline-none p-2 rounded-md focus:shadow-2xl shadow-white" />
      <MagnifyingGlassIcon className="logo-lg" onClick={setter} />
    </div>
  </div >
}