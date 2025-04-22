import toast from "react-hot-toast";
import { retrieve, send } from "../utils/user";

const userInitialState = {
  account: null,
  isLoggedIn: false,
  loading: true,
}

export function userSlice(state = userInitialState, action) {
  switch (action.type) {
    case "user/set":
      return { account: action.payload, isLoggedIn: true, loading: false };
    case "user/unset":
      return { account: null, isLoggedIn: false, loading: false };
    case "user/unset-loading":
      return { account: null, isLoggedIn: false, loading: false };
    default:
      return state;
  }
}

export function set(user) {
  return { type: "user/set", payload: user };
}

export function get() {
  return async function (dispatch) {
    const response = await retrieve("user/profile");
    if (response.success) dispatch({ type: "user/set", payload: response.payload });
    else dispatch({ type: "user/unset-loading" });
  }
}

export function unset() {
  return async function (dispatch) {
    const response = await send("auth/logout");
    if (response.success) dispatch({ type: "user/unset" });
    else toast.error(`Unable to logout - ${response.payload}`);
  }
}