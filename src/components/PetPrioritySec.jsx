import { IconPawFilled } from '@tabler/icons-react'
import React from 'react'

const PetPrioritySec = () => {
  return (
    <div className='bg-white py-12 px-6 flex flex-col md:flex-row items-center justify-between'>
      {/*left text section*/}

      <div className='max-w-lg'>
      <h2 className='text-4xl font-serif font-bold text-black mb-4'>
        Your Pets <br /> Are our  <br />Priority
      </h2>

      <p className='text-small text-gray-600 mb-6'>
        Ensure you are fully prepared to provide proper care and attention 
        to your pet before welcoming them into your home
      </p>
      <a 
      href="/pets"
      className='bg-lime-400 w-fit text-black py-2 px-6 rounded-lg font-small hover:lime-600 transition'
      >
        Adopt<IconPawFilled className='text-center'/>
      </a>
      </div>

      {/*right image section */}

      <div className='relative mt-8 md:mt-0'>
        {/*main image */}
        <img src="/puppyImg.png" 
        alt="small puppy" 
        className='w-80 h-80 object-cover rounded-full border-4 border-lime-500'
        />
      </div>
      
    </div>

    
    
  )
}

export default PetPrioritySec
