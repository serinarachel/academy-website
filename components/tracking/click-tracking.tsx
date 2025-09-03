'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/hooks/use-tracking';

const ClickTracking = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest('[data-cta]') as HTMLElement | null;
      if (!el) return;

      const action = el.getAttribute('data-cta') || 'cta_click';
      const location = el.getAttribute('data-location') || 'unknown';
      const course = el.getAttribute('data-course') || undefined;

      const label = course ? `${action}_${location}_${course}` : `${action}_${location}`;
      trackEvent('cta_click', 'engagement', label);
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true } as any);
  }, []);

  return null;
};

export default ClickTracking;
