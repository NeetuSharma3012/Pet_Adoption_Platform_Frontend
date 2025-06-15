'use client';
export const dynamic = 'force-dynamic'; // This page should always be re-rendered on each request
import { useSearchParams } from 'next/navigation';
import React from 'react';

const ReceiptPage = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId');
  const amount = searchParams.get('amount');
  const date = new Date().toLocaleString();

  return (
    <div className="max-w-lg mx-auto py-10 px-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-lime-600 mb-4">Donation Receipt</h1>

      <p className="text-gray-800">Thank you for your generous contribution!</p>

      <div className="mt-6 text-gray-700">
        <p><strong>Transaction ID:</strong> {transactionId}</p>
        <p><strong>Amount:</strong> ₹{amount}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 w-full py-3 px-5 bg-lime-400 text-black rounded-lg hover:bg-lime-500"
      >
        Download / Print Receipt
      </button>
    </div>
  );
};

export default ReceiptPage;
