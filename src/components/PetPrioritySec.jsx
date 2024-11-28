import { IconPawFilled } from '@tabler/icons-react'
import React from 'react'

const PetPrioritySec = () => {
  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

        {/* left ares */}
        <div className=''>
          <h2 className='text-4xl font-bold text-black mb-4 font-serif'>
            Your Pets<br/> Are  Our Priority
          </h2>

          <p className='text-gray-600 mb-6'>
            Ensure you are fully prepared to provide proper
              care and attention to your pet before welcoming them into your home.
          </p>

          <a 
          href="/pets"
          className='flex items-center justify-center gap-2 px-6 py-3 bg-lime-400 text-black hover:bg-lime-500 text-black font-semibold rounded-lg'
          >
          Adopt a pet <IconPawFilled className='position-center'/>
          </a>
        </div>

        {/* right image */}
        <div>
          <img src="/puppyImg.png" 
          alt="puppy"
          className='bg-slate-100 rounded-full border-2 border-lime-200 shadow-md '
          />
        </div>
      </div>

    </div>
    
  )
}

export default PetPrioritySec
