// 🧪 GTM Virtual Pageview Testing Script
// Run this in your browser console to test the virtualPageview event tracking

console.log('🧪 Starting GTM Virtual Pageview Tests...');
console.log('📊 Testing virtualPageview event with pagePath and pageTitle');

// Test 1: Check if dataLayer exists
if (typeof window.dataLayer !== 'undefined') {
  console.log('✅ dataLayer is available');
  console.log('📊 Current dataLayer length:', window.dataLayer.length);
} else {
  console.log('❌ dataLayer is not available');
  console.log('💡 Make sure GTM is properly loaded');
}

// Test 2: Simulate virtualPageview event
console.log('\n📄 Testing Virtual Pageview Event...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'virtualPageview',
    pagePath: '/courses',
    pageTitle: 'Digital Marketing Courses',
    page_location: 'https://example.com/courses',
    page_hostname: 'example.com',
    page_referrer: 'https://example.com/',
    previous_path: '/',
    previous_title: 'Home',
    timestamp: Date.now(),
    navigation_type: 'spa_route_change'
  });
  console.log('✅ Virtual pageview event pushed to dataLayer');
  console.log('📍 pagePath: /courses');
  console.log('📝 pageTitle: Digital Marketing Courses');
}

// Test 3: Simulate another virtualPageview event
console.log('\n📄 Testing Another Virtual Pageview Event...');
if (window.dataLayer) {
  window.dataLayer.push({
    event: 'virtualPageview',
    pagePath: '/contact',
    pageTitle: 'Contact Us',
    page_location: 'https://example.com/contact',
    page_hostname: 'example.com',
    page_referrer: 'https://example.com/courses',
    previous_path: '/courses',
    previous_title: 'Digital Marketing Courses',
    timestamp: Date.now(),
    navigation_type: 'spa_route_change'
  });
  console.log('✅ Second virtual pageview event pushed to dataLayer');
  console.log('📍 pagePath: /contact');
  console.log('📝 pageTitle: Contact Us');
}

// Test 4: Check GTM Preview Mode Instructions
console.log('\n🔍 GTM Preview Mode Testing Instructions:');
console.log('1. Go to your GTM container (GTM-P6XXV5G9)');
console.log('2. Click "Preview" button');
console.log('3. Enter your website URL: adsmagnifyacademy.com');
console.log('4. Click "Start Tag Assistant"');
console.log('5. Navigate between pages (Home → Courses → Contact)');
console.log('6. Look for these events in Preview mode:');
console.log('   - gtm.pageView (initial page load)');
console.log('   - virtualPageview (navigation changes)');
console.log('   - gtm.ctaClick (CTA button clicks)');
console.log('   - gtm.formSubmit (form submissions)');

// Test 5: Verify virtualPageview data structure
console.log('\n📋 Expected Virtual Pageview Data Structure:');
console.log('```javascript');
console.log('{');
console.log('  event: "virtualPageview",');
console.log('  pagePath: "/courses",                    // Current page path');
console.log('  pageTitle: "Digital Marketing Courses",  // Current page title');
console.log('  page_location: "https://example.com/courses",');
console.log('  page_hostname: "example.com",');
console.log('  page_referrer: "https://example.com/",');
console.log('  previous_path: "/",');
console.log('  previous_title: "Home",');
console.log('  timestamp: 1234567890,');
console.log('  navigation_type: "spa_route_change"');
console.log('}');
console.log('```');

// Test 6: Check current dataLayer events
console.log('\n📊 Current dataLayer Events:');
if (window.dataLayer) {
  const recentEvents = window.dataLayer.slice(-10); // Last 10 events
  recentEvents.forEach((event, index) => {
    if (event.event) {
      console.log(`${index + 1}. ${event.event}`);
      if (event.event === 'virtualPageview') {
        console.log(`   📍 pagePath: ${event.pagePath}`);
        console.log(`   📝 pageTitle: ${event.pageTitle}`);
        console.log(`   🔙 previous_path: ${event.previous_path}`);
        console.log(`   🔙 previous_title: ${event.previous_title}`);
      }
    }
  });
}

// Test 7: Manual navigation test
console.log('\n🧭 Manual Navigation Test:');
console.log('1. Click on "Courses" link in your navigation');
console.log('2. Check GTM Preview mode for virtualPageview event');
console.log('3. Verify pagePath shows "/courses"');
console.log('4. Verify pageTitle shows "Digital Marketing Courses"');
console.log('5. Click on "Contact" link');
console.log('6. Check for another virtualPageview event');
console.log('7. Verify pagePath shows "/contact"');
console.log('8. Verify pageTitle shows "Contact Us"');

// Test 8: Browser navigation test
console.log('\n🔙 Browser Navigation Test:');
console.log('1. Use browser back button to go back to Courses');
console.log('2. Check GTM Preview mode for virtualPageview event');
console.log('3. Verify previous_path shows "/contact"');
console.log('4. Verify previous_title shows "Contact Us"');
console.log('5. Use browser forward button to go to Contact');
console.log('6. Check for another virtualPageview event');

// Test 9: Expected GTM Variables
console.log('\n🎯 Expected GTM Variables in Tag Assistant:');
console.log('✅ pagePath: Should show current page path (e.g., "/courses")');
console.log('✅ pageTitle: Should show current page title (e.g., "Digital Marketing Courses")');
console.log('✅ previous_path: Should show previous page path');
console.log('✅ previous_title: Should show previous page title');
console.log('✅ navigation_type: Should show "spa_route_change"');

// Test 10: Troubleshooting
console.log('\n🔍 Troubleshooting:');
console.log('If virtualPageview events are not showing:');
console.log('1. Check if GTM is properly loaded');
console.log('2. Verify dataLayer exists in browser console');
console.log('3. Check GTM Preview mode is active');
console.log('4. Verify triggers are configured for "virtualPageview" event');
console.log('5. Check if custom variables are created in GTM');

console.log('\n✅ Virtual Pageview Testing Complete!');
console.log('💡 Navigate between pages and check GTM Preview mode for events.');
console.log('🎯 You should see pagePath and pageTitle clearly displayed in Tag Assistant!');
