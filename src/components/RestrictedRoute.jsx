import { Navigate } from "react-router-dom";
import useAuth from "../components/HookUseAuth/HookUseAuth";

const RestrictedRoute = ({ children: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
