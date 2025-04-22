import { useEffect, useState } from "react";
import { BellIcon, MagnifyingGlassIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";

import { toggleBodyScroll } from "../../utils/events";

import Tabs from "./Tabs";
import Logo from "./Logo";
import { useDispatch, useSelector } from 'react-redux';
import { unset } from "../../state/user.slice";
import { Link } from "react-router-dom";

export default function Nav() {
  const { isLoggedIn, loading } = useSelector(store => store.user);
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const toggleSidebar = () => setToggled(prev => !prev);
  const hideSidebar = () => setToggled(false)

  useEffect(function () {
    toggleBodyScroll(toggled);
  }, [toggled]);

  return <nav className="bg-gradient-to-b from-[#0F0F0F] to-transparent padding-inline w-full fixed top-0 left-0 flex items-center justify-between py-4 backdrop-blur-[3px] z-30">
    <Logo />

    <Tabs toggled={toggled} setter={hideSidebar} />

    <div className="hidden lg:flex items-center gap-4 mt-4">
      <BellIcon className="logo-lg" />
      <MagnifyingGlassIcon className="logo-lg" />
      {!loading ? isLoggedIn && <UserIcon onClick={() => dispatch(unset())} className="logo-lg" /> : <></>}
      {!loading ? !isLoggedIn && <Link to="/auth/login" className="px-3 py-2 btn-red rounded-md">Login</Link> : <></>}
    </div>

    <button onClick={toggleSidebar} className="w-12 bg-3 relative p-2 border-4 border-[#1a1a1a] rounded-md cursor-pointer lg:hidden z-10 mt-4">
      {toggled
        ? <XMarkIcon />
        : <Bars3BottomRightIcon />}
    </button>
  </nav>
}