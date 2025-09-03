# 🎯 GTM Virtual Pageview Setup Guide

## **📋 Overview**
This guide sets up GTM to capture and display the `virtualPageview` event that fires on every SPA navigation/route change with the structure:
```javascript
{
  event: 'virtualPageview',
  pagePath: window.location.pathname,
  pageTitle: document.title
}
```

---

## **🔧 1. GTM Built-in Variables (Enable These)**

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

---

## **🎯 2. Custom Variables for Virtual Pageview**

### **Variable 1: Virtual Pageview Path**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `pagePath`
- **Default Value**: `{{Page Path}}`

### **Variable 2: Virtual Pageview Title**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `pageTitle`
- **Default Value**: `{{Page Title}}`

### **Variable 3: Previous Path**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `previous_path`
- **Default Value**: `unknown`

### **Variable 4: Previous Title**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `previous_title`
- **Default Value**: `unknown`

### **Variable 5: Navigation Type**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `navigation_type`
- **Default Value**: `unknown`

---

## **🚀 3. Triggers**

### **Trigger 1: Virtual Pageview Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `virtualPageview`
- **Fire On**: All Custom Events

### **Trigger 2: CTA Button Click Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.ctaClick`
- **Fire On**: All Custom Events

### **Trigger 3: Form Submission Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.formSubmit`
- **Fire On**: All Custom Events

---

## **🏷️ 4. Tags**

### **Tag 1: GA4 - Virtual Pageview (SPA Navigation)**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `virtual_pageview`
- **Event Parameters**:
  - `page_path` = `{{DLV - pagePath}}`
  - `page_title` = `{{DLV - pageTitle}}`
  - `page_location` = `{{Page URL}}`
  - `page_hostname` = `{{Page Hostname}}`
  - `page_referrer` = `{{Referrer}}`
  - `previous_path` = `{{DLV - previous_path}}`
  - `previous_title` = `{{DLV - previous_title}}`
  - `navigation_type` = `{{DLV - navigation_type}}`
- **Trigger**: Virtual Pageview Trigger
- **Firing Priority**: 1

### **Tag 2: GA4 - CTA Button Click**
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

### **Tag 3: GA4 - Form Submission**
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

---

## **⚙️ 5. Data Layer Structure**

### **Virtual Pageview Event**
```javascript
// This is automatically pushed by the GTMSetup component
window.dataLayer.push({
  event: 'virtualPageview',
  pagePath: '/courses',                    // Current page path
  pageTitle: 'Digital Marketing Courses',  // Current page title
  page_location: 'https://example.com/courses',
  page_hostname: 'example.com',
  page_referrer: 'https://example.com/',
  previous_path: '/',
  previous_title: 'Home',
  timestamp: 1234567890,
  navigation_type: 'spa_route_change'
});
```

### **CTA Click Event**
```javascript
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
  timestamp: Date.now()
});
```

---

## **🧪 6. Testing Instructions**

### **Step 1: Enable GTM Preview Mode**
1. Go to GTM Container (GTM-P6XXV5G9)
2. Click "Preview" button
3. Enter your website URL: `adsmagnifyacademy.com`
4. Click "Start Tag Assistant"

### **Step 2: Test Virtual Pageview Tracking**
1. **Initial Page Load**: Check for `gtm.pageView` event
2. **Navigate to Courses Page**: Click on Courses link
3. **Check GTM Preview mode for**:
   - `virtualPageview` event
   - `pagePath` should show `/courses`
   - `pageTitle` should show "Digital Marketing Courses"
   - `previous_path` should show `/`
   - `previous_title` should show "Home"

### **Step 3: Test CTA Button Tracking**
1. Click any CTA button (Book Demo, Get Started, etc.)
2. Check GTM Preview mode for:
   - `gtm.ctaClick` events
   - **Click ID, Text, Classes should show values (not undefined)**
   - Button href and target data

### **Step 4: Test Form Tracking**
1. Submit the contact form
2. Check GTM Preview mode for:
   - `gtm.formSubmit` events
   - Form ID, action, method data

---

## **📊 7. Expected Data in Tag Assistant**

