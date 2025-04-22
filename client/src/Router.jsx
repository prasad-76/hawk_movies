import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import MoviesShows from "./pages/MoviesShows";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import Support from "./pages/Support";
import Subscription from "./pages/Subscription";
import Auth from "./pages/Auth";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListCreations from "./pages/ListCreations";

export default function Router() {
  const { isLoggedIn } = useSelector(store => store.user);

  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/movies-shows" element={<MoviesShows />} />
    <Route path="movies-shows/:type/:id" element={<Details />} />
    <Route path="/list-creations" element={<ListCreations />} />
    <Route path="/support" element={<Support />} />
    <Route path="/subscriptions" element={<Subscription />} />
    <Route path="/auth" element={isLoggedIn ? <Navigate to="/" /> : <Auth />}>
      <Route index path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="*" element={<>page not found</>} />
  </Routes >
}