const Value1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Value2 = Value1.filter( (V1) => V1 > 5 );
const Value3 = Value1.filter( (V2) => 6 > V2 );
console.log(Value2);
console.log(Value3);
console.log(typeof Value3);

// 1. Database
const Value4 = [
/*
    {
        Value: 3,
        content: "Country",
        biggestAreaCountry: "Rusia",
        smallestAreaCountry: "Vatican City",
        biggestPopulationCountry: "India",
        smallestPopulationCountry: "Vatican City"
    },
    {
        Value: 6,
        content: "Languages",
        hardestLanguage: undefined,
        easiestLanguage: "English"
    },
    {
        Value: 3,
        content: "Businesses of Coding",
        videoEditing: "Video Editing",
        designEditing: "UI / UX Design",
        design: "Graphic Design",
        webDesign: "Website Design",
        animation: "3D / 2D Animation",
        dev: "Full Stack Development",
        webDev: "Web Development",
        gamingDev: "Game Development",
        businessDev: "Entrepreneneurship & Business Development",
        marketing: "Digital Marketing",
        analytics: "Data Analytics",
        main: "Data Science",
        security: "Cyber Security",
        AI: "Artificial Inteligence & Machine Learning"
    },
    {
        Value: 4,
        content: "Devices",
        portable: "Laptop",
        nonPortable: "Computer",
        computerFirstPart: "Monitor",
        computerSecondPart: "Mouse",
        computerThirdPart: "Keyboard",
        computerFourthPart: "Central Processing Unit / C.P.U",
        smallest: "Mobile",
        biggest: undefined,
        biggestVersionOfSmallest: "Tablet",
        aloneHearingDevice1: "Headphone",
        aloneHearingDevice2: "Ear phones",
        loudHearingDevice1: "Microphone",
        loudHearingDevice2: "Speaker",
        movingDevice: "Joystick"
    },
    {
        Value: 1,
        content: "Coding Languages",
        stucture: "HTML",
        style: "CSS",
        engineOrFunctionality: "JavaScript",
        backendOrServerSide: "Python",
        linux1: "C",
        linux2: "C++",
        mobileOrDesktopApplication: "Java",
        markup: "Markdown"
    }
*/
    {
        BookName: "IAS",
        Genre: "Education",
        Published: 1985,
        Edition: 2021
    },
    {
        BookName: "Rich dad, Poor dad",
        Genre: "Mindset",
        Published: 2007,
        Edition: 2007
    },
    {
        BookName: "The power of Positive Thinking",
        Genre: "Mindset",
        Published: 2019,
        Edition: 2021
    },
    {
        BookName: "Python",
        Genre: "Coding",
        Published: 1979,
        Edition: 2025
    },
    {
        BookName: "Maths is easy!",
        Genre: "Education",
        Published: 1981,
        Edition: 2022
    },
    {
        BookName: "Java time!",
        Genre: "Coding",
        Published: 1995,
        Edition: 2010
    },
    {
        BookName: "Java time2!",
        Genre: "Coding",
        Published: 1997,
        Edition: 2012
    },
    {
        BookName: "Time is Priceless",
        Genre: "Mindset",
        Published: 1986,
        Edition: 2000
    },
    {
        BookName: "Grammer boy",
        Genre: "Education",
        Published: 2007,
        Edition: 2025
    },
    {
        BookName: "One Piece",
        Genre: "Comic",
        Published: 2016,
        Edition: 2016
    },
    {
        BookName: "Shinchan",
        Genre: "Comic",
        Published: 2013,
        Edition: 2013
    },
    {
        BookName: "Science and History",
        Genre: "Education",
        Published: 2018,
        Edition: 2020
    },
    {
        BookName: "Bad boys!",
        Genre: "Comic",
        Published: 1997,
        Edition: 2001
    },
    {
        BookName: "21st century Environmental Studies",
        Genre: "Education",
        Published: 2019,
        Edition: 2023
    },
    {
        BookName: "Beast boy",
        Genre: "Comic",
        Published: 1994,
        Edition: 2000
    },
    {
        BookName: "General Knowledge",
        Genre: "Education",
        Published: 1976,
        Edition: 2025
    }
]

// 1.1. Print Books that has Genre: "Education"
const Value5 = Value4.filter( (Books1) => {
    console.log(Books1.Genre == "Education" ? Books1 : "");
} );
console.log(Value5);
console.log("————————————————————————————————");

// 1.2. Print Books that is published after 1999
const Value6 = Value4.filter( (Books2) => {
    console.log(Books2.Published >= 2000 ? Books2 : "");
} );
console.log("————————————————————————————————");

// 1.3. Print Books that is published after 1999 and Genre would be: "Comic"
const Value7 = Value4.filter( (Books3) => {
    console.log(Books3.Published >= 2000 && Books3.Genre === "Comic" ? Books3 : "");
} );