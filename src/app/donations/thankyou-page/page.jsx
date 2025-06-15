'use client';

import React, { Suspense } from 'react';
import ThankYouContent from '@/app/donations/ThankyouComponent';

const ThankYouPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <ThankYouContent/>
    </Suspense>
  );
};

export default ThankYouPage;
