'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDatapage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5001/user/getall");
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users", error);
                setLoading(false);
                
            }
        };

        fetchUsers();
    },[]);

    // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      // Send DELETE request to backend
      await axios.delete(`http://localhost:5001/user/delete/${userId}`);
      
      // Remove user from local state after successful deletion
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

    if(loading) {
        return <div className='text-center text-xl p-4'>Loading...</div>;
    }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id || user.id}
            className="bg-slate-100 p-5 rounded-lg border-2 border-lime-200 
    shadow-md space-y-5 mx-5"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Passward: {user.passward}</p>

            {/* delete button */}
            <button
                onClick={() => deleteUser(user._id)}
                className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 
      focus:outline-none focus:bg-lime-500 transition
       disabled:opacity-50 disabled:pointer-events-none'
            >
                delete
            </button>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDatapage;
