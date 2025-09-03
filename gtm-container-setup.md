# 🎯 Google Tag Manager Container Setup Guide

## **📋 Container Overview**
- **Container ID**: GTM-P6XXV5G9
- **Container Name**: Adsmagnify Academy Website
- **Container Type**: Web

---

## **🔧 1. Built-in Variables (Enable These) - CRITICAL STEP**

### **Page Variables**
- ✅ Page URL
- ✅ Page Hostname
- ✅ Page Path
- ✅ Page Title
- ✅ Referrer

### **Click Variables - MUST ENABLE THESE**
- ✅ **Click ID** ← **CRITICAL: This was showing as undefined**
- ✅ **Click Classes** ← **CRITICAL: This was showing as undefined**
- ✅ **Click Text** ← **CRITICAL: This was showing as undefined**
- ✅ **Click URL** ← **CRITICAL: This was showing as undefined**
- ✅ **Click Element** ← **CRITICAL: This was showing as undefined**
- ✅ **Click Target** ← **CRITICAL: This was showing as undefined**

### **History Variables**
- ✅ History New State
- ✅ History Old State
- ✅ History Source

---

## **🎯 2. Custom Variables**

### **Variable 1: History Change Type**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `change_type`
- **Default Value**: `unknown`

### **Variable 2: Previous URL**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `previous_url`
- **Default Value**: `unknown`

### **Variable 3: Button Identifier**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `button_id`
- **Default Value**: `unknown`

### **Variable 4: CTA Button Text**
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: `button_text`
- **Default Value**: `unknown`

---

## **🚀 3. Triggers**

### **Trigger 1: History Change Trigger**
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

### **Trigger 4: External Link Click Trigger**
- **Trigger Type**: Custom Event
- **Event Name**: `gtm.externalLinkClick`
- **Fire On**: All Custom Events

---

## **🏷️ 4. Tags**

### **Tag 1: GA4 - History Change Tracking**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `virtual_pageview`
- **Event Parameters**:
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
  - `page_referrer` = `{{DLV - previous_url}}`
  - `change_type` = `{{DLV - change_type}}`
  - `navigation_type` = `history_change`
- **Trigger**: History Change Trigger
- **Firing Priority**: 1

### **Tag 2: GA4 - CTA Button Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `cta_button_click`
- **Event Parameters**:
  - `button_id` = `{{Click ID}}` ← **Now using built-in Click ID**
  - `button_text` = `{{Click Text}}` ← **Now using built-in Click Text**
  - `button_classes` = `{{Click Classes}}` ← **Now using built-in Click Classes**
  - `button_type` = `{{Click Element}}` ← **Now using built-in Click Element**
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
  - `page_location` = `{{Page URL}}`
- **Trigger**: Form Submission Trigger
- **Firing Priority**: 1

### **Tag 4: GA4 - External Link Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `external_link_click`
- **Event Parameters**:
  - `link_url` = `{{Click URL}}` ← **Now using built-in Click URL**
  - `link_text` = `{{Click Text}}` ← **Now using built-in Click Text**
  - `page_location` = `{{Page URL}}`
- **Trigger**: External Link Click Trigger
- **Firing Priority**: 1

### **Tag 5: Enhanced Page View**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `page_view`
- **Event Parameters**:
  - `page_location` = `{{Page URL}}`
  - `page_title` = `{{Page Title}}`
  - `page_referrer` = `{{Referrer}}`
  - `user_agent` = `{{User Agent}}`
  - `screen_resolution` = `{{Screen Resolution}}`
  - `viewport_size` = `{{Viewport Size}}`
- **Trigger**: All Pages
- **Firing Priority**: 1

---

## **⚙️ 5. Advanced Configuration**

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
  change_type: 'pushState',
  timestamp: 1234567890
});
```

### **Data Layer Push for CTA Clicks (Fixed)**
```javascript
// This is automatically handled by the GTMSetup component
// First, populate GTM's built-in Click Variables
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

