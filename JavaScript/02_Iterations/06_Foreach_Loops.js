/*
const CodingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Markdown", "Java", "C", "C++", "Malbolge", "TypeScript", "EcmaScript"]
CodingLanguages.forEach(function (Value1) {
    console.log("Coding Language:");
    console.log(`   ${Value1}`);
});
*/

// 2. A.F in a Foreach Loop
/*
const CodingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Markdown", "Java", "C", "C++", "Malbolge", "TypeScript", "EcmaScript"]
CodingLanguages.forEach((Value1) => {
console.log("Coding Language:");
console.log(`   ${Value1}`);
});
*/

// 3. Direct function
   const CodingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Markdown", "Java", "C", "C++", "Malbolge", "TypeScript", "EcmaScript"]
// function Value2(Value3) {
//     console.log(Value3);
// }
// CodingLanguages.forEach(Value2);

// 4. Multiple Values
// CodingLanguages.forEach((Value4, Value5, Value6) => {
//     console.log(Value4, Value5, Value6);
// });

const CodingLanguages2 = [
    {
        "HTML": {
            Format: ".html"
        }
    },
    {
        "CSS": {
            Format: ".css"
        }
    },
    {
        "JavaScript": {
            Format: ".js"
        }
    },
    {
        "Python": {
            Format: ".pyt"
        }
    },
    {
        "Markdown": {
            Format: ".md"
        }
    },
    {
        "Java": {
            Format: ".java"
        }
    },
    {
        "C": {
            Format: ".c"
        }
    },
    {
        "C++": {
            Format: ".cpp"
        }
    },
    {
        "Malbolge": {
            Format: ".malbolge"
        }
    },
    {
        "TypeScript": {
            Format: ".ts"
        }
    },
    {
        "EcmaScript": {
            Format: ".es"
        }
    }
]

CodingLanguages2.forEach((Value8) => {
    console.log(Value8);
});