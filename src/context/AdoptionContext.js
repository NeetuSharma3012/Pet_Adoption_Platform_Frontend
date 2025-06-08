'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
const AdoptionContext = createContext();

// Custom Hook
export const useAdoption = () => useContext(AdoptionContext);

// Provider
export const AdoptionProvider = ({ children }) => {
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch adoption requests
  const fetchAdoptions = async () => {
    try {
      const response = await axios.get("http://localhost:5001/adoption/getall");
      setAdoptionRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching adoption requests", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdoptions();
  }, []);

  return (
    <AdoptionContext.Provider value={{ adoptionRequests, fetchAdoptions, loading }}>
      {children}
    </AdoptionContext.Provider>
  );
};
