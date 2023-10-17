import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NotProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { user } = useAuthContext();

  return <>{user ? <Navigate to="/" /> : <Component {...routeProps} />}</>;
};

export default NotProtectedRoute;
