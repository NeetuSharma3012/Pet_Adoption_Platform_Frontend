'use client';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axiosInstance from '@/utils/axiosInstance';

const AdoptedPetsPage = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);

  useEffect(() => {
    axiosInstance.get('/pets/adopted')
      .then(res => setAdoptedPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Our Adopted Pets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {adoptedPets.map(pet => (
          <Card
            key={pet._id}
            id={pet._id}
            title={pet.title}
            description={pet.description}
            imageUrl={pet.imageUrl}
            breed={pet.breed}
            detailedDescription={pet.detailedDescription}
            adopted={pet.adopted}
            showAdoptButton={false} // Hide adopt button for adopted pets
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AdoptedPetsPage;
