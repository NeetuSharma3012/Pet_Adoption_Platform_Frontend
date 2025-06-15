'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import axiosInstance from '@/utils/axiosInstance';

const MyDonations = () => {
  const { userInfo } = useUser();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (userInfo) {
      axiosInstance.get(`/donations/user/${userInfo._id}`)
        .then(res => setDonations(res.data))
        .catch(err => console.log(err));
    }
  }, [userInfo]);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Donations</h1>

      {donations.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="border-t">
                <td className="p-3">{donation.transactionId}</td>
                <td className="p-3">₹{donation.amount}</td>
                <td className="p-3">{new Date(donation.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyDonations;
