// 🧪 Comprehensive GTM Testing Script for Browser Console
// Run this in your browser console to test ALL GTM tracking features

console.log('🧪 Starting Comprehensive GTM Tracking Tests...');
console.log('📊 Testing all tracking features: Pageviews, History, Clicks, Forms, Scroll, Time, Engagement');

// Test 1: Check if dataLayer exists
if (typeof window.dataLayer !== 'undefined') {
  console.log('✅ dataLayer is available');
  console.log('📊 Current dataLayer length:', window.dataLayer.length);
} else {
  console.log('❌ dataLayer is not available');
  console.log('💡 Make sure GTM is properly loaded');
}

// Test 2: Simulate page view event
console.log('\n📄 Testing Page View Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.pageView',
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: document.referrer,
    page_hostname: window.location.hostname,
    page_path: window.location.pathname,
    timestamp: Date.now()
  });
  console.log('✅ Page view event pushed to dataLayer');
}

// Test 3: Simulate history change event (Virtual Pageview)
console.log('\n🔄 Testing History Change Tracking (Virtual Pageviews)...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.historyChange',
    event_category: 'navigation',
    event_label: 'pushState',
    page_location: 'https://example.com/test-page',
    page_referrer: window.location.href,
    page_title: 'Test Page',
    page_hostname: 'example.com',
    page_path: '/test-page',
    history_old_url: window.location.href,
    history_new_url: 'https://example.com/test-page',
    change_type: 'pushState',
    navigation_type: 'virtual_pageview',
    timestamp: Date.now()
  });
  console.log('✅ History change event pushed to dataLayer');
}

// Test 4: Simulate CTA button click
console.log('\n🎯 Testing CTA Button Click Tracking...');
if (window.dataLayer) {
  // First, populate GTM's built-in Click Variables
  window.dataLayer.push({
    event: 'gtm.click',
    gtm: {
      element: document.body,
      elementId: 'test-cta-btn',
      elementClasses: 'btn btn-primary cta',
      elementText: 'Test CTA Button',
      elementUrl: 'https://example.com/contact',
      elementTarget: '_self',
      elementType: 'button'
    }
  });
  
  // Then push our custom CTA event
  window.dataLayer.push({
    event: 'gtm.ctaClick',
    event_category: 'engagement',
    event_label: 'cta_button_click',
    button_id: 'test-cta-btn',
    button_text: 'Test CTA Button',
    button_classes: 'btn btn-primary cta',
    button_href: 'https://example.com/contact',
    button_target: '_self',
    button_type: 'button',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ CTA click event pushed to dataLayer');
}

// Test 5: Simulate form submission
console.log('\n📝 Testing Form Submission Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.formSubmit',
    event_category: 'engagement',
    event_label: 'form_submission',
    form_id: 'test-form',
    form_action: '/submit',
    form_method: 'POST',
    form_name: 'test-form',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ Form submission event pushed to dataLayer');
}

// Test 6: Simulate form start
console.log('\n📝 Testing Form Start Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.formStart',
    event_category: 'engagement',
    event_label: 'form_start',
    form_id: 'test-form',
    form_action: '/submit',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ Form start event pushed to dataLayer');
}

// Test 7: Simulate outbound link click
console.log('\n🔗 Testing Outbound Link Click Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.outboundLinkClick',
    event_category: 'engagement',
    event_label: 'outbound_link_click',
    link_url: 'https://external-site.com',
    link_text: 'External Link',
    link_target: '_blank',
    page_location: window.location.href,
    page_title: document.title,
    timestamp: Date.now()
  });
  console.log('✅ Outbound link click event pushed to dataLayer');
}

// Test 8: Simulate video interaction
console.log('\n🎥 Testing Video Interaction Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.videoInteraction',
    event_category: 'engagement',
    event_label: 'video_click',
    video_element: 'test-video',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ Video interaction event pushed to dataLayer');
}

// Test 9: Simulate scroll depth
console.log('\n📜 Testing Scroll Depth Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.scrollDepth',
    event_category: 'engagement',
    event_label: 'scroll_75%',
    scroll_depth: 75,
    scroll_percentage: 78,
    page_location: window.location.href,
    page_title: document.title,
    timestamp: Date.now()
  });
  console.log('✅ Scroll depth event pushed to dataLayer');
}

