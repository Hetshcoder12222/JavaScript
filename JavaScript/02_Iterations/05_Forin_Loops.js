// 1. Object in Forin Loop
const Value1 = {
    CodingLanguages: ["JavaScript", "HTML", "CSS", "C", "C++", "Java", "Ruby", "Red", "Python"],
    MicrosoftOffice: ["Excel", "Word", "Powerpoint", "Onenote", "Outlook", "Access", "Onedrive"],
    Browsers:        ["       Google Chrome", "Microsoft Edge", "Brave", "Safari", "Mozilla Firefox", "Opera", "Internet Explorer", "Samsung Internet"],
    AI:              ["             ChatGPT", "Claude", "AITOPIA", "Deepseek", "Grok", "Gemini", "Hypergro", "Microsoft Copilot", "GitHub Copilot", "Perplexity", "Llama", "Meta AI"],
    OperatingSystem: ["Windows", "MacOS", "Linux", "Unix", "Android", "ChromeOS", "IOS", "Ubuntu", "FreeBSD", "WebOS", "OpenBSD", "Slackel", "Blackberry"]
}

for (const Value2 in Value1) {
    console.log(`${Value2}: ${Value1[Value2]}`);
}

// 2. Array in a Forin Loop
/*
const CodingLanguages = ["JavaScript", "HTML", "CSS", "C", "C++", "Java", "Ruby", "Red", "Python"]
const MicrosoftOffice = ["Excel", "Word", "Powerpoint", "Onenote", "Outlook", "Access", "Onedrive"]
const Browsers =["Google Chrome", "Microsoft Edge", "Brave", "Safari", "Mozilla Firefox", "Opera", "Internet Explorer", "Samsung Internet"]
const AI = ["ChatGPT", "Claude", "AITOPIA", "Deepseek", "Grok", "Gemini", "Hypergro", "Microsoft Copilot", "GitHub Copilot", "Perplexity", "Llama", "Meta AI"]
const OperatingSystem = ["Windows", "MacOS", "Linux", "Unix", "Android", "ChromeOS", "IOS", "Ubuntu", "FreeBSD", "WebOS", "OpenBSD", "Slackel", "Blackberry"]
for (const Value3 in CodingLanguages) {
    console.log(`${Value3}: ${Value3[CodingLanguages]}`)
}
*/

// 3. Map in a Forin loop
/*
const Value3 = new Map()
Value1.set('1.', "India")
Value1.set('2.', "Nepal")
Value1.set('3.', "Russia")
Value1.set('4.', "Israel")
Value1.set('5.', "Japan")
Value1.set('6.', "United States of America")
Value1.set('7.', "United Kingdom")
console.log(Value3);
for (const Value4 in Value3) {
    console.log(Value4);
}
*/