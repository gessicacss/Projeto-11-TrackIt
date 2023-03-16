import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};