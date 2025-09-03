import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Global tracking state to avoid hydration issues
let isClient = false;

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
  const previousPath = useRef<string>('');

  useEffect(() => {
    if (!isClient) return;
    
    const currentPath = pathname;
    
    // Only track if path actually changed
    if (currentPath !== previousPath.current) {
      previousPath.current = currentPath;
      
      // Use window.location for full page navigation tracking as suggested
      const fullUrl = window.location.href;
      const searchParams = window.location.search;
      const urlToTrack = currentPath + searchParams;
      
      trackPageView(urlToTrack);
      
      // Track full page navigation event
      trackEvent('full_page_navigation', 'navigation', `navigate_to_${currentPath}`);
    }
  }, [pathname]);
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

// Enhanced navigation tracking using window.location methods as suggested
export const trackFullPageNavigation = (url: string, method: 'assign' | 'href' | 'replace') => {
  if (!isClient) return;
  
  // Track the navigation method used
  trackEvent('full_page_navigation', 'navigation', `${method}_to_${url}`);
  
  // Use the appropriate window.location method for full page navigation
  switch (method) {
    case 'assign':
      window.location.assign(url);
      break;
    case 'href':
      window.location.href = url;
      break;
    case 'replace':
      window.location.replace(url);
      break;
  }
};

// Track external links and full page reloads
export const trackNavigation = (url: string, type: 'internal' | 'external' | 'reload') => {
  if (!isClient) return;
  
  if (type === 'external') {
    trackEvent('external_link_click', 'navigation', url);
  } else if (type === 'reload') {
    trackEvent('page_reload', 'navigation', url);
  } else {
    trackEvent('internal_navigation', 'navigation', url);
  }
};
