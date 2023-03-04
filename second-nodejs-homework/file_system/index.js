// Exercise 1
// 1.Initialize a new npm project and create an index.js file. 
// 2.Using the fs module create a new file called homework.txt 
// 3.Create a path to the file using the path module 
// 4.Inside the file write the following "Homework 02 in Basic Node" 
// 5.Append to the file the following " FINISHED!" 
// 6.Read the file contents and print them out in the console.

const fs = require("fs");
const path = require("path");


fs.writeFileSync("homework.txt", "Homework 02 in Basic Node");
fs.appendFileSync("homework.txt", " FINISHED!", (error) =>{
    if (error) throw error;
    console.log("Saved")
});

const pathProcess = path.join(__dirname, "homework.txt");
console.log(pathProcess);


const readContent = fs.readFileSync(pathProcess, {encoding: "utf-8"});
console.log(readContent)



