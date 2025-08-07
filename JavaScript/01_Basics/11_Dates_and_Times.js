// 1.
let Value1 = new Date();
console.log(Value1);  // Output like: 2025-06-26T16:13:28.922Z
// (Unreadable)

// 2. .toString
let Value2  = new Date();
console.log(Value2.toString());  // Output like: Thu Jun 26 2025 21:43:28 GMT+0530 (India Standard Time)
// (Readable)

// 3. .toDateString
console.log(Value2.toDateString());  // Output like: Thu Jun 26 2025

// 4. toLocaleString
console.log(Value2.toLocaleString());  // Output like: 26/6/2025, 10:15:01 pm

// 5. typeof
console.log(typeof Value2);  // Output: object

// 6. Inserting a Date(toDateString)
let Value3 = new Date(2025, 2, 32)  // Tue Apr 01 2025
console.log(Value3.toDateString());

// 7. Inserting a Date(toLocaleString)
let Value4 = new Date(2025, 2, 32, 4, 56, 24, 96)  // 1/4/2025, 4:56:24 am
console.log(Value4.toLocaleString());

// 8. Inserting a String Date(MM : DD : YYYY)
let Value5 = new Date("2025-01-07")
console.log(Value5.toLocaleString());
                                // or
let Value6 = new Date("01-07-2025")
console.log(Value6.toLocaleString());

// 9.
let Value7 = Date.now()  // Output like: 1751003387503
console.log(Value7);

// 10. .getTime
// console.log(Value7.getTime());  // Not Allowed
console.log(Value6.getTime());

// Only works in String Date(MM : DD : YYYY)


// 10.1. Getting a time by Dividing
console.log((Date.now()/100/* Any */));  // Problems like .556
console.log((Math.floor(Date.now()/100/* Any */)));  // No Problems like .556

// 11. ".get" Elements
console.log(Value6.getDate());             // Date
console.log(Value6.getDay());              // Day
console.log(Value6.getFullYear());         // Year
console.log(Value6.getHours());            // Hour(s)
console.log(Value6.getMilliseconds());     // Millisecond(s)
console.log(Value6.getMinutes());          // Minute(s)
console.log(Value6.getMonth());            // Month
console.log(Value6.getMonth() + 1);            // Month(Better Version for Users)
console.log(Value6.getSeconds());          // Second(s)
console.log(Value6.getTime());             // Time
console.log(Value6.getTimezoneOffset());   // Time Zone
console.log(Value6.getUTCDate());          // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCDay());           // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCFullYear());      // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCHours());         // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCMilliseconds());  // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCMinutes());       // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCMonth());         // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
console.log(Value6.getUTCSeconds());       // Methods that retrieve date and time components based on Coordinated Universal Time (UTC), rather than local time
// console.log(Value6.getVarDate());       // Not Allowed

// 12. Customise / Apperance
let Value8 = new Date()
Value8.toLocaleString('default', {
    // calendar: 
    // dateStyle: 
    // day: 
    // dayPeriod: 
    // era: 
    // formatMatcher: 
    // fractionalSecondDigits: 
    // hour: 
    // hour12: 
    // hourCycle: 
    // localeMatcher: 
    // minute: 
    // month: 
    // numberingSystem: 
    // second: 
    // timestyle: 
    // timeZone: 
    // timeZoneName: 
    // weekday: 
    // year: 
})