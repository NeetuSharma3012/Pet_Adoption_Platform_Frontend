'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  // Load token from localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUserToken(token);
    }
  }, []);

  const loginUser = (token) => {
    localStorage.setItem('token', token);
    setUserToken(token);
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };

  return (
    <UserContext.Provider value={{ userToken, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access
export const useUser = () => useContext(UserContext);
