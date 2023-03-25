import express from "express";
import BlogController from "../controllers/blog.controller.js";

// I create a constant that will be a new instance out of the controller for the task
// Depending on which route is hit, the corresponding method for the controller will be applied 
const blogController = new BlogController();

// Routing refers to how an application’s endpoints (URIs) respond to client requests.
const blogRouter = express.Router();


// I apply the GET method on the blogRouter and inside I create a constant that will hold
// the parsed data for the blog. After that we send it to user and it will display the desired info
blogRouter.get("/", async (req, res) => {
    const blogInfo = await blogController.readInfo();

    res.send(blogInfo);
});



blogRouter.post("/", async (req, res) => {
    const body = req.body;

    if(!body.title || !body.body || !body.author || !body.tags){
        res.status(400).send({message: "Could not create a blog post"});
        return;
    };

    await blogController.createBlog(body.title, body.body, body.author, body.tags);

    res.status(201).send({message: "Blog post has been successfully created"});
});



blogRouter.patch("/:id", async (req, res) => {
    const body = req.body;

    if(!body.title || !body.body || !body.tags){
        res.send({message: "Can not create a blog post, please input the needed information"});
        return;
    }
   

    try{
        await blogController.editBlogId(req.params.id);
        res.status(201).send({message: "You have successfully edited the desired blog post"});
    }catch (error){
        res.send(error.message)
    }
});



blogRouter.delete("/:id", async (req, res) => {

    if(await blogController.deleteBlogId(req.params.id)){
        res.status(201).send({message: "You have successfully deleted the desired post"});
        return;
    };

    res.status(404).send({message: "The post you were looking for is not here"});
});



blogRouter.get("/filter", async (req, res) => {
    // We check if it's undefined, send a message that it's empty and stop the execution
    if(!req.query){
        res.send("Query parameters empty");
        return
    };

    // We extract the values from the query params object
    const valueArray = Object.values(req.query);
  
    // We send back the returned value of the function which we called with the "valueArray"
    res.send(await blogController.getTagBlog(valueArray));

    //////////// EXAMPLE ////////////
    
    // Iskoristete go ova za da proverite dali rabotat query params
    
    // http://localhost:3000/blog/filter?tagOne=career&tagTwo=Microsoft tech

});

// Export the blogRouter so you can import it in different files and re-use it. Consider it as an extension
export default blogRouter;