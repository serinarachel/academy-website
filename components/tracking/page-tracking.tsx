'use client';

import { Suspense } from 'react';
import { usePageTracking } from '@/hooks/use-tracking';

const PageTrackingInner = () => {
  usePageTracking();
  
  // This component doesn't render anything, it just handles tracking
  return null;
};

const PageTracking = () => {
  return (
    <Suspense fallback={null}>
      <PageTrackingInner />
    </Suspense>
  );
};

export default PageTracking;
