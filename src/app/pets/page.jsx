'use client';
import Card from '@/components/Card'
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'



const PetsPage = () => {

 

  const [pets, setPets] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');

//fetch pet from backend 
  const fetchPets = async () => {
    try {
        const response = await axiosInstance.get('/pets/getall');
        setPets(response.data);
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
};


  useEffect(() => {
    fetchPets();
  }, []);

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  // Filtered pets based on selected breed
  const filteredPets = pets.filter(
    (pet) => selectedBreed === 'All' || pet.breed === selectedBreed
  );

  return (
    <div className='p-6'>
      <h1 className='text-5xl text-center font-bold mb-6 '> Our Lovely Pets</h1>

       {/* Filter Dropdown */}
       <div className="mb-6 flex justify-center">
        <label htmlFor="breedFilter" className="mr-4 font-bold">Filter by Breed:</label>
        <select
          id="breedFilter"
          value={selectedBreed}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="rabbit">Rabbit</option>
          <option value="fish">Fish</option>
        </select>
      </div>

     {/* Pets Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
        {filteredPets.map((pet, index) => (
          <Card
            key={index}
            title={pet.title}
            description={pet.description}
            imageUrl={pet.imageUrl}
            breed={pet.breed || 'unknown'} // Pass breed
            detailedDescription={pet.detailedDescription || 'No details available'}
            id={pet._id}//Pass pet ID to card
            adopted={pet.adopted || false} // Pass adopted status
          />
        ))}
      </div>
    </div>
  )
}

export default PetsPage;
