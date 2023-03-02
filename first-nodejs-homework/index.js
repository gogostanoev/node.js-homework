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

// userVerification("JohnnyBoy", "otorinolaringologija");
// userVerification("Freddie35", "javaisfun");
// userVerification("tonystark", "Ironmaniscool22");
// userVerification("bluelight", "passord");


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






const userInfo = (username, password) => {

    // Proveruvame ako korisnikot od nizata na korisnici se sovpagja so vneseniot username i ako passwordot
    // se sovpagja so vneseniot password, togash uspeshno logiranje (mora da vrati 2 true booleans) 
    if(users.map(user => user.username).includes(username) && users.map(user => user.password).includes(password)){
        console.log("Login successful")
        return
    }
    // Inaku, ke bide neuspeshno logiranje
    console.log("Login unsuccessful")
}


const checkValid = (username, password) => {

    // Ako korisnikot nema vneseno nitu username, nitu password togash prekini go ova parche kod
    if (username === undefined && password === undefined) return console.log("You haven't provided any information")

    // Ako korisnikot nema vneseno username a ima password togash prekini go ovoj kod i izvesti go
    if(username === "") return console.log("Please enter username")
    // Ako korisnikot nema vneseno password a ima username togash prekini go ovoj kod i izvesti go
    if(password === "") return console.log("Please enter password")
    userInfo(username, password);
    // findUsers(username, password) mora da bide kreirana gore funkcijata za ovde da raboti
}


checkValid("", "otorinolaringologija"); // Please enter username
checkValid("Freddie35", ""); // Please enter password
checkValid("BlueLight", "password") // Login successful
checkValid("JohnnyBoy", "fatcat") // Login unsuccessful
checkValid() // You haven't provided any information


const findUsers = (username, password) => {

    const user = users.find(user => Object.values(user).includes(username) && Object.values(user).includes(password))
    console.log(!user ? "Login unsuccessful" : "Login successful")
}

console.log("**** ****")
findUsers("JohnnyBoy", "otorinolaringologija");
findUsers("Freddie35", "stupid");
findUsers()