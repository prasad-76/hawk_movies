import { Outlet } from "react-router-dom";

import logo from "/logo.png";

export default function Auth() {
  return <div className="padding-inline mt-24 mb-10">
    <div className="bg-2 max-w-[450px] mx-auto p-8 rounded-lg shadow-xl">
      <img src={logo} alt="Website logo" className="w-10 mx-auto mb-4" />
      <h3 className="text-center mb-8">Welcome to Hawk Movies</h3>
      <Outlet />
    </div>
  </div>
}