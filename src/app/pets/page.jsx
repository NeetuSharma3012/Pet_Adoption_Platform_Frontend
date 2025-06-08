'use client';
import Card from '@/components/Card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

// const pets =[
//     title: "Snowy (Husky)",
//         description: "A playful 3-month-old Husky with a striking coat.",
//         imageUrl: "/card_1.jpeg", // Replace with the actual image path {
//        

//       },
//       {
//         title: "Max (Golden Retriever)",
//         description: "A tiny 1-month-old Retriever eager for a warm home.",
//         imageUrl: "/card_2.jpeg",

//       },
//       {
//         title: "Bella (Golden Retriever)",
//         description: "A cheerful 2-month-old Retriever perfect for families.",
//         imageUrl: "/card_3.jpeg",

//       },
//       {
//         title: "Luna (Kitten)",
//         description: "A sweet 1-month-old kitten with captivating eyes.",
//         imageUrl: "/card_4.jpeg",

//       },
//       {
//         title: "Rio (Parrot)",
//         description: "A vibrant 1-year-old Parrot who loves attention.",
//         imageUrl: "/card_5.jpg",

//       },
//       {
//         title: "Peaches (Lovebird)",
//         description: "A cheerful 6-month-old Lovebird full of energy.",
//         imageUrl: "/card_6.jpg",

//       },
//       {
//         title: "Coco (Siamese Cat)",
//         description: "An elegant 2-year-old Siamese with striking blue eyes.",
//         imageUrl: "/card_7.jpg",
//       },
//       {
//         title: "Oreo (Tabby Cat)",
//         description: "A playful and friendly 1-year-old Tabby Cat.",
//         imageUrl: "/card_8.jpg",

//       },
//       {
//         title: "BunBun (Rabbit)",
//         description: "A tiny 3-month-old Netherland Dwarf with soft fur.",
//         imageUrl: "/card_9.jpg",

//       },
//       {
//         title: "Floppy (Rabbit)",
//         description: "A friendly 5-month-old Lop Rabbit with floppy ears.",
//         imageUrl: "/card_10.jpg",

//       },
//       {
//         title: "Splash (Betta Fish)",
//         description: "A colorful 6-month-old Betta with vibrant fins.",
//         imageUrl: "/card_11.jpg",

//       },
//       {
//         title: "Sunny (Goldfish)",
//         description: "A cheerful 1-year-old Goldfish, easy to care for.",
//         imageUrl: "/card_12.jpg",

//       }
// ]

const petsPage = () => {

  //   //Function to send static pets data to the backend 
  //   const sendPetsToDatabase = async () => {
  //     try{
  //       //Send all static pets data to the backend
  //       const response = await axios.post('http://localhost:5001/pets/add', pets);
  //       console.log('Pets added successfully');

  //         } catch (error) {
  //           console.error('Error adding pets to the database:', error);
  //           alert('failed to add pets');

  //         }
  //   };

  //   useEffect(() => {
  //     sendPetsToDatabase();
  //   },[]);

  const [pets, setPets] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');

//fetch pet from backend 
  const fetchPets = async () => {
    try {
        const response = await axios.get('http://localhost:5001/pets/getall');
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

export default petsPage;
