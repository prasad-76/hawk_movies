import { Link, NavLink } from "react-router-dom";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return <footer className="padding-inline">
    <div className="flex items-start flex-wrap gap-y-16 pt-12">
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Home</h3>
        <ul>
          <li><Link to="/#explore-movies">Categories</Link></li>
          <li><NavLink to="/#devices">Devices</NavLink></li>
          <li><NavLink to="/#pricing">Pricing</NavLink></li>
          <li><NavLink to="/#faq">FAQ</NavLink></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Movies</h3>
        <ul>
          <li><NavLink>Genres</NavLink></li>
          <li><NavLink>Trending</NavLink></li>
          <li><NavLink>New</NavLink> Releases</li>
          <li><NavLink>Popular</NavLink></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Shows</h3>
        <ul>
          <li><NavLink>Genres</NavLink></li>
          <li><NavLink>Trending</NavLink></li>
          <li><NavLink>New Releases</NavLink></li>
          <li><NavLink>Popular</NavLink></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Support</h3>
        <ul>
          <li><NavLink>Contact Us</NavLink></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Subscription</h3>
        <ul>
          <li><NavLink>Plans</NavLink></li>
          <li><NavLink>Features</NavLink></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/6">
        <h3 className="mb-6">Connect With Us</h3>
        <div className="flex items-center gap-4">
          <span className="text-[16px] md:text-[24px] bg-1 w-8 md:w-14 flex justify-center items-center aspect-square border-2 border-[#262626] rounded-lg cursor-pointer hover:text-[#e50000]">
            <FaFacebook />
          </span>
          <span className="text-[16px] md:text-[24px] bg-1 w-8 md:w-14 flex justify-center items-center aspect-square border-2 border-[#262626] rounded-lg cursor-pointer hover:text-[#e50000]">
            <FaTwitter />
          </span>
          <span className="text-[16px] md:text-[24px] bg-1 w-8 md:w-14 flex justify-center items-center aspect-square border-2 border-[#262626] rounded-lg cursor-pointer hover:text-[#e50000]">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>

    <div className="flex justify-between flex-wrap gap-y-6 items-center border-t-[1px] border-[#999999] mt-28 py-10">
      <p>&copy; 2024 hawks, All Rights Reserved</p>
      <div>
        <NavLink className="pr-4 text-light border-r-2 border-[#999999]">Terms of Use</NavLink>
        <NavLink className="px-4 text-light border-r-2 border-[#999999]">Privacy Policy</NavLink>
        <NavLink className="pl-4 text-light">Cookie Policy</NavLink>
      </div>
    </div>
  </footer>
}