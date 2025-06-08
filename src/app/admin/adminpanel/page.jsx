'use client';
import React from 'react'

import Navbar from '@/components/Navbar_admin';
import Footer from '@/components/Footer_admin';


const Adminpage = () => {
  return (
    
  <div>
    <Navbar/>
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
          <li>
            <a href="/pets-data" className='hover:text-lime-600'>
            pets Data
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 bg-white overflow-y-auto">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Total Users</h2>
            <p className="text-2xl font-bold text-lime-600">150</p>
          </div>
          <div className="bg-slate-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Pending Requests</h2>
            <p className="text-2xl font-bold text-lime-600">24</p>
          </div>
          <div className="bg-slate-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">New Messages</h2>
            <p className="text-2xl font-bold text-lime-600">12</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg">
                New adoption request received from <strong>John Doe</strong>.
              </p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg">
                User <strong>Jane Smith</strong> updated profile.
              </p>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </li>
          </ul>
        </div>

        {/* Graph Placeholder */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Adoption Trends</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default Adminpage;

