'use client';

import { useEffect, useRef } from 'react';

// Global tracking state
let isInitialized = false;
let pageStartTime = Date.now();
let scrollDepth = 0;
let maxScrollDepth = 0;

// GTM Enhanced Page View Tracking
const setupGTMPageViewTracking = () => {
  if (typeof window === 'undefined') return;

  const trackPageView = (url: string, title: string, referrer: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.pageView',
        page_location: url,
        page_title: title,
        page_referrer: referrer,
        page_hostname: window.location.hostname,
        page_path: window.location.pathname,
        timestamp: Date.now(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    }
  };

  // Initial page view
  trackPageView(window.location.href, document.title, document.referrer);
};

// GTM Virtual Pageview Tracking for SPA Navigation
const setupGTMVirtualPageviewTracking = () => {
  if (typeof window === 'undefined') return;

  // Store previous URL and state
  let previousUrl = window.location.href;
  let previousPath = window.location.pathname;
  let previousTitle = document.title;
  let virtualPageviewTimeout: NodeJS.Timeout | null = null;

  // Function to push virtualPageview event
  const pushVirtualPageview = (path: string, title: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'virtualPageview',
        pagePath: path,
        pageTitle: title,
        page_location: window.location.href,
        page_hostname: window.location.hostname,
        page_referrer: previousUrl,
        previous_path: previousPath,
        previous_title: previousTitle,
        timestamp: Date.now(),
        navigation_type: 'spa_route_change'
      });
    }
  };

  // Debounced function to prevent multiple rapid fires
  const debouncedVirtualPageview = (newPath: string, newTitle: string) => {
    if (virtualPageviewTimeout) {
      clearTimeout(virtualPageviewTimeout);
    }

    virtualPageviewTimeout = setTimeout(() => {
      // Only push if path or title actually changed
      if (newPath !== previousPath || newTitle !== previousTitle) {
        pushVirtualPageview(newPath, newTitle);
        
        // Update previous values
        previousPath = newPath;
        previousTitle = newTitle;
        previousUrl = window.location.href;
        
        // Reset page metrics for new page
        pageStartTime = Date.now();
        scrollDepth = 0;
        maxScrollDepth = 0;
      }
    }, 100); // 100ms delay to ensure title is set
  };

  // Override pushState
  const originalPushState = window.history.pushState;
  window.history.pushState = function(state, title, url) {
    const newPath = url ? new URL(url, window.location.origin).pathname : window.location.pathname;
    const newTitle = title || document.title;
    
    originalPushState.call(this, state, title, url);
    
    // Wait for title to be set, then push virtualPageview
    setTimeout(() => {
      debouncedVirtualPageview(newPath, document.title);
    }, 50);
  };

  // Override replaceState
  const originalReplaceState = window.history.replaceState;
  window.history.replaceState = function(state, title, url) {
    const newPath = url ? new URL(url, window.location.origin).pathname : window.location.pathname;
    const newTitle = title || document.title;
    
    originalReplaceState.call(this, state, title, url);
    
    // Wait for title to be set, then push virtualPageview
    setTimeout(() => {
      debouncedVirtualPageview(newPath, document.title);
    }, 50);
  };

  // Listen for popstate (browser back/forward)
  window.addEventListener('popstate', () => {
    const newPath = window.location.pathname;
    const newTitle = document.title;
    
    // Wait for title to be set, then push virtualPageview
    setTimeout(() => {
      debouncedVirtualPageview(newPath, document.title);
    }, 50);
  });

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const newPath = window.location.pathname;
    const newTitle = document.title;
    
    // Wait for title to be set, then push virtualPageview
    setTimeout(() => {
      debouncedVirtualPageview(newPath, document.title);
    }, 50);
  });

  // Listen for title changes (for dynamic title updates)
  let titleObserver: MutationObserver | null = null;
  
  if (typeof MutationObserver !== 'undefined') {
    titleObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          const titleElement = document.querySelector('title');
          if (titleElement && titleElement.textContent !== previousTitle) {
            const newTitle = titleElement.textContent || document.title;
            debouncedVirtualPageview(window.location.pathname, newTitle);
          }
        }
      });
    });

    titleObserver.observe(document.head, {
      childList: true,
      subtree: true
    });
  }

  // Cleanup function
  return () => {
    if (virtualPageviewTimeout) {
      clearTimeout(virtualPageviewTimeout);
    }
    if (titleObserver) {
      titleObserver.disconnect();
    }
  };
};

