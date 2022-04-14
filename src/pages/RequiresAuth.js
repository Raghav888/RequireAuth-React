import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequirersAuth = ({ children }) => {
  const { login } = useAuth();
  return login ? children : <Navigate to="/login" replace />;
};
