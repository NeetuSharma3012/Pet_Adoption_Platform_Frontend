'use client';
import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  // Load token from localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          // Token expired
          toast.error('Login session expired. Please login again.');
          localStorage.removeItem('token');
          setUserToken(null);
          setUserInfo(null);
          router.push('/login'); // or your login page route
        } else {
          // Token valid — proceed
          setUserToken(token);
          axios
            .get('http://localhost:5001/user/me', {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
              setUserInfo(res.data);
            })
            .catch((err) => console.log('Failed to fetch user info', err));
        }
      } catch (err) {
        console.log('Invalid token:', err);
        localStorage.removeItem('token');
      }
    }
  }, [router]);

  const loginUser = (token) => {
    localStorage.setItem('token', token);
    setUserToken(token);

    // Fetch user info using the token
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
