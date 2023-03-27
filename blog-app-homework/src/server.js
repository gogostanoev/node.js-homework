// Blog posts App
// Create a simple blog application that allows users to create, read, update, and delete blog posts.
// Note:
// The blog object should have the following properties:
// id (string), title (string), body(string), author(string), date(string), tags (array of strings)
// Requirements:
// The user should be able to view a list of all blog posts.
// The user should be able to create a new blog post.
// The user should be able to edit an existing blog post. (only the properties title, body and tags are editable)
// The user should be able to delete a blog post.
// The application should use the MVC pattern.
// BONUS:

// Implement a route that will filter out, and return only those blogs which tags property includes the given keywords provided through query params.


import express from "express";
import blogRouter from "../routes/blog.routes.js";
import authRouter from "../routes/auth.routes.js";


const port = 3000;
const host = "localhost";



const server = express();

server.use(express.json());


server.get("/", (req, res) => {

    res.send("<h1>You've accessed the default route!<h1/>")
});

server.use(authRouter);
server.use("/blog", blogRouter);


server.get("*", (req, res) => {
    res.status(404).send("Route does not exist.");
});


server.post("*", (req, res) => {
    res.status(404).send("Route does not exist.");
});


server.patch("*", (req, res) => {
    res.status(404).send("Route does not exists.");
});


server.listen(port, host, () => {
    console.log(`Server is now fully functional on port: ${port} and host: ${host}`)
})