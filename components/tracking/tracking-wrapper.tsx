'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from './error-boundary';

// Dynamic imports with ssr: false must be in Client Components
const PageTracking = dynamic(() => import('./page-tracking'), {
  ssr: false,
  loading: () => null,
});

const ClickTracking = dynamic(() => import('./click-tracking'), {
  ssr: false,
  loading: () => null,
});

const TrackingWrapper = () => {
  return (
    <ErrorBoundary>
      <PageTracking />
      <ClickTracking />
    </ErrorBoundary>
  );
};

export default TrackingWrapper;
