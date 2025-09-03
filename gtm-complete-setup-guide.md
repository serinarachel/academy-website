# 🎯 Complete Google Tag Manager Container Setup Guide

## **📋 Container Overview**
- **Container ID**: GTM-P6XXV5G9
- **Container Name**: Adsmagnify Academy Website
- **Container Type**: Web
- **Tracking Scope**: Comprehensive SPA + Traditional Page Tracking

---

## **🔧 1. Built-in Variables (Enable These) - CRITICAL STEP**

### **Page Variables - MUST ENABLE**
- ✅ **Page URL** ← **CRITICAL: For page location tracking**
- ✅ **Page Hostname** ← **CRITICAL: For domain tracking**
- ✅ **Page Path** ← **CRITICAL: For path tracking**
- ✅ **Page Title** ← **CRITICAL: For page identification**
- ✅ **Referrer** ← **CRITICAL: For traffic source tracking**

### **Click Variables - MUST ENABLE**
- ✅ **Click ID** ← **CRITICAL: For button identification**
- ✅ **Click Classes** ← **CRITICAL: For button styling tracking**
- ✅ **Click Text** ← **CRITICAL: For button text tracking**
- ✅ **Click URL** ← **CRITICAL: For link tracking**
- ✅ **Click Element** ← **CRITICAL: For element type tracking**
- ✅ **Click Target** ← **CRITICAL: For link target tracking**

### **History Variables - MUST ENABLE**
- ✅ **History New State** ← **CRITICAL: For SPA navigation**
- ✅ **History Old State** ← **CRITICAL: For SPA navigation**
- ✅ **History Source** ← **CRITICAL: For navigation source**

### **Other Built-in Variables**
- ✅ **User Agent** ← **For device/browser tracking**
- ✅ **Screen Resolution** ← **For device capability tracking**
- ✅ **Viewport Size** ← **For responsive design tracking**

---

## **🎯 2. Custom Variables**

### **Variable 1: History Change Type**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `change_type`
- **Default Value**: `unknown`

### **Variable 2: History Old URL**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `history_old_url`
- **Default Value**: `unknown`

### **Variable 3: History New URL**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `history_new_url`
- **Default Value**: `unknown`

### **Variable 4: Navigation Type**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `navigation_type`
- **Default Value**: `unknown`

### **Variable 5: Button Identifier**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `button_id`
- **Default Value**: `unknown`

### **Variable 6: CTA Button Text**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `button_text`
- **Default Value**: `unknown`

### **Variable 7: Scroll Depth**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `scroll_depth`
- **Default Value**: `0`

### **Variable 8: Time on Page**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `time_on_page`
- **Default Value**: `0`

---

## **🚀 3. Triggers**

### **Trigger 1: History Change Trigger (Virtual Pageviews)**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.historyChange`
- **Fire On**: All Custom Events
- **Additional Conditions**:
  - `change_type` equals `pushState` OR
  - `change_type` equals `replaceState` OR
  - `change_type` equals `popstate` OR
  - `change_type` equals `hashchange`

### **Trigger 2: CTA Button Click Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.ctaClick`
- **Fire On**: All Custom Events
- **Additional Conditions**:
  - `Click Text` contains `book demo` OR
  - `Click Text` contains `get started` OR
  - `Click Text` contains `enroll now` OR
  - `Click ID` contains `book-demo-btn` OR
  - `Click Classes` contains `cta` OR
  - `Click Classes` contains `btn-primary`

### **Trigger 3: Form Submission Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.formSubmit`
- **Fire On**: All Custom Events

### **Trigger 4: Form Start Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.formStart`
- **Fire On**: All Custom Events

### **Trigger 5: Outbound Link Click Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.outboundLinkClick`
- **Fire On**: All Custom Events

### **Trigger 6: Video Interaction Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.videoInteraction`
- **Fire On**: All Custom Events

### **Trigger 7: Scroll Depth Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.scrollDepth`
- **Fire On**: All Custom Events

### **Trigger 8: Time on Page Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.timeOnPage`
- **Fire On**: All Custom Events

### **Trigger 9: Page Exit Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.pageExit`
- **Fire On**: All Custom Events

### **Trigger 10: User Engagement Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.userEngagement`
- **Fire On**: All Custom Events

---

## **🏷️ 4. Tags**

### **Tag 1: GA4 - Page View (Traditional)**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `page_view`
- **Event Parameters**:
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
  - `page_referrer` = `{{Referrer}}`
  - `page_hostname` = `{{Page Hostname}}`
  - `page_path` = `{{Page Path}}`
