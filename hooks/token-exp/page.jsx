'use client';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const useTokenExpiryCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        toast.error('Login session expired. Please login again.');
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
  }, []);
};

export default useTokenExpiryCheck;
