'use client';

import { useEffect } from 'react';
import { trackGlobalClick } from '@/hooks/use-tracking';

const ClickTracking = () => {
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

      // Track all link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a') as HTMLElement;
        const href = link?.getAttribute('href');
        const text = link?.textContent?.trim() || 'link_click';
        const location = window.location.pathname;
        
        if (href && href !== '#' && !href.startsWith('javascript:')) {
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

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true } as any);
  }, []);

  return null;
};

export default ClickTracking;