- **Trigger**: All Pages
- **Firing Priority**: 1

### **Tag 2: GA4 - Virtual Page View (SPA Navigation)**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `virtual_pageview`
- **Event Parameters**:
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
  - `page_referrer` = `{{DLV - history_old_url}}`
  - `page_hostname` = `{{Page Hostname}}`
  - `page_path` = `{{Page Path}}`
  - `change_type` = `{{DLV - change_type}}`
  - `navigation_type` = `{{DLV - navigation_type}}`
  - `history_old_url` = `{{DLV - history_old_url}}`
  - `history_new_url` = `{{DLV - history_new_url}}`
- **Trigger**: History Change Trigger
- **Firing Priority**: 1

### **Tag 3: GA4 - CTA Button Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `cta_button_click`
- **Event Parameters**:
  - `button_id` = `{{Click ID}}`
  - `button_text` = `{{Click Text}}`
  - `button_classes` = `{{Click Classes}}`
  - `button_href` = `{{Click URL}}`
  - `button_target` = `{{Click Target}}`
  - `button_type` = `{{Click Element}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: CTA Button Click Trigger
- **Firing Priority**: 1

### **Tag 4: GA4 - Form Submission**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_submit`
- **Event Parameters**:
  - `form_id` = `{{DLV - form_id}}`
  - `form_action` = `{{DLV - form_action}}`
  - `form_method` = `{{DLV - form_method}}`
  - `form_name` = `{{DLV - form_name}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Form Submission Trigger
- **Firing Priority**: 1

### **Tag 5: GA4 - Form Start**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_start`
- **Event Parameters**:
  - `form_id` = `{{DLV - form_id}}`
  - `form_action` = `{{DLV - form_action}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Form Start Trigger
- **Firing Priority**: 1

### **Tag 6: GA4 - Outbound Link Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `outbound_link_click`
- **Event Parameters**:
  - `link_url` = `{{Click URL}}`
  - `link_text` = `{{Click Text}}`
  - `link_target` = `{{Click Target}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Outbound Link Click Trigger
- **Firing Priority**: 1

### **Tag 7: GA4 - Video Interaction**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `video_interaction`
- **Event Parameters**:
  - `video_element` = `{{DLV - video_element}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Video Interaction Trigger
- **Firing Priority**: 1

### **Tag 8: GA4 - Scroll Depth**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `scroll_depth`
- **Event Parameters**:
  - `scroll_depth` = `{{DLV - scroll_depth}}`
  - `scroll_percentage` = `{{DLV - scroll_percentage}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Scroll Depth Trigger
- **Firing Priority**: 1

### **Tag 9: GA4 - Time on Page**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `time_on_page`
- **Event Parameters**:
  - `time_on_page` = `{{DLV - time_on_page}}`
  - `time_on_page_seconds` = `{{DLV - time_on_page_seconds}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Time on Page Trigger
- **Firing Priority**: 1

### **Tag 10: GA4 - Page Exit**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `page_exit`
- **Event Parameters**:
  - `time_on_page` = `{{DLV - time_on_page}}`
  - `max_scroll_depth` = `{{DLV - max_scroll_depth}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: Page Exit Trigger
- **Firing Priority**: 1

### **Tag 11: GA4 - User Engagement**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `user_engagement`
- **Event Parameters**:
  - `user_agent` = `{{User Agent}}`
  - `screen_resolution` = `{{Screen Resolution}}`
  - `viewport_size` = `{{Viewport Size}}`
  - `language` = `{{DLV - language}}`
  - `timezone` = `{{DLV - timezone}}`
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
- **Trigger**: User Engagement Trigger
- **Firing Priority**: 1

---

## **⚙️ 5. Advanced Configuration**

### **Data Layer Push for Page Views**
```javascript
// This is automatically handled by the GTMSetup component
window.dataLayer.push({
  event: 'gtm.pageView',
  page_location: 'https://example.com/page',
  page_title: 'Page Title',
  page_referrer: 'https://example.com/previous',
  page_hostname: 'example.com',
  page_path: '/page',
  timestamp: 1234567890
});
```

### **Data Layer Push for History Changes**
```javascript
// This is automatically handled by the GTMSetup component
window.dataLayer.push({
  event: 'gtm.historyChange',
  event_category: 'navigation',
  event_label: 'pushState',
  page_location: 'https://example.com/new-page',
  page_referrer: 'https://example.com/old-page',
  page_title: 'New Page Title',
  history_old_url: 'https://example.com/old-page',
  history_new_url: 'https://example.com/new-page',
  change_type: 'pushState',
  navigation_type: 'virtual_pageview',
  timestamp: 1234567890
});
```

### **Data Layer Push for CTA Clicks**
```javascript
// This is automatically handled by the GTMSetup component
// First, populate GTM's built-in Click Variables
window.dataLayer.push({
  event: 'gtm.click',
  gtm: {
    element: button,
    elementId: 'book-demo-btn',
    elementClasses: 'btn btn-primary cta',
    elementText: 'Book Demo',
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
  button_id: 'book-demo-btn',
  button_text: 'Book Demo',
  button_classes: 'btn btn-primary cta',
  page_location: 'https://example.com/contact',
  timestamp: 1234567890
});
```

### **Data Layer Push for Scroll Depth**
```javascript
// This is automatically handled by the GTMSetup component
window.dataLayer.push({
  event: 'gtm.scrollDepth',
  event_category: 'engagement',
  event_label: 'scroll_75%',
  scroll_depth: 75,
  scroll_percentage: 78,
  page_location: 'https://example.com/page',
  timestamp: 1234567890
});
```

### **Data Layer Push for Time on Page**
```javascript
// This is automatically handled by the GTMSetup component
window.dataLayer.push({
  event: 'gtm.timeOnPage',
  event_category: 'engagement',
  event_label: 'time_60s',
  time_on_page: 60,
  time_on_page_seconds: 65,
  page_location: 'https://example.com/page',
  timestamp: 1234567890
});
```

---

## **🧪 6. Testing Instructions**

### **Step 1: Enable GTM Preview Mode**
1. Go to GTM Container (GTM-P6XXV5G9)
2. Click "Preview" button
3. Enter your website URL: `adsmagnifyacademy.com`
4. Click "Start Tag Assistant"

### **Step 2: Test Page View Tracking**
1. **Initial Page Load**: Check for `gtm.pageView` event
2. **Verify Parameters**: Page URL, Title, Referrer, Hostname, Path
3. **Check GA4**: Should fire `page_view` event

### **Step 3: Test History Change Tracking (Virtual Pageviews)**
1. Navigate between pages (Home → Courses → Contact)
2. Use browser back/forward buttons
3. Check GTM Preview mode for:
   - `gtm.historyChange` events
   - Proper URL and title data
   - 1-second delay implementation
   - History old/new URL data
4. **Check GA4**: Should fire `virtual_pageview` events

### **Step 4: Test CTA Button Tracking**
1. Click any CTA button (Book Demo, Get Started, etc.)
2. Check GTM Preview mode for:
   - `gtm.ctaClick` events
   - **Click ID, Text, Classes should show values (not undefined)**
   - Button href and target data
3. **Check GA4**: Should fire `cta_button_click` events

### **Step 4: Test Form Tracking**
1. **Form Start**: Click in any form field
2. **Form Submit**: Submit the contact form
3. Check GTM Preview mode for:
   - `gtm.formStart` events
   - `gtm.formSubmit` events
   - Form ID, action, method data
4. **Check GA4**: Should fire `form_start` and `form_submit` events

### **Step 5: Test Scroll Depth Tracking**
1. Scroll down the page gradually
2. Check GTM Preview mode for:
   - `gtm.scrollDepth` events at 25%, 50%, 75%, 90%, 100%
   - Scroll depth and percentage data
4. **Check GA4**: Should fire `scroll_depth` events

### **Step 6: Test Time on Page Tracking**
1. Stay on a page for different durations
2. Check GTM Preview mode for:
   - `gtm.timeOnPage` events at 10s, 30s, 60s, 120s, 300s, 600s
   - Time on page data
3. **Navigate away**: Check for `gtm.pageExit` event
4. **Check GA4**: Should fire `time_on_page` and `page_exit` events

### **Step 7: Test Outbound Links**
1. Click any external link
2. Check GTM Preview mode for:
   - `gtm.outboundLinkClick` events
   - Link URL, text, and target data
4. **Check GA4**: Should fire `outbound_link_click` events

### **Step 8: Test Video Interactions**
1. Click on any video element
2. Check GTM Preview mode for:
   - `gtm.videoInteraction` events
   - Video element data
4. **Check GA4**: Should fire `video_interaction` events

---

## **📊 7. Expected Data in GA4**

### **Page View Events**
- **Traditional**: `page_view` with full page data
- **Virtual**: `virtual_pageview` with navigation data

### **CTA Click Events**
- Event: `cta_button_click`
- Parameters: `button_id`, `button_text`, `button_classes`, `button_href`, `button_target`

### **Form Events**
- **Start**: `form_start` with form identification
- **Submit**: `form_submit` with form completion data

### **Engagement Events**
- **Scroll**: `scroll_depth` with scroll percentage
- **Time**: `time_on_page` with duration data
- **Exit**: `page_exit` with final metrics

### **Navigation Events**
- **Outbound**: `outbound_link_click` with link data
- **Video**: `video_interaction` with video data

---

## **💡 8. Best Practices for SPA Tracking**

### **Page View Strategy**
- **Traditional Loads**: Use `gtm.pageView` for full page reloads
- **SPA Navigation**: Use `gtm.historyChange` for virtual pageviews
- **No Duplicates**: Ensure only one page view event per URL change

### **Event Timing**
- **1-Second Delay**: Prevents multiple rapid fires for history changes
- **Scroll Debouncing**: 100ms delay for scroll events
- **Time Milestones**: Track engagement at meaningful intervals

### **Data Consistency**
- **Built-in Variables**: Always use GTM's native Click Variables
- **Custom Variables**: Supplement with additional data
- **Fallback Values**: Provide defaults for missing data

### **Performance Optimization**
- **Event Debouncing**: Prevent excessive dataLayer pushes
- **Memory Management**: Clear timeouts and intervals properly
- **Passive Listeners**: Use passive scroll listeners for performance

---

## **🔍 9. Troubleshooting**

### **Common Issues**
1. **Click Variables Undefined**: Enable built-in Click Variables in GTM
2. **Events Not Firing**: Check GTM Preview mode and browser console
3. **Missing Data**: Verify dataLayer variables are properly set
4. **Multiple Fires**: Check debouncing implementation
5. **SSR Issues**: Ensure client-side only execution

### **Debug Steps**
1. Open browser console
2. Check `window.dataLayer` for events
3. Verify GTM Preview mode shows events
4. Check GA4 Real-time reports
5. **Verify all built-in variables are enabled in GTM**

---

## **📈 10. Analytics Dashboard Setup**

### **GA4 Custom Reports**
1. **Navigation Analysis**: Track virtual vs. real pageviews
2. **CTA Performance**: Monitor button click rates and conversions
3. **User Journey**: Analyze navigation patterns and drop-offs
4. **Form Analytics**: Track form completion rates and fields
5. **Engagement Metrics**: Monitor scroll depth and time on page
6. **Exit Analysis**: Understand user departure patterns

### **GTM Debugging**
1. **Preview Mode**: Always test in preview before publishing
2. **Version Control**: Use GTM versions for rollbacks
3. **Testing**: Test on multiple devices and browsers
4. **Documentation**: Keep container setup documentation updated

---

## **✅ Implementation Checklist**

- [ ] **CRITICAL: Enable all required built-in variables (especially Click Variables)**
- [ ] Create custom variables for enhanced tracking
- [ ] Set up History Change Trigger with 1-second delay
- [ ] Configure CTA Button Click Trigger
- [ ] Set up Form Start and Submit Triggers
- [ ] Configure Scroll Depth and Time on Page Triggers
- [ ] Create GA4 event tags for all triggers
- [ ] Test in GTM Preview mode
- [ ] **Verify Click Variables are no longer undefined**
- [ ] Test all tracking scenarios (navigation, clicks, forms, scroll, time)
- [ ] Verify data in GA4 Real-time reports
- [ ] Publish GTM container
- [ ] Monitor tracking accuracy
- [ ] Set up custom GA4 reports

---

## **🚨 CRITICAL FIXES IMPLEMENTED**

### **1. Built-in Click Variables**
- **Problem**: Click ID, Text, Classes were showing as undefined
- **Solution**: Enable built-in Click Variables in GTM Variables section
- **Result**: All click data now properly captured

### **2. Event Order**
- **Problem**: Custom events firing before Click Variables populated
- **Solution**: Push `gtm.click` event first, then custom events
- **Result**: Proper data flow and variable population

### **3. Comprehensive Tracking**
- **Added**: Scroll depth, time on page, form start, video interactions
- **Enhanced**: Page view tracking for both traditional and SPA navigation
- **Result**: Complete user journey and engagement tracking

---

**🎯 This setup provides enterprise-level GTM tracking for your SPA website with proper virtual pageview handling, comprehensive click tracking, engagement metrics, and enhanced analytics capabilities. All undefined Click Variables issues have been resolved!**
