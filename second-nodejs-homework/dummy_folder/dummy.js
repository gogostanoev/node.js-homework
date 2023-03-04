const infoFromIndex = require("../file_system/file_service");
const path = require("path");

infoFromIndex.write("dummy.txt", "Hello people,")

const pathToText = path.join(__dirname, "../", "dummy_folder", "dummy.txt");

console.log(pathToText)


infoFromIndex.append(pathToText, `\nusing System;
 
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}`)

infoFromIndex.append(pathToText, "\nThis is how you write 'Hello world' in C# :3");

const readFromDummy = infoFromIndex.read(pathToText);
console.log(readFromDummy);