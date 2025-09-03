'use client';

import { usePageTracking } from '@/hooks/use-tracking';

const PageTracking = () => {
  usePageTracking();
  
  // This component doesn't render anything, it just handles tracking
  return null;
};

export default PageTracking;
