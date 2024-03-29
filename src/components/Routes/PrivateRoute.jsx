import { Navigate } from "react-router-dom";
import { useAuth } from "../../redux/hooks";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};