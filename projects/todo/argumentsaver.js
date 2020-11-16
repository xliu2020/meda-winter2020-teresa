const fs = require("fs");
let arguments = process.argv;

const fileExist = fs.existsSync("example.json");

let myObject = {
    name:"Doe",
    age: 45,
    gender:"male",
    parent:false
};

if (fileExist) {
    contents = fs.readFileSync("example.json", "utf-8");
    contentsObject = JSON.parse(contents);
} else {
    console.log("sorry, the file doesn't exit. create a example.json now")
    objectConverted=JSON.stringify(myObject);
     console.log(objectConverted); //why object can be converted to json sucessfully only after adding console.log
    fs.writeFileSync("example.json", objectConverted, "utf-8");
    contentsObject = JSON.parse(objectConverted);
    // fs.readFileSync("example.json","utf-8")
}

let addedcontent= arguments[2];

if (addedcontent) {
 
    contentsObject[contentsObject.length-1]=addedcontent;
    contentsObject = JSON.stringify(contentsObject);
    // console.log(contentsObject);
    fs.writeFileSync("example.json",contentsObject,"utf-8");

} else {

    console.log("There was no argument found.") ;

}
