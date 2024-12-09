'use client';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();

    

    useEffect(() => {

        const fetchPetDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/pets/pets/${id}`);
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
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold">{pet.title}</h1>
            <img className="rounded-md my-4" src={pet.imageUrl} alt={pet.title} />
            <p>{pet.description}</p>
        </div>
    );
};

export default PetDetails;