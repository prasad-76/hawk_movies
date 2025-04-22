import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormControl from "../common/FormControl";
import usePost from "../../hooks/usePost";
import Loader from "../common/Loader";


export default function Register() {
  const [input, setInput] = useState({ name: "", username: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const { loading, query } = usePost();

  function setForm(e) {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function register(e) {
    e.preventDefault();
    // const func = () => navigate("/auth/login");
    const success = await query("auth/create", input);
    if (success) navigate("/auth/login");
  }

  return <div>
    <form onSubmit={register}>
      <FormControl value={input.name} onChange={setForm} name="name" id="name" label="Name" type="text" placeholder="Name" />
      <FormControl value={input.username} onChange={setForm} name="username" id="username" label="Username" type="text" placeholder="username" styles="mt-4" />
      <FormControl value={input.email} onChange={setForm} name="email" id="email" label="Email" type="email" placeholder="hawk@example.com" styles="mt-4" />
      <FormControl value={input.password} onChange={setForm} name="password" id="password" label="Password" type="password" placeholder="******" styles="mt-4" />
      <FormControl value={input.cpassword} onChange={setForm} name="cpassword" id="cpassword" label="Confirm Password" type="password" placeholder="******" styles="mt-4" />
      <button type="submit" disabled={loading} className={`btn-red py-2 mt-4 block ml-auto ${loading ? "disabled:opacity-20 disabled:cursor-not-allowed" : ""}`}>Register</button>
    </form>

    {loading && <Loader />}

    <p className="text-sm text-center mt-4">By Submitting the form you will be registered to Hawk Movies</p>
    <hr className="my-8 opacity-10" />
    <Link to="/auth/login" className="text-sm mt-4 flex justify-between items-center">
      Already Have account?
      <button className="bg-1 w-20 py-2 hover:text-white">Login</button>
    </Link>
  </div>
}