'use client';
import Footer from '@/components/Footer_admin';
import Navbar from '@/components/Navbar_admin';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const petDatapage = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get("http://localhost:5001/pets/getall");
                setPets(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pets", error);
                setLoading(false);
                
            }
        };

        fetchPets();
    },[]);

    // Function to delete a pet
  const deletePet = async (petId) => {
    try {
      // Send DELETE request to backend
      await axios.delete(`http://localhost:5001/pets/delete/${petId}`);
      
      // Remove pet from local state after successful deletion
      setPets(pets.filter(pet => pet._id !== petId));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

    if(loading) {
        return <div className='text-center text-xl p-4'>Loading...</div>;
    }
  return (
    <div>
      <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pet List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet._id || pet.id}
            className="bg-slate-100 p-5 rounded-lg border-2 border-lime-200 
    shadow-md space-y-5 mx-5"
          >
            <h2 className="text-xl font-semibold">{pet.title}</h2>
            <p className="text-gray-700">Title: {pet.description}</p>
            <p className="text-gray-700">Image: {pet.imageUrl}</p>
            <p>Breed: {pet.breed}</p>
            <p className="text-gray-700">Title: {pet.detailedDescription}</p>

            {/* delete button */}
            <button
                onClick={() => deletePet(pet._id)}
                className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 
      focus:outline-none focus:bg-lime-500 transition
       disabled:opacity-50 disabled:pointer-events-none'
            >
                delete
            </button>
            
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default petDatapage;
