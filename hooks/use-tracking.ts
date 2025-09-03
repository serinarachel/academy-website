import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Global tracking state to avoid hydration issues
let isClient = false;
let hasInitialized = false;

// Initialize client-side tracking
if (typeof window !== 'undefined') {
  isClient = true;
}

// Tracking utility functions
export const trackPageView = (url: string, title?: string) => {
  if (!isClient) return;
  
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('config', 'G-DRM8XJXYMZ', {
      page_path: url,
      page_title: title
    });
  }
  
  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: title,
      page_location: window.location.href
    });
  }
  
  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!isClient) return;
  
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('track', action, {
      content_category: category,
      content_name: label,
      value: value
    });
  }
};

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef<string>('');

  useEffect(() => {
    if (!isClient) return;
    
    const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Only track if path actually changed
    if (currentPath !== previousPath.current) {
      previousPath.current = currentPath;
      trackPageView(currentPath);
    }
  }, [pathname, searchParams]);
};

// Hook for tracking CTA button clicks
export const useCTATracking = () => {
  const trackCTAClick = (buttonType: string, location: string, course?: string) => {
    if (!isClient) return;
    trackEvent('cta_click', 'engagement', `${buttonType}_${location}${course ? `_${course}` : ''}`);
  };

  return { trackCTAClick };
};

// Hook for tracking form submissions
export const useFormTracking = () => {
  const trackFormSubmit = (formType: string, location: string) => {
    if (!isClient) return;
    trackEvent('form_submit', 'engagement', `${formType}_${location}`);
  };

  return { trackFormSubmit };
};

// Global click tracking function that can be called from anywhere
export const trackGlobalClick = (action: string, category: string, label?: string) => {
  if (!isClient) return;
  trackEvent(action, category, label);
};
