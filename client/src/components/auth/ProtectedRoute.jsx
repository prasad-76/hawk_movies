import { useLayoutEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const { account } = useSelector(store => store.user);
  const navigate = useNavigate();
  useLayoutEffect(function () {
    if (account === null) navigate("/auth/login", { replace: true })
  }, [account, navigate]);

  return children;
}