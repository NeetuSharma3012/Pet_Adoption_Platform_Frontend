'use client';
import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUserToken(token);
      axios
        .get('http://localhost:5001/user/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserInfo(res.data))
        .catch((err) => console.log('Failed to fetch user info', err));
    }
  }, []);

  const loginUser = (token) => {
    localStorage.setItem('token', token);
    setUserToken(token);

    axios
      .get('http://localhost:5001/user/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log('Failed to fetch user info', err);
      });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUserToken(null);
    setUserInfo(null);
  };

  return (
    <UserContext.Provider
      value={{ userToken, setUserToken, userInfo, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access
export const useUser = () => useContext(UserContext);

