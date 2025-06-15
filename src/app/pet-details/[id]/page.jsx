'use client';
import { useState, useEffect } from 'react';

import { useParams, useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();



    useEffect(() => {

        const fetchPetDetails = async () => {
            try {
                const response = await axiosInstance.get(`/pets/getbyid/${id}`);
                setPet(response.data);
            } catch (error) {
                console.error('Error fetching pet details:', error.response || error);

                setError('Failed to fetch pet details');
            }
        };

        fetchPetDetails();
    }, [id]);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!pet) return <div>Loading...</div>;

    return (
        <div className="flex flex-col md:flex-row items-center bg-slate-100 shadow-md rounded-lg border-2 border-lime-200  p-6 mx-9 space-y-6 md:space-y-0 md:space-x-8">
  <img 
    className="rounded-lg w-full md:w-1/3 object-cover" 
    src={pet.imageUrl} 
    alt={pet.title} 
  />
  <div className="flex flex-col w-full md:w-2/3 space-y-4">
    <h1 className="text-3xl font-bold text-gray-800">Name: {pet.title}</h1>
    <h6 className="text-xl font-semibold text-lime-600">Breed: {pet.breed}</h6>
    <p className="text-gray-600">
      <strong className="text-black">Description:</strong> {pet.description}
    </p>
    <p className="text-gray-600 leading-relaxed">{pet.detailedDescription}</p>
  </div>
</div>

    );
};

export default PetDetails;