import { Navigate } from "react-router-dom";
import useAuth from "../components/HookUseAuth/HookUseAuth";

const PrivateRoute = ({ children: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
