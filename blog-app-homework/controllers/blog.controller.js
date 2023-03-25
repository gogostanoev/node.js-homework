import BlogModel from "../models/blog.model.js"; 

// I create a new instance of the class object BlogModel
const blogModel = new BlogModel();

// I create a class called BlogController that will have a function
// The function will read the info thanks to the property of the class BlogModel
class BlogController {
    async readInfo(){
        const readData = await blogModel.readBlog();

        return readData;
    };


    async createBlog(title, body, author, tags){
        await blogModel.createBlog(title, body, author, tags)
    };

    
    async editBlogId(blogId){
        await blogModel.editBlogId(blogId);
    };


    async deleteBlogId(blogId){
        return await blogModel.deleteBlogId(blogId);
    };


    async getTagBlog(arr){
        // I return it where I called, it makes a roundabout way
        return await blogModel.getTagBlog(arr);
    };
};



export default BlogController;