import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [login, setlogin] = useState(false);

  const toggleLogin = () => {
    setlogin((login) => !login);
  };
  return (
    <AuthContext.Provider value={{ login, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthContextProvider };
