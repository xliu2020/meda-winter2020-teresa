// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //let is a statement that allows me to declare variable with the name of "product", and define the value of "product" as the product of "option" and "option2" values that was input on "myFunction" function.
    let product = option * option2;

    //This is a method to output the "product" value to the web sonsole."console" is a object that provides access to the browser's console and "log" is the method of "console".
    console.log(product);

    //This is a method to output a message with the string '"The value of the option parameter is "' and the value of "option" to the browser'c console.
    console.log("The value of the option parameter is " + option);

    //This is a if statement to compare the data of "option" with the number "0" on their datatype and value to see if they are absolutely equal. 
    if (option === 0) {
        
        //If both datatype and value match, return the string '"Everything is good!"'. 
        return "Everything is good!";
    //If either datatype or value is not match the number "0", then "option" date will move on to compare their datatype and value with number "1" to see if they are absolutely equal.  
    } else if (option === 1) {
        
        //If both datatype and value match, return the string '"An error happened!"'.
        return "An error happened!";
    //If either datatype or value is not match the number "1", then "option" date will move on to compare their datatype and value with number "-1" to see if they are absolutely equal.  
    } else if (option === -1) {
        
        //If both datatype and value match, return the string '"Everything is bad!"'.
        return "Everything is bad!";
    }

}

// This is a let statement to define the variable "result" as the value from the result of the function "myFunction" with datas "1" and "11" being passed to the parameters "option" and "option2" 
let result = myFunction(1, 11);
//This is a let statement to define the variable "result2" as the value from the result of the function "myFunction" with datas "2" and "200" being passed to the parameters "option" and "option2" 
let result2 = myFunction(2, 200);

//This is a if statement to compare the data of "result"  with the string ' "An error happened"', the data of "result2" with the string of '"An error happened"' on their datatype and value to see if they are absolutely equal.
if ( result === "An error happened" && result2 === "An error happened") {

    //If they are absolute euqal, output the message with the string '"Catastrophic failure."' to the browser'c console.
    console.log("Catastrophic failure.");

}