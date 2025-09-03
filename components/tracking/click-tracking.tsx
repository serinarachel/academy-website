'use client';

import { Suspense, useEffect } from 'react';
import { trackGlobalClick, trackNavigation } from '@/hooks/use-tracking';

const ClickTrackingInner = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Track all button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button') as HTMLElement;
        const text = button?.textContent?.trim() || 'button_click';
        const location = window.location.pathname;
        
        trackGlobalClick('cta_click', 'engagement', `${text}_${location}`);
      }

      // Track all link clicks with enhanced navigation tracking
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a') as HTMLElement;
        const href = link?.getAttribute('href');
        const text = link?.textContent?.trim() || 'link_click';
        const location = window.location.pathname;
        
        if (href && href !== '#' && !href.startsWith('javascript:')) {
          // Determine if it's external or internal
          if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            trackNavigation(href, 'external');
          } else {
            trackNavigation(href, 'internal');
          }
          trackGlobalClick('link_click', 'navigation', `${text}_${location}`);
        }
      }

      // Track form submissions
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.tagName === 'FORM' ? target : target.closest('form') as HTMLElement;
        const action = form?.getAttribute('action') || 'form_submit';
        const location = window.location.pathname;
        
        trackGlobalClick('form_submit', 'engagement', `${action}_${location}`);
      }
    };

    // Track full page navigation events
    const handleNavigationStart = () => {
      trackNavigation(window.location.pathname, 'internal');
    };

    // Track page reloads and navigation
    const handleBeforeUnload = () => {
      trackNavigation(window.location.href, 'reload');
    };

    const handlePopState = () => {
      trackNavigation(window.location.href, 'internal');
    };

    document.addEventListener('click', handleClick, { capture: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true } as any);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
};

const ClickTracking = () => {
  return (
    <Suspense fallback={null}>
      <ClickTrackingInner />
    </Suspense>
  );
};

export default ClickTracking;
