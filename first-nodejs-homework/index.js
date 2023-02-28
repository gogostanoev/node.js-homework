/**
 * Homework 
 * Login functionality
 * Create a function that accepts two params: username & password
 * If user exists in users array print the message : "User is logged in" in green text
 * If not: "User not found" in red text and yellow background
*/

const colors = require("colors")


const users = [
    {role: "admin", fullName: "John Doe", username: "JohnnyBoy", password: "otorinolaringologija"},
    {role: "moderator", fullName: "Alfred Smith", username: "Freddie35", password: "javascriptisfun"},
    {role: "tech support", fullName: "Robert Brown", username: "tonystark", password: "Ironmaniscool22"},
    {role: "client", fullName: "Pat Williams", username: "BlueLight", password: "password"}
]


const userVerification = (username, password) => {
    const foundUser = users.some((user) => {
        return username === user.username && password === user.password;
    });

    if(foundUser){
        console.log("User is logged in".green);
    }else {
        console.log("User not found".red.bgYellow);
    }
};

userVerification("JohnnyBoy", "otorinolaringologija");
userVerification("Freddie35", "javaisfun");
userVerification("tonystark", "Ironmaniscool22");
userVerification("bluelight", "passord");


// const userLogin = (username, password) => {
    
//     users.forEach((user) => {
//         if(username === user.username && password === user.password){
//             return console.log("User is logged in".green)
//         }
//         console.log("User not found".red.bgYellow)     
//     })
// }

// userLogin("JohnnyBoy", "otorinolaringologija");
// userLogin("Freddie35", "javaisfun");