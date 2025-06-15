'use client';

import React, { Suspense } from 'react';
import AdoptionFormContent from '../AdoptionformContent';

const AdoptionFormPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <AdoptionFormContent />
    </Suspense>
  );
};

export default AdoptionFormPage;
