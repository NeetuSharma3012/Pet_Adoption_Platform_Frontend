'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const DonationPage = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [amount, setAmount] = useState('');
  const { userInfo} = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('User Info:', userInfo);
    // If userInfo is available, pre-fill the donation form
    if(userInfo) {
      setDonorName(userInfo.name);
      setDonorEmail(userInfo.email);
    }
  }, [userInfo]);

  const handlePayment = async () => {
    const res = await axios.post('http://localhost:5001/donations/create-order', {
      amount,
      donorName,
      donorEmail
    });

    const { orderId } = res.data;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Pet Adoption',
      description: 'Donation for pets',
      order_id: orderId,
      handler: async function (response) {
  // save the donation on your backend
  await axios.post('http://localhost:5001/donations/record', {
    userId: userInfo._id,
    transactionId: response.razorpay_payment_id,
    amount: amount
  });

  // go to thank you page with payment id
  router.push(`/donations/thankyou-page?paymentId=${response.razorpay_payment_id}&amount=${amount}`);
}
,
      prefill: {
        name: donorName,
        email: donorEmail,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Make a Donation</h1>
      <input type="text" placeholder="Your Name" value={donorName} onChange={(e) => setDonorName(e.target.value)} className="p-2 border mb-3 w-full" />
      <input type="email" placeholder="Your Email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} className="p-2 border mb-3 w-full" />
      <input type="number" placeholder="Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 border mb-3 w-full" />
      <button onClick={handlePayment} className="bg-lime-500 px-4 py-2 rounded text-white">Donate Now</button>
    </div>
  );
};

export default DonationPage;