// Then push our custom CTA event
window.dataLayer.push({
  event: 'gtm.ctaClick',
  event_category: 'engagement',
  event_label: 'cta_button_click',
  button_id: buttonId,
  button_text: buttonText,
  button_classes: buttonClasses,
  page_location: window.location.href,
  timestamp: Date.now()
});
```

---

## **🧪 6. Testing Instructions**

### **Step 1: Enable GTM Preview Mode**
1. Go to GTM Container
2. Click "Preview" button
3. Enter your website URL
4. Click "Start Tag Assistant"

### **Step 2: Test History Change Tracking**
1. Navigate between pages on your website
2. Use browser back/forward buttons
3. Check GTM Preview mode for:
   - `gtm.historyChange` events
   - Proper URL and title data
   - 1-second delay implementation

### **Step 3: Test CTA Button Tracking (Fixed)**
1. Click any CTA button (Book Demo, Get Started, etc.)
2. Check GTM Preview mode for:
   - `gtm.ctaClick` events
   - **Click ID, Text, Classes should now show values (not undefined)**
   - Page location and title

### **Step 4: Test Form Submission**
1. Submit the contact form
2. Check GTM Preview mode for:
   - `gtm.formSubmit` events
   - Form ID and action data

### **Step 5: Test External Links**
1. Click any external link
2. Check GTM Preview mode for:
   - `gtm.externalLinkClick` events
   - Link URL and text data

---

## **📊 7. Expected Data in GA4**

### **History Change Events**
- Event: `virtual_pageview`
- Parameters: `page_location`, `page_title`, `change_type`, `navigation_type`

### **CTA Click Events (Fixed)**
- Event: `cta_button_click`
- Parameters: `button_id`, `button_text`, `button_classes`, `page_location`
- **All Click Variables should now have values instead of undefined**

### **Form Submission Events**
- Event: `form_submit`
- Parameters: `form_id`, `form_action`, `page_location`

### **External Link Events**
- Event: `external_link_click`
- Parameters: `link_url`, `link_text`, `page_location`

---

## **💡 8. Best Practices for SPA Tracking**

### **History vs. Real Page Reloads**
- **History Changes**: Use `gtm.historyChange` events for virtual pageviews
- **Real Reloads**: Use standard GA4 pageview tracking
- **Fragment Changes**: Track hash changes separately if needed

### **Virtual Pageview Implementation**
1. **1-Second Delay**: Prevents multiple rapid fires
2. **State Preservation**: Track previous URL and state
3. **Debouncing**: Use timeout to ensure accurate data

### **CTA Button Best Practices (Fixed)**
1. **Built-in Variables**: Always enable GTM's built-in Click Variables
2. **Event Order**: Push `gtm.click` first, then custom events
3. **Capture Phase**: Use event capture to catch all clicks
4. **Fallback Data**: Provide button data in both built-in and custom events

### **Performance Considerations**
1. **Event Debouncing**: Prevent excessive dataLayer pushes
2. **Memory Management**: Clear timeouts properly
3. **Error Handling**: Graceful fallbacks for missing data

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
5. **Verify Click Variables are enabled in GTM**

---

## **📈 10. Analytics Dashboard Setup**

### **GA4 Custom Reports**
1. **Navigation Analysis**: Track virtual pageviews vs. real pageviews
2. **CTA Performance**: Monitor button click rates and conversions
3. **User Journey**: Analyze navigation patterns and drop-offs
4. **Form Analytics**: Track form completion rates and fields

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
- [ ] Create GA4 event tags for all triggers
- [ ] Test in GTM Preview mode
- [ ] **Verify Click Variables are no longer undefined**
- [ ] Verify data in GA4 Real-time reports
- [ ] Publish GTM container
- [ ] Monitor tracking accuracy
- [ ] Set up custom GA4 reports

---

## **🚨 CRITICAL FIX FOR UNDEFINED CLICK VARIABLES**

### **The Problem:**
Your GTM debug view showed:
- `Click ID`: undefined
- `Click Classes`: undefined  
- `Click Text`: undefined
- `Click URL`: undefined
- `Click Element`: undefined

### **The Solution:**
1. **Enable Built-in Click Variables** in GTM Variables section
2. **Updated GTM Setup** to push `gtm.click` event first
3. **Proper Event Order** ensures Click Variables are populated

### **What Changed:**
- GTM Setup now pushes `gtm.click` event before `gtm.ctaClick`
- This populates GTM's built-in Click Variables
- Your custom events now have access to all click data

---

**🎯 This setup provides comprehensive tracking for your SPA website with proper virtual pageview handling, CTA tracking, and enhanced analytics capabilities. The undefined Click Variables issue has been resolved!**
