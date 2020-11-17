// Loads up the Node FS module, so it can be used in this script.
const fs = require("fs");

// process.argv has the command line information that was used to run this script.
let arguments = process.argv;

// console.log(arguments);

let history;
//Check if we have an existing file called "history.txt"
if (fs.existsSync("history.txt")) {

     history =fs.readFileSync("history.txt");

} else {
    fs.writeFileSync("history.txt", "", "utf-8"); history= ""; 
}

let fileName = arguments[2];

// console.log (fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
   console.log("Sorry, nonexist file.")
    return;
}

// fs.existsSync(fileName);

// this method allows us to read a file. cannot count pdf 
let fileContents = fs.readFileSync(fileName, "utf-8");

// console.log(fileContents);


let contentArray = fileContents. split("");

//  console.log(contentArray);

let letterCount = 0;

// get rid of punctuation
for (let i = 0; i <contentArray.length; i++) {

    if (contentArray[i] ===" " || contentArray[i] ==="," || contentArray[i] ==="." || contentArray[i] ==="?" || contentArray[i] ==="!") {
        continue;
    } else {
        letterCount++;
    }
}

let firstSentence=`The file ${fileName} contains a total of  ${letterCount} letters.`;

console.log(firstSentence);

history = history + fileName + "\n\n";

//same as history = history + firstSentence;
history += "\n" + firstSentence;

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" ");

let secondSentence = `It has a total ${wordArray.length} words in it.`;

console.log (secondSentence);
history += "\n" + secondSentence;

// Count Words END

// Count Sentences START

let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] ==="!") {
        sentenceCount++;
    }
}

let thirdSentence =`It has a total of ${sentenceCount} sentences in it.`;
console.log(thirdSentence);
history += "\n" + thirdSentence +"\n\n";

console.log(" ");
console.log("statistics saved to the history");
fs.writeFileSync("history.txt", history, "utf-8");