'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContactRequestpage = () => {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get("http://localhost:5001/contact/getall");
                setContact(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching contact requests", error);
                setLoading(false);
                
            }
        };

        fetchContact();
    },[]);

    const deleteContact = async (contactId) => {
        try {
          // Send DELETE request to backend
          await axios.delete(`http://localhost:5001/contact/delete/${contactId}`);
          
          // Remove user from local state after successful deletion
          setContact(contact.filter(contact => contact._id !== contactId));
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      };

    if(loading) {
        return <div className='text-center text-xl p-4'>Loading...</div>;
    }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contact.map((contact) => (
          <div
            key={contact._id || contact.id}
            className="bg-slate-100 p-5 rounded-lg border-2 border-lime-200 
    shadow-md space-y-5 mx-5"
          >
            <h2 className="text-xl font-semibold">{contact.firstName}</h2>
            <h2 className="text-xl font-semibold">{contact.lastName}</h2>
            <p className="text-gray-700">Email: {contact.email}</p>
            <p className="text-gray-700">phoneNumber:{contact.phoneNumber}</p>
            <p className="text-gray-700">details: {contact.details}</p>
            <p className="text-gray-700">
              submitted: {new Date(contact.createdAt).toLocaleDateString()}
            </p>

            {/* delete button */}
            <button
                onClick={() => deleteContact(contact._id)}
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

export default ContactRequestpage;
