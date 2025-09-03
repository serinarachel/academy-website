// 🧪 GTM Testing Script for Browser Console
// Run this in your browser console to test GTM tracking

console.log('🧪 Starting GTM Tracking Tests...');

// Test 1: Check if dataLayer exists
if (typeof window.dataLayer !== 'undefined') {
  console.log('✅ dataLayer is available');
  console.log('📊 Current dataLayer length:', window.dataLayer.length);
} else {
  console.log('❌ dataLayer is not available');
  console.log('💡 Make sure GTM is properly loaded');
}

// Test 2: Simulate history change event
console.log('\n🔄 Testing History Change Tracking...');
if (window.dataLayer) {
  // Simulate a pushState event
  window.dataLayer.push({
    event: 'gtm.historyChange',
    event_category: 'navigation',
    event_label: 'pushState',
    page_location: 'https://example.com/test-page',
    page_referrer: window.location.href,
    page_title: 'Test Page',
    change_type: 'pushState',
    timestamp: Date.now()
  });
  console.log('✅ History change event pushed to dataLayer');
}

// Test 3: Simulate CTA button click
console.log('\n🎯 Testing CTA Button Click Tracking...');
if (window.dataLayer) {
  // Simulate a CTA click event
  window.dataLayer.push({
    event: 'gtm.ctaClick',
    event_category: 'engagement',
    event_label: 'cta_button_click',
    button_id: 'test-cta-btn',
    button_text: 'Test CTA Button',
    button_classes: 'btn btn-primary cta',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ CTA click event pushed to dataLayer');
}

// Test 4: Simulate form submission
console.log('\n📝 Testing Form Submission Tracking...');
if (window.dataLayer) {
  // Simulate a form submission event
  window.dataLayer.push({
    event: 'gtm.formSubmit',
    event_category: 'engagement',
    event_label: 'form_submission',
    form_id: 'test-form',
    form_action: '/submit',
    form_method: 'POST',
    page_location: window.location.href,
    timestamp: Date.now()
  });
  console.log('✅ Form submission event pushed to dataLayer');
}

// Test 5: Check GTM Preview Mode
console.log('\n🔍 GTM Preview Mode Instructions:');
console.log('1. Go to your GTM container (GTM-P6XXV5G9)');
console.log('2. Click "Preview" button');
console.log('3. Enter your website URL');
console.log('4. Click "Start Tag Assistant"');
console.log('5. Navigate through your website');
console.log('6. Look for these events in Preview mode:');
console.log('   - gtm.historyChange');
console.log('   - gtm.ctaClick');
console.log('   - gtm.formSubmit');

// Test 6: Verify events in dataLayer
console.log('\n📊 Current dataLayer Events:');
if (window.dataLayer) {
  const recentEvents = window.dataLayer.slice(-10); // Last 10 events
  recentEvents.forEach((event, index) => {
    if (event.event) {
      console.log(`${index + 1}. ${event.event} - ${event.event_category || 'N/A'}`);
    }
  });
}

// Test 7: Check if GTM is firing tags
console.log('\n🎯 To verify tags are firing:');
console.log('1. Open GTM Preview mode');
console.log('2. Look for "Tags Fired" section');
console.log('3. Check if your GA4 tags are firing');
console.log('4. Verify data in GA4 Real-time reports');

console.log('\n✅ GTM Testing Complete!');
console.log('💡 Check GTM Preview mode and GA4 Real-time reports for verification.');
