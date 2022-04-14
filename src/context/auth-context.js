import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [login, setlogin] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  const toggleLogin = () => {
    setlogin((login) => !login);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <AuthContext.Provider value={{ login, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthContextProvider };
