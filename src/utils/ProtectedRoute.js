import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { user } = useAuthContext();

  return <>{user ? <Component {...routeProps} /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