// GTM History Change Tracking with built-in variables (keeping for backward compatibility)
const setupGTMHistoryTracking = () => {
  if (typeof window === 'undefined') return;

  // Store previous URL and state
  let previousUrl = window.location.href;
  let previousState = window.history.state;
  let historyChangeTimeout: NodeJS.Timeout | null = null;

  // Debounced function to prevent multiple rapid fires
  const debouncedHistoryChange = (newUrl: string, newState: any, changeType: string) => {
    if (historyChangeTimeout) {
      clearTimeout(historyChangeTimeout);
    }

    historyChangeTimeout = setTimeout(() => {
      // Push to dataLayer with built-in GTM variables
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.historyChange',
          event_category: 'navigation',
          event_label: changeType,
          page_location: newUrl,
          page_referrer: previousUrl,
          page_title: document.title,
          page_hostname: window.location.hostname,
          page_path: window.location.pathname,
          history_old_url: previousUrl,
          history_new_url: newUrl,
          history_old_state: previousState,
          history_new_state: newState,
          change_type: changeType,
          navigation_type: 'virtual_pageview',
          timestamp: Date.now()
        });
      }

      // Update previous values
      previousUrl = newUrl;
      previousState = newState;
    }, 1000); // 1 second delay as requested
  };

  // Override pushState
  const originalPushState = window.history.pushState;
  window.history.pushState = function(state, title, url) {
    const newUrl = url ? window.location.origin + url : window.location.href;
    originalPushState.call(this, state, title, url);
    debouncedHistoryChange(newUrl, state, 'pushState');
  };

  // Override replaceState
  const originalReplaceState = window.history.replaceState;
  window.history.replaceState = function(state, title, url) {
    const newUrl = url ? window.location.origin + url : window.location.href;
    originalReplaceState.call(this, state, title, url);
    debouncedHistoryChange(newUrl, state, 'replaceState');
  };

  // Listen for popstate (browser back/forward)
  window.addEventListener('popstate', () => {
    const newUrl = window.location.href;
    debouncedHistoryChange(newUrl, window.history.state, 'popstate');
  });

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const newUrl = window.location.href;
    debouncedHistoryChange(newUrl, window.history.state, 'hashchange');
  });
};

// GTM Comprehensive Click Tracking with built-in variables
const setupGTMClickTracking = () => {
  if (typeof window === 'undefined') return;

  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const button = target.closest('button') || target.closest('a') || target;
    
    if (!button) return;

    // Get all click data
    const buttonId = button.id || '';
    const buttonClasses = button.className || '';
    const buttonText = button.textContent?.trim() || '';
    const buttonHref = (button as HTMLAnchorElement).href || '';
    const buttonTarget = (button as HTMLAnchorElement).target || '';
    const buttonType = button.tagName.toLowerCase();
    
    // First, populate GTM's built-in Click Variables
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.click',
        gtm: {
          element: button,
          elementId: buttonId,
          elementClasses: buttonClasses,
          elementText: buttonText,
          elementUrl: buttonHref,
          elementTarget: buttonTarget,
          elementType: buttonType
        }
      });
    }

    // Define CTA button identifiers
    const ctaIdentifiers = [
      'book-demo-btn', 'book-demo', 'get-started', 'enroll-now',
      'contact-us', 'learn-more', 'cta', 'demo', 'apply-now',
      'download', 'subscribe', 'sign-up', 'register'
    ];

    const isCTAButton = 
      ctaIdentifiers.some(id => buttonId.toLowerCase().includes(id)) ||
      ctaIdentifiers.some(text => buttonText.toLowerCase().includes(text)) ||
      buttonClasses.toLowerCase().includes('cta') ||
      buttonClasses.toLowerCase().includes('btn-primary') ||
      buttonClasses.toLowerCase().includes('button-primary');

    // Track CTA button clicks
    if (isCTAButton) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.ctaClick',
          event_category: 'engagement',
          event_label: 'cta_button_click',
          page_location: window.location.href,
          page_title: document.title,
          button_id: buttonId,
          button_text: buttonText,
          button_classes: buttonClasses,
          button_href: buttonHref,
          button_target: buttonTarget,
          button_type: buttonType,
          timestamp: Date.now()
        });
      }
    }

    // Track outbound link clicks
    if (buttonType === 'a' && buttonHref && buttonHref !== window.location.origin) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.outboundLinkClick',
          event_category: 'engagement',
          event_label: 'outbound_link_click',
          link_url: buttonHref,
          link_text: buttonText,
          link_target: buttonTarget,
          page_location: window.location.href,
          page_title: document.title,
          timestamp: Date.now()
        });
      }
    }

    // Track video interactions
    if (buttonType === 'video' || button.closest('video')) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.videoInteraction',
          event_category: 'engagement',
          event_label: 'video_click',
          video_element: buttonType === 'video' ? button : button.closest('video'),
          page_location: window.location.href,
          timestamp: Date.now()
        });
      }
    }
  };

  // Use capture phase to ensure we catch all clicks
  document.addEventListener('click', handleClick, { capture: true });
};

