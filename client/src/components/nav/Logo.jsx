import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Logo() {
  return <Link to="/" className="flex items-center gap-4 mt-4">
    <img src={logo} alt="This is the logo of our webite" className="w-12 aspect-square" />
    <h3> Hawks Movies</h3>
  </Link>
}