import { useState } from "react";
import { Link } from "react-router-dom";

import usePost from "../../hooks/usePost";
import FormControl from "../common/FormControl";
import Loader from "../common/Loader";
import { set } from "../../state/user.slice";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });

  const { loading, query } = usePost();

  function setForm(e) {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function login(e) {
    e.preventDefault();
    query("auth/login", input, set);
  }

  return <div>
    <form onSubmit={login}>
      <FormControl value={input.email} onChange={setForm} name="email" id="email" label="Email" type="email" placeholder="hawk@example.com" styles="mt-4" />
      <FormControl value={input.password} onChange={setForm} name="password" id="password" label="Password" type="password" placeholder="******" styles="mt-4" />
      <button type="submit" disabled={loading} className={`btn-red py-2 mt-4 block ml-auto ${loading ? "disabled:opacity-20 disabled:cursor-not-allowed" : ""}`}>Login</button>
    </form>

    {loading && <Loader />}

    <hr className="my-8 opacity-10" />
    <Link to="/auth/register" className="text-sm mt-4 flex justify-between items-center">
      Do Not Have An account?
      <button className="bg-1 w-28 py-2 hover:text-white">Register</button>
    </Link>
  </div>
}