// GTM Form Tracking
const setupGTMFormTracking = () => {
  if (typeof window === 'undefined') return;

  const handleFormSubmit = (event: Event) => {
    const form = event.target as HTMLFormElement;
    if (form && window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.formSubmit',
        event_category: 'engagement',
        event_label: 'form_submission',
        form_id: form.id || 'unknown',
        form_action: form.action || 'unknown',
        form_method: form.method || 'unknown',
        form_name: form.name || 'unknown',
        page_location: window.location.href,
        page_title: document.title,
        timestamp: Date.now()
      });
    }
  };

  const handleFormStart = (event: Event) => {
    const form = event.target as HTMLFormElement;
    if (form && window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.formStart',
        event_category: 'engagement',
        event_label: 'form_start',
        form_id: form.id || 'unknown',
        form_action: form.action || 'unknown',
        page_location: window.location.href,
        timestamp: Date.now()
      });
    }
  };

  // Add event listeners
  document.addEventListener('submit', handleFormSubmit, { capture: true });
  document.addEventListener('focusin', (e) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
      const form = (e.target as HTMLElement).closest('form');
      if (form) handleFormStart({ target: form } as any);
    }
  });
};

// GTM Scroll Depth Tracking
const setupGTMScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let scrollTimeout: NodeJS.Timeout | null = null;
  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depth milestones
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'gtm.scrollDepth',
              event_category: 'engagement',
              event_label: `scroll_${threshold}%`,
              scroll_depth: threshold,
              scroll_percentage: scrollPercent,
              page_location: window.location.href,
              page_title: document.title,
              timestamp: Date.now()
            });
          }
        }
      });

      // Update max scroll depth
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
      }
    }, 100);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

// GTM Time on Page Tracking
const setupGTMTimeTracking = () => {
  if (typeof window === 'undefined') return;

  let timeTrackingInterval: NodeJS.Timeout | null = null;
  const timeThresholds = [10, 30, 60, 120, 300, 600]; // seconds
  const trackedTimeThresholds = new Set<number>();

  const startTimeTracking = () => {
    pageStartTime = Date.now();
    
    timeTrackingInterval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - pageStartTime) / 1000);
      
      // Track time milestones
      timeThresholds.forEach(threshold => {
        if (timeOnPage >= threshold && !trackedTimeThresholds.has(threshold)) {
          trackedTimeThresholds.add(threshold);
          
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'gtm.timeOnPage',
              event_category: 'engagement',
              event_label: `time_${threshold}s`,
              time_on_page: threshold,
              time_on_page_seconds: timeOnPage,
              page_location: window.location.href,
              page_title: document.title,
              timestamp: Date.now()
            });
          }
        }
      });
    }, 1000);
  };

  const stopTimeTracking = () => {
    if (timeTrackingInterval) {
      clearInterval(timeTrackingInterval);
      timeTrackingInterval = null;
    }
    
    // Track final time on page
    const finalTimeOnPage = Math.floor((Date.now() - pageStartTime) / 1000);
    if (window.dataLayer && finalTimeOnPage > 0) {
      window.dataLayer.push({
        event: 'gtm.pageExit',
        event_category: 'engagement',
        event_label: 'page_exit',
        time_on_page: finalTimeOnPage,
        max_scroll_depth: maxScrollDepth,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: Date.now()
      });
    }
  };

  // Start tracking on page load
  startTimeTracking();

  // Track page exit
  window.addEventListener('beforeunload', stopTimeTracking);
  window.addEventListener('pagehide', stopTimeTracking);
};

// GTM Enhanced Ecommerce and Custom Events
const setupGTMEnhancedTracking = () => {
  if (typeof window === 'undefined') return;

  // Track user engagement metrics
  const trackUserEngagement = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.userEngagement',
        event_category: 'engagement',
        event_label: 'user_engagement',
        page_location: window.location.href,
        page_title: document.title,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timestamp: Date.now()
      });
    }
  };

  // Track initial engagement after 5 seconds
  setTimeout(trackUserEngagement, 5000);
};

// Main GTM Setup Component
const GTMSetup = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Wait for GTM to be ready
    const waitForGTM = () => {
      if (window.dataLayer) {
        setupGTMPageViewTracking();
        setupGTMVirtualPageviewTracking(); // Primary virtual pageview tracking
        setupGTMHistoryTracking(); // Secondary history tracking for backward compatibility
        setupGTMClickTracking();
        setupGTMFormTracking();
        setupGTMScrollTracking();
        setupGTMTimeTracking();
        setupGTMEnhancedTracking();
      } else {
        setTimeout(waitForGTM, 100);
      }
    };

    waitForGTM();
  }, []);

  return null;
};

export default GTMSetup;
