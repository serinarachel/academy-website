import { trackFullPageNavigation } from '@/hooks/use-tracking';

// Navigation utility functions that ensure full page navigation tracking
export const navigateTo = (url: string, method: 'assign' | 'href' | 'replace' = 'href') => {
  // Track the navigation before performing it
  trackFullPageNavigation(url, method);
};

// Navigate to external URL with tracking
export const navigateToExternal = (url: string) => {
  // Track external navigation
  if (typeof window !== 'undefined') {
    // Track the external link click
    if (window.gtag) {
      window.gtag('event', 'external_link_click', {
        event_category: 'navigation',
        event_label: url
      });
    }
    
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'external_link_click',
        event_category: 'navigation',
        event_label: url
      });
    }
    
    // Navigate to external URL
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// Navigate to internal page with full page tracking
export const navigateToInternal = (url: string) => {
  navigateTo(url, 'href');
};

// Replace current page (no back button)
export const replacePage = (url: string) => {
  navigateTo(url, 'replace');
};

// Navigate and update history
export const navigateWithHistory = (url: string) => {
  navigateTo(url, 'assign');
};
