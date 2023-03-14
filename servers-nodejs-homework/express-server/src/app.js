// Online-shop application
// Requirements:
// Init new project called, online_shop;
// Install necessery dependencies ( express, uuid );
// It is up to you to use commonjs or es6 modules syntax for importing and exporting;
// Create a json file products.json;
// The product should have the following properties: id (string), name(string), price(number), rating(string), description(string), category(string), isInStock(boolean);
// Using the router from express, create the following routes for the CRUD (create/read/update/delete) operation: NOTE: Think for which routes you are going to use path params, and think of the API method you are going to use.             
// Get all products 
// Get product by id 
// Add new product 
// Edit a product by id 
// Remove a product by id
// Remove all products from the products.json
// Set product to be out of stock by id
// Create a middleware that will log the endpoint requested to our server. EXAMPLE: Request on the route /pruducts was mate at 10:22
// BONUS:
// Instead of logging the message with the middleware (step 7), save that message in a file called logs.txt;
// Create one more json file called; cart.json
// Create route for add product (by id) to cart; use find and then push to cart 
// The functionallity for adding to cart, should access the products.json, find the product with the coresponding id and it should add the product in the cart.json. If a product with such ID is not existing return 404 with the message: "Product does not exist"



import express from "express";
import router from "./router.js"

const app = express();

const port = 3000;
const host = "localhost";


app.use(express.json());



app.get("/", (req, res) => {

    res.send("<h1>You've accessed the default route!<h1/>")
});


app.use(router);


app.get("*", (req, res) => {
    res.status(404).send("Route does not exist.")
});



app.post("*", (req, res) => {
    res.status(404).send("Route does not exist.")
});



app.listen(port, host, () => {
    console.log(`Server is now functional on port: ${port} and hosted on: ${host}`)
});