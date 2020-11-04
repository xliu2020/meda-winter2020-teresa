console.log("Hello there!");

let myFirstVarible = 10;
myFirstVarible;

var myFirstGloballyScopedVar = 11;

// for (var i= 0; i <10; i= i+1) {

//     setTimeout(function() {
//         console.log(i);
//     },2000);
// }

// for (let i= 0; i <10; i= i+1) {

//     setTimeout(function() {
//         console.log(i);
//     },3000);
// }

const masterKey = "http://www.somewebsite.com/data";

//masterKey = "http://www.malsomewebsite.com/data";

const january = 1;
const february = 2;
// const is good for one specific data for one variable

if (january === 3) {
    console.log("January is the 3rd month.");
} else if (january === 2) {
    console.log("January is the 2nd month");
} else {
    console.log("January is NOT the 3rd or 2nd month");
}

// else if  is used for ask another question on same data so it is easy to have bug like else was not printed out

if (february === 2) {}

// === means we are comparing data AND datatype.
// 1 == "1" this is TRUE
// 1 === "1" this is FALSE

while (false) {

}

do {

} while (false);

for (let i=0; true; i++) {

} 
//  for will run as loop

function myFunction(parameter1, parameter2) {

    console.log (argments[2]);
    console.log(parameter1);

    return "hello";
}

// myFunction(argument1, argument2, argument3);
myFunction("1", true, 400);

setTimeout(function(weNeedData) {
    console.log(weNeedData);
}, 1000);

// Arrow Function
setTimeout((weNeedData, param2) => {
    console.log(weNeedData);
    console.log();
},1000)

setTimeout(weNeedData => console.log(weNeedData),1000 );


// Type Coercion
// Is where JavaScript converts one datatype to another AUTOMATICALLY.
// 100 == "100" // The string will try to be converted to a number.

console.log(100 == "100"); //true
console.log(100 === "100"); //false

parseInt(); 
let userInput;

// Type Coercion into Booleans
//Falsys
0;
"";
undefined;
NaN; // Does not convert to a boolean, need to use isNaN() function.
null;

if (userInput) {
    console.log("This value is true.");
} else {
    console.log("This value is false.");
}



// Manual Type conversion
parseInt("100.100"); // takes the string argument, and converts it to a number; Becomes 100
parseFloat("100.100") // Becomes 100.1


january.toString(); // Takes number from variable or property and converts to a string.


//A <= a(uppercase's value is lower than lowercase)

// myArray.toString();

// Logical Operators and Comparison Operators

/*

==
===
>
<
>=
<=
!=
!==

*
/
+
-
%

=
++
--
+=
-=
*=
/=

&&
||
!

*/
if ("100" !== 100) {
    console.log("is true");
} else {
    console.log("is false");
}


// Objects and Arrays

let myArray = [1, 2, 3, 4];

myArray[3];
myArray[0] = 100;
myArray[17] = 9;
console.log(myArray.length);
myArray[10] = () => {console.log("goodbye")};

myArray[10]();

// add to end and beginning. need a value in argument.
myArray.push();
myArray.unshift();
//remove to end and beginning.
myArray.pop();
myArray.shift();



let myObject = {
    firstNum: "1",
    "second Num": 2,
    thirdNum: 3,
    fourthNum: 4
};

myObject.firstNum;
myObject["second Num"];
myObject.thirdNum = "three";

let myAssignedFunc = function () {};


let myObjectWithFunc = {
    funcName: () => {console.log("hello there")}
};

myObjectWithFunc.funcName();
Math.floor();
Math.random();






