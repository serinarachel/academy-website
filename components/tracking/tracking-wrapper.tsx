'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from './error-boundary';
import GTMSetup from './gtm-setup';

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
      <GTMSetup />
      <PageTracking />
      <ClickTracking />
    </ErrorBoundary>
  );
};

export default TrackingWrapper;
