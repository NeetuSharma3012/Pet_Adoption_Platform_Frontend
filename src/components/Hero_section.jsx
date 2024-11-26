'use client'
import React, { useEffect, useState } from 'react'

const slides = [

{
    title: 'Adopt a Pet Today',
    description: 'Find your new Best Friend and give a pet a forever home',
    imageUrl: "/pet_hero1nn.jpg",
},

{
    title: 'Save a Life, Adopt Now ',
    description: 'Join us in giving pets a second chance of life',
    imageUrl: "/pet_hero2.jpg",
},

{
    title: 'Discover the joy of Adoption',
    description: 'Adopting a pet is never been easier or more rewarding.',
    imageUrl: "/pet_hero3.jpg",
},

];

const Hero_section = () => {
    

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(()=> {
    const interval = setInterval(()=>{
        setCurrentSlide((prevSlide)=>(prevSlide + 1)%slides.length);
    },5000);//slide change interval in miliseonds
    return () => clearInterval(interval); 
},[]);

  return (
    <div className='relative w-full h-96 overflow-hidden'>
      {slides.map((slide,index) =>(
        <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${index===currentSlide ? 'opacity-100': 'opacity-0'}`}
        >
            <img src={slide.imageUrl} alt={slide.title} className='w-full h-full' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex  flex-col justify-center items-center  text-center text-white p-4'>
                <h2 className='text-3xl font-bold'>{slide.title}</h2>
                <p className='text-lg mt-2'>{slide.description}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Hero_section;
