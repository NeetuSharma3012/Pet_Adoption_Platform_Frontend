'use client';
import Footer from '@/components/Footer_admin';
import Navbar from '@/components/Navbar_admin';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'

const AdoptionRequestpage = () => {
    const [adoption, setAdoption] = useState([]);
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdoption = async () => {
            try {
                const response = await axiosInstance.get("/adoption/getall");
                setAdoption(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching adoption requests", error);
                setLoading(false);
                
            }
        };

        fetchAdoption();
    },[]);

    const deleteAdoption = async (adoptionId) => {
        try {
          // Send DELETE request to backend
          await axiosInstance.delete(`/adoption/delete/${adoptionId}`);
          
          // Remove user from local state after successful deletion
          setAdoption(adoption.filter(adoption => adoption._id !== adoptionId));
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      };


      // const deletePet = async (petId) => {
      //   try {
      //       //send delete rqst to bkend
      //       await axios.delete(`http://localhost:5001/pets/delete/${petId}`);

      //       //remove pet 
      //       setPet(pet.filter(pet => pet._id !== petId));
      //    } catch (error) {
      //       console.error("Error approving rquest", error);
            
      //    }
      // };

      const approveAdoption = async (adoptionId, petId) => {
  try {
    // Mark pet as adopted
    await axiosInstance.put(`/pets/adopt/${petId}`);

    // Delete adoption request
    await axiosInstance.delete(`/adoption/delete/${adoptionId}`);

    // Remove adoption request from UI
    setAdoption(adoption.filter(adoption => adoption._id !== adoptionId));

  } catch (error) {
    console.error("Error approving adoption:", error);
  }
};


    if(loading) {
        return <div className='text-center text-xl p-4'>Loading...</div>;
    }
  return (
    <div>
      <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Adoption Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adoption.map((adoption) => (
          <div
            key={adoption._id || adoption.id}
            className="bg-slate-100 p-5 rounded-lg border-2 border-lime-200 
    shadow-md space-y-5 mx-5"
          >
            <h2 className="text-xl font-semibold">{adoption.fullName}</h2>
            
            <p className="text-gray-700">Email: {adoption.email}</p>
            <p className="text-gray-700">phoneNumber:{adoption.phoneNumber}</p>
            <p className="text-gray-700">details: {adoption.details}</p>
            <p className="text-gray-700">
              submitted: {new Date(adoption.createdAt).toLocaleDateString()}
            </p>

            {/* delete button */}
            <button
                onClick={() => deleteAdoption(adoption._id)}
                className='py-2 px-3 inline-flex items-center gap-x-2 
        text-sm font-medium rounded-xl bg-white border
         border-gray-200 text-black hover:bg-gray-100 
        focus:outline-none focus:bg-gray-100 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-neutral-900 
        dark:border-neutral-700 dark:hover:bg-white/10 
        dark:text-white dark:hover:text-white dark:focus:text-white'
            >
                reject
            </button>

            <button
                onClick={() => approveAdoption(adoption._id, adoption.petId._id)}
                className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 
      focus:outline-none focus:bg-lime-500 transition
       disabled:opacity-50 disabled:pointer-events-none'
            >
                approve
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AdoptionRequestpage;
