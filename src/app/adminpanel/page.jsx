'use client';
import Link from 'next/link';
import React from 'react'
import { Outlet } from 'react-router-dom';


const Adminpage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-slate-200 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
        <ul className="space-y-6 text-lg">
          <li>
            <a href="/user-data" className='hover:text-lime-600'>
            User Data
            </a>
          </li>
          <li>
          <a href="/adoption-request" className='hover:text-lime-600'>
            Adoption Request
            </a>
          </li>
          <li>
          <a href="/contact-request" className='hover:text-lime-600'>
            Contact Request
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 bg-white">
        <Outlet /> {/* This will render the selected page content */}
      </main>
    </div>
  );
};

export default Adminpage;