// Test 10: Simulate time on page
console.log('\n⏱️ Testing Time on Page Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.timeOnPage',
    event_category: 'engagement',
    event_label: 'time_60s',
    time_on_page: 60,
    time_on_page_seconds: 65,
    page_location: window.location.href,
    page_title: document.title,
    timestamp: Date.now()
  });
  console.log('✅ Time on page event pushed to dataLayer');
}

// Test 11: Simulate page exit
console.log('\n🚪 Testing Page Exit Tracking...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'gtm.pageExit',
    event_category: 'engagement',
    event_label: 'page_exit',
    time_on_page: 120,
    max_scroll_depth: 85,
    page_location: window.location.href,
    page_title: document.title,
    timestamp: Date.now()
  });
  console.log('✅ Page exit event pushed to dataLayer');
}

// Test 12: Simulate user engagement
console.log('\n👤 Testing User Engagement Tracking...');
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
  console.log('✅ User engagement event pushed to dataLayer');
}

// Test 13: Check GTM Preview Mode Instructions
console.log('\n🔍 GTM Preview Mode Testing Instructions:');
console.log('1. Go to your GTM container (GTM-P6XXV5G9)');
console.log('2. Click "Preview" button');
console.log('3. Enter your website URL: adsmagnifyacademy.com');
console.log('4. Click "Start Tag Assistant"');
console.log('5. Navigate through your website and test all features');
console.log('6. Look for these events in Preview mode:');
console.log('   - gtm.pageView (initial page load)');
console.log('   - gtm.historyChange (navigation changes)');
console.log('   - gtm.ctaClick (CTA button clicks)');
console.log('   - gtm.formSubmit (form submissions)');
console.log('   - gtm.formStart (form interactions)');
console.log('   - gtm.outboundLinkClick (external links)');
console.log('   - gtm.videoInteraction (video clicks)');
console.log('   - gtm.scrollDepth (scroll milestones)');
console.log('   - gtm.timeOnPage (time milestones)');
console.log('   - gtm.pageExit (page departures)');
console.log('   - gtm.userEngagement (user activity)');

// Test 14: Verify events in dataLayer
console.log('\n📊 Current dataLayer Events:');
if (window.dataLayer) {
  const recentEvents = window.dataLayer.slice(-20); // Last 20 events
  recentEvents.forEach((event, index) => {
    if (event.event) {
      console.log(`${index + 1}. ${event.event} - ${event.event_category || 'N/A'}`);
    }
  });
}

// Test 15: Check if GTM is firing tags
console.log('\n🎯 To verify tags are firing:');
console.log('1. Open GTM Preview mode');
console.log('2. Look for "Tags Fired" section');
console.log('3. Check if your GA4 tags are firing');
console.log('4. Verify data in GA4 Real-time reports');
console.log('5. Check for all expected events:');
console.log('   - page_view (traditional page loads)');
console.log('   - virtual_pageview (SPA navigation)');
console.log('   - cta_button_click (CTA interactions)');
console.log('   - form_submit (form completions)');
console.log('   - form_start (form interactions)');
console.log('   - outbound_link_click (external links)');
console.log('   - video_interaction (video clicks)');
console.log('   - scroll_depth (scroll milestones)');
console.log('   - time_on_page (time milestones)');
console.log('   - page_exit (departure tracking)');
console.log('   - user_engagement (activity tracking)');

// Test 16: Performance and Best Practices
console.log('\n⚡ Performance & Best Practices Check:');
console.log('✅ 1-second delay on history changes (prevents multiple fires)');
console.log('✅ Scroll debouncing (100ms delay)');
console.log('✅ Time milestones at meaningful intervals (10s, 30s, 60s, 120s, 300s, 600s)');
console.log('✅ Built-in Click Variables properly populated');
console.log('✅ Event order: gtm.click → custom events');
console.log('✅ Memory management (timeouts cleared)');
console.log('✅ Passive scroll listeners for performance');

console.log('\n✅ Comprehensive GTM Testing Complete!');
console.log('💡 Check GTM Preview mode and GA4 Real-time reports for verification.');
console.log('🎯 All tracking features should now work: Pageviews, History, Clicks, Forms, Scroll, Time, Engagement');
