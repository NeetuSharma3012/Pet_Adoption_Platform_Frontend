'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import toast from 'react-hot-toast';
import Link from 'next/link';


const Navbar = () => {



const { userToken, loginUser, logoutUser } = useUser();
if (userToken) {
  // User is logged in  
  var isLoggedin = true;
} else {
  // User is not logged in
  var isLoggedin = false;
}







  const handleContact = (event) => {
    if(!isLoggedin) {
      //Show toast if not logged in
      toast.error('You need to log in first!');
      event.preventDefault();
    }
    
  };


  
  return (
    <div >
      <>
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
    <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
      <div className="md:col-span-3">
        {/* Logo */}
        <Link
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="../templates/creative-agency/index.html"
          aria-label="Preline"
        >

            <img src="/little_paws2-removebg-preview.png" alt="logo" className='w-28 h-auto' />
           
          
        </Link>

        {/* End Logo */}
      </div>
      {/* Button Group */}
      <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <Link
          
          href = '/signup'
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border
           border-gray-200 text-black hover:bg-gray-100 focus:outline-none
            focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none 
            dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 
            dark:text-white dark:hover:text-white dark:focus:text-white"
        >
          Sign Up
        </Link>

        <Link
          
          href = {isLoggedin ? '/contact' : '/login'}
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium 
          rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500
           focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 
           disabled:pointer-events-none"
          onClick={handleContact}
        >
          Contact
        </Link>
        
        <div className="md:hidden">
          <button
            type="button"
            className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            id="hs-navbar-hcail-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-hcail"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-hcail"
          >
            <svg
              className="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={3} x2={21} y1={6} y2={6} />
              <line x1={3} x2={21} y1={12} y2={12} />
              <line x1={3} x2={21} y1={18} y2={18} />
            </svg>
            <svg
              className="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      {/* End Button Group */}
      {/* Collapse */}
      <div
        id="hs-navbar-hcail"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        aria-labelledby="hs-navbar-hcail-collapse"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
          <div>
            <Link
              className="relative inline-block text-black font-bold focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
              href="/"
              aria-current="page"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className="inline-block text-black font-bold hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href="/services"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className="inline-block text-black font-bold hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href="/pets"
            >
              Pets
            </Link>
          </div>
          <div>
            
          </div>
          <div>
            <Link
            
              className="inline-block text-black font-bold underline hover:text-gray-600 focus:outline-none
              focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href={isLoggedin ? "#" : "/login"}
              onClick={isLoggedin ? logoutUser : null} 
            >
              {isLoggedin ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </div>
      {/* End Collapse */}
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
</>

    </div>
  )
}

export default Navbar
