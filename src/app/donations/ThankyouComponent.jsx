'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

const ThankYouContent = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('paymentId');
  const amount = searchParams.get('amount');

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-lime-600">Thank you for your donation!</h1>
      <p className="mt-4 text-gray-700">Your generosity makes a real difference ❤️</p>

      <div className="mt-8 text-lg text-gray-600">
        <p><strong>Transaction ID:</strong> {transactionId}</p>
        <p><strong>Amount:</strong> ₹{amount}</p>
      </div>

      <a
        href={`/donations/receipt?transactionId=${transactionId}&amount=${amount}`}
        className="mt-6 inline-block px-5 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-500 transition"
      >
        Download your receipt
      </a>
    </div>
  );
};

export default ThankYouContent;