### **Virtual Pageview Events**
- **Event**: `virtualPageview`
- **Page Path**: `/courses`, `/contact`, `/about`, etc.
- **Page Title**: "Digital Marketing Courses", "Contact Us", "About Us", etc.
- **Previous Path**: Shows where user came from
- **Previous Title**: Shows previous page title
- **Navigation Type**: `spa_route_change`

### **CTA Click Events**
- **Event**: `gtm.ctaClick`
- **Button ID**: `book-demo-btn`, `get-started-btn`, etc.
- **Button Text**: "Book Demo", "Get Started", etc.
- **Button Classes**: `btn btn-primary cta`
- **Page Location**: Current page URL
- **Page Title**: Current page title

### **Form Submission Events**
- **Event**: `gtm.formSubmit`
- **Form ID**: `contact-form`
- **Form Action**: `/submit`
- **Form Method**: `POST`
- **Page Location**: Current page URL
- **Page Title**: Current page title

---

## **💡 8. Key Features**

### **Automatic Virtual Pageview Tracking**
- ✅ **pushState**: Tracks programmatic navigation
- ✅ **replaceState**: Tracks URL replacements
- ✅ **popstate**: Tracks browser back/forward
- ✅ **hashchange**: Tracks hash-based navigation
- ✅ **Title Changes**: Tracks dynamic title updates

### **Smart Debouncing**
- ✅ **100ms Delay**: Ensures title is set before tracking
- ✅ **Change Detection**: Only fires when path or title actually changes
- ✅ **No Duplicates**: Prevents multiple events for same navigation

### **Rich Data Capture**
- ✅ **Current Path**: `pagePath` variable
- ✅ **Current Title**: `pageTitle` variable
- ✅ **Previous Path**: `previous_path` variable
- ✅ **Previous Title**: `previous_title` variable
- ✅ **Navigation Type**: `spa_route_change`
- ✅ **Timestamp**: Exact time of navigation

---

## **🔍 9. Troubleshooting**

### **Common Issues**
1. **Virtual Pageview Not Firing**: Check if GTM is loaded and dataLayer exists
2. **Page Path Undefined**: Verify `pagePath` variable is created in GTM
3. **Page Title Undefined**: Verify `pageTitle` variable is created in GTM
4. **Events Not Showing in Tag Assistant**: Check trigger configuration

### **Debug Steps**
1. Open browser console
2. Check `window.dataLayer` for `virtualPageview` events
3. Verify GTM Preview mode shows events
4. Check variable values in Tag Assistant
5. **Verify all built-in variables are enabled in GTM**

---

## **✅ Implementation Checklist**

- [ ] **CRITICAL: Enable all required built-in variables**
- [ ] Create custom variables: `pagePath`, `pageTitle`, `previous_path`, `previous_title`, `navigation_type`
- [ ] Set up Virtual Pageview Trigger for `virtualPageview` event
- [ ] Configure CTA Button Click Trigger for `gtm.ctaClick` event
- [ ] Set up Form Submission Trigger for `gtm.formSubmit` event
- [ ] Create GA4 event tags for all triggers
- [ ] Test in GTM Preview mode
- [ ] **Verify pagePath and pageTitle show correct values in Tag Assistant**
- [ ] Test navigation between pages
- [ ] Verify data in GA4 Real-time reports
- [ ] Publish GTM container

---

## **🚨 CRITICAL IMPLEMENTATION NOTES**

### **1. Event Structure**
The `virtualPageview` event is pushed with exactly the structure you requested:
```javascript
{
  event: 'virtualPageview',
  pagePath: window.location.pathname,
  pageTitle: document.title
}
```

### **2. Timing**
- **50ms delay** after navigation to ensure title is set
- **100ms debouncing** to prevent multiple rapid fires
- **Title observer** to catch dynamic title changes

### **3. Data Display in Tag Assistant**
- **Page Path**: Shows current page path (e.g., `/courses`)
- **Page Title**: Shows current page title (e.g., "Digital Marketing Courses")
- **Previous Path**: Shows where user came from
- **Previous Title**: Shows previous page title

---

**🎯 This setup provides precise virtual pageview tracking for your SPA website with the exact event structure you requested. The `pagePath` and `pageTitle` will be clearly visible in Tag Assistant, making it easy to verify navigation tracking!**
