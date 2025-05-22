import React, { createContext, useContext, useState } from 'react';

interface SessionContextProps {
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const useSession = () => {
  return useContext(SessionContext) as SessionContextProps;
};

export const SessionProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username: string, password: string) => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};