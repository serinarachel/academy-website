'use client';

import { useEffect, useRef } from 'react';

// GTM History Change Tracking with built-in variables
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
          history_state: newState,
          previous_url: previousUrl,
          previous_state: previousState,
          change_type: changeType,
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

// GTM CTA Button Tracking with built-in variables
const setupGTMCTATracking = () => {
  if (typeof window === 'undefined') return;

  const handleCTAClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const button = target.closest('button') || target.closest('a') || target;
    
    if (!button) return;

    // Check if it's a CTA button (by ID, class, or text)
    const buttonId = button.id || '';
    const buttonClasses = button.className || '';
    const buttonText = button.textContent?.trim() || '';
    const buttonHref = (button as HTMLAnchorElement).href || '';
    
    // Define CTA button identifiers
    const ctaIdentifiers = [
      'book-demo-btn',
      'book-demo',
      'get-started',
      'enroll-now',
      'contact-us',
      'learn-more',
      'cta',
      'demo'
    ];

    const isCTAButton = 
      ctaIdentifiers.some(id => buttonId.toLowerCase().includes(id)) ||
      ctaIdentifiers.some(text => buttonText.toLowerCase().includes(text)) ||
      buttonClasses.toLowerCase().includes('cta') ||
      buttonClasses.toLowerCase().includes('btn-primary') ||
      buttonClasses.toLowerCase().includes('button-primary');

    if (isCTAButton) {
      // First, push the click data to dataLayer for GTM's built-in Click Variables
      if (window.dataLayer) {
        // This ensures GTM's built-in Click Variables are populated
        window.dataLayer.push({
          event: 'gtm.click',
          gtm: {
            element: button,
            elementId: buttonId,
            elementClasses: buttonClasses,
            elementText: buttonText,
            elementUrl: buttonHref,
            elementTarget: (button as HTMLAnchorElement).target || '',
            elementType: button.tagName.toLowerCase()
          }
        });
      }

      // Then push our custom CTA event with all the button data
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.ctaClick',
          event_category: 'engagement',
          event_label: 'cta_button_click',
          page_location: window.location.href,
          page_title: document.title,
          button_id: buttonId,
          button_classes: buttonClasses,
          button_text: buttonText,
          button_href: buttonHref,
          button_type: button.tagName.toLowerCase(),
          timestamp: Date.now()
        });
      }
    }
  };

  // Use capture phase to ensure we catch all clicks
  document.addEventListener('click', handleCTAClick, { capture: true });
};

// GTM Enhanced Ecommerce and Custom Events
const setupGTMEnhancedTracking = () => {
  if (typeof window === 'undefined') return;

  // Track page views with enhanced data
  const trackEnhancedPageView = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gtm.pageView',
        page_location: window.location.href,
        page_title: document.title,
        page_referrer: document.referrer,
        timestamp: Date.now(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`
      });
    }
  };

  // Track form submissions
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
        page_location: window.location.href,
        timestamp: Date.now()
      });
    }
  };

  // Track external link clicks
  const handleExternalLinkClick = (event: Event) => {
    const link = event.target as HTMLAnchorElement;
    if (link && link.href && link.href !== window.location.origin) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'gtm.externalLinkClick',
          event_category: 'engagement',
          event_label: 'external_link_click',
          link_url: link.href,
          link_text: link.textContent?.trim() || 'unknown',
          page_location: window.location.href,
          timestamp: Date.now()
        });
      }
    }
  };

  // Add event listeners
  document.addEventListener('submit', handleFormSubmit, { capture: true });
  document.addEventListener('click', handleExternalLinkClick, { capture: true });

  // Initial page view
  trackEnhancedPageView();
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
        setupGTMHistoryTracking();
        setupGTMCTATracking();
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
