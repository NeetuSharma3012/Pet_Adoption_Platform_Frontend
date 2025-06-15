import { Suspense } from 'react';

export default function ReceiptLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading receipt...</div>}>
      {children}
    </Suspense>
  );
}
