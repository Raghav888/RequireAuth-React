import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequirersAuth = ({ children }) => {
  let location = useLocation();
  const { login } = useAuth();
  return login ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
