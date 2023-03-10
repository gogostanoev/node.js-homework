// Events Homework
// Create an event that will greet all students when they register to our app!
// Create a function that accepts parameters: studentFullname, studentEmail, studentPassword;
// The function should create a new student object (PS: Feel free to add id property to the student using the uuid library from class);
// Whenever the student object is created emit the event that will greet the student;
// BONUS:
// The previously created event, that greets the student, should aswell save the student full name in separate file named greeting_log.txt.
// In a separate file called students.json, using the file system module, save the newly created student.


import {EventEmitter} from "events";
import fsPromises from "fs/promises";
import {v4 as uuidv4} from "uuid";

const eventEmitter = new EventEmitter();



eventEmitter.on("greetings", async (firstName) => {
    await fsPromises.appendFile("greetings.txt", `\nHello ${firstName} :)`);
})


async function createStudent(firstName, lastName, studentEmail, studentPassword){

    const student = {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        email: studentEmail,
        password: studentPassword
    }

    const readFile = await fsPromises.readFile("students.json", { encoding: "utf8" }) 

    // console.log(readFile); 

    let studentObject = JSON.parse(readFile);
    studentObject.push(student);



    await fsPromises.writeFile("students.json", JSON.stringify(studentObject, null, 2))  



    eventEmitter.emit("greetings", firstName);
}




await createStudent("John", "Doe", "johndoestuden@gmail.com", "password");
await createStudent("Chris", "Redfield", "bobbobski@yahoo.com", "spiderman");
await createStudent("Gorjan", "Stanoev", "gogostanoev225@gmail.com", "ihavethebesteducatorsatsedc");
await createStudent("Bob", "Marley", "behappy@hotmail.com", "threelittlebirds");


// Testing